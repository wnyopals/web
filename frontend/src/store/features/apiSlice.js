import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const listingsApi = createApi({
    reducerPath: "listingsAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8080/api"
    }),
    endpoints: (builder) => ({
        getAllListings: builder.query({
            query: () => "listing"
        }),
        getListingByTitle: builder.query({
            query: (title) => `listing?title=${title}` 
        })
    })
})

export const {
    useGetAllListingsQuery,
    useGetListingByTitleQuery
} = listingsApi