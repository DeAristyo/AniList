import Head from 'next/head';
import '../styles/globals.css';

import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../graphql/client';

function AniListApp({ Component, pageProps }: AppProps) {
	const apolloClient = useApollo(pageProps.initialApolloState);
	return (
		<ApolloProvider client={apolloClient}>
			<Head>
				<meta charSet='utf-8' />
				<meta httpEquiv='X-UA-Compatible' content='IE=edge' />
				<meta
					name='viewport'
					content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no'
				/>
				<meta
					name='description'
					content='Anime List WebSite. Dimas Aristyo Rahadian'
				/>
				<meta name='keywords' content='AnimeList, AniList, aniListApi' />
				<title>Anime List</title>
				<link rel='manifest' href='/manifest.json' />
			</Head>
			<Component {...pageProps} />
		</ApolloProvider>
	);
}

export default AniListApp;
