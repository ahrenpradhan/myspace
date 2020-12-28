import { createSlice } from '@reduxjs/toolkit';

const adminSlice = createSlice({
	name: 'admin',
	initialState: {
		userId: null,
		page: null,
		sideBar: null,
	},
	reducers: {
		setUserId: (state, action) => {
			const { userId } = action.payload;
			state.userId = userId;
		},
		setPage: (state, action) => {
			const { page } = action.payload;
			state.page = page;
		},
		setSideBar: (state, action) => {
			const { sideBar } = action.payload;
			state.sideBar = sideBar;
		},
	},
});

export const { setUserId, setPage, setSideBar } = adminSlice.actions;

export default adminSlice;
