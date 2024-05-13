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
		<div className='w-full flex justify-between pb-8'>
			<button
				className={`w-[49%] font-bold text-gray-400 py-2 px-4 border-2 border-gray-300 rounded ${
					currentLayout === 'search' && 'border-blue-600 text-gray-600'
				}`}
				onClick={() => handleLayoutChange('search')}>
				SZUKANIE
			</button>

			<button
				className={`w-[49%] font-bold text-gray-400 py-2 px-4 border-2 border-gray-300 rounded ${
					currentLayout === 'edit' && 'border-blue-600 text-gray-600'
				}`}
				onClick={() => handleLayoutChange('edit')}>
				EDYCJA
			</button>
		</div>
	);
}
