import { useAppContext } from '@/app/context/AppContext';
import tempdb from '@/tempdb/tempdb';
import DetailsListEdit from './DetailsListEdit';
import PlanPreview from './PlanPreview';

export default function PlanFullScreen() {
	const { checkedArea, setCheckedArea, editActive, setEditActive } =
		useAppContext();

	if (editActive)
		return (
			<div className='flex flex-col'>
				<div className='mb-4'>
					<PlanPreview checkedArea={checkedArea} />
				</div>
				<DetailsListEdit />
			</div>
		);

	return (
		<div className='w-full'>
			<div className='w-full aspect-[2/3] grid grid-cols-4 grid-rows-4 box-border rounded'>
				{tempdb.map((area) => (
					<div
						key={area.id}
						className={`flex justify-center items-center border box-border rounded cursor-pointer ${
							checkedArea === area.id ? 'bg-blue-400' : 'bg-blue-200'
						} ${checkedArea === area.id && 'bg-red-500'}`}
						onClick={() => setCheckedArea(area.id)}
						onDoubleClick={() => setEditActive(true)}>
						<p className='text-xl'>{area.id}</p>
					</div>
				))}
			</div>
		</div>
	);
}
