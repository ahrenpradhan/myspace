import React, { useState } from 'react';

import Head from 'next/head';
import styles from '../styles/Home.module.css';

import Link from 'next/link';
import { Card, Switch, Input, Button } from 'antd';

const SignIn = (
	<Card title={<h3>Sign In &rarr;</h3>} className={styles.card}>
		Redirect to Sign In 
	</Card>
);
const ContinueCard = (
	<Card title={<h3>Main Website &rarr;</h3>} className={styles.card}>
		Redirect to Main Website
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

export default function FourOhFour() {
	return (
		<div className={styles.container}>
			<Head>
				<title>404 - Page not found</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className={styles.main}>
				<h1 className={styles.title}>404 - Page Not Found</h1>
				<div className={styles.grid}>
					<Link href={`/`}>
						<a>{SignIn}</a>
					</Link>
					<Link href={`/myspace`}>
						<a>{ContinueCard}</a>
					</Link>
				</div>
			</main>
			{Footer}
		</div>
	);
}
