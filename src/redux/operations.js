import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const carsApi = createApi({
  reducerPath: 'carsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://65e832be4bb72f0a9c4e8ae8.mockapi.io/',
  }),
  endpoints: (builder) => ({
    getAdverts: builder.query({
      query: () => `advert`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAdvertsQuery } = carsApi;
