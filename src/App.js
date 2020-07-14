import React, { useState } from 'react';
import armyData from './army-data.json'
import dict from './dictionary-data.json';
import './index.scss'

function App() {
	const [data] = useState(armyData);
	const [dictionary] = useState(dict[0].dictionary);

	const Profile = ({ profile }) => {
		return (
			<>
				<tr>
					<td>{profile.name}</td>

					{
						Object.values(profile.stats).map((stat, i) => <td key={i} className='stat-nr'>{stat}</td>)
					}
				</tr>
			</>
		)
	}

	const Profiles = ({ profiles }) => {
		return (
			<>
				{
					profiles.map((profile, i) => <Profile key={i} profile={profile} />)
				}
			</>
		)
	}

	const Weapon = ({ weaponData }) => {
		console.log(weaponData)
		return (
			<td>weapon</td>
		)
	}

	const Weapons = ({ weaponsData }) => {
		// weaponsData.map(weapons => {
		// 	Object.values(weapons).map(weapon => {
		// 		console.log(weapon.name)
		// 		console.log(weapon.stats)
		// 	})
		// })

		return (
			<table>
				<tbody>
					<tr>
						<td colSpan='3'>weapons</td>
					</tr>
					<tr>
						{
							weaponsData.map(weapons => {
								return (
									<Weapon weaponData={weapons} />
								)
							})
						}
					</tr>
				</tbody>
			</table>

		)
	}

	const Units = ({ units }) => {
		let weapons = []
		Object.values(units).map(unit => weapons.push(unit.weapons))

		// console.log(weapons)
		return (
			<>
				<h3>Units</h3>
				{
					Object.keys(units).map(unit => {
						return (
							<div key={unit} style={{ overflowX: "scroll" }}>
								<h4>{units[unit].name}</h4>
								<table>
									<tbody>
										<tr>
											<td></td>
											{
												Object.values(dictionary.stats).map(stat => <td key={stat}>{stat}</td>)
											}
										</tr>
										<Profiles profiles={units[unit].profiles} />
									</tbody>
								</table>
								<Weapons weaponsData={weapons} />
							</div>
						)
					})
				}
			</>
		)
	}

	const army = (
		data.map((army, i) => {
			for (const prop in army) {
				return (
					<div key={i}>
						<h2>{army[prop].name}</h2>
						<Units units={army[prop].units} />
					</div>
				)
			}
		})
	);

	return (
		<>
			{army}
		</>
	);
}

export default App;