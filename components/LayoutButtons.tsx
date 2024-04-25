import { useAppContext } from '@/app/context/AppContext';

export default function LayoutButtons() {
	const {
		layout,
		setLayout,
		setChecked,
		setSearchValue,
		setCheckedArea,
		setDetailsActive,
	} = useAppContext();

	const resetSettings = () => {
		setChecked([]);
		setSearchValue('');
		setCheckedArea(null);
		setDetailsActive(false);
	};

	const handleLayoutChange = (layout: 'search' | 'edit') => {
		setLayout(layout);
		resetSettings();
	};

	return (
		<div className='w-full flex justify-around'>
			<button
				className={`w-[45%] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded opacity-40 ${
					layout === 'search' && 'opacity-100'
				}`}
				onClick={() => handleLayoutChange('search')}>
				SZUKANIE
			</button>
			<button
				className={`w-[45%] bg-blue-500 hover:bg-blue-700 opacity-40 text-white font-bold py-2 px-4 rounded ${
					layout === 'edit' && 'opacity-100'
				}`}
				onClick={() => handleLayoutChange('edit')}>
				EDYCJA
			</button>
		</div>
	);
}
