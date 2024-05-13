'use client';
import { useAppContext } from '@/app/context/AppContext';
import tempdb from '@/tempdb/tempdb';
import Area from './Area';
import Plan from './Plan';

export default function Results() {
	const { checked, searchValue } = useAppContext();

	if (searchValue === '') return;
	if (checked.length < 1)
		return (
			<p className='mt-8 font-semibold text-lg'>
				Brak elementów o podanej nazwie
			</p>
		);

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
		<>
			<Plan />
			<div className='w-full grow shrink overflow-y-scroll'>
				{checkedAreas.map((item) => (
					<Area key={item.id} item={item} />
				))}
			</div>
		</>
	);
}
