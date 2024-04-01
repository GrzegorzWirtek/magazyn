'use client';

import { useState } from 'react';
import Details from './Details';

type Props = {
	id: string;
};

export default function Area({ id }: Props) {
	const [areaClass, setAreaClass] = useState('');

	const hideDetails = () => {
		setAreaClass('');
	};

	const handleClick = () => {
		if (areaClass === '') {
			setAreaClass('bg-blue-400');
		} else {
			setAreaClass('');
		}
	};

	return (
		<>
			{areaClass === '' ? null : <Details id={id} hide={hideDetails} />}
			<div
				className={`border box-border ${areaClass}`}
				onClick={handleClick}></div>
		</>
	);
}
