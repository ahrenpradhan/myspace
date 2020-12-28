import React,{useState, useEffect} from 'react';
import { Layout, Menu } from 'antd';
import { useRouter } from 'next/router';
import { headerList, headerTabException } from '../../../assets/data';

import { connect } from 'react-redux';
import { setPage } from '../../../redux/admin'

const { Header } = Layout;

const AdminHeader = ({setPage}) => {
	const router = useRouter();
	const [queryPath, setQueryPath] = useState();
	useEffect(() => {
		setQueryPath(router.query.page);
		setPage({page:router.query.page});
	}, [router]);
	return (
		<Header className='header'>
			{/* <div className='logo' /> */}
			<div
				className='header header_name'
				onClick={() => {
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
				}}>
				MySpace CMS
			</div>
			<Menu theme='dark' mode='horizontal' selectedKeys={queryPath}>
				{headerList
					.filter((item) => !headerTabException.includes(item))
					.map((item) => (
						<Menu.Item
							key={item}
							onClick={() => {
								router.push(
									{
										pathname: router.pathname,
										query: {
											page: item,
										},
									},
									undefined,
									{ shallow: true },
								);
							}}
							style={{ textTransform: 'capitalize' }}>
							{item}
						</Menu.Item>
					))}
			</Menu>
		</Header>
	);
};

const mapStateToProps = (state) => ({
	...state
});

const mapDispatch = { setPage };

export default connect(mapStateToProps, mapDispatch)(AdminHeader);
