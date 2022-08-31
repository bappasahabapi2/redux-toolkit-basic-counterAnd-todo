import { configureStore } from "@reduxjs/toolkit";
import countReducer from "../features/counter/counterSlice";
import postReducer from "../features/posts/postSlice";
import todoReducer from "../features/todos/todoSlice";
import userReducer from "../features/users/userSlice";

const store =configureStore({
    reducer:{
        counter:countReducer,
        post:postReducer,
        user:userReducer,
        todo:todoReducer
       
    }
});
export default store;