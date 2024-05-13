type DeletedItem = {
	deletedItem: { productName: string; index: number };
	deletePopup: (shouldDelete: boolean) => void;
};

export default function DeletePopup({ deletedItem, deletePopup }: DeletedItem) {
	const { productName, index } = deletedItem;

	return (
		<div className='fixed top-0 left-[50%] -translate-x-2/4 w-full max-w-[460px] w-full h-full flex justify-center items-center backdrop-blur'>
			<div className='flex flex-wrap justify-center items-center gap-4 bg-white py-20'>
				<h3 className='basis-full text-center'>
					Czy na pewno chcesz usunąć produkt <strong>{productName}</strong>?
				</h3>
				<button
					className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
					onClick={() => deletePopup(false)}>
					NIE
				</button>
				<button
					className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
					onClick={() => deletePopup(true)}>
					TAK
				</button>
			</div>
		</div>
	);
}
