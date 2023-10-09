import React from 'react'

import InvestmentResultCalculations from './InvestmentResultCalculations'
import InvestmentResultHeader from './InvestmentResultHeader'
import styles from './InvestmentResult.module.css'

const InvestmentResult = props => {
	console.log(<InvestmentResultCalculations />);
	return (
		<table className={styles.result}>
			<InvestmentResultHeader />
			<InvestmentResultCalculations calculatedData={props.calculatedData} />
		</table>
	)
}

export default InvestmentResult
