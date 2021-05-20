import { urlObjectKeys } from 'next/dist/next-server/lib/utils'
import React from 'react'
import styles from './index.module.css'

interface HeroCardProps {
	title: string
	description: string
	bgURL: string
}

export const HeroCard: React.FC<HeroCardProps> = ({ bgURL, title, description }) => {
	return (
		<div
			className={styles.hero_card_container}
			style={{ backgroundImage: `url(${bgURL})`, backgroundColor: '#333' }}
		>
			<div className={styles.hero_card_textcontent}>
				<h1>{title}</h1>
				<p>{description}</p>
			</div>
		</div>
	)
}
