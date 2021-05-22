import { urlObjectKeys } from 'next/dist/next-server/lib/utils'
import React from 'react'
import styles from './index.module.css'

interface HeroCardProps {
	title: string
	description: string
	imageClassName: string
}

export const HeroCard: React.FC<HeroCardProps> = ({ imageClassName, title, description }) => {
	return (
		<section className={styles.container + ` ${imageClassName}`}>
			<div className={styles.textcontent}>
				<h1>{title}</h1>
				<p>{description}</p>
			</div>
		</section>
	)
}
