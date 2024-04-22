'use client';

import { useState } from 'react';

type NewProduct = {
	name: string;
	amount: number;
	level: number;
};

export default function AddForm() {
	const [newProduct, setNewProduct] = useState({} as NewProduct);

	const handleChange = (e: React.FormEvent<HTMLInputElement>, key: string) => {
		const { value } = e.currentTarget;
		setNewProduct((prev) => ({ ...prev, [key]: value }));
	};

	const handleSubmit = () => {
		console.log('added');
	};

	return (
		<div className='fixed top-0 left-0 w-full h-full flex justify-center items-center backdrop-blur'>
			<form
				className='w-full flex flex-wrap justify-center gap-6 bg-white py-20'
				onSubmit={handleSubmit}>
				<table className='w-full mt-4  table-auto bg-red-400'>
					<tbody>
						<tr>
							<td className='border py-1 px-2 w-[70%]'>
								<input
									type='text'
									value={newProduct.name || ''}
									className='w-full'
									onChange={(e) => handleChange(e, 'name')}
								/>
							</td>
							<td className='border py-1 px-2 w-[15%]'>
								<input
									type='number'
									value={newProduct.amount || ''}
									className='w-full'
									onChange={(e) => handleChange(e, 'amount')}
								/>
							</td>
							<td className='border py-1 px-2 w-[15%] font-semibold text-red-900'>
								<input
									type='number'
									value={newProduct.level || ''}
									className='w-full font-semibold text-red-900'
									onChange={(e) => handleChange(e, 'level')}
								/>
							</td>
							<td className='border py-1 px-2 w-[15%] font-semibold text-red-900'></td>
						</tr>
					</tbody>
				</table>

				<button
					type='submit'
					className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
					DODAJ
				</button>
				<button
					type='button'
					className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
					ANULUJ
				</button>
			</form>
		</div>
	);
}
