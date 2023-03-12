import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: localStorage.getItem('CalendarUserName') || 'User123'
};

export const registredSlice = createSlice({
  name: 'registred',
  initialState,
  reducers: {
    changeName(state, action) {
      localStorage.setItem('CalendarUserName', action.payload);
        state.name = action.payload;
    }
  },
})


export const { changeName } = registredSlice.actions;

export default registredSlice.reducer;