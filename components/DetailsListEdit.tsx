import { useAppContext } from '@/app/context/AppContext';
import tempdb from '@/tempdb/tempdb';

export default function DetailsListEdit() {
	const { checkedArea } = useAppContext();

	const prodArr = tempdb.filter((item) => item.id === checkedArea)[0].prodArr;
	return (
		<form className='w-full'>
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
							<td className='border py-1 px-2'>
								<input type='text' value={product.name} />
							</td>
							<td className='border py-1 px-2'>
								<input type='text' value={product.amount} />
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</form>
	);
}
