import { useAppContext } from '@/app/context/AppContext';
import tempdb from '@/tempdb/tempdb';
import DetailsListEdit from './DetailsListEdit';

export default function PlanFullScreen() {
	const { checkedArea, setCheckedArea, editActive, setEditActive } =
		useAppContext();

	if (editActive) return <DetailsListEdit />;

	return (
		<div className='w-full'>
			<h3 className='text-center font-bold my-2'>Wybierz obszar</h3>
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
