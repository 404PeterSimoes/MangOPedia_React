import { baseApi } from './baseApi';

export const menuItemsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // create all the endpoints
    getMenuItems: builder.query({
      query: () => '/MenuItem',
      providesTags: ['MenuItem'],
      transformResponse: (response) => {
        return response;
      },
    }),
  }),
});

export const { useGetMenuItemsQuery } = menuItemsApi;
