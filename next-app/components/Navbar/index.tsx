import React, { useState } from 'react'
import styles from './index.module.css'
import Link from 'next/link'

export const Navbar = () => {
	const [hamburgerClicked, setHamburgerClicked] = useState(false)

	return (
		<header className={styles.container}>
			<img
				className={styles.logo}
				src='/assets/shared/desktop/logo.svg'
				alt='coffee roasters logo'
				width='236px'
				height='26px'
			/>

			<div className={styles.link_container}>
				<Link href='/'>Home</Link>
				<Link href='/about'>About us</Link>
				<Link href='/subscribe'>Create your plan</Link>
			</div>

			{hamburgerClicked === true ? (
				<img
					src='/assets/shared/mobile/icon-close.svg'
					alt='hamburger icon'
					width='16px'
					height='16px'
					className={styles.hamburger}
					onClick={() => setHamburgerClicked(!hamburgerClicked)}
				/>
			) : (
				<img
					src='/assets/shared/mobile/icon-hamburger.svg'
					alt='hamburger icon'
					width='16px'
					height='16px'
					className={styles.hamburger}
					onClick={() => setHamburgerClicked(!hamburgerClicked)}
				/>
			)}

			{/* MENU OVERLAY */}
			{/* only shows when selected and in mobile view */}
			<div
				className={styles.menu_container}
				style={hamburgerClicked ? { display: 'block' } : { display: 'none' }}
			>
				<div className={styles.menu_links_container}>
					<Link href='/'>Home</Link>
					<Link href='/about'>About us</Link>
					<Link href='/subscribe'>Create your plan</Link>
				</div>
			</div>
		</header>
	)
}
