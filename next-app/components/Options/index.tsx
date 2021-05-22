import React, { useState } from 'react'
import { option } from '../../types'
import { ArrowIcon } from '../Icons'
import styles from './index.module.css'

// OPTIONs COMPONENT

interface OptionsProps {
	question: string
	options: option[]
	selected: string
	setSelected: React.Dispatch<React.SetStateAction<string>>
}

export const Options: React.FC<OptionsProps> = ({ question, options, selected, setSelected }) => {
	const [modalToggle, setModalToggle] = useState(false)

	return (
		<div className={styles.container}>
			<div className={styles.question_container} onClick={() => setModalToggle(!modalToggle)}>
				<h4>{question}</h4>
				<button>
					<ArrowIcon></ArrowIcon>
				</button>
			</div>

			{modalToggle && (
				<div className={styles.options_container}>
					{options.map((option) => (
						<Option
							setSelected={setSelected}
							key={option.value}
							option={option}
							selected={selected === option.value}
						></Option>
					))}
				</div>
			)}
		</div>
	)
}

// OPTION COMPONENT

interface OptionProps {
	option: option
	selected: boolean
	setSelected: React.Dispatch<React.SetStateAction<string>>
}

const Option: React.FC<OptionProps> = ({ option, selected, setSelected }) => {
	return (
		<div
			className={
				selected ? `${styles.option_container} ${styles.selected}` : styles.option_container
			}
			onClick={() => setSelected(option.value)}
		>
			<h4>{option.value}</h4>
			<p>{option.description}</p>
		</div>
	)
}
