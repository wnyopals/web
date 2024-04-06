import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const listingsApi = createApi({
    reducerPath: "listingsAPI",
    baseQuery: fetchBaseQuery({
        // baseUrl: "http://localhost:8080/api"
        baseUrl: "https://web-main.onrender.com/api"
    }),
    endpoints: (builder) => ({
        getAllListings: builder.query({
            query: () => "listing"
        }),
        getListingByTitle: builder.query({
            query: (title) => `listing?title=${title}` 
        }),
        getListingById: builder.query({
            query: (id) => `listing/${id}`
        })
    })
})

export const {
    useGetAllListingsQuery,
    useGetListingByTitleQuery,
    useGetListingByIdQuery,
} = listingsApi