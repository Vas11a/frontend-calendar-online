import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  roomName: '',
  password: '',
  roomsArr: [],
  roomNameToFind: '',
};

export const roomsSlice = createSlice({
  name: 'rooms',
  initialState,
  reducers: {
    setRoomName(state, action) {
      state.roomName = action.payload;
    },
    setPassword(state, action) {
      state.password = action.payload;
    },
    addNewRoom(state) {
      state.roomsArr.push({ name: state.roomName });
    },
    loadRooms(state, action) {
      state.roomsArr = action.payload;
    },
    clearRoomsSlice(state) {
      state.password = '';
      state.roomName = '';
      state.roomsArr = [];
    },
    setRoomNameToFind(state, action) {
      state.roomNameToFind = action.payload;
    }

  },
});


export const {
  setRoomNameToFind,
  setRoomName,
  setPassword,
  addNewRoom, loadRooms, clearRoomsSlice } = roomsSlice.actions;

export default roomsSlice.reducer;