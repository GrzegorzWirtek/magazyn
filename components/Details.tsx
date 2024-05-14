'use client';

import PlanPreview from './PlanPreview';
import { useAppContext } from '@/app/context/AppContext';
import tempdb from '@/tempdb/tempdb';
import DetailsList from './DetailsList';
import DetailsListEdit from './DetailsListEdit';

export default function Details() {
	const {
		detailsActive,
		setDetailsActive,
		checkedArea,
		editActive,
		setEditActive,
	} = useAppContext();

	if (!detailsActive) return;

	const handleExit = () => {
		setDetailsActive(false);
		setEditActive(false);
	};

	const handleEdit = () => {
		setEditActive(true);
	};

	const handleCancelEdit = () => {
		setEditActive(false);
	};

	const prodArr = tempdb.filter((item) => item.id === checkedArea)[0].prodArr;

	return (
		<div
			className={`flex flex-col items-center justify-start fixed top-0 left-[50%] translate-x-[-50%] w-[50vh] h-screen p-4 bg-white  ${
				editActive && 'bg-emerald-200'
			}`}>
			<div className='flex flex-wrap w-full mb-8'>
				<div className='flex justify-center w-full'>
					<PlanPreview checkedArea={checkedArea} />
				</div>
				{!editActive && (
					<div className='w-full flex flex-wrap justify-between mt-4'>
						<button
							className='basis-[48%] bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 rounded'
							onClick={handleEdit}>
							EDYTUJ
						</button>
						<button
							className='basis-[48%] bg-orange-600 hover:bg-orange-500 text-white font-bold rounded'
							onClick={handleExit}>
							WYJDŹ
						</button>
					</div>
				)}
			</div>
			{editActive ? <DetailsListEdit /> : <DetailsList prodArr={prodArr} />}
		</div>
	);
}
