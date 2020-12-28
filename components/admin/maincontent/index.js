import React, { useState, useEffect } from 'react';
import { Layout, Breadcrumb } from 'antd';

import { useRouter } from 'next/router';
import { connect } from 'react-redux';

const { Content } = Layout;

const MainContent = ({ sideBar, type, option }) => {
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
				<Breadcrumb style={{ margin: '16px 0', textTransform: 'capitalize' }}>
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
							<Breadcrumb.Item key={psthname}>{psthname}</Breadcrumb.Item>
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
				content
			</Content>
		</Layout>
	);
};

const mapStateToProps = (state) => ({
	...state,
});

const mapDispatch = null;
export default connect(mapStateToProps, mapDispatch)(MainContent);
