import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    countOne: 0,
    countFive: 0,
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        incrementByOne: (state) => {
            state.countOne += 1
        },
        incrementByFive: (state) => {
            state.countFive += 5
            },
},
})


export const { incrementByOne, incrementByFive } = counterSlice.actions
export default counterSlice.reducer