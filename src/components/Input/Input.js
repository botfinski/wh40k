import React from 'react';

const Input = ({ id, label, type = 'text', maxLength = '50', changed, value }) => {
	return (
		<div className='Input'>
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