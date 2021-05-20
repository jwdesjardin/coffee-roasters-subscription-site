import React from 'react'
import styles from './index.module.css'

export const Navbar = () => {
	return (
		<div className={styles.container}>
			<img
				className={styles.logo}
				src='/assets/shared/desktop/logo.svg'
				alt='coffee roasters logo'
				width='236px'
				height='26px'
			/>
			<img
				src='/assets/shared/mobile/icon-hamburger.svg'
				alt='hamburger icon'
				width='16px'
				height='16px'
			/>
		</div>
	)
}
