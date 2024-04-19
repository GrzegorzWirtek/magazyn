'use client';

import { useAppContext } from '@/app/context/AppContext';
import tempdb from '@/tempdb/tempdb';
import { useState } from 'react';
import DeletePopup from './DeletePopup';

type DeleteItem = {
	productName: string;
	index: number;
};

export default function DetailsListEdit() {
	const { checkedArea } = useAppContext();

	const prodArr = tempdb.filter((item) => item.id === checkedArea)[0].prodArr;

	const [products, setProducts] = useState(prodArr);
	const [deletePopupActive, setDeletePopupActive] = useState(false);
	const [deletedItem, setDeletedItem] = useState<DeleteItem>({} as DeleteItem);

	const handleChange = (
		e: React.FormEvent<HTMLInputElement>,
		arrayIndex: number,
		key: string,
	) => {
		const { value } = e.currentTarget;

		const newState = [...products];
		newState[arrayIndex] = { ...newState[arrayIndex], [key]: value };
		setProducts(newState);
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log('Submited!');
	};

	const handleAddNew = () => {
		console.log('Add new!');
	};

	const handleDelete = (productName: string, index: number) => {
		setDeletedItem({ productName, index });
		setDeletePopupActive(true);
	};

	const deletePopup = (shouldDelete: boolean) => {
		shouldDelete
			? (setDeletePopupActive(false), deleteItem())
			: (setDeletePopupActive(false), setDeletedItem({} as DeleteItem));
	};

	const deleteItem = () => {
		console.log(
			`Delete item ${deletedItem.productName} with index: ${deletedItem.index}`,
		);
		setDeletedItem({} as DeleteItem);
	};

	return (
		<>
			{deletePopupActive && (
				<DeletePopup deletedItem={deletedItem} deletePopup={deletePopup} />
			)}

			<form
				className='w-full flex flex-wrap justify-between'
				onSubmit={handleSubmit}>
				<button
					type='button'
					className='basis-[45%] bg-red-900 text-white p-2'
					onClick={handleAddNew}>
					DODAJ NOWY
				</button>
				<button
					type='submit'
					className='basis-[45%] bg-red-900 text-white py-2'>
					ZATWIERDŹ ZMIANY
				</button>
				<table className='w-full mt-4  table-auto bg-red-400'>
					<tbody>
						{products.map((product, index) => (
							<tr key={index} className=''>
								<td className='border py-1 px-2 w-[70%]'>
									<input
										type='text'
										value={product.name}
										className='w-full'
										onChange={(e) => handleChange(e, index, 'name')}
									/>
								</td>
								<td className='border py-1 px-2 w-[15%]'>
									<input
										type='number'
										value={product.amount}
										className='w-full'
										onChange={(e) => handleChange(e, index, 'amount')}
									/>
								</td>
								<td className='border py-1 px-2 w-[15%] font-semibold text-red-900'>
									<input
										type='number'
										value={product.level}
										className='w-full font-semibold text-red-900'
										onChange={(e) => handleChange(e, index, 'level')}
									/>
								</td>
								<td className='border py-1 px-2 w-[15%] font-semibold text-red-900'>
									<button
										type='button'
										className='font-bold px-2'
										onClick={() => handleDelete(product.name, index)}>
										X
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</form>
		</>
	);
}
