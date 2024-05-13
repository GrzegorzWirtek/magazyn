import { ProdArr } from '@/utils/types';

export default function DetailsList({ prodArr }: { prodArr: ProdArr }) {
	return (
		<div className='w-full'>
			<table className='w-full table-auto'>
				<tbody>
					{prodArr.map((product) => (
						<tr key={product.name} className=''>
							<td className='border border-gray-400 rounded-lg py-1 px-2 w-[70%]'>
								{product.name}
							</td>
							<td className='border border-gray-400 rounded-lg py-1 px-2 w-[15%]'>
								{product.amount}
							</td>
							<td className='border border-gray-400 rounded-lg py-1 px-2 w-[15%] font-semibold text-red-900'>
								{product.level}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
