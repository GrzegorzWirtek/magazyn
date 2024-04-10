'use client';
import { useAppContext } from '@/app/context/AppContext';
import tempdb from '@/tempdb/tempdb';

export default function Results() {
	const { checked, searchValue } = useAppContext();

	if (searchValue === '') return;
	if (checked.length < 1) return <p>Brak elementów o podanej nazwie</p>;

	const checkedAreas = tempdb
		.filter((item) => checked.includes(item.id))
		.map((item) => {
			return {
				id: item.id,
				prodArr: item.prodArr.filter((item) =>
					item.name.toUpperCase().includes(searchValue.toUpperCase()),
				),
			};
		});

	return (
		<div className='w-full grow shrink overflow-y-scroll'>
			{checkedAreas.map((item, index) => (
				<div
					key={index}
					className='mb-2 p-2 border-solid border-[1px] border-gray-400 rounded'>
					<h3 className='w-[28px] mb-2 text-center leading-8 bg-blue-400 rounded'>
						{item.id}
					</h3>
					{item.prodArr.map((item) => (
						<div key={item.name} className='flex'>
							<p className='basis-[88%]'>{item.name}</p>
							<p>{item.amount}</p>
						</div>
					))}
				</div>
			))}
		</div>
	);
}
