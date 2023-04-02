import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

type initialStateType = {
  name: string;
  password: string;
}

const initialState: initialStateType = {
    name: localStorage.getItem('CalendarAppUserName') || 'Guest',
    password: ''
};

export const registredSlice = createSlice({
  name: 'registred',
  initialState,
  reducers: {
    changeName(state, action:PayloadAction<string>) {
        state.name = action.payload;
        localStorage.setItem('CalendarAppUserName', action.payload);
    },
    changePass(state, action:PayloadAction<string>) {
      state.password = action.payload;
    }
  },
})


export const { changeName, changePass } = registredSlice.actions;

export default registredSlice.reducer;