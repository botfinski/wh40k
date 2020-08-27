import React from 'react';

const Input = ({ id, label, type = 'text', maxLength = '25', changed, value, index, checked }) => {

	if (type === 'text') {
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

	if (type === 'checkbox') {
		return (
			<div className={`Input Input-${type}`} key={index}>
				<label htmlFor={id}>{label}</label>
				<input
					type={type}
					id={id}
					onChange={changed}
					value={value}
					checked={checked}
				/>
			</div>
		)
	}

}

export default Input;