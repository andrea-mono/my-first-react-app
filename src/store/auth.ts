import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface authState {
    userToken: string;
}

const initialState: authState = {
    userToken: '',
}

const authenticationSlice = createSlice({
    name: 'authentication',
    initialState,
    reducers: {
        setUserToken: (state, action: PayloadAction<string>) => {
            state.userToken = action.payload
        }
    }
})

export const { setUserToken } = authenticationSlice.actions

export default authenticationSlice.reducer