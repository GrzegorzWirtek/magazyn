'use client';
import React, { useState } from 'react';
import tempdb from '@/tempdb/tempdb';
import { useAppContext } from '@/app/context/AppContext';
import { useRef } from 'react';

export default function Search() {
	const [value, setValue] = useState('');
	const { setChecked, setSearchValue } = useAppContext();
	const inputRef = useRef<HTMLInputElement | null>(null);

	const findElements = (value: string) => {
		const foundAreas = tempdb.filter((item) =>
			item.prodArr.some((area) =>
				area.name.toUpperCase().includes(value.toUpperCase()),
			),
		);

		const idArray = foundAreas.map((item) => item.id);
		return idArray;
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		inputRef.current?.blur();
		const idsFound = findElements(value);
		setChecked(idsFound);
		setSearchValue(value);
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	const handleClearInput = () => {
		setValue('');
		setSearchValue('');
		setChecked([]);
	};

	return (
		<form className='flex w-full' onSubmit={handleSubmit}>
			<button className='h-full w-[22px] mr-2 ' type='submit'>
				<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
					<path
						fill='#858585'
						d='M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z'
					/>
				</svg>
			</button>
			<div className='flex grow'>
				<div className='relative w-full'>
					<input
						type='search'
						id='search-dropdown'
						className='block p-2 w-full z-20 text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 outline-none focus:border-blue-700'
						placeholder='Szukaj'
						required
						value={value}
						onChange={handleInputChange}
						ref={inputRef}
					/>
					<button
						type='button'
						className='absolute top-[2px] bottom-[2px] mr-[1px] end-0 px-[10px] w-[42px] bg-white rounded-e-lg border-l'
						onClick={handleClearInput}>
						<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'>
							<path
								fill='#858585'
								d='M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z'
							/>
						</svg>
						<span className='sr-only'>Search</span>
					</button>
				</div>
			</div>
		</form>
	);
}
