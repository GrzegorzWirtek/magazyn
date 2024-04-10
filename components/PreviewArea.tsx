'use client';

import tempdb from '@/tempdb/tempdb';
import { useAppContext } from '@/app/context/AppContext';

export default function PreviewArea() {
	const { checked } = useAppContext();

	return (
		<div>
			<div className='h-[250px] aspect-[2/3] grid grid-cols-4 grid-rows-4 box-border rounded'>
				{tempdb.map((area) => (
					<div
						key={area.id}
						className={`flex justify-center items-center border box-border rounded ${
							checked.includes(area.id) ? 'bg-blue-400' : 'bg-blue-200'
						}`}>
						{checked.includes(area.id) && <p className='text-xl'>{area.id}</p>}
					</div>
				))}
			</div>
		</div>
	);
}
