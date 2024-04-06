'use client';

import tempdb from '@/tempdb/tempdb';
import { useAppContext } from '@/app/context/AppContext';

export default function PreviewArea() {
	const { checked } = useAppContext();

	return (
		<div className='h-[300px] aspect-[2/3] bg-blue-300 grid grid-cols-4 box-border'>
			{tempdb.map((area) => (
				<div
					key={area.id}
					className={`flex justify-center items-center border box-border ${
						checked.includes(area.id) && 'bg-blue-500'
					}`}>
					{checked.includes(area.id) && <p className='text-xl'>{area.id}</p>}
				</div>
			))}
		</div>
	);
}
