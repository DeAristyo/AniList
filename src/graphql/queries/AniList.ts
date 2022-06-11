import { gql } from '@apollo/client';

export const GET_ANIME_LIST = gql`
    query GET_ANIME_LIST($limit: Int!, $offset: Int!){
        Media(limit: $limit, offset: $offset){
            results {
                name
                coverImage{

                }
                id
            }
        }
    }
`;

export const GET_POKEMON_DETAIL = gql`
	query GET_POKEMON_DETAIL($name: String!) {
		pokemon(name: $name) {
			name
			height
			weight
			types {
				type {
					name
				}
			}
			abilities {
				ability {
					name
				}
			}
			moves {
				move {
					name
				}
			}
		}
	}
`;

export const GET_MOVE_DETAIL = gql`
	query GET_MOVE_DETAIL($name: String!) {
		move(move: $name) {
			response
		}
	}
`;

export const GET_ABILITY_DETAIL = gql`
	query GET_ABILITY_DETAIL($name: String!) {
		ability(ability: $name) {
			response
		}
	}
`;
