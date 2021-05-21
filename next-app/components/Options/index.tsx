import React from 'react'
import { option } from '../../types'
import { ArrowIcon } from '../Icons'
import styles from './index.module.css'

// OPTIONs COMPONENT

interface OptionsProps {
	question: string
	options: option[]
}

export const Options: React.FC<OptionsProps> = ({ question, options }) => {
	return (
		<div className={styles.container}>
			<div className={styles.question_container}>
				<h4>{question}</h4>
				<button>
					<ArrowIcon></ArrowIcon>
				</button>
			</div>
			<div className={styles.options_container}>
				{options.map((option) => (
					<Option key={option.value} option={option}></Option>
				))}
			</div>
		</div>
	)
}

// OPTION COMPONENT

interface OptionProps {
	option: option
}

const Option: React.FC<OptionProps> = ({ option }) => {
	return (
		<div className={styles.option_container}>
			<h4>{option.value}</h4>
			<p>{option.description}</p>
		</div>
	)
}
