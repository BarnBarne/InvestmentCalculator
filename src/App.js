import React, { useState } from 'react'

import Header from './components/Header/Header'
import InvestmentForm from './components/InvestmentForm/InvestmentForm'
import InvestmentResult from './components/InvestmentResult/InvestmentResult'

function App() {
	const [userInput, setUserInput] = useState(null)

	const calculationHandler = userInput => {
		setUserInput(userInput)
	}

	const yearlyData = []

	if (userInput) {
		let currentSavings = +userInput.savings
		const yearlyContribution = +userInput.contribution
		const expectedReturn = +userInput.expectedReturn / 100
		const duration = +userInput.duration
		let calculateTotalInterest = 0
		for (let i = 0; i < duration; i++) {
			const yearlyInterest = currentSavings * expectedReturn
			calculateTotalInterest += yearlyInterest
			currentSavings += yearlyInterest + yearlyContribution
			yearlyData.push({
				year: i + 1,
				totalSavings: currentSavings,
				yearlyInterest: yearlyInterest,
				totalInterest: calculateTotalInterest,
				investedCapital: currentSavings - calculateTotalInterest,
			})
		}
	}

	return (
		<div>
			<Header />
			<InvestmentForm onCalculate={calculationHandler} />
			{!userInput && <p style={{ textAlign: 'center' }}>No investment calculated yet</p>}
			{userInput && <InvestmentResult calculatedData={yearlyData} />}
		</div>
	)
}

export default App
