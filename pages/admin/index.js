import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import { Layout } from 'antd';

import MainContent from '../../components/admin/maincontent';
import AdminHeader from '../../components/admin/header';
import SideBar from '../../components/admin/siderbar';
import { headerList, headerListRight } from '../../assets/data';
import { checkQuery } from '../../assets/adminhelper';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '../../redux/admin';

const store = configureStore({
	reducer: counterSlice.reducer,
});

// store.dispatch(counterSlice.actions.increment());

const AdminDashboard = () => {
	const router = useRouter();
	useEffect(() => {
		console.log(router.query);
		if (typeof router.query._id != 'undefined') {
			store.dispatch(counterSlice.actions.setCredentials(router.query));
			// if (router.asPath == router.pathname) {
			router.pathname == '/admin' &&
				router.push(
					{
						pathname: router.pathname,
						query: {
							page: 'about',
						},
					},
					undefined,
					{ shallow: true },
				);
			// }
		} else if (typeof router.query.page === 'string') {
			if (!checkQuery(router.query)) {
				router.push(
					{
						pathname: router.pathname,
						query: {
							page: 'home',
						},
					},
					undefined,
					{ shallow: true },
				);
			}
		} else {
			if (router.asPath == router.pathname) {
				router.pathname == '/admin' &&
					router.push(
						{
							pathname: router.pathname,
							query: {
								page: 'home',
							},
						},
						undefined,
						{ shallow: true },
					);
			}
		}
	}, [router]);
	return (
		<Provider store={store}>
			<Layout style={{ height: '100vh' }}>
				<AdminHeader />
				<Layout>
					<SideBar />
					<MainContent />
				</Layout>
			</Layout>
		</Provider>
	);
};

export default AdminDashboard;
