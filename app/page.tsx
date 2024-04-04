import PreviewArea from '@/components/PreviewArea';
import Search from '@/components/Search';

export default function Home() {
	return (
		<main className='flex flex-wrap justify-center items-start h-screen max-w-[460px] mx-auto p-4 bg-green-200'>
			<Search />
			<PreviewArea />
		</main>
	);
}
