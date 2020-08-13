import React, { useState, useRef } from 'react';
import './Intro.scss';
import Button from '../Button/Button'

const Intro = () => {

	const input1 = useRef(null);
	const input2 = useRef(null);
	let [disabled, setDisabled] = useState(true);


	const inputChange = () => {
		console.log(Boolean(input1.current.value))
		console.log(Boolean(input2.current.value))

		if (Boolean(input1.current.value) && Boolean(input2.current.value)) {
			setDisabled(false)
		}
	}

	const Input = ({ label, id, changed, inputRef }) => {
		return (
			<div className='Input'>
				<label htmlFor={id}>{label}</label>
				<input type="text" id={id} maxLength='50' onChange={changed} ref={inputRef} />
			</div>
		)
	}


	return (
		<div className='flex'>
			<h2 className='step-header'>Set players</h2>
			<div className='Intro content'>
				<Input
					label='Player 1 name'
					id='player1'
					changed={inputChange}
					inputRef={input1}
				/>
				<Input
					label='Player 2 name'
					id='player2'
					changed={inputChange}
					inputRef={input2}
				/>
			</div>
			<Button
				text='Next &#8250;'
				// clicked={aaa}
				disabled={disabled}
			/>
		</div>
	)
}

export default Intro;