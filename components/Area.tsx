'use client';

import { useState } from 'react';
import Details from './Details';
import { useAppContext } from '@/app/context/AppContext';

type Props = {
	id: number;
};

export default function Area({ id: itemId }: Props) {
	const { id, setId } = useAppContext();

	const hideDetails = () => {
		setId(null);
	};

	const handleClick = () => {
		if (!id) {
			setId(itemId);
		} else {
			setId(null);
		}
	};

	return (
		<>
			{id === itemId && <Details id={id} hide={hideDetails} />}
			<div
				className={`border box-border ${id === itemId && 'bg-blue-400'}`}
				onClick={handleClick}></div>
		</>
	);
}
