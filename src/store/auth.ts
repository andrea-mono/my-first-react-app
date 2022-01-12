import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UserInfo {
    username: string;
    token: string;
    isLoading: boolean;
}

const initialState: UserInfo = {
    username: '',
    token: '',
    isLoading: false,
}

const authenticationSlice = createSlice({
    name: 'authentication',
    initialState,
    reducers: {
        setUserToken: (state, action: PayloadAction<UserInfo>) => {
            const user = action.payload
            state.username = user.username
            state.token = user.token
            localStorage.setItem('user', JSON.stringify(user))
        },
        checkExistingUserToken: (state) => {
            const { username, token } = JSON.parse(<string>localStorage.getItem('user'))
            state.username = username
            state.token = token
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload
        },
    }
})

export const login = (credentials: Object) => {
    return async (dispatch: any) => {
        try {
            dispatch(setLoading(true))

            const endpoint: string = 'https://kind-lamport-fa2b18.netlify.app/.netlify/functions/authenticate'
            const response = await fetch(endpoint, {
                method: 'POST',
                body: JSON.stringify(credentials),
            })
            const user = await response.json()

            dispatch(setLoading(false))
            dispatch(setUserToken(user))
        } catch (e) {
            dispatch(setLoading(false))
            throw new Error('something went wrong')
        }
    }
}

export const { setUserToken, checkExistingUserToken, setLoading } = authenticationSlice.actions

export default authenticationSlice.reducer