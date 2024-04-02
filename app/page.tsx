import Area from '@/components/Area';
import tempdb from '@/tempdb/tempdb';

export default function Home() {
	return (
		<main className='flex justify-center'>
			<div className='relative grid grid-cols-4 bg-gray-300 h-screen w-[50vh] box-border'>
				{tempdb.map((area) => (
					<Area key={area.id} details={area} />
				))}
			</div>
		</main>
	);
}
