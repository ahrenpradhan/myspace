import React, { useState, useEffect } from 'react';
import { Layout, Breadcrumb } from 'antd';

import { useRouter } from 'next/router';
import { connect } from 'react-redux';

import AllContent from './content';
import Contents from './contents';

const { Content } = Layout;

const MainContent = ({ sideBar, type, option, page }) => {
	const [path, setPath] = useState(['admin']);
	const router = useRouter();
	useEffect(() => {
		let tempPath = ['admin'];
		// console.log(router);
		if (typeof router.query.page === 'string') {
			tempPath.push(router.query.page);
		}
		// tempPath = tempPath.concat(sideBar.filter(e=>!!e))
		setPath(tempPath);
	}, [router]);
	return (
		<Layout style={{ padding: '0 24px 24px' }}>
			{path.length > 0 && (
				<Breadcrumb separator='>' style={{ margin: '16px 0' }}>
					{path
						.concat(
							sideBar
								? sideBar
										.concat([type, option])
										.filter((e) => !!e)
										.reverse()
								: [],
						)
						.map((psthname) => (
							<Breadcrumb.Item key={psthname}>
								<span className='main-content-breadcrumb-item'>{psthname}</span>
							</Breadcrumb.Item>
						))}
				</Breadcrumb>
			)}
			<Content
				className='site-layout-background'
				style={{
					padding: 24,
					margin: 0,
					minHeight: 280,
					overflowY: 'auto',
				}}>
				{/* <AllContent page={page} sideBar={sideBar} /> */}
				<Contents />
			</Content>
		</Layout>
	);
};

const mapStateToProps = (state) => ({
	...state,
});

const mapDispatch = null;
export default connect(mapStateToProps, mapDispatch)(MainContent);
