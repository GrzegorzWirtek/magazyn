'use client';
import { useAppContext } from '@/app/context/AppContext';
import tempdb from '@/tempdb/tempdb';
import Area from './Area';

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
				<Area key={item.id} item={item} />
			))}
		</div>
	);
}
