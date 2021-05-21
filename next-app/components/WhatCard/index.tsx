import React from 'react'
import styles from './index.module.css'

interface WhatCardProps {
	imageURL: string
	title: string
	description: string
	altText: string
}

export const WhatCard: React.FC<WhatCardProps> = ({ imageURL, title, description, altText }) => {
	return (
		<div className={styles.container}>
			<img src={imageURL} alt={altText} width='200px' height='151px' />
			<div className={styles.textcontent}>
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	)
}
