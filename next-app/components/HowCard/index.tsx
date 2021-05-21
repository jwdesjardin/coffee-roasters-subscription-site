import React from 'react'
import styles from './index.module.css'

interface HowCardProps {
	number: string
	title: string
	description: string
}

export const HowCard: React.FC<HowCardProps> = ({ number, title, description }) => {
	return (
		<div className={styles.container}>
			<span className={styles.number}>{number}</span>
			<div className={styles.textcontent}>
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	)
}
