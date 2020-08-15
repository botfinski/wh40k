import React from 'react';
import Input from '../../Input/Input'

const SetPlayers = ({ players, setPlayers }) => {
	return (
		<>
			<Input
				id='player1'
				label='Player 1 name'
				value={players.player1.name}
				changed={e => setPlayers({
					...players,
					[e.target.id]: {
						...players[e.target.id],
						name: e.target.value
					}
				})}
			/>

			<Input
				id='player2'
				label='Player 2 name'
				value={players.player2.name}
				changed={e => setPlayers({
					...players,
					[e.target.id]: {
						...players[e.target.id],
						name: e.target.value
					}
				})}
			/>
		</>
	)
}

export default SetPlayers;