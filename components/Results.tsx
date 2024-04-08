'use client';
import { useAppContext } from '@/app/context/AppContext';

export default function Results() {
	const { searchValue } = useAppContext();

	return (
		<div className='w-full grow shrink bg-red-300'>
			<p>This is search value: {searchValue}</p>
		</div>
	);
}
