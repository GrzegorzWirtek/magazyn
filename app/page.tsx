import Area from '@/components/Area';
import tempdb from '@/tempdb/tempdb';

export default function Home() {
	return (
		<main className='flex justify-center items-center h-screen p-4'>
			<div className='relative grid grid-cols-4 bg-blue-300 w-[50vh] aspect-[2/3] box-border'>
				{tempdb.map((area) => (
					<Area key={area.id} details={area} />
				))}
			</div>
		</main>
	);
}
