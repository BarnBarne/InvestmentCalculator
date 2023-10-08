import React from 'react'

const InvestmentResultCalculations = props => {
	return (
		<tbody>
			{props.calculatedData.map(item => (
				<tr>
					<td>{item.year}</td>
					<td>{item.totalSavings}</td>
					<td>{item.yearlyInterest}</td>
					<td>{item.totalInterest}</td>
					<td>{item.investedCapital}</td>
				</tr>
			))}
		</tbody>
	)
}

export default InvestmentResultCalculations
