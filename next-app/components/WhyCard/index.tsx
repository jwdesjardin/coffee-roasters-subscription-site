import React from 'react'
import styles from './index.module.css'

interface WhyCardProps {
	imageURL: string
	title: string
	description: string
	altText: string
}

export const WhyCard: React.FC<WhyCardProps> = ({ imageURL, title, description, altText }) => {
	return (
		<div className={styles.why_card_container}>
			<div className={styles.imagebox}>
				<img src={imageURL} alt={altText} width='72px' />
			</div>
			<div className={styles.why_card_textcontent}>
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	)
}
