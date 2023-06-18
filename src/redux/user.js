import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  name: "anna",
  email: "anna@gmail.com",
  country: "spain",
};

export const userSlice = createSlice({
  name: "user",
  initialState: { value: initialValue },
  reducers: {
    update: (state, action) => {
      state.value = action.payload;
    },
    reset: (state) => {
      state.value = initialValue;
    },
  },
});

export const { update, reset } = userSlice.actions;
export default userSlice.reducer;
