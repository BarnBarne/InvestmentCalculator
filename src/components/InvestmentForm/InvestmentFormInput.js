import React from 'react'

const InvestmentFormInput = props => {

	

	return (
			<p>
				<label htmlFor={props.id}>{props.children}</label>
				<input type='number' id={props.id} />
			</p>
	)
}

export default InvestmentFormInput
