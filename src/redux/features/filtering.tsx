import { createSlice } from "@reduxjs/toolkit";

interface FilterState {
  items: string[];
}

const initialState: FilterState = {
  items: [],
};

const filteringSlice = createSlice({
  name: "filtering",
  initialState,
  reducers: {
    addCategory: (state, action) => {
      const item = action.payload;

      const exits = state.items.includes(item);

      if (exits) {
        state.items = state.items.filter((i) => i !== item);
      } else {
        state.items.push(item);
      }
    },
  },
});

export const { addCategory } = filteringSlice.actions;

export default filteringSlice.reducer;
