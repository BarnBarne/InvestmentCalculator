import React, { useState } from 'react'

import Header from './components/Header/Header'
import InvestmentForm from './components/InvestmentForm/InvestmentForm'
import InvestmentResult from './components/InvestmentResult/InvestmentResult'

function App() {
	const [calculatedData, setCalculatedData] = useState([])

	const calculationHandler = userInput => {
		// Should be triggered when form is submitted
		// You might not directly want to bind it to the submit event on the form though...

		const yearlyData = [] // per-year results

		let currentSavings = +userInput.savings // feel free to change the shape of this input object!
		const yearlyContribution = +userInput.contribution // as mentioned: feel free to change the shape...
		const expectedReturn = +userInput.expectedReturn / 100
		const duration = +userInput.duration
		let calculateTotalInterest = 0
		// The below code calculates yearly results (total savings, interest etc)
		for (let i = 0; i < duration; i++) {
			const yearlyInterest = currentSavings * expectedReturn
			calculateTotalInterest += yearlyInterest
			currentSavings += yearlyInterest + yearlyContribution
			yearlyData.push({
				// feel free to change the shape of the data pushed to the array!
				year: i + 1,
				totalSavings: currentSavings.toFixed(2),
				yearlyInterest: yearlyInterest.toFixed(2),
				totalInterest: calculateTotalInterest.toFixed(2),
				investedCapital: (currentSavings - calculateTotalInterest).toFixed(2),
			})
		}
		setCalculatedData(yearlyData)

		// do something with yearlyData ...
	}

	return (
		<div>
			<Header />
			<InvestmentForm onCalculate={calculationHandler} />
			<InvestmentResult calculatedData={calculatedData} />
		</div>
	)
}

export default App
