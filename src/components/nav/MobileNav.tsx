import { css } from '@emotion/react';
import { theme } from '../../config/constant';
import { navBarStyle } from '../../styles/emotions/nav';
import Image from 'next/image';

const mobileNavBarStyle = css`
	color: white;
	background-color: ${theme};
	justify-content: center;
`;

export default function MobileNavbar({ label }: { label?: string }) {
	return (
		<nav
			data-testid='logo-navbar'
			className={`${navBarStyle} ${mobileNavBarStyle}`}>
			{label ? (
				<span>{label}</span>
			) : (
				<picture>
					<Image
						data-testid='nav-logo'
						width={120}
						objectFit='contain'
						src='/images/anilistlogo.svg'
						height={40}
						alt='Anilist Logo'
					/>
				</picture>
			)}
		</nav>
	);
}
