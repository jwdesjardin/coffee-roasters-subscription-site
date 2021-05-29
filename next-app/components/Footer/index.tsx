import React from 'react'
import styles from './index.module.css'
import Link from 'next/link'

export const Footer = () => {
	return (
		<footer className={styles.container}>
			<img
				className={styles.logo}
				src='/assets/shared/desktop/logo-white.svg'
				alt='coffee roasters logo'
				width='236'
				height='26'
			/>
			<div className={styles.links_container}>
				<Link href='/home'>HOME</Link>
				<Link href='/about'>ABOUT US</Link>
				<Link href='/subscribe'>CREATE YOUR PLAN</Link>
			</div>
			<div className={styles.social_container}>
				<a href='#'>
					<img
						src='/assets/shared/desktop/icon-facebook.svg'
						alt='facebook'
						width='24'
						height='24'
					/>
				</a>
				<a href='#'>
					<img src='/assets/shared/desktop/icon-twitter.svg' alt='twitter' width='24' height='24' />
				</a>
				<a href='#'>
					<img
						src='/assets/shared/desktop/icon-instagram.svg'
						alt='instagram'
						width='24'
						height='24'
					/>
				</a>
			</div>
		</footer>
	)
}
