import React from 'react'

const InvestmentResultCalculations = props => {
	const formatter = new Intl.NumberFormat('en-Us', {
		style: 'currency',
		currency: 'USD',
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	})

	return (
		<tbody>
			{props.calculatedData.map(item => (
				<tr key={item.year}>
					<td>{item.year}</td>
					<td>{formatter.format(item.totalSavings)}</td>
					<td>{formatter.format(item.yearlyInterest)}</td>
					<td>{formatter.format(item.totalInterest)}</td>
					<td>{formatter.format(item.investedCapital)}</td>
				</tr>
			))}
		</tbody>
	)
}

export default InvestmentResultCalculations
