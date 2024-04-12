import tempdb from '@/tempdb/tempdb';

export default function PlanPreview({
	checkedArea,
}: {
	checkedArea: null | number;
}) {
	return (
		<div className='flex justify-center basis-1/2'>
			<div className='h-[160px] aspect-[2/3] grid grid-cols-4 grid-rows-4 box-border rounded bg-blue-400'>
				{tempdb.map((area) => (
					<div
						key={area.id}
						className={`flex justify-center items-center border box-border rounded ${
							checkedArea === area.id && 'bg-red-500'
						}`}>
						<p>{checkedArea === area.id && area.id}</p>
					</div>
				))}
			</div>
		</div>
	);
}
