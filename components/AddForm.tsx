'use client';

import { useState } from 'react';
import { useAppContext } from '@/app/context/AppContext';

type NewProduct = {
	name: string;
	amount: number;
	level: number;
};

export default function AddForm() {
	const [newProduct, setNewProduct] = useState({} as NewProduct);
	const { setAddNewActive } = useAppContext();

	const handleChange = (e: React.FormEvent<HTMLInputElement>, key: string) => {
		const { value } = e.currentTarget;
		setNewProduct((prev) => ({ ...prev, [key]: value }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log('New product added');
		setNewProduct({} as NewProduct);
		setAddNewActive(false);
	};

	const handleCancel = () => {
		setAddNewActive(false);
	};

	return (
		<div className='fixed top-0 left-[50%] -translate-x-2/4 w-full max-w-[460px] h-full flex justify-center items-center backdrop-blur'>
			<form
				className='w-full flex flex-wrap justify-center gap-6 bg-white py-20 px-4'
				onSubmit={handleSubmit}>
				<table className='w-full mt-4 table-auto'>
					<tbody>
						<tr>
							<td className='border-2 border-gray-400 py-1 px-2 w-[70%]'>
								<input
									type='text'
									value={newProduct.name || ''}
									className='w-full outline-none px-1'
									onChange={(e) => handleChange(e, 'name')}
									required
								/>
							</td>
							<td className='border-2 border-gray-400 py-1 px-2 w-[15%]'>
								<input
									type='number'
									value={newProduct.amount || ''}
									className='w-full outline-none px-1'
									onChange={(e) => handleChange(e, 'amount')}
									required
									min='0'
								/>
							</td>
							<td className='border-2 border-gray-400 py-1 px-2 w-[15%] font-semibold text-red-900'>
								<input
									type='number'
									value={newProduct.level || ''}
									className='w-full font-semibold text-red-900 outline-none px-1'
									onChange={(e) => handleChange(e, 'level')}
									required
									min='0'
								/>
							</td>
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
					className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
					onClick={handleCancel}>
					ANULUJ
				</button>
			</form>
		</div>
	);
}
