import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userReducer";
import { profileReducer } from "./reducers/profileReducer";
import { courseReducer } from "./reducers/courseReducer";
import { blogReducer } from "./reducers/blogReducer";
import { subscriptionReducer } from "./reducers/paymentReducer";
import { otherReducer } from "./reducers/otherReducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    profile: profileReducer,
    course: courseReducer,
    blog: blogReducer,
    subscription: subscriptionReducer,
    other: otherReducer,
  },
});
export default store;

// export const server = "http://localhost:4000/api/v1";

export const server = "https://haco-server.vercel.app/api/v1";
