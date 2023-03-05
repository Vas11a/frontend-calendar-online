import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentName: '',
  currentPassword: '',
  currentRoom: {},
  isRoomEntered: false,
  currendDay: {},
  message: ''
};

export const currentRoomSlice = createSlice({
  name: 'currentRoom',
  initialState,
  reducers: {
    setCurrentName(state, action) {
      state.currentName = action.payload;
    },
    setCurrentPass(state, action) {
      state.currentPassword = action.payload;
    },
    addCurrentRoom(state, action) {
      state.currentRoom = action.payload;
    },
    setRoomEntered(state, action) {
      state.isRoomEntered = action.payload;
    },
    setCurrentDay(state, action) {
      state.currendDay = action.payload;
    },
    setMessage(state, action) {
      state.message = action.payload;
    },
    addMainMessage(state, action){
      state.currendDay.messages.main = action.payload[0];
      state.currentRoom.days.forEach(element => {
        if (element.data === action.payload[1]) {
          element.messages.main = action.payload[0];
        };
    });
    },
    addMessage(state, action) {
      if (state.currendDay.messages.otherMess) {        
        state.currendDay.messages.otherMess.push(action.payload[0]);
        state.currentRoom.days.forEach(element => {
          if (element.data === action.payload[1]) {
            element.messages.otherMess.push(action.payload[0]);
          };
        });
      } else {
        state.currendDay.messages.otherMess = [];
        state.currendDay.messages.otherMess.push(action.payload[0]);
        state.currentRoom.days.forEach(element => {
          if (element.data === action.payload[1]) {
            element.messages.otherMess = [];
            element.messages.otherMess.push(action.payload[0]);
          };
        });
      } ;
    },
    clearRoomSlice(state) {
      state.currentName = '';
      state.currentPassword = '';
      state.currentRoom = {};
      state.isRoomEntered = false;
      state.currendDay = {};
      state.message = '';
    }
  },
});


export const { setCurrentPass,
  setCurrentName,
  addCurrentRoom,
  setRoomEntered,
  setCurrentDay,
  setMessage,
  addMainMessage,
  addMessage,
  clearRoomSlice }
  = currentRoomSlice.actions;

export default currentRoomSlice.reducer;