import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface DataState {
  isLoading: boolean;
  message: string;
}

const initialState: DataState = {
  isLoading: false,
  message: 'Operational Efficiency achieved.',
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
  },
});

export const { setLoading, setMessage } = dataSlice.actions;

export default dataSlice.reducer;
