'use client';

import { useAppContext } from '@/app/context/AppContext';

export default function LayoutButtons() {
	const {
		currentLayout,
		setCurrentLayout,
		setChecked,
		setSearchValue,
		setCheckedArea,
		setDetailsActive,
		setEditActive,
	} = useAppContext();

	const resetSettings = () => {
		setChecked([]);
		setSearchValue('');
		setCheckedArea(null);
		setDetailsActive(false);
		setEditActive(false);
	};

	const handleLayoutChange = (chosenLayout: 'search' | 'edit') => {
		setCurrentLayout(chosenLayout);
		resetSettings();
	};

	return (
		<div className='w-full flex justify-around'>
			<button
				className={`w-[45%] bg-blue-300 text-white font-bold py-2 px-4 rounded ${
					currentLayout === 'search' && 'bg-blue-700'
				}`}
				onClick={() => handleLayoutChange('search')}>
				SZUKANIE
			</button>

			<button
				className={`w-[45%] bg-blue-300 text-white font-bold py-2 px-4 rounded ${
					currentLayout === 'edit' && 'bg-blue-700'
				}`}
				onClick={() => handleLayoutChange('edit')}>
				EDYCJA
			</button>
		</div>
	);
}
