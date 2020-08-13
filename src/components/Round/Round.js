import React, { useState } from 'react';
import './Round.scss';
import phasesJson from '../../phase-data.json';
import PhaseControls from '../PhaseControls/PhaseControls'

const Round = () => {
	const [phasesData] = useState(phasesJson)
	const [activePhaseIndex, setPhase] = useState(0);

	// console.log(phasesData.length)

	const Phase = ({ phase }) => {
		console.log(Object.values(phase))
		return (
			<div className='Phase'>
				{Object.values(phase).map(phase => <p>{phase.name}</p>)}
			</div>
		)
	}

	return (
		<div className='Round'>
			<Phase
				phase={phasesData[activePhaseIndex]}
				activePhaseIndex={activePhaseIndex}
			/>
			<PhaseControls
				activePhaseIndex={activePhaseIndex}
				phasesLength={phasesData.length}
				next={() => setPhase(activePhaseIndex + 1)}
				prev={() => setPhase(activePhaseIndex - 1)}
			/>
		</div>
	);
};

export default Round;