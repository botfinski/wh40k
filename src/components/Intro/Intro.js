import React, { useState } from 'react';
import './Intro.scss';
import Button from '../Button/Button'
import Input from '../Input/Input'

const Intro = () => {
	const [players, setPlayers] = useState({
		player1: '',
		player2: ''
	})

	const [step, setStep] = useState(0)

	const isDisabled = Boolean(players.player1) && Boolean(players.player2) ? false : true

	const nextClicked = () => {
		// console.log('next')
		setStep(step + 1)
	}

	return (
		<div className='flex'>
			<h2 className='step-header'>Set players</h2>
			<div className='Intro content'>
				<Input
					id='player1'
					label='Player 1 name'
					value={players.player1}
					changed={e => setPlayers({ ...players, [e.target.id]: e.target.value })}
				/>

				<Input
					id='player2'
					label='Player 2 name'
					value={players.player2}
					changed={e => setPlayers({ ...players, [e.target.id]: e.target.value })}
				/>
			</div>
			<Button
				text='Next &#8250;'
				clicked={nextClicked}
				disabled={isDisabled}
			/>
		</div>
	);
}

export default Intro;