'use client';
import { createContext, useContext, useState } from 'react';
import { Dispatch, SetStateAction } from 'react';

interface ContextProps {
	checked: number[];
	setChecked: Dispatch<SetStateAction<number[]>>;
}

const initialState = {
	checked: [],
	setChecked: () => {},
};

const AppContext = createContext<ContextProps>(initialState);

export const AppContextProvider = ({
	children,
}: React.PropsWithChildren<{}>) => {
	const [checked, setChecked] = useState<number[]>([]);

	return (
		<AppContext.Provider
			value={{
				checked,
				setChecked,
			}}>
			{children}
		</AppContext.Provider>
	);
};
export const useAppContext = () => useContext(AppContext);
