import React, { useState } from 'react';
import './Intro.scss';
import Button from '../Button/Button'
// import Input from '../Input/Input'
import SetPlayers from './SetPlayers/SetPlayers';
import PickArmies from './PickArmies/PickArmies'

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
				{
					step === 0 ? <SetPlayers players={players} setPlayers={setPlayers} /> : null
				}

				{
					step === 1 ? <PickArmies /> : null
				}

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