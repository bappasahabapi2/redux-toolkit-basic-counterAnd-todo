import { configureStore } from "@reduxjs/toolkit";
import countReducer from "../features/counter/counterSlice";
import postReducer from "../features/posts/postSlice";
import userReducer from "../features/users/userSlice";

const store =configureStore({
    reducer:{
        counter:countReducer,
        post:postReducer,
        user:userReducer,
    }
});
export default store;