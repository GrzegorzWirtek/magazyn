'use client';
import { useAppContext } from '@/app/context/AppContext';
import tempdb from '@/tempdb/tempdb';

export default function Results() {
	const { checked, searchValue } = useAppContext();

	if (searchValue === '') return;
	if (checked.length < 1) return <p>No results</p>;

	const checkedAreas = tempdb.filter((item) => checked.includes(item.id));
	const onlySelected = checkedAreas.map((item) => {
		return {
			id: item.id,
			prodArr: item.prodArr.filter((item) => item.name.includes(searchValue)),
		};
	});

	return (
		<div className='w-full grow shrink bg-red-300 overflow-y-scroll'>
			{onlySelected.map((item, index) => (
				<div key={index} className='border m-1 p-1'>
					<h3>{item.id}</h3>
					{item.prodArr.map((item) => (
						<p key={item.name}>{item.name}</p>
					))}
				</div>
			))}
		</div>
	);
}
