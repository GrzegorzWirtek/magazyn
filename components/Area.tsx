'use client';

import { Area as AreaType } from '@/utils/types';
import { useAppContext } from '@/app/context/AppContext';
import DetailsList from './DetailsList';

type Props = {
	item: AreaType;
};

export default function Area({ item }: Props) {
	const { checkedArea, setCheckedArea, setDetailsActive } = useAppContext();

	const handleClick = () => {
		setCheckedArea(item.id);
	};

	const handleDoubleClick = () => {
		setDetailsActive(true);
	};

	return (
		<div
			className={`mb-2 p-2 border-solid border-[1px] border-gray-400 rounded ${
				checkedArea === item.id && 'border-blue-700 border-2 bg-emerald-200'
			}`}
			onClick={handleClick}
			onDoubleClick={handleDoubleClick}>
			<h3
				className={`w-[28px] mb-2 text-center leading-8 bg-blue-400 rounded ${
					checkedArea === item.id && 'bg-red-500'
				}`}>
				{item.id}
			</h3>
			<DetailsList prodArr={item.prodArr} />
		</div>
	);
}
