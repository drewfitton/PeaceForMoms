import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import firebase from "firebase/compat";

export interface AuthSliceState {
  isAuthenticated: boolean;
  user: firebase.UserInfo | null;
}

const initialState: AuthSliceState = {
  isAuthenticated: false,
  user: null,
};

export const AuthSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    setAuthState: (
      state: AuthSliceState,
      { payload }: PayloadAction<AuthSliceState>
    ) => {
      (state.user = payload.user),
        (state.isAuthenticated = payload.isAuthenticated);
    },
    logOut: (state: AuthSliceState) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { logOut, setAuthState } = AuthSlice.actions;
