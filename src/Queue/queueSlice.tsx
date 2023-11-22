import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

export type CustomerType = Array<{
  expectedTime: string;
  customer: {
    id: number;
    name: string;
    emailAddress: string;
  };
}>;

const initialState: CustomerType = [];

export const queueSlice = createSlice({
  name: 'queueSlice',
  initialState,
  reducers: {
    updateQueue: (state, action: PayloadAction<CustomerType>) => {
      return action.payload;
    },
  },
});

export const { updateQueue } = queueSlice.actions;

export default queueSlice.reducer;
