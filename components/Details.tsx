'use client';

import PlanPreview from './PlanPreview';
import { useAppContext } from '@/app/context/AppContext';
import tempdb from '@/tempdb/tempdb';
import DetailsList from './DetailsList';
import { useState } from 'react';
import DetailsListEdit from './DetailsListEdit';

export default function Details() {
	const {
		detailsActive,
		setDetailsActive,
		checkedArea,
		editActive,
		setEditActive,
	} = useAppContext();

	if (!detailsActive) return;

	const prodArr = tempdb.filter((item) => item.id === checkedArea)[0].prodArr;

	const handleExit = () => {
		setDetailsActive(false);
		setEditActive(false);
	};

	const handleEdit = () => {
		setEditActive(true);
	};

	const handleCancelEdit = () => {
		setEditActive(false);
	};

	return (
		<div className='flex flex-col items-center justify-start fixed top-0 left-[50%] translate-x-[-50%] w-[50vh] h-screen p-4 bg-green-400'>
			<div className='flex flex-wrap w-full'>
				<div className='flex flex-wrap w-full'>
					<div className='basis-1/2 flex flex-col justify-center gap-4'>
						{!editActive && (
							<button
								className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded duration-100'
								onClick={handleEdit}>
								EDYTUJ
							</button>
						)}
						{!editActive ? (
							<button
								className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded duration-100'
								onClick={handleExit}>
								WYJDŹ
							</button>
						) : (
							<button
								className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded duration-100'
								onClick={handleCancelEdit}>
								ANULUJ
							</button>
						)}
					</div>
					<PlanPreview checkedArea={checkedArea} />
				</div>
			</div>
			{editActive ? <DetailsListEdit /> : <DetailsList />}
		</div>
	);
}
