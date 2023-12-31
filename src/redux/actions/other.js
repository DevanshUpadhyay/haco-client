import { server } from "../store";
import axios from "axios";

export const contactUs = (name, email, message) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
      withCredentials: true,
    };
    dispatch({ type: "contactRequest" });
    const { data } = await axios.post(
      `${server}/contact`,
      { name, email, message },
      config
    );
    dispatch({ type: "contactSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "contactFail",
      payload: error.response.data.message,
    });
  }
};
export const submitUserDetails =
  (who, level, grade, subject, text, phoneNumber, country) =>
  async (dispatch) => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
        withCredentials: true,
      };
      dispatch({ type: "submitUserDetailsRequest" });
      const { data } = await axios.post(
        `${server}/submituserdetails`,
        { who, level, grade, subject, text, phoneNumber, country },
        config
      );
      dispatch({ type: "submitUserDetailsSuccess", payload: data.message });
    } catch (error) {
      dispatch({
        type: "submitUserDetailsFail",
        payload: error.response.data.message,
      });
    }
  };
