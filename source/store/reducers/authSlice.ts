import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  name: string;
  documentNumber: string;
  email: string;
  interests: string[];
  events: string[];
  aboutYou: string;
  document: string;
}

interface IStateProps {
  id: number | null;
  user: User | null;
}

const initialState: IStateProps = {
  id: null,
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setId: (state, action: PayloadAction<IStateProps["id"]>) => {
      state.id = action.payload;
    },
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    updateUser: (state, action: PayloadAction<Partial<User>>) => {
      state.user = {
        ...state.user,
        ...action.payload,
      };
    },
    logout: (state) => {
      state.id = null;
      state.user = null;
    },
  },
});

export const { setId, setUser, updateUser, logout } = authSlice.actions;
