import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

 const initialState={
    loading:false,
    todos:[],
    error:null
}

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async()=>{
    
    const url =('https://jsonplaceholder.typicode.com/todos?_limit=5');
    const response = await axios.get(url);
    return response.data;
})
    

 const todoSlice =createSlice({
    name:"todos",
    initialState:initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchTodos.pending,(state)=>{
            state.loading=true
        });
        builder.addCase(fetchTodos.fulfilled,(state,action)=>{
            state.loading=false,
            state.todos=action.payload,
            error=null
        });
       builder.addCase(fetchTodos.rejected,(state, action)=>{
            state.loading=false,
            state.todos=[],
            state.error=action.error.message
        })
    }
})
export default todoSlice.reducer