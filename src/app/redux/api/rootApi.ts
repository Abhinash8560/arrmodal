import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({baseUrl: "http://test.hellomentor.in/api/"}),
    refetchOnReconnect: true,
    endpoints: _ => ({})
    // Every feature endpoints will be injected to the apiSlice.
})
