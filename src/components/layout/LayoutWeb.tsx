import { css } from '@emotion/react';

const desktopContentWrapper = css`
	padding: 20px 10vw;
`;

export default function LayoutWeb({ children }: any) {
	return <div className={`${desktopContentWrapper}`}>{children}</div>;
}
