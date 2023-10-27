"use client";
import { buySubscription } from "@/redux/actions/payment";
import { loadUser } from "@/redux/actions/user";
import { server } from "@/redux/store";
import {
  PayPalScriptProvider,
  PayPalButtons,
  FUNDING,
} from "@paypal/react-paypal-js";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

const Checkout = ({ courseId, amount }) => {
  const FUNDING_SOURCES = [FUNDING.PAYPAL, FUNDING.VENMO, FUNDING.CARD];

  const initialOptions = {
    "client-id":
      "AXxatcVnSjn8hXDurzxEwQREX6pSdzRkXexK09AjG2mDN-0SeQG0GdXtKo_FymHutolwtnS48NVV1BI1",
    "enable-funding": "paylater,venmo",
  };
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const router = useRouter();

  const navigateHandler = async (
    courseId,
    payerId,
    createdAt,
    emailAddress,
    transactionId
  ) => {
    await dispatch(
      buySubscription(courseId, payerId, createdAt, emailAddress, transactionId)
    );
    // navigate(`/paymentsuccess/${transactionId}`);
    await dispatch(loadUser());
    await location.replace(`/payment-success/${transactionId}`);
    // router.push();
  };

  return (
    <div className="App z-40 w-full p-2">
      <PayPalScriptProvider options={initialOptions}>
        {FUNDING_SOURCES.map((fundingSource) => {
          return (
            <PayPalButtons
              fundingSource={fundingSource}
              key={fundingSource}
              style={{
                layout: "vertical",
                shape: "pill",
                // color: fundingSource == paypal.FUNDING.PAYLATER ? 'gold' : '',
              }}
              createOrder={async (data, actions) => {
                try {
                  const response = await fetch(
                    `${server}/orders?amount=${amount}`,
                    {
                      method: "POST",
                    }
                  );

                  const details = await response.json();
                  return details.id;
                } catch (error) {
                  console.error(error);
                  // Handle the error or display an appropriate error message to the user
                }
              }}
              onApprove={async (data, actions) => {
                try {
                  const response = await fetch(
                    `${server}/orders/${data.orderID}/capture`,
                    {
                      method: "POST",
                    }
                  );

                  const details = await response.json();
                  // Three cases to handle:
                  //   (1) Recoverable INSTRUMENT_DECLINED -> call actions.restart()
                  //   (2) Other non-recoverable errors -> Show a failure message
                  //   (3) Successful transaction -> Show confirmation or thank you message

                  // This example reads a v2/checkout/orders capture response, propagated from the server
                  // You could use a different API or structure for your 'orderData'
                  const errorDetail =
                    Array.isArray(details.details) && details.details[0];

                  if (
                    errorDetail &&
                    errorDetail.issue === "INSTRUMENT_DECLINED"
                  ) {
                    return actions.restart();
                    // https://developer.paypal.com/docs/checkout/integration-features/funding-failure/
                  }

                  if (errorDetail) {
                    let msg = "Sorry, your transaction could not be processed.";
                    msg += errorDetail.description
                      ? " " + errorDetail.description
                      : "";
                    msg += details.debug_id
                      ? " (" + details.debug_id + ")"
                      : "";
                    alert(msg);
                  }

                  // Successful capture! For demo purposes:
                  // console.log(details);
                  // console.log(
                  //   'Capture result',
                  //   details,
                  //   JSON.stringify(details, null, 2)
                  // );
                  const transaction =
                    details.purchase_units[0].payments.captures[0];

                  // alert(
                  //   'Transaction ' +
                  //     transaction.status +
                  //     ': ' +
                  //     transaction.id +
                  //     'See console for all available details'
                  // courseId, payerId, createdAt, email_address
                  // );
                  // const courseId = '';
                  const payerId = details.payer.payer_id;
                  const transactionId = transaction.id;
                  const createdAt = transaction.create_time;
                  // const courseId = courseId;
                  const emailAddress = details.payer.email_address;
                  navigateHandler(
                    courseId,
                    payerId,
                    createdAt,
                    emailAddress,
                    transactionId
                  );
                } catch (error) {
                  console.error(error);
                  // Handle the error or display an appropriate error message to the user
                }
              }}
            />
          );
        })}
      </PayPalScriptProvider>
    </div>
  );
};

export default Checkout;
