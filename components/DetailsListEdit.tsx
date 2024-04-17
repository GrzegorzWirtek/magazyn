import { useAppContext } from '@/app/context/AppContext';
import tempdb from '@/tempdb/tempdb';

export default function DetailsListEdit() {
	const { checkedArea } = useAppContext();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log('Submited!');
	};

	const handleAddNew = () => {
		console.log('Add new!');
	};

	const handleDelete = (productName: string) => {
		console.log(`delete ${productName}`);
	};

	const prodArr = tempdb.filter((item) => item.id === checkedArea)[0].prodArr;
	return (
		<form
			className='w-full flex flex-wrap justify-between bg-yellow-400'
			onSubmit={handleSubmit}>
			<button
				type='button'
				className='basis-[45%] bg-red-900 text-white p-2'
				onClick={handleAddNew}>
				DODAJ NOWY
			</button>
			<button type='submit' className='basis-[45%] bg-red-900 text-white py-2'>
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
								<button
									type='button'
									className='font-bold px-2'
									onClick={() => handleDelete(product.name)}>
									X
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</form>
	);
}
