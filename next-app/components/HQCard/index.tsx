import React from 'react'
import styles from './index.module.css'

interface HQCardProps {
	imageURL: string
	country: string
	street: string
	city: string
	zipcode: string
	phone: string
}

export const HQCard: React.FC<HQCardProps> = ({
	imageURL,
	country,
	street,
	city,
	zipcode,
	phone,
}) => {
	return (
		<div className={styles.container}>
			<div className={styles.imagebox}>
				<img src={imageURL} alt='' />
			</div>
			<div className={styles.textcontent}>
				<h2>{country}</h2>
				<p>{street}</p>
				<p>{city}</p>
				<p>{zipcode}</p>
				<p>{phone}</p>
			</div>
		</div>
	)
}
