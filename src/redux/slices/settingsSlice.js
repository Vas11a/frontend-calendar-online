import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  thema: localStorage.getItem('CalendarThema') || 'white',
  isOpenPasPanel: false,
  isOpenCreatePanel: false,
  isOpenChangeAvPanel: false,
  isOpenRemovepannel: false,
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    changeThema(state) {
        if (state.thema === 'white') {
          localStorage.setItem('CalendarThema', 'dark');
          state.thema = 'dark' ;
        } else {
          localStorage.setItem('CalendarThema', 'white');
          state.thema = 'white';
        }
    },
    openClosePasPanel(state) {
      state.isOpenPasPanel = true;
      state.isOpenCreatePanel = false;
      state.isOpenChangeAvPanel = false;
    },
    openCloseCreatePanel(state) {
      state.isOpenCreatePanel = true;
      state.isOpenPasPanel = false;
      state.isOpenChangeAvPanel = false;
    },
    openCloseChangeAvPanel(state) {
      state.isOpenChangeAvPanel = true;
      state.isOpenPasPanel = false;
      state.isOpenCreatePanel = false;
    },
    openRemovePannel(state) {
      state.isOpenRemovepannel = !state.isOpenRemovepannel;
    },
    clearSettingSlice(state) {
      state.isOpenPasPanel = false;
      state.isOpenCreatePanel = false;
      state.isOpenChangeAvPanel =  false;
      state.isOpenRemovepannel = false;
    }
  },
});


export const { changeThema,
   openClosePasPanel,
   openCloseCreatePanel,
   openCloseChangeAvPanel,
   openRemovePannel,
   clearSettingSlice
} = settingsSlice.actions;

export default settingsSlice.reducer;