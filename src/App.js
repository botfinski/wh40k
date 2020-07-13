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
					<td>
						{profile.name}
					</td>

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


	const Units = ({ units }) => {
		// console.log(Object.values(units).map)
		let names = Object.values(units).map(unit => unit.name)

		let profiles = Object.values(units).map(val => val.profiles)


		return (
			<>
				<h3>Units</h3>
				{
					names.map(name => <h4>{name}</h4>)
				}
				{
					profiles.map((profiles, i) => (
						<>
							<h5>{profiles.name}</h5>
							<table key={i}>
								<tbody>
									<Profiles profiles={profiles} />
								</tbody>
							</table>
						</>
					))
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