import React from 'react';
import './Button.scss'

const Button = ({ disabled, clicked, text }) => {
	return (
		<button onClick={clicked} disabled={disabled}>
			{text}
		</button>
	)
}

export default Button;