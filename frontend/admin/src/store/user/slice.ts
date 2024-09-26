import { User } from '@/types/user';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: User = {
	id: '',
	email: '',
	name: '',
	roles: [],
};

const UserSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		logout() {
			return initialState;
		},
		setUser: (state, action: PayloadAction<User>) => {
			return { ...state, ...action.payload };
		},
	},
});

export const { logout, setUser } = UserSlice.actions;

export default UserSlice;
