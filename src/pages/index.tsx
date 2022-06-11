import { useLazyQuery } from '@apollo/client';
import { GET_ANIME_LIST } from '../graphql/queries/AniList';
import { useCallback, useEffect, useState } from 'react';
import { listWrapperClass } from '../styles/emotions/list';
import dynamic from 'next/dynamic';

import MainLayout from '../components/layout/LayoutMain';
import { usePokemon } from '../context/pokemonContext';
import {
	contentWrapperStyle,
	marginTop50Class,
} from '../styles/emotions/content';
import { initializeApollo } from '../graphql/client';
import { useScreenType } from '../context/screenContext';
import DesktopNavBar from '../components/nav/DesktopNav';
import InfiniteScroll from 'react-infinite-scroll-component';

const MobileNavbar = dynamic(() => import('../components/nav/MobileNav'));
const ShimmerList = dynamic(() => import('../components/list/ShimmerListItem'));
const PokemonListItem = dynamic(
	() => import('../components/list/AnimeListItem')
);

export default function Home() {
	const { ownedPokemon } = usePokemon();
	const [pokemons, setPokemons] = useState([]);
	const [offset, setOffset] = useState(0);
	const { type } = useScreenType();

	const [fetchData] = useLazyQuery(GET_ANIME_LIST, {
		onError: () => {},
		onCompleted: (res) => {
			if (res.pokemons) {
				setPokemons((prev) => [...prev, ...res.pokemons.results]);
				setOffset((prev) => prev + 12);
			}
		},
	});

	const fetchNext = () => {
		fetchData({
			variables: {
				offset,
				limit: 12,
			},
		});
	};

	useEffect(() => {
		fetchData({
			variables: {
				offset: 0,
				limit: 12,
			},
		});
	}, []);

	const getTotalOwned = useCallback(
		(name: string): number => {
			const owned = ownedPokemon.filter((pk: any) => pk.name === name);
			return owned.length;
		},
		[ownedPokemon]
	);

	return (
		<MainLayout>
			<div data-testid='home-page' className={marginTop50Class}>
				{type === 'mobile' ? <LogoNavbar /> : <DesktopNavBar />}
				<InfiniteScroll
					dataLength={pokemons.length}
					hasMore={true}
					loader={<ShimmerList />} // unable to do test
					next={fetchNext}
					className={contentWrapperStyle}>
					<div className={listWrapperClass[type]}>
						{pokemons.map((item) => (
							<PokemonListItem
								extra={`Owned: ${getTotalOwned(item.name)}`}
								key={item.id}
								pokemon={item}
							/>
						))}
					</div>
				</InfiniteScroll>
			</div>
		</MainLayout>
	);
}

export async function getServerSideProps() {
	const apolloClient = initializeApollo();
	await apolloClient.query({
		query: GET_ANIME_LIST,
		variables: {
			offset: 0,
			limit: 12,
		},
	});

	return {
		props: {
			initialApolloState: apolloClient.cache.extract(),
		},
	};
}
