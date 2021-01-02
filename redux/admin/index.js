import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import localstore from '../../utils/localstore';

const getData = async () => {
	const temp = await axios.get('/api/details');
	return temp;
};
const getUserDetails = createAsyncThunk('user/fetchEveryStatus', async (userId, thunkAPI) => {
	const response = await axios.get('/api/details');
	console.log(response.data.data[0]);
	return response.data.data[0];
});

const adminSlice = createSlice({
	name: 'admin',
	initialState: {
		credentials: localstore.get('credentials') || null,
		userId: null,
		userDetails: null,
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
		setCredentials: (state, action) => {
			localstore.set('credentials', action.payload);
			state.credentials = action.payload;
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
		getDataFromDatabase: (state, action) => {
			getData().then((res) => {
				state.userDetails = res.data;
			});
		},
	},
	extraReducers: {
		[getUserDetails.fulfilled]: (state, action) => {
			state.userDetails = action.payload;
		},
	},
});
// console.log('-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- ');
// console.log(process.env.MONGODB_URI);
export const {
	setUserId,
	setPage,
	setSideBar,
	setType,
	setOption,
	getDataFromDatabase,
	setCredentials,
} = adminSlice.actions;
export { getUserDetails };
export default adminSlice;
