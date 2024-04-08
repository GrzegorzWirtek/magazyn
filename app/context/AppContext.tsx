'use client';
import { createContext, useContext, useState } from 'react';
import { Dispatch, SetStateAction } from 'react';

interface ContextProps {
	checked: number[];
	setChecked: Dispatch<SetStateAction<number[]>>;
	searchValue: string;
	setSearchValue: Dispatch<SetStateAction<string>>;
}

const initialState = {
	checked: [],
	setChecked: () => {},
	searchValue: '',
	setSearchValue: () => {},
};

const AppContext = createContext<ContextProps>(initialState);

export const AppContextProvider = ({
	children,
}: React.PropsWithChildren<{}>) => {
	const [checked, setChecked] = useState<number[]>([]);
	const [searchValue, setSearchValue] = useState<string>('');

	return (
		<AppContext.Provider
			value={{
				checked,
				setChecked,
				searchValue,
				setSearchValue,
			}}>
			{children}
		</AppContext.Provider>
	);
};
export const useAppContext = () => useContext(AppContext);
