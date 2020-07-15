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
				{Object.entries(profile.stats).map(stat => <Stat type={stat[0]} value={stat[1]} />)}
			</tr>

		)
	}

	const Unit = ({ unit }) => {
		return (
			<div>
				<h4>{unit.name}</h4>
				<table>
					<tbody>
						<tr>
							<td></td>
							{
								Object.values(dictionary.stats).map(stat => <td key={stat}>{stat}</td>)
							}
						</tr>
						{Object.values(unit.profiles).map(profile => <Profile profile={profile} />)}
					</tbody>
				</table>
			</div>
		)
	}

	const Units = ({ units }) => {
		return (
			<>
				<h3>Units</h3>
				{Object.values(units).map(unit => <Unit unit={unit} />)}
			</>
		)
	}

	const Army = ({ army }) => {
		return (
			Object.values(army).map(army => {
				return (
					<div>
						<h2>{army.name}</h2>
						<Units units={army.units} />
					</div>
				)
			})
		)
	}

	const Armies = ({ armies }) => {
		return (
			armies.map(army => <Army army={army} />)
		)
	}

	return (
		<>
			<Armies armies={armiesData} />
		</>
	);
}

export default App;