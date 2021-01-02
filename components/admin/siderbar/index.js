import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Layout, Menu } from 'antd';
import { UserOutlined, PieChartOutlined, DesktopOutlined } from '@ant-design/icons';
import { menuOptions } from '../../../assets/data';

import { connect } from 'react-redux';
import { setSideBar } from '../../../redux/admin';

const { SubMenu, Item } = Menu;
const { Sider } = Layout;

// 'About':{}, 'Project':{}, 'Blogs':{}, 'Contact':

const SideBar = ({ setSideBar }) => {
	const router = useRouter();
	const [queryPath, setQueryPath] = useState(null);
	const [_menu, setMenu] = useState(null);
	const [selectedMenu, setSelectedMenu] = useState([null, null]);
	const [collapsed, setCollapsed] = useState(false);
	const getFirstSelectedOption = () => {
		let tempOption = _menu[0];
		if (tempOption.subMenu.length > 0) {
			return setSelectedMenu([tempOption.name, tempOption.subMenu[0]]);
		}
		return setSelectedMenu([null, tempOption.name]);
	};
	const onCollapse = (_collapsed) => {
		console.log(_collapsed);
		setCollapsed(_collapsed);
	};
	useEffect(() => {
		setQueryPath(router.query.page);
		let filterMenu = menuOptions.filter((option) => option.name == router.query.page);
		if (filterMenu.length > 0) {
			setMenu(filterMenu[0].menu);
		} else {
			setMenu(null);
			setSelectedMenu([null, null]);
		}
	}, [router]);
	useEffect(() => {
		if (_menu != null) {
			setTimeout(() => {
				getFirstSelectedOption();
			}, 500);
		}
	}, [_menu]);
	useEffect(() => {
		setSideBar({ sideBar: selectedMenu });
	}, [selectedMenu]);
	if (!_menu) {
		return <></>;
	}
	return (
		<Sider
			collapsible
			collapsed={collapsed}
			onCollapse={onCollapse}
			width={!!_menu ? 200 : 0}
			className='site-layout-background'>
			<Menu
				theme='dark'
				mode='inline'
				selectedKeys={[selectedMenu[0], selectedMenu[1]]}
				defaultOpenKeys={[selectedMenu[0]]}
				style={{ height: '100%', borderRight: 0, textTransform: 'capitalize' }}>
				{queryPath != null &&
					_menu &&
					// selectedMenu[1] != null &&
					_menu.map((m) =>
						m.subMenu.length == 0 ? (
							<Item
								onClick={() => setSelectedMenu([null, m.name])}
								key={m.name}
								icon={m?.icon}
								style={{ marginTop: 0 }}>
								{m.name}
							</Item>
						) : (
							<SubMenu key={m.name} icon={m?.icon} title={m.name}>
								{m.subMenu.map((s) => (
									<Item onClick={() => setSelectedMenu([s, m.name])} key={s} style={{ marginTop: 0 }}>
										{s}
									</Item>
								))}
							</SubMenu>
						),
					)}
			</Menu>
		</Sider>
	);
};

const mapStateToProps = (state) => ({
	...state,
});

const mapDispatch = { setSideBar };

export default connect(mapStateToProps, mapDispatch)(SideBar);
