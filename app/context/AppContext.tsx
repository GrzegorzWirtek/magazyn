'use client';
import { createContext, useContext, useState } from 'react';
import { Dispatch, SetStateAction } from 'react';

interface ContextProps {
	checked: number[];
	setChecked: Dispatch<SetStateAction<number[]>>;
	searchValue: string;
	setSearchValue: Dispatch<SetStateAction<string>>;
	checkedArea: null | number;
	setCheckedArea: Dispatch<SetStateAction<null | number>>;
}

const initialState = {
	checked: [],
	setChecked: () => {},
	searchValue: '',
	setSearchValue: () => {},
	checkedArea: null,
	setCheckedArea: () => {},
};

const AppContext = createContext<ContextProps>(initialState);

export const AppContextProvider = ({
	children,
}: React.PropsWithChildren<{}>) => {
	const [checked, setChecked] = useState<number[]>([]);
	const [searchValue, setSearchValue] = useState<string>('');
	const [checkedArea, setCheckedArea] = useState<null | number>(null);

	return (
		<AppContext.Provider
			value={{
				checked,
				setChecked,
				searchValue,
				setSearchValue,
				checkedArea,
				setCheckedArea,
			}}>
			{children}
		</AppContext.Provider>
	);
};
export const useAppContext = () => useContext(AppContext);
