import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const categoriesAction = createAsyncThunk('category',async(category)=>{
    try{
        const res = await  axios.get(`${import.meta.env.VITE_URL}/category/${category}`)
          return res.data
    }catch(err){
        console.log(err.message);
    }
})

const categoriesSlice = createSlice({
    name:'category',
    initialState:{
        category:{},
        isLoading:false,
        error:''
    },
    extraReducers :(builder)=>{
        builder.addCase(categoriesAction.fulfilled, (state,action)=>{
            state.category = action.payload
            state.isLoading = false;
        }),
        builder.addCase(categoriesAction.pending, (state,action)=>{
            state.isLoading = true;
        }),
        builder.addCase(categoriesAction.rejected, (state,action)=>{
            state.error = action.payload
        })
    }
})
export default categoriesSlice.reducer
