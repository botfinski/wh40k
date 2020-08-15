import React from 'react';


const aaa = e => {
	console.dir(e.target.value)
}


const ArmySelect = ({ playerName, names, armiesData }) => {
	return (
		<div className='Select'>
			<p>{playerName}</p>
			<select onInput={aaa} defaultValue='---'>
				<option value='---' disabled>---</option>
				{
					Object.values(armiesData).map(army => Object.keys(army).map(key => <option key={key} value={key}>{army[key].name}</option>))
				}
			</select>
		</div>
	)
}

const PickArmies = ({ players, armiesData }) => {
	let armiesNames = []
	Object.values(armiesData).map(army => Object.values(army).map(keys => armiesNames.push(keys.name)))
	// console.log(armiesNames)
	// Object.values(armiesData).map(army => console.log(Object.keys(army)))



	return (
		Object.values(players).map((player, index) => {

			// console.log(player)
			return (
				<ArmySelect
					playerName={player.name}
					key={index}
					// names={armiesNames} 
					armiesData={armiesData}
				/>
			)
		})
	)
}

export default PickArmies;