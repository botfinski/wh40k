import React from 'react';
import Input from '../../Input/Input'

const SetPlayers = ({ }) => {
	return (
		<>
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
		</>
	)
}

export default SetPlayers;