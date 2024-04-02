import { Area } from '@/utils/types';

type Props = {
	details: Area;
	hidePopup: () => void;
};

export default function Details({ details, hidePopup }: Props) {
	const { prodArr } = details;
	console.log('details', details);
	return (
		<div
			className='flex flex-col items-center justify-center fixed top-0 left-0 w-full h-screen bg-green-400'
			onClick={hidePopup}>
			<table className='w-[80%] table-auto bg-red-400'>
				<thead>
					<tr>
						<th className='border py-1 px-2'>Nazwa</th>
						<th className='border py-1 px-2'>Liczba</th>
					</tr>
				</thead>
				<tbody>
					{prodArr.map((product) => (
						<tr key={product.name} className=''>
							<td className='border py-1 px-2'>{product.name}</td>
							<td className='border py-1 px-2'>{product.amount}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
