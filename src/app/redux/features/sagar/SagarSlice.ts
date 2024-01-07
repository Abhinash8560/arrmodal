import { RootState } from '../../../redux/app/store';
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  secret: {
    innerSecret:{
        innerInnerSecret:{
            innervalue:'10'
        }
    }
  }
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions
// Selector function for innerValue
export const getInnerSecretValue = (state: RootState) => state.counter.secret.innerSecret.innerInnerSecret.innervalue
export default counterSlice.reducer



