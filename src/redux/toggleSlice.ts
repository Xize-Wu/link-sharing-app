import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ToggleState {
  value: "customize"|"profile"|"preview";
}

const initialState: ToggleState = {
  value: "customize",
};

const toggleSlice = createSlice({
  name: 'toggle',
  initialState,
  reducers: {
    setToggle: (state, action: PayloadAction<"customize" | "profile" | "preview">) => {
      state.value = action.payload;
    },
  },
});

export const {  setToggle } = toggleSlice.actions;
export default toggleSlice.reducer;
