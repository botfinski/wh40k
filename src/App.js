import React from 'react';
import './index.scss'
// import Round from './components/Round/Round'
import Intro from './components/Intro/Intro'
import armiesData from './army-data.json'

function App() {
	return (
		<div className='App'>
			<Intro armiesData={armiesData} />
			{/* <Round /> */}
		</div>
	);
}

export default App;