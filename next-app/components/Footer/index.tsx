import React from 'react'
import styles from './index.module.css'
import Link from 'next/link'

export const Footer = () => {
	return (
		<div className={styles.container}>
			<img
				className={styles.logo}
				src='/assets/shared/desktop/logo-white.svg'
				alt='coffee roasters logo'
				width='236px'
				height='26px'
			/>
			<div className={styles.links_container}>
				<Link href='/home'>HOME</Link>
				<Link href='/about'>ABOUT US</Link>
				<Link href='/subscribe'>CREATE YOUR PLAN</Link>
			</div>
			<div className={styles.social_container}>
				<a href='#' className={styles.links}>
					<img src='/assets/shared/desktop/icon-facebook.svg' alt='' width='24px' height='24px' />
				</a>
				<a href='#' className={styles.links}>
					<img src='/assets/shared/desktop/icon-twitter.svg' alt='' width='24px' height='24px' />
				</a>
				<a href='#' className={styles.links}>
					<img src='/assets/shared/desktop/icon-instagram.svg' alt='' width='24px' height='24px' />
				</a>
			</div>
		</div>
	)
}
