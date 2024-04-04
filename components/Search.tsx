'use client';
import React, { useState } from 'react';
import tempdb from '@/tempdb/tempdb';
import { useAppContext } from '@/app/context/AppContext';

export default function Search() {
	const [value, setValue] = useState('');
	const { setChecked } = useAppContext();

	const findElements = (value: string) => {
		const foundAreas = tempdb.filter((item) =>
			item.prodArr.some((area) => area.name.includes(value)),
		);

		const idArray = foundAreas.map((item) => item.id);
		return idArray;
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const idsFound = findElements(value);
		setChecked(idsFound);

		setValue('');
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	return (
		<form className='w-full' onSubmit={handleSubmit}>
			<div className='flex'>
				<div className='relative w-full'>
					<input
						type='search'
						id='search-dropdown'
						className='block p-2 w-full z-20 text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 outline-none focus:border-blue-700'
						placeholder='Szukaj'
						required
						value={value}
						onChange={handleInputChange}
					/>
					<button
						type='submit'
						className='absolute top-0 end-0 p-4 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4'>
						<svg
							className='w-4 h-4'
							aria-hidden='true'
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 20 20'>
							<path
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
							/>
						</svg>
						<span className='sr-only'>Search</span>
					</button>
				</div>
			</div>
		</form>
	);
}
