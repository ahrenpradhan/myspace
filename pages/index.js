import React, { useState, useEffect } from 'react';

import Head from 'next/head';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';

import Link from 'next/link';
import { Card, Switch, Input, Button, message } from 'antd';
import axios from 'axios';

const AdminCard = ({ toggle, setToggle }) => {
	const [title, setTitle] = useState('Sign in');
	function onChange() {
		setToggle(!toggle);
	}
	const getTitle = (x) => {
		setTitle(x ? 'Sign up' : 'Sign in');
	};
	useEffect(() => {
		setTimeout(() => {
			getTitle(title.includes('Sign in'));
		}, 2000);
	}, [title]);
	return (
		<Card
			title={
				<h3>
					<span>{`${title}`}</span> as Admin &rarr;
				</h3>
			}
			// title={<h3>Sign in as Admin &rarr;</h3>}
			className={styles.card}
			onClick={onChange}
			extra={<Switch checked={toggle} />}>
			Log in as Admin to -
			<ol>
				<li>View analytics ,</li>
				<li>Change content and more</li>
			</ol>
			Or, create new account as admin
		</Card>
	);
};

const AdminDetails = ({ setCreateAdmin, createAdmin }) => {
	const router = useRouter();
	const [details, setDetails] = useState({
		username: '',
		password: '',
	});
	const key = 'updatable';
	const signIn = async () => {
		message.loading({ content: 'Logging in', key, duration: 0 });
		const { data } = await axios({
			url: '/api/user',
			method: 'GET',
			params: {
				...details,
			},
		});
		console.log(data);
		if (data.success) {
			message.success({ content: 'Success!', key, duration: 2 });
			router.push({
				pathname: '/admin',
				query: {
					...data.data,
				},
			});
		} else {
			message.warning({ content: data.data, key, duration: 2 });
		}
	};
	const createUser = async () => {
		message.loading({ content: 'Creating Account', key, duration: 0 });
		const { data } = await axios({
			url: '/api/user',
			method: 'POST',
			data: {
				...details,
			},
		});
		if (data.success) {
			message.success({ content: 'Account created success!', key, duration: 2 });
			setCreateAdmin(!createAdmin);
		} else {
			message.success({ content: data.data, key, duration: 2 });
		}
		console.log(data.data);
	};
	const handleButton = () => {
		if (createAdmin) {
			createUser();
		} else {
			signIn();
		}
	};
	return (
		<Card className={styles.card} bodyStyle={{ height: '100%' }}>
			<div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
				<div style={{ flex: 1 }}>
					<div style={{ marginBottom: 16 }}>
						<Input
							addonBefore='Admin ID'
							value={details.username}
							onChange={(e) => {
								setDetails({ ...details, username: e.target.value });
							}}
						/>
					</div>
					<div style={{ marginBottom: 16 }}>
						<Input.Password
							addonBefore='Password'
							value={details.password}
							onChange={(e) => {
								setDetails({ ...details, password: e.target.value });
							}}
						/>
					</div>
				</div>
				<Button type='primary' block onClick={handleButton}>
					{createAdmin ? <a>Create new account</a> : <a>Login as Admin</a>}
					{/* <a>Login as Admin</a> */}
				</Button>
				{/* <Link href='/createAdmin'> */}
				{/* </Link> */}
				{createAdmin ? (
					<a onClick={() => setCreateAdmin(!createAdmin)}>Sign In as Admin</a>
				) : (
					<a onClick={() => setCreateAdmin(!createAdmin)}>Create a new admin account</a>
				)}
			</div>
		</Card>
	);
};

const ContinueCard = (
	<Card title={<h3>Continue &rarr;</h3>} className={styles.card}>
		Redirect to main website
	</Card>
);

const Footer = (
	<footer className={styles.footer}>
		<h4>
			<span>Designed and developed by - </span>
			<span>Ahren Pradhan (Full Stack Developer)</span>
		</h4>
	</footer>
);

export default function Home() {
	const [toggle, setToggle] = useState(false);
	const [createAdmin, setCreateAdmin] = useState(false);
	return (
		<div className={styles.container}>
			<Head>
				<title>Admin / Client</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>
					Welcome to <a>MySpace!</a>
				</h1>

				<div className={styles.grid}>
					<AdminCard toggle={toggle} setToggle={setToggle} />
					{!toggle ? (
						<Link href={`/myspace`}>
							<a>{ContinueCard}</a>
						</Link>
					) : (
						<AdminDetails createAdmin={createAdmin} setCreateAdmin={setCreateAdmin} />
					)}
				</div>
			</main>
			{Footer}
		</div>
	);
}
