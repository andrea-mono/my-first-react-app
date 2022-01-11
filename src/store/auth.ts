import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface authState {
    userToken: string;
}

interface UserInfo {
    username: string;
    token: string;
}

const initialState: authState = {
    userToken: '',
}

const authenticationSlice = createSlice({
    name: 'authentication',
    initialState,
    reducers: {
        setUserToken: (state, action: PayloadAction<UserInfo>) => {
            const user = action.payload
            localStorage.setItem('user', JSON.stringify(user))
        }
    }
})

export const { setUserToken } = authenticationSlice.actions

export default authenticationSlice.reducer