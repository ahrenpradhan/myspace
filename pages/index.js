import React, { useState } from 'react';

import Head from 'next/head';
import styles from '../styles/Home.module.css';

import Link from 'next/link';
import { Card, Switch, Input, Button } from 'antd';

const AdminCard = ({ toggle, setToggle }) => {
	function onChange() {
		setToggle(!toggle);
	}
	return (
		<Card
			title={<h3>Sign in as Admin &rarr;</h3>}
			className={styles.card}
			onClick={onChange}
			extra={<Switch checked={toggle} />}>
			Log in as Admin to -
			<ol>
				<li>View analytics ,</li>
				<li>Change content and more</li>
			</ol>
		</Card>
	);
};
const AdminDetails = () => {
	return (
		<Card className={styles.card} bodyStyle={{ height: '100%' }}>
			<div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
				<div style={{ flex: 1 }}>
					<div style={{ marginBottom: 16 }}>
						<Input addonBefore='Admin ID' />
					</div>
					<div style={{ marginBottom: 16 }}>
						<Input.Password addonBefore='Password' />
					</div>
				</div>
				<Link href='/admin'>
					<Button type='primary' block>
						<a>Login as Admin</a>
					</Button>
				</Link>
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
						<AdminDetails />
					)}
				</div>
			</main>
			{Footer}
		</div>
	);
}
