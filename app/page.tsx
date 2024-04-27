'use client';
import { useAppContext } from '@/app/context/AppContext';

import Details from '@/components/Details';
import LayoutButtons from '@/components/LayoutButtons';
import Plan from '@/components/Plan';
import Results from '@/components/Results';
import Search from '@/components/Search';

export default function Home() {
	const { currentLayout, setCurrentLayout } = useAppContext();

	const chosenLayout =
		currentLayout === 'search' ? (
			<>
				<Search />
				<Plan />
			</>
		) : (
			<p>details</p>
		);

	return (
		<main className='flex flex-col items-center gap-4 h-screen max-w-[460px] mx-auto p-4 bg-green-200'>
			<LayoutButtons />
			{chosenLayout}
			<Results />
			<Details />
		</main>
	);
}
