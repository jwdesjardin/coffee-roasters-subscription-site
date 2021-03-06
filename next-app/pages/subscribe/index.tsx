import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react'

import { Navbar } from '../../components/Navbar'
import { HowCard } from '../../components/HowCard'
import { Footer } from '../../components/Footer'
import { HeroCard } from '../../components/HeroCard'
import styles from './index.module.css'
import { Options } from '../../components/Options'
import { questions } from '../../data/questions'
import { CloseIcon } from '../../components/Icons'

const Subscribe = () => {
	// const [options, setOptions] = useState({
	// 	question_1: 'Filter',
	// 	question_2: 'Decaf',
	// 	question_3: '250g',
	// 	question_4: 'Cafetiére',
	// 	question_5: 'Every week',
	// })

	const [q1, setQ1] = useState('')
	const [q2, setQ2] = useState('')
	const [q3, setQ3] = useState('')
	const [q4, setQ4] = useState('')
	const [q5, setQ5] = useState('')

	const [modal, toggleModal] = useState(false)

	const overlay_click_listener: React.MouseEventHandler<HTMLDivElement> = (e) => {
		const target = e.target as HTMLDivElement
		//if the current target is the overlay close the modal
		if (target.id === 'overlay') {
			closeModal()
		}
	}

	const showModal = () => {
		toggleModal(true)
		document.body.style.top = `-${window.scrollY}px`
		document.body.style.position = 'fixed'
		document.body.style.width = '100vw'
	}

	const closeModal = () => {
		const body = document.body
		const scrollY = body.style.top
		body.style.position = ''
		body.style.top = ''
		window.scrollTo(0, parseInt(scrollY || '0') * -1)
		toggleModal(false)
	}

	return (
		<div>
			<Head>
				<title>Coffeeroasters | Subscribe</title>
				<link rel='icon' href='/assets/favicon-32x32.png' />
			</Head>

			<main>
				{/* HEADER */}
				<Navbar></Navbar>

				{/* HERO */}
				<HeroCard
					title='Create a plan'
					description='Build a subscription plan that best fits your needs. We offer an assortment of the best 
          artisan coffees from around the globe delivered fresh to your door.'
					imageClassName='black-cup-image'
				></HeroCard>

				{/* Instructions */}
				<section className={styles.how_container}>
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
				</section>

				{/* OPTIONS */}
				<section className={styles.options_container}>
					<aside className={styles.options_menu}>
						<ul>
							<li className={q1 === '' ? '' : 'li-selected'}>
								<span>01</span> Preferences
							</li>
							<li className={q2 === '' ? '' : 'li-selected'}>
								<span>02</span> Bean Type
							</li>
							<li className={q3 === '' ? '' : 'li-selected'}>
								<span>03</span> Quantity
							</li>
							<li className={q4 === '' ? '' : 'li-selected'}>
								<span>04</span> Grind Options
							</li>
							<li className={q5 === '' ? '' : 'li-selected'}>
								<span>05</span> Deliveries
							</li>
						</ul>
					</aside>
					<div className={styles.options_card_container}>
						<Options
							question='How do you drink your coffee?'
							options={questions[0]}
							setSelected={setQ1}
							selected={q1}
						></Options>
						<Options
							setSelected={setQ2}
							selected={q2}
							question='What type of coffee?'
							options={questions[1]}
						></Options>
						<Options
							setSelected={setQ3}
							selected={q3}
							question='How much would you like?'
							options={questions[2]}
						></Options>
						<Options
							setSelected={setQ4}
							selected={q4}
							question='Want us to grind them?'
							options={questions[3]}
						></Options>
						<Options
							setSelected={setQ5}
							selected={q5}
							question='How often should we deliver?'
							options={questions[4]}
						></Options>

						<div className={styles.summary_container}>
							<h2>Order Summary</h2>
							<p>
								“I drink <span className={styles.textHighlight}>{q1 ? q1 : '______'}</span> coffee,
								with a <span className={styles.textHighlight}>{q2 ? q2 : '______'}</span> type of
								bean. <span className={styles.textHighlight}>{q3 ? q3 : '______'}</span> ground ala{' '}
								<span className={styles.textHighlight}>{q4 ? q4 : '______'}</span>, sent to me{' '}
								<span className={styles.textHighlight}>{q5 ? q5 : '______'}</span>.”
							</p>
						</div>

						<button
							disabled={q1 === '' || q2 === '' || q3 === '' || q4 === '' || q5 === ''}
							className='button-primary'
							onClick={showModal}
						>
							Create my plan!
						</button>
					</div>
				</section>

				{/* MODAL */}

				{modal && (
					<div
						id='overlay'
						className={styles.modal_page_container}
						onClick={overlay_click_listener}
					>
						<div className={styles.modal_container}>
							<div className={styles.modal_header}>
								<h2>Order Summary</h2>
								<div style={{ cursor: 'pointer' }} onClick={() => closeModal()}>
									<CloseIcon></CloseIcon>
								</div>
							</div>
							<div className={styles.modal_content}>
								<p className={styles.modal_plan}>
									“I drink <span>{q1 ? q1 : '______'}</span> coffee, with a{' '}
									<span>{q2 ? q2 : '______'}</span> type of bean. <span>{q3 ? q3 : '______'}</span>{' '}
									ground ala <span>{q4 ? q4 : '______'}</span>, sent to me{' '}
									<span>{q5 ? q5 : '______'}</span>.”
								</p>
								<p className={styles.modal_details}>
									Is this correct? You can proceed to checkout or go back to plan selection if
									something is off. Subscription discount codes can also be redeemed at the
									checkout.{' '}
								</p>
								<div className={`${styles.modal_checkout}`}>
									<p>$14.00/ mo</p>
									<button className='button-primary'>Checkout</button>
								</div>
								<button className='button-primary mobileOnly'>Checkout - $14.00/ mo</button>
							</div>
						</div>
					</div>
				)}

				<Footer></Footer>
			</main>
		</div>
	)
}
export default Subscribe
