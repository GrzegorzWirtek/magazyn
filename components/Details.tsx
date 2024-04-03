import { Area } from '@/utils/types';
import PreviewArea from './PreviewArea';

type Props = {
	details: Area;
	hidePopup: () => void;
};

export default function Details({ details, hidePopup }: Props) {
	const { prodArr } = details;
	return (
		<div className='flex flex-col items-center justify-start fixed top-0 left-[50%] translate-x-[-50%] w-[50vh] h-screen p-4 bg-green-400'>
			<div className='flex flex-wrap h-[30vh] w-full mb-4'>
				<div className='flex flex-col justify-center px-4 gap-4 basis-1/2'>
					<button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded duration-100'>
						EDYTUJ
					</button>
					<button
						className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded duration-100'
						onClick={hidePopup}>
						WYJDŹ
					</button>
				</div>
				<div className='basis-1/2 h-full flex justify-center'>
					<PreviewArea />
				</div>
			</div>
			<div className='w-full'>
				<table className='w-full table-auto bg-red-400'>
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
		</div>
	);
}
