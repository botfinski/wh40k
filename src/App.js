import React, { useState, useEffect } from 'react';
import json from './data.json'

function App() {

	const [data] = useState(json);
	// console.log(data)

	const Unit = ({ unit }) => {
		for (const prop in unit) {
			console.log(typeof unit)
			return (
				<p key={unit}>unit</p>
			)
		}
	}

	const Units = ({ units }) => {
		for (const prop in units) {
			// console.log(units[prop])
			return (
				<ul>
					<li>a</li>
				</ul>
			)
		}
	}

	const army = (
		data.map((army, i) => {
			for (const prop in army) {
				// console.log(army[prop])
				return (
					<div key={i}>
						<p>{army[prop].name}</p>
						<div>Units</div>
						<Units unit={army[prop].units} />
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