import React from 'react';
import Input from '../../Input/Input'


const PickArmies = ({ players, armiesData, setPlayers, player }) => {
	// let armies = []
	// armiesData.map(army => armies.push(army))

	// console.log(player)
	// console.log(players)
	// console.log(player)


	return (
		<>
			{
				armiesData.map((army) => (
					<Input
						key={army.slug}
						type='checkbox'
						id={army.slug}
						label={army.name}
						changed={e => setPlayers({
							...players,
							[player]: {
								...players[player],
								army: army.slug
							}
						})}
						value={army.slug}
						checked={false}
					/>
				))
			}
		</>
	)
}

export default PickArmies;
