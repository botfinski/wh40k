import React from 'react';

const Input = ({ id, label, type = 'text', maxLength = '50', changed, value, index }) => {
	return (
		<div className={`Input Input-${type}`} key={index}>
			<label htmlFor={id}>{label}</label>
			<input
				type={type}
				id={id}
				maxLength={maxLength}
				onChange={changed}
				value={value}
				autoComplete='off'
			/>
		</div>
	)
}

export default Input;