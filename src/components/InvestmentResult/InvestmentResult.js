import React from 'react'

import InvestmentResultCalculations from './InvestmentResultCalculations'
import InvestmentResultHeader from './InvestmentResultHeader'
import styles from './InvestmentResult.module.css'

const InvestmentResult = props => {
	console.log(props.calculatedData)
	if (props.calculatedData.length === 0) {
		return <p className={styles.noResult}>No investment calculated yet</p>
	}

	return (
		//      Todo: Show below table conditionally (only once result data is available)
		//   Show fallback text if no data is available

		<table className={styles.result}>
			<InvestmentResultHeader />
			<InvestmentResultCalculations calculatedData={props.calculatedData} />
		</table>
	)
}

export default InvestmentResult
