import React from 'react';


const aaa = e => {
	console.dir(e.target.value)
}



const PickArmies = ({ players, armiesData }) => {
	let armies = []
	armiesData.map(army => armies.push(army))




	return (
		Object.values(players).map((player, index) => {

			// console.log(player)
			return (
				<>
					<p>{player.name}</p>
					<select onInput={aaa}>
						{
							armies.map(army => <option value={army.slug}>{army.name}</option>)
						}
					</select>
				</>
			)
		})
	)
}

export default PickArmies;





// const ArmySelect = ({ playerName, names, armiesData }) => {
	// 	return (
	// 		<p>aaa</p>
	// 	)

	// 	// return (
	// 	// 	<div className='Select'>
	// 	// 		<p>{playerName}</p>
	// 	// 		<select onInput={aaa} defaultValue='---'>
	// 	// 			<option value='---' disabled>---</option>
	// 	// 			{
	// 	// 				Object.values(armiesData).map(army => Object.keys(army).map(key => <option key={key} value={key}>{army[key].name}</option>))
	// 	// 			}
	// 	// 		</select>
	// 	// 	</div>
	// 	// )
	// }