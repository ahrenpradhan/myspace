import React, { useState, useEffect } from 'react';
import { Layout, Menu } from 'antd';
import { useRouter } from 'next/router';
import { headerList, headerTabException, headerListRight } from '../../../assets/data';
import { checkQuery } from '../../../assets/adminhelper';

import { connect } from 'react-redux';
import { setPage, setType, setOption } from '../../../redux/admin';

const { Header } = Layout;

const HeaderMenuRight = (router) =>
	headerListRight &&
	headerListRight.map(
		(menu) =>
			menu.type === 'subMenu' && (
				<Menu.SubMenu
					key={menu.name}
					title={menu.name}
					popupOffset={[0, 'auto']}
					className={(checkQuery(router.query, true) && 'ant-menu-item-selected') || ''}
					popupClassName='header_setting_tab'
					style={{ textTransform: 'capitalize', float: 'right' }}>
					{menu[menu.type].map((subMenu) =>
						subMenu.type === 'subMenu' ? (
							<Menu.ItemGroup
								key={subMenu.name}
								title={
									<div style={{ textTransform: 'capitalize', textDecoration: 'underline' }}>
										{subMenu.name}
									</div>
								}>
								{subMenu[subMenu.type].map((sub) => (
									<Menu.Item
										key={sub}
										style={{ textTransform: 'capitalize' }}
										onClick={() => {
											router.push(
												{
													pathname: router.pathname,
													query: {
														...router.query,
														page: menu.name,
														type: subMenu.name,
														option: sub,
													},
												},
												undefined,
												{ shallow: true },
											);
										}}>
										{sub}
									</Menu.Item>
								))}
							</Menu.ItemGroup>
						) : (
							<Menu.Item
								key={subMenu.name}
								onClick={() => {
									router.push(subMenu[subMenu.type], undefined, { shallow: true });
								}}
								style={{ textTransform: 'capitalize' }}>
								{subMenu.name}
							</Menu.Item>
						),
					)}
				</Menu.SubMenu>
			),
	);

const AdminHeader = ({ setPage, setType, setOption }) => {
	const router = useRouter();
	const [queryPath, setQueryPath] = useState();
	useEffect(() => {
		setQueryPath(router.query.page);
		setPage({ page: router.query.page });
		if (checkQuery(router.query, true)) {
			setType({ type: router.query.type });
			setOption({ option: router.query.option });
		} else {
			setType({ type: null });
			setOption({ option: null });
		}
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
				{HeaderMenuRight(router)}
			</Menu>
		</Header>
	);
};

const mapStateToProps = (state) => ({
	...state,
});

const mapDispatch = { setPage, setType, setOption };

export default connect(mapStateToProps, mapDispatch)(AdminHeader);
