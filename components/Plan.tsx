'use client';

import tempdb from '@/tempdb/tempdb';
import { useAppContext } from '@/app/context/AppContext';

export default function Plan() {
	const { checked, searchValue, checkedArea } = useAppContext();

	return (
		<div>
			<div className='h-[160px] aspect-[2/3] grid grid-cols-4 grid-rows-4 box-border rounded'>
				{tempdb.map((area) => (
					<div
						key={area.id}
						className={`flex justify-center items-center border box-border rounded ${
							checked.includes(area.id) ? 'bg-blue-400' : 'bg-blue-200'
						} ${checkedArea === area.id && 'bg-red-500'}`}>
						{checked.includes(area.id) && <p>{area.id}</p>}
					</div>
				))}
			</div>
		</div>
	);
}
