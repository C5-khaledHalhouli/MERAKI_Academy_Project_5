import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./reducers/auth";
import { catorgeSlice } from "./reducers/catogre";
export default configureStore({
  reducer: {
    auth: authSlice,
    catogre: catorgeSlice
  },
});
