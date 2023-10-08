import React, { useState } from 'react'

import styles from './InvestmentForm.module.css'
// import InvestmentFormInput from './InvestmentFormInput'

const InvestmentForm = props => {
	const [enteredCurrentSavings, setEnteredCurrentSavings] = useState('')
	const [enteredYearlyContribution, setEnteredYearlyContribution] = useState('')
	const [enteredExpectedReturn, setEnteredExpectedReturn] = useState('')
	const [enteredDuration, setEnteredDuration] = useState('')

	const currentSavingsChangeHandler = event => {
		setEnteredCurrentSavings(event.target.value)
	}
	const yearlyContributionChangeHandler = event => {
		setEnteredYearlyContribution(event.target.value)
	}
	const expectedReturnChangeHandler = event => {
		setEnteredExpectedReturn(event.target.value)
	}
	const investmentDurationChangeHandler = event => {
		setEnteredDuration(event.target.value)
	}

	const resetHandler = () => {
		setEnteredCurrentSavings('')
		setEnteredYearlyContribution('')
		setEnteredExpectedReturn('')
		setEnteredDuration('')
	}

	const submitHandler = event => {
		event.preventDefault()

		const calculationsData = {
			savings: enteredCurrentSavings,
			contribution: enteredYearlyContribution,
			expectedReturn: enteredExpectedReturn,
			duration: enteredDuration,
		}

		props.onCalculate(calculationsData)
		// send investmentData foreward

		resetHandler()
	}

	return (
		<form onSubmit={submitHandler} className={styles.form}>
			<div className={styles['input-group']}>
				{/* <InvestmentFormInput  id="current-savings">Current Savings ($)</InvestmentFormInput>
			<InvestmentFormInput  id="yearly-contribution">Yearly Savings ($)</InvestmentFormInput> */}
				<p>
					<label htmlFor='current-savings'>Current Savings ($)</label>
					<input
						value={enteredCurrentSavings}
						type='number'
						id='current-savings'
						onChange={currentSavingsChangeHandler}
					/>
				</p>
				<p>
					<label htmlFor='yearly-contribution'>Yearly Savings ($)</label>
					<input
						value={enteredYearlyContribution}
						type='number'
						id='yearly-contribution'
						onChange={yearlyContributionChangeHandler}
					/>
				</p>
			</div>
			<div className={styles['input-group']}>
				{/* <InvestmentFormInput id="expected-return">Expected Interest (%, per year)</InvestmentFormInput>
			<InvestmentFormInput id="duration">Investment Duration (years)</InvestmentFormInput> */}
				<p>
					<label htmlFor='expected-return'>Expected Interest (%, per year)</label>
					<input
						value={enteredExpectedReturn}
						type='number'
						id='expected-return'
						onChange={expectedReturnChangeHandler}
					/>
				</p>
				<p>
					<label htmlFor='duration'>Investment Duration (years)</label>
					<input value={enteredDuration} type='number' id='duration' onChange={investmentDurationChangeHandler} />
				</p>
			</div>
			<p className={styles.actions}>
				<button onClick={resetHandler} type='reset' className={styles.buttonAlt}>
					Reset
				</button>
				<button type='submit' className={styles.button}>
					Calculate
				</button>
			</p>
		</form>
	)
}

export default InvestmentForm
