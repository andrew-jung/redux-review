import { createApi, fetchBaseQuery } from '@rtk-incubator/rtk-query/react';

export const pokemonApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
    entityTypes: ["Pokemon"],
    endpoints: (builder) => ({
      getPokemonById: builder.query({
        query: (id: number) => `pokemon/${id}`,
      }),
      createPokemon: builder.mutation({
        query(body) {
          return {
            url: 'pokemon',
            method: 'POST',
            body
          }
        },
        invalidates: ["Pokemon"]
      })
    }),
  });

  export const { useGetPokemonByIdQuery, useCreatePokemonMutation } = pokemonApi;
