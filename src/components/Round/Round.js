import React, { useState } from 'react';
import './Round.scss';
import SwiperCore, { Navigation, Parallax } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
// import 'swiper/components/parallax/parallax.scss';

SwiperCore.use([Navigation, Parallax]);

const Round = (props) => {
	const [phases] = useState(['Command', 'Movement', 'Psychic', 'Shooting', 'Charge', 'Fight', 'Morale']);
	const [activePhaseIndex, setPhase] = useState(0);

	const Phase = ({ phase }) => {
		return (
			// <div className='Phase'>
			// 	{phase}
			// </div>
			<SwiperSlide className='Phase'>{phase}</SwiperSlide>
		)
	}

	const Phases = ({ phases }) => {
		return (
			phases.map((phase) => <Phase phase={phase} />)
		)
	}

	const Controls = ({ activePhaseName }) => {
		let disabled = (phases.length - 1) - activePhaseIndex;

		return (
			<div className='Controls'>
				<button
					disabled={disabled === phases.length - 1 ? true : false}
					onClick={() => setPhase(activePhaseIndex - 1)}
				>
					&#8249;
				</button>

				{activePhaseName}

				<button
					onClick={() => setPhase(activePhaseIndex + 1)}
					disabled={disabled === 0 ? true : false}
				>
					&#8250;
				</button>
			</div>
		)
	}

	const swiperConfig = {
		speed: 600,
		parallax: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		}
	}

	return (
		<>
			<div className='Layout'>
				{/* <div className='Round'> */}
				<Swiper {...swiperConfig} >
					{/* <Phases phases={phases} /> */}
					{
						phases.map((phase) => <SwiperSlide>{phase}</SwiperSlide>)
					}
				</Swiper>
				<Controls activePhaseName={phases[activePhaseIndex]} />
			</div>
		</>
	);
};

export default Round;