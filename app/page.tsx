import PreviewArea from '@/components/PreviewArea';
import Results from '@/components/Results';
import Search from '@/components/Search';

export default function Home() {
	return (
		<main className='flex flex-col items-center gap-4 h-screen max-w-[460px] mx-auto p-4 bg-green-200'>
			<Search />
			<PreviewArea />
			<Results />
		</main>
	);
}
