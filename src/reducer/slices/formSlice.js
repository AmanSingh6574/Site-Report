import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formData: null,
  ImageData: [],
};

const formSlice = createSlice({
  name: "form",
  initialState: initialState,
  reducers: {
    setformData(state, value) {
      state.formData = [value.payload];
    },
    setImageData(state, value) {
      state.ImageData = [...state.ImageData, value.payload];
    },
    resetFormData(state) {
      state.formData = null;
      state.ImageData = [];
    },
  },
});

export const { setformData, setImageData , resetFormData } = formSlice.actions;

export default formSlice.reducer;
