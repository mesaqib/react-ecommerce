import { createSlice } from "@reduxjs/toolkit";

interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const AddtoCartSlice = createSlice({
  name: "addToCart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.id === item.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
    },

    removeFromCart: (state, action) => {
        const id  = action.payload;
        state.items = state.items.filter((i) => i.id !== id)
    },

    decreaseQuantity: (state, action) => {
        const id = action.payload;
        const item = state.items.find((i) => i.id === id)

        if(item && item.quantity > 1) {
            item.quantity -= 1;
        }
        else{
            state.items = state.items.filter((i) => i.id !== id)
        }
    },
    clearCart:(state) =>  {
        state.items = []
    }

  },
});


export const {
  addToCart,
  removeFromCart,
  decreaseQuantity,
  clearCart,
} = AddtoCartSlice.actions;

export default AddtoCartSlice.reducer;