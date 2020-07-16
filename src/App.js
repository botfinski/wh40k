import React, { useState } from 'react';
import data from './army-data.json'
import dict from './dictionary-data.json';
import './index.scss'

function App() {
	const [armiesData] = useState(data);
	const [dictionary] = useState(dict[0].dictionary);

	const x = () => {
		return (
			<p>x</p>
		)
	}

	const WeaponStat = ({stat}) => {
		if(stat[0] === 'range') {
			if(stat[1] !== 'Melee') {
				return(
					<td>{stat[1]}"</td>
				)
			} else {
				return(
					<td>{stat[1]}</td>
				)
			}
		} else {
			return (
				<td>{stat[1]}</td>
			)
		}
	}

	const Weapon = ({weapon}) => {
		return (
			<tr>
				<td>{weapon.name}</td>
				{Object.entries(weapon.stats).map(weaponStat => <WeaponStat key={weaponStat[0] + weaponStat[1]} stat={weaponStat} />)}
			</tr>
		)
	}

	const Stat = ({ type, value }) => {
		if (type === 'movement') {
			return (
				<td>{value}"</td>
			)
		} else {
			return (
				<td>{value}</td>
			)
		}
	}

	const Profile = ({ profile }) => {
		return (
			<tr>
				<td>{profile.name}</td>
				{Object.entries(profile.stats).map(stat => <Stat key={stat} type={stat[0]} value={stat[1]} />)}
			</tr>
		)
	}

	const Unit = ({ unit }) => {
		// console.log(unit.abilities)
		return (
			<div className='Unit'>
				<h4>{unit.name}</h4>
				<table>
					<tbody>
						<tr>
							<td className='no-border'></td>
							{Object.values(dictionary.stats).map(stat => <td key={stat}>{stat}</td>)}
						</tr>
						{Object.values(unit.profiles).map(profile => <Profile key={profile.name} profile={profile} />)}
					</tbody>
				</table>

				<h4>Weapons</h4>
				<table>
					<tbody>
						<tr>
							<td className='no-border'></td>
							{Object.values(dictionary.weaponStats).map(stat => <td key={stat}>{stat}</td>)}
						</tr>
						{Object.values(unit.weapons).map(weapon => <Weapon key={weapon.name} weapon={weapon} />)}
					</tbody>
				</table>

				<h4>Abilites</h4>
				<ul>
					{unit.abilities.map(abilit => <li key={abilit}>{abilit}</li>)}
				</ul>
			</div>
		)
	}

	const Units = ({ units }) => {
		return (
			<>
				<h3>Units</h3>
				{Object.values(units).map(unit => <Unit key={unit.name} unit={unit} />)}
			</>
		)
	}

	const Army = ({ army }) => {
		return (
			Object.values(army).map(army => {
				return (
					<div key={army}>
						<h2>{army.name}</h2>
						<Units units={army.units} />
					</div>
				)
			})
		)
	}

	const Armies = ({ armies }) => {
		return (
			armies.map((army,i) => <Army key={i} army={army} />)
		)
	}

	return (
		<div className='Armies'>
			<Armies armies={armiesData} />
		</div>
	);
}

export default App;