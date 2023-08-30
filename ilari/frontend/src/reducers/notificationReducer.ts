import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface NotificationState {
  notification: string | null;
}


const initialState: NotificationState = {
  notification: "Hello"
}

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNotification: (state, action: PayloadAction<string>) => {
      setTimeout(() => {
        state.notification = null; // Remover a notificação após 5000ms
      }, 5000);
      state.notification = action.payload;
    },
    clearNotification: (state) => {
      state.notification = null;
    },
  },
});

export const { setNotification, clearNotification } = notificationSlice.actions;

export default notificationSlice.reducer;