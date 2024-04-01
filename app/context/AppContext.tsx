'use client';
import { createContext, useContext, useState } from 'react';
import { Dispatch, SetStateAction } from 'react';

interface ContextProps {
	id: number | null;
	setId: Dispatch<SetStateAction<number | null>>;
}

const initialState = {
	id: null,
	setId: () => {},
};

const AppContext = createContext<ContextProps>(initialState);

export const AppContextProvider = ({
	children,
}: React.PropsWithChildren<{}>) => {
	const [id, setId] = useState<number | null>(null);

	return (
		<AppContext.Provider
			value={{
				id,
				setId,
			}}>
			{children}
		</AppContext.Provider>
	);
};
export const useAppContext = () => useContext(AppContext);
