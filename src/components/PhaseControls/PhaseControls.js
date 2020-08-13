import React from 'react';
import './PhaseControls.scss'
import Button from '../Button/Button'

const PhaseControls = ({ activePhaseIndex, phasesLength, next, prev }) => {

	let disabled = (phasesLength - 1) - activePhaseIndex;

	return (
		<div className='PhaseControls'>
			<Button
				text='&#8249;'
				clicked={prev}
				disabled={disabled === phasesLength - 1 ? true : false}
			/>


			<Button
				text='&#8250;'
				clicked={next}
				disabled={disabled === 0 ? true : false}
			/>
		</div>
	)
}

export default PhaseControls;