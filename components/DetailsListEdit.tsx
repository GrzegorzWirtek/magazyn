import { useAppContext } from '@/app/context/AppContext';
import tempdb from '@/tempdb/tempdb';

export default function DetailsListEdit() {
	const { checkedArea } = useAppContext();

	const prodArr = tempdb.filter((item) => item.id === checkedArea)[0].prodArr;
	return (
		<form className='w-full flex flex-wrap justify-between'>
			<button className='basis-[45%] bg-red-900 text-white p-2'>
				DODAJ NOWY
			</button>
			<button className='basis-[45%] bg-red-900 text-white py-2'>
				ZATWIERDŹ ZMIANY
			</button>
			<table className='w-full mt-4  table-auto bg-red-400'>
				<tbody>
					{prodArr.map((product) => (
						<tr key={product.name} className=''>
							<td className='border py-1 px-2 w-[70%]'>
								<input type='text' value={product.name} className='w-full' />
							</td>
							<td className='border py-1 px-2 w-[15%]'>
								<input
									type='number'
									value={product.amount}
									className='w-full'
								/>
							</td>
							<td className='border py-1 px-2 w-[15%] font-semibold text-red-900'>
								<input
									type='number'
									value={product.level}
									className='w-full font-semibold text-red-900'
								/>
							</td>
							<td className='border py-1 px-2 w-[15%] font-semibold text-red-900'>
								<button className='font-bold px-2'>X</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</form>
	);
}
