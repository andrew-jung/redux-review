import { createApi, fetchBaseQuery } from '@rtk-incubator/rtk-query/react';

export const pokemonApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
    endpoints: (builder) => ({
      getPokemonById: builder.query({
        query: (id: number) => `pokemon/${id}`,
      }),
    }),
  });

  export const { useGetPokemonByIdQuery } = pokemonApi;
