type Props = {
	id: number;
	hide: () => void;
};

export default function Details({ id, hide }: Props) {
	return (
		<div
			className='fixed top-[50%] left-[-50%] -translate-y-2/4 translate-x-2/4 w-full h-[200px] bg-green-400'
			onClick={hide}>
			<h2 className='text-center mt-4'>Details: {id}</h2>
		</div>
	);
}
