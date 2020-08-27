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

	const headers = [
		'Set names',
		`${players.player1.name} pick`,
		`${players.player2.name} pick`
	]

	const nextClicked = () => {
		setStep(step + 1)
	}

	const prevClicked = () => {
		setStep(step - 1)
	}

	// console.log(headers[step])


	return (
		<div className='flex'>
			<header>
				<h2 className='step-header'>{headers[step]}</h2>
			</header>

			<div className='Intro content'>
				{
					step === 0 ? <SetPlayers
						players={players}
						setPlayers={setPlayers}
					/> : null
				}

				{
					step === 1 ? <PickArmies
						player='player1'
						players={players}
						armiesData={armiesData}
						setPlayers={setPlayers}
					/> : null
				}

				{
					step === 2 ? <PickArmies
						player='player2'
						players={players}
						armiesData={armiesData}
						setPlayers={setPlayers}
					/> : null
				}

			</div>
			<footer>
				<Button
					text='&lsaquo;'
					clicked={prevClicked}
					className={'prev-button'}
					disabled={step === 0 ? true : false}
				/>
				<Button
					text='Next &rsaquo;'
					clicked={nextClicked}
					disabled={isDisabled}
					className={'next-button'}
				/>
			</footer>
		</div>
	);
}

export default Intro;