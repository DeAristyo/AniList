import { css } from '@emotion/react';
import BottomNavigation from '../../components/nav/BottomNavigation';

const contentStyle = css`
	padding: 16px;
	width: 100vw;
`;

export default function LayoutMobile({ children }: any) {
	return (
		<div style={{ height: '100%', position: 'relative', maxHeight: '100%' }}>
			<div className={`${contentStyle}`}>{children}</div>
			<BottomNavigation />
		</div>
	);
}
