import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import instance from "../../axiosConfig/instance";

export const cartAction = createAsyncThunk("customer/cart", async () => {
  try {
    const res = await axios({
      method: 'get',
      url: `${import.meta.env.VITE_URL}/customer/cart`,
      headers: { authorization: `${localStorage.getItem("customerToken")}`,}, 
    });
    return res.data.cart;
  } catch (err) {
    return JSON.parse(localStorage.getItem("cart")) || [];
  }
});
const CartSlice = createSlice({
  name: "cart",
  initialState: { items: [], isLoading: false, error: "" },
  extraReducers: (builder) => {
    builder.addCase(cartAction.fulfilled, (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    }),
      builder.addCase(cartAction.pending, (state, action) => {
        state.isLoading = true;
      }),
      builder.addCase(cartAction.rejected, (state, action) => {
        state.error = "error fetching cart";
        state.items = JSON.parse(localStorage.getItem("cart")) || [];
      });
  },
  reducers: {
    addToCart(state, action) {
      let indexOfItem = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (indexOfItem == -1) {
        state.items = [...state.items, action.payload];
        if (localStorage.getItem("customerToken")) {
          instance.patch("/customer/cart/replace", {
            auth: `${localStorage.getItem("customerToken")}`,
            newCart: state.items,
          });
        } else {
          localStorage.setItem("cart", JSON.stringify(state.items));
        }
      } else {
        state.items[indexOfItem].quantity += 1;
        if (localStorage.getItem("customerToken")) {
          instance.patch("/customer/cart/replace", {
            auth: `${localStorage.getItem("customerToken")}`,
            newCart: state.items,
          });
        } else {
          localStorage.setItem("cart", JSON.stringify(state.items));
        }
      }
    },
    removeFromCart(state, action) {
      let indexOfItem = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.items[indexOfItem].quantity > 1) {
        state.items[indexOfItem].quantity -= 1;
        if (localStorage.getItem("customerToken")) {
          instance.patch("/customer/cart/replace", {
            auth: `${localStorage.getItem("customerToken")}`,
            newCart: state.items,
          });
        } else {
          localStorage.setItem("cart", JSON.stringify(state.items));
        }
      } else {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
        if (localStorage.getItem("customerToken")) {
          instance.patch("/customer/cart/replace", {
            auth: `${localStorage.getItem("customerToken")}`,

            newCart: state.items,
          });
        } else {
          localStorage.setItem("cart", JSON.stringify(state.items));
        }
      }
    },
  },
});
export const { addToCart, removeFromCart, setCart } = CartSlice.actions;
export default CartSlice.reducer;
