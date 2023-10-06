import React from 'react'

import InvestmentResultCalculations from './InvestmentResultCalculations'
import InvestmentResultHeader from './InvestmentResultHeader'

import './InvestmentResult.css'

const InvestmentResult = props => {
	if (1 > 0) {
		return (
			//      Todo: Show below table conditionally (only once result data is available)
			//   Show fallback text if no data is available

			<table className='result'>
				<InvestmentResultHeader />
                <tbody>
				<InvestmentResultCalculations />
                </tbody>
			</table>
		)
	}

	return <p>no data</p>
}

export default InvestmentResult
