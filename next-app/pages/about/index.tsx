import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'

import styles from './index.module.css'
import { HeroCard } from '../../components/HeroCard'
import { HQCard } from '../../components/HQCard'

const About = () => {
	return (
		<div className=''>
			<Head>
				<title>Coffeeroasters | About</title>
				<link rel='icon' href='/assets/favicon-32x32.png' />
			</Head>

			<main className='page-container'>
				{/* HEADER */}
				<Navbar></Navbar>

				{/* HERO */}
				<HeroCard
					description='Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of 
					coffee from around the world. We have since been dedicated to bring the perfect cup - from 
					bean to brew - in every shipment.'
					title='About us'
					imageClassName='white-cup-image'
				></HeroCard>

				{/* COMMITMENT */}
				<section className={styles.commitment_container}>
					<div className={styles.commitment_imagebox}>
						{/* <img src='/assets/about/mobile/image-commitment.jpg' alt='' /> */}
						<img src='/assets/about/desktop/image-commitment.jpg' alt='' />
					</div>

					<div className={styles.commitment_textcontent}>
						<h2>Our commitment</h2>
						<p>
							We’re built on a simple mission and a commitment to doing good along the way. We want
							to make it easy for you to discover and brew the world’s best coffee at home. It all
							starts at the source. To locate the specific lots we want to purchase, we travel
							nearly 60 days a year trying to understand the challenges and opportunities in each of
							these places. We collaborate with exceptional coffee growers and empower a global
							community of farmers through with well above fair-trade benchmarks. We also offer
							training, support farm community initiatives, and invest in coffee plant science.
							Curating only the finest blends, we roast each lot to highlight tasting profiles
							distinctive to their native growing region.
						</p>
					</div>
				</section>

				{/* QUALITY */}
				<section className={styles.quality_container}>
					<div className={styles.quality_imagebox}>
						{/* <img src='/assets/about/mobile/image-quality.jpg' alt='' /> */}
						<img src='/assets/about/desktop/image-quality.jpg' alt='' />
					</div>

					<div className={styles.quality_textcontent}>
						<h2>Uncompromising quality</h2>
						<p>
							Although we work with growers who pay close attention to all stages of harvest and
							processing, we employ, on our end, a rigorous quality control program to avoid
							over-roasting or baking the coffee dry. Every bag of coffee is tagged with a roast
							date and batch number. Our goal is to roast consistent, user-friendly coffee, so that
							brewing is easy and enjoyable.
						</p>
					</div>
				</section>

				{/* HQ */}
				<section className={styles.hq_container}>
					<h2 className='alternate-title'>Our headquarters</h2>
					<div className={styles.hq_card_container}>
						<HQCard
							imageURL='/assets/about/desktop/illustration-uk.svg'
							country='United Kingdom'
							street='68 Asfordby Rd'
							city='Alcaston'
							zipcode='gSY6 1YA'
							phone='+44 1241 918425'
						></HQCard>
						<HQCard
							imageURL='/assets/about/desktop/illustration-canada.svg'
							country='Canada'
							street='1528 Eglinton Avenue'
							city='Toronto'
							zipcode='Ontario M4P 1A6'
							phone='+1 416 485 2997'
						></HQCard>
						<HQCard
							imageURL='/assets/about/desktop/illustration-australia.svg'
							country='Australia'
							street='36 Swanston Street'
							city='Kewell'
							zipcode='Victoria'
							phone='+61 4 9928 3629'
						></HQCard>
					</div>
				</section>

				<Footer></Footer>
			</main>
		</div>
	)
}
export default About
