import React from 'react';
import './Button.scss'

const Button = ({ disabled, clicked, text, type = 'button', className }) => {
	return (
		<button
			type={type}
			onClick={clicked}
			disabled={disabled}
			className={className}
		>
			{text}
		</button>
	)
}

export default Button;