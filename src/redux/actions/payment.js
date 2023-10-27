import { server } from "../store";
import axios from "axios";

export const buySubscription =
  (courseId, payerId, createdAt, emailAddress, transactionId) =>
  async (dispatch) => {
    try {
      dispatch({ type: "buySubscriptionRequest" });
      const { data } = await axios.post(
        `${server}/subscribe`,
        { courseId, payerId, createdAt, emailAddress, transactionId },
        {
          headers: {
            "Content-type": "application/json",
          },
          withCredentials: true,
        }
      );

      dispatch({ type: "buySubscriptionSuccess", payload: data.message });
    } catch (error) {
      dispatch({
        type: "buySubscriptionFail",
        payload: error.response.data.message,
      });
    }
  };
