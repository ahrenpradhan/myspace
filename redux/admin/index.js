import { createSlice } from '@reduxjs/toolkit';

const adminSlice = createSlice({
	name: 'admin',
	initialState: {
		userId: null,
		page: null,
		sideBar: null,
		type: null,
		option: null,
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
		setType: (state, action) => {
			const { type } = action.payload;
			state.type = type;
		},
		setOption: (state, action) => {
			const { option } = action.payload;
			state.option = option;
		},
	},
});

export const { setUserId, setPage, setSideBar, setType, setOption } = adminSlice.actions;

export default adminSlice;
