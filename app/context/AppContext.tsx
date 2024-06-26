'use client';
import { createContext, useContext, useState } from 'react';
import { Dispatch, SetStateAction } from 'react';

interface ContextProps {
	currentLayout: 'search' | 'edit';
	setCurrentLayout: Dispatch<SetStateAction<'search' | 'edit'>>;
	checked: number[];
	setChecked: Dispatch<SetStateAction<number[]>>;
	searchValue: string;
	setSearchValue: Dispatch<SetStateAction<string>>;
	checkedArea: null | number;
	setCheckedArea: Dispatch<SetStateAction<null | number>>;
	detailsActive: boolean;
	setDetailsActive: Dispatch<SetStateAction<boolean>>;
	editActive: boolean;
	setEditActive: Dispatch<SetStateAction<boolean>>;
	addNewActive: boolean;
	setAddNewActive: Dispatch<SetStateAction<boolean>>;
}

const initialState = {
	currentLayout: 'search' as 'search' | 'edit',
	setCurrentLayout: () => {},
	checked: [],
	setChecked: () => {},
	searchValue: '',
	setSearchValue: () => {},
	checkedArea: null,
	setCheckedArea: () => {},
	detailsActive: false,
	setDetailsActive: () => {},
	editActive: false,
	setEditActive: () => {},
	addNewActive: false,
	setAddNewActive: () => {},
};

const AppContext = createContext<ContextProps>(initialState);

export const AppContextProvider = ({
	children,
}: React.PropsWithChildren<{}>) => {
	const [checked, setChecked] = useState<number[]>([]);
	const [searchValue, setSearchValue] = useState<string>('');
	const [checkedArea, setCheckedArea] = useState<null | number>(null);
	const [detailsActive, setDetailsActive] = useState<boolean>(false);
	const [editActive, setEditActive] = useState(false);
	const [addNewActive, setAddNewActive] = useState(false);
	const [currentLayout, setCurrentLayout] = useState<'search' | 'edit'>(
		'search',
	);

	return (
		<AppContext.Provider
			value={{
				checked,
				setChecked,
				searchValue,
				setSearchValue,
				checkedArea,
				setCheckedArea,
				detailsActive,
				setDetailsActive,
				editActive,
				setEditActive,
				addNewActive,
				setAddNewActive,
				currentLayout,
				setCurrentLayout,
			}}>
			{children}
		</AppContext.Provider>
	);
};
export const useAppContext = () => useContext(AppContext);
