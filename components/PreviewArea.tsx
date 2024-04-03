import tempdb from '@/tempdb/tempdb';
import { useAppContext } from '@/app/context/AppContext';

export default function PreviewArea() {
	const { checked } = useAppContext();

	return (
		<div className='h-full aspect-[2/3] bg-blue-300 grid grid-cols-4 box-border'>
			{tempdb.map((area) => (
				<div
					key={area.id}
					className={`border box-border ${
						checked.includes(area.id) ? 'bg-blue-500' : null
					}`}></div>
			))}
		</div>
	);
}
