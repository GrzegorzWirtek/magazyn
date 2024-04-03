'use client';

import Details from './Details';
import { useAppContext } from '@/app/context/AppContext';
import { Area } from '@/utils/types';

type Props = {
	details: Area;
};

export default function Area({ details }: Props) {
	const { prodArr } = details;
	const { checked, setChecked } = useAppContext();

	const hidePopup = () => {
		setChecked([]);
	};

	const setAsChecked = () => {
		if (checked.length > 0) return setChecked([]);
		setChecked([details.id]);
	};

	return (
		<>
			{checked.includes(details.id) && (
				<Details details={details} hidePopup={hidePopup} />
			)}
			<div
				className={`border box-border ${
					checked.includes(details.id) ? 'bg-blue-500' : null
				}`}
				onClick={setAsChecked}>
				{prodArr.map((product) => (
					<div key={product.name}></div>
				))}
			</div>
		</>
	);
}
