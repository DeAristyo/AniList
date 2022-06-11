import React from 'react';

interface props {
	children: any;
}

const ScreenContext = React.createContext({
	type: 'desktop',
});

export const ScreenProvider: React.FC<props> = ({ children }) => {
	const [screenType, setScreenType] = React.useState('desktop');

	React.useEffect(() => {
		const isMobileUserAgent =
			/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
				window.navigator.userAgent
			);
		setScreenType(isMobileUserAgent ? 'mobile' : 'desktop');
	}, []);

	const value = { type: screenType };

	return (
		<ScreenContext.Provider value={value}>{children}</ScreenContext.Provider>
	);
};

export const useScreenType = () => {
	const context = React.useContext(ScreenContext);
	return context;
};
