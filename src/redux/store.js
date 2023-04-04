import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/postSlice";

export default configureStore({
  reducer: {
    post: userReducer,
  },
});
