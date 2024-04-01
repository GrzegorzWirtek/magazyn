import type { Metadata } from 'next';
import './globals.css';
import { AppContextProvider } from './context/AppContext';

export const metadata: Metadata = {
	title: 'Magazyn',
	description: 'Magazyn',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body suppressHydrationWarning={true}>
				<AppContextProvider>{children}</AppContextProvider>
			</body>
		</html>
	);
}
