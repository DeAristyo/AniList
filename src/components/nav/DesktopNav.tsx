import Image from "next/image";
import Link from "next/link";

import { css } from "@emotion/react";
import { navBarStyle } from "../../styles/emotions/nav";
import { theme } from "../../config/constant";
import { centerContentClass } from "../../styles/emotions/content";

const mainNavBarStyle = css`
    color: white;
    background-color: ${theme};
    justify-content: space-between;
    padding: 0 10vw;
`;


export default function DesktopNavBar() {
    return (
        <nav 
        data-testid="desktop-nav"
        className={`${navBarStyle} ${mainNavBarStyle}`}>
            <Link href="/" passHref>
                <picture>
                    <Image 
                        data-testid="nav-logo"
                        width={120}
                        objectFit="contain"
                        src="/images/pokemon_logo.webp"
                            height={40} alt="Pokemon Logo"/>
                </picture>
            </Link>
        </nav>
    )
}
