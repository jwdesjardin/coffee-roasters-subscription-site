import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { Navbar } from '../../components/Navbar'
import { WhatCard } from '../../components/WhatCard'
import { WhyCard } from '../../components/WhyCard'
import { HowCard } from '../../components/HowCard'
import { Footer } from '../../components/Footer'

import styles from './index.module.css'

const Home = () => {
	return (
		<div className=''>
			<Head>
				<title>CoffeeRoasters | Home</title>
				<link rel='icon' href='/assets/favicon-32x32.png' />
			</Head>

			<main>
				{/* HEADER */}
				<Navbar></Navbar>

				{/* HERO */}
				<section className={styles.hero_container}>
					<div className={styles.hero_content}>
						<h1>Great coffee made simple.</h1>
						<p>
							Start your mornings with the world’s best coffees. Try our expertly curated artisan
							coffees from our best roasters delivered directly to your door, at your schedule.
						</p>
						<Link href='/subscribe'>
							<button className='button-primary'>Create your plan</button>
						</Link>
					</div>
				</section>

				{/* WHAT */}
				<section className={styles.what_container}>
					<h2 className='alternate-title'>Our collection</h2>
					<div className={styles.what_card_container}>
						<WhatCard
							imageURL='/assets/home/desktop/image-gran-espresso.png'
							title='Gran Espresso'
							description='Light and flavorful blend with cocoa and black pepper for an intense experience'
							altText='gran espresso beans'
						></WhatCard>
						<WhatCard
							imageURL='/assets/home/desktop/image-planalto.png'
							title='Planalto'
							description='Brazilian dark roast with rich and velvety body, and hints of fruits and nuts'
							altText='planalto beans'
						></WhatCard>
						<WhatCard
							imageURL='/assets/home/desktop/image-piccollo.png'
							title='Piccollo'
							description='Mild and smooth blend featuring notes of toasted almond and dried cherry'
							altText='piccollo beans'
						></WhatCard>
						<WhatCard
							imageURL='/assets/home/desktop/image-danche.png'
							title='Danche'
							description='Ethiopian hand-harvested blend densely packed with vibrant fruit notes'
							altText='danche beans'
						></WhatCard>
					</div>
				</section>

				{/* WHY Section */}
				<section className={styles.why_container}>
					<div className={styles.why_textcontent}>
						<h2>Why choose us?</h2>
						<p>
							A large part of our role is choosing which particular coffees will be featured in our
							range. This means working closely with the best coffee growers to give you a more
							impactful experience on every level.
						</p>
					</div>
					<div className={styles.why_card_container}>
						<WhyCard
							imageURL='/assets/home/desktop/icon-coffee-bean.svg'
							title='Best quality'
							description='Discover an endless variety of the world’s best artisan coffee from each of our roasters.'
							altText='coffe bean icon'
						></WhyCard>
						<WhyCard
							imageURL='/assets/home/desktop/icon-gift.svg'
							title='Exclusive benefits'
							description='Special offers and swag when you subscribe, including 30% off your first shipment.'
							altText='gift icon'
						></WhyCard>
						<WhyCard
							imageURL='/assets/home/desktop/icon-truck.svg'
							title='Free shipping'
							description='We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.'
							altText='truck icon'
						></WhyCard>
					</div>
				</section>

				{/* HOW Section */}
				<section className={styles.how_container}>
					<h2>How it works</h2>

					{/* How illustration */}
					<div className={styles.how_illustration}>
						<div className={styles.circle}></div>
						<div className={styles.line}></div>
						<div className={styles.circle}></div>
						<div className={styles.line}></div>
						<div className={styles.circle}></div>
					</div>

					<div className={styles.how_card_container}>
						<HowCard
							title='Pick your coffee'
							description='Select from our evolving range of artisan coffees. Our beans are ethically
						sourced and we pay fair prices for them. There are new coffees in all profiles
						every month for you to try out.'
							number='01'
						/>
						<HowCard
							title='Choose the frequency'
							description='Customize your order frequency, quantity, even your roast style and grind type.
						Pause, skip or cancel your subscription with no commitment through our online portal.'
							number='02'
						/>
						<HowCard
							title='Receive and enjoy!'
							description='We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning
						world-class coffees curated to provide a distinct tasting experience.'
							number='03'
						/>
					</div>
					<Link href='/subscribe'>
						<button className='button-primary'>Create Your Plan</button>
					</Link>
				</section>

				<Footer></Footer>
			</main>
		</div>
	)
}
export default Home
