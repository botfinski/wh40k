import React from 'react';
import './Button.scss'

const Button = ({ disabled, clicked, text, type = 'button' }) => {
	return (
		<button
			type={type}
			onClick={clicked}
			disabled={disabled}
		>
			{text}
		</button>
	)
}

export default Button;