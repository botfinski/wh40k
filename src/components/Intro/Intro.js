import React, { useState } from 'react';
import './Intro.scss';
import Button from '../Button/Button'
import SetPlayers from './SetPlayers/SetPlayers';
import PickArmies from './PickArmies/PickArmies'

const Intro = ({ armiesData }) => {
	const [players, setPlayers] = useState({
		player1: {
			name: '',
			army: null
		},
		player2: {
			name: '',
			army: null
		}
	})

	const [step, setStep] = useState(0)

	const isDisabled = Boolean(players.player1.name) && Boolean(players.player2.name) ? false : true

	const headers = ['Set names', 'Pick armies']

	const nextClicked = () => {
		// console.log('next')
		setStep(step + 1)
	}

	return (
		<div className='flex'>
			<h2 className='step-header'>{headers[step]}</h2>
			<div className='Intro content'>
				{
					step === 0 ? <SetPlayers players={players} setPlayers={setPlayers} /> : null
				}

				{
					step === 1 ? <PickArmies players={players} armiesData={armiesData} /> : null
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