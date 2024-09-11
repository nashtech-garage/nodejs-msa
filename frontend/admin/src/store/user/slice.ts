import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: '',
    email: '',
    picture: '',
    isSession: false
}

const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout() {
            return initialState
        },
    }
})

export const {
    logout,
} = UserSlice.actions

export default UserSlice