'use client';

import { useAppContext } from '@/app/context/AppContext';
import tempdb from '@/tempdb/tempdb';
import { useState } from 'react';
import DeletePopup from './DeletePopup';
import AddForm from './AddForm';

type DeleteItem = {
	productName: string;
	index: number;
};

export default function DetailsListEdit() {
	const { checkedArea, addNewActive, setAddNewActive, setEditActive } =
		useAppContext();

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
		setAddNewActive(true);
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

	const handleFocus = (e: any) => {
		e.target.select();
	};

	return (
		<>
			{deletePopupActive && (
				<DeletePopup deletedItem={deletedItem} deletePopup={deletePopup} />
			)}

			{addNewActive && <AddForm />}

			<form
				className='w-full flex flex-wrap justify-between'
				onSubmit={handleSubmit}>
				<button
					className='basis-full bg-orange-600 hover:bg-orange-500 text-white font-bold py-2 px-4 mb-4 rounded duration-100'
					onClick={() => setEditActive(false)}>
					ANULUJ
				</button>
				<button
					type='button'
					className='basis-[48%] bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 rounded'
					onClick={handleAddNew}>
					DODAJ NOWY
				</button>
				<button
					type='submit'
					className='basis-[48%] bg-red-700 hover:bg-red-600 text-white font-bold py-2 rounded'>
					ZATWIERDŹ ZMIANY
				</button>
				<table className='w-full mt-4  table-auto'>
					<tbody>
						{products.map((product, index) => (
							<tr key={index} className=''>
								<td className='border py-1 px-2 w-[60%]'>
									<input
										type='text'
										value={product.name}
										className='w-full outline-none'
										onChange={(e) => handleChange(e, index, 'name')}
										onFocus={handleFocus}
									/>
								</td>
								<td className='border py-1 px-2 w-[15%]'>
									<input
										type='number'
										value={product.amount}
										className='w-full outline-none'
										onChange={(e) => handleChange(e, index, 'amount')}
										onFocus={handleFocus}
									/>
								</td>
								<td className='border py-1 px-2 w-[15%] font-semibold text-red-900'>
									<input
										type='number'
										value={product.level}
										className='w-full outline-none font-semibold text-red-900'
										onChange={(e) => handleChange(e, index, 'level')}
										onFocus={handleFocus}
									/>
								</td>
								<td className='border w-[10%] font-semibold bg-red-700 hover:bg-red-600'>
									<button
										type='button'
										className='font-bold w-full h-[100%] px-2 text-white '
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
