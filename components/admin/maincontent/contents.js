import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { connect } from 'react-redux';

import { menuOptions } from '../../../assets/data';
import { Form, Input, InputNumber, Button, Row, Col } from 'antd';
const layout = {
	labelCol: {
		span: 8,
	},
	wrapperCol: {
		span: 16,
	},
};
const Contents = ({ page, sideBar, userDetails, credentials }) => {
	if (!page) {
		return <></>;
	}
	const [tempOption, setTempOption] = useState(null);
	const [displayContent, setDisplayContent] = useState(false);
	const [currentOptions, setCurrentOptions] = useState(false);
	const [validationMessage, setValidationMessages] = useState({});
	const [userData, setUserData] = useState({});
	useEffect(() => {
		// getData();
		if (sideBar[1]) {
			setTempOption(
				menuOptions
					.filter((option) => option.name == page)[0]
					?.menu?.filter((option) => option.name === sideBar[1])[0],
			);
		} else {
			setTempOption(null);
		}
	}, [page, sideBar]);
	useEffect(() => {
		if (tempOption) {
			setDisplayContent(tempOption?.displayContent);
			setCurrentOptions(tempOption.content[sideBar[1]]);
			setValidationMessages(tempOption.content['validationMessages']);
		} else {
			setDisplayContent(false);
			setCurrentOptions(false);
			setValidationMessages({});
		}
	}, [tempOption]);
	const onFinish = (values) => {
		console.log({ ...values.user, userId: credentials._id });
	};
	if (!displayContent) {
		return <>Visibility turned off</>;
	}
	return (
		<div className='admin-input-form'>
			{userDetails && (
				<>
					<span>{`First name : ${userDetails.firstname}`}</span>
					<span>{`Last name : ${userDetails.lastname}`}</span>
				</>
			)}
			<Form {...layout} onFinish={onFinish} validateMessages={validationMessage}>
				{currentOptions &&
					currentOptions.map((option) => (
						<Form.Item
							name={['user', option.header.split(' ').join('')]}
							label={option.label}
							rules={option.rules?.length > 0 ? option.rules : []}>
							{option.type == 'text' ? (
								<Input />
							) : option.type == 'number' ? (
								<InputNumber />
							) : (
								<Input.TextArea />
							)}
						</Form.Item>
					))}
				<Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
					<Button type='primary' htmlType='submit'>
						Submit
					</Button>
				</Form.Item>
			</Form>
		</div>
	);
};

const mapStateToProps = (state) => ({
	...state,
});

const mapDispatch = null;
export default connect(mapStateToProps, mapDispatch)(Contents);
