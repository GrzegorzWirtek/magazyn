'use client';

import PlanPreview from './PlanPreview';
import { useAppContext } from '@/app/context/AppContext';
import tempdb from '@/tempdb/tempdb';

export default function Details() {
	const { detailsActive, setDetailsActive, checkedArea } = useAppContext();

	if (!detailsActive) return;

	const prodArr = tempdb.filter((item) => item.id === checkedArea)[0].prodArr;

	const handleExit = () => {
		setDetailsActive(false);
	};

	return (
		<div className='flex flex-col items-center justify-start fixed top-0 left-[50%] translate-x-[-50%] w-[50vh] h-screen p-4 bg-green-400'>
			<div className='flex flex-wrap w-full'>
				<div className='flex flex-wrap w-full h-[30vh]'>
					<div className='basis-1/2 flex flex-col justify-center gap-4'>
						<button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded duration-100'>
							EDYTUJ
						</button>
						<button
							className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded duration-100'
							onClick={handleExit}>
							WYJDŹ
						</button>
					</div>
					<PlanPreview checkedArea={checkedArea} />
				</div>
			</div>
			<div className='w-full'>
				<table className='w-full table-auto bg-red-400'>
					<thead>
						<tr>
							<th className='border py-1 px-2'>Nazwa</th>
							<th className='border py-1 px-2'>Liczba</th>
						</tr>
					</thead>
					<tbody>
						{prodArr.map((product) => (
							<tr key={product.name} className=''>
								<td className='border py-1 px-2'>{product.name}</td>
								<td className='border py-1 px-2'>{product.amount}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
