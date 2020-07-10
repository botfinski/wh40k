import React, { useState, useEffect } from 'react';
import json from './data.json'

function App() {
	// console.log(json)

	return (
		<>
			{
				json.map(army => {

					for (const prop in army) {
						// console.log(prop)
						console.log(army[prop])

						return (
							<p>{army[prop].name}</p>
						)
					}
				})
			}
		</>
	);
}

export default App;