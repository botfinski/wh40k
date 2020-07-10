import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import json from './data.json'

function App() {
	const [data, setData] = useState({ hits: [] });

	useEffect(() => {
		const fetchData = async () => {
			// const result = await axios(
			// 	'https://hn.algolia.com/api/v1/search?query=redux',
			// );

			// const result = await axios(data);

			// console.log(result)
			// console.log(json)

			setData(json);
		};

		fetchData();
	}, []);

	return (
		<ul>
			{data.hits.map(item => (
				<li key={item.objectID}>
					<a href={item.url}>{item.title}</a>
				</li>
			))}
		</ul>
	);
}

export default App;