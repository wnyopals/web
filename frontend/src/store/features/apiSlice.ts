import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

import { listing } from "../../../types/Listing"

export const listingsApi = createApi({
    reducerPath: "listingsAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8080/api"
        // baseUrl: "https://web-main.onrender.com/api"
    }),
    endpoints: (builder) => ({
        getAllListings: builder.query<listing[], void>({
            query: () => "listing"
        }),
        getListingByTitle: builder.query<listing[], string>({
            query: (title) => `listing?title=${title}` 
        }),
        getListingById: builder.query<listing[], number>({
            query: (id) => `listing/${id}`
        }),
        getBrightnesses: builder.query({
            query: () => `attributes/brightnesses`
        }),
        getCuts: builder.query({
            query: () => `attributes/cuts`
        }),
        getListingStatuses: builder.query({
            query: () => `attributes/listingstatuses`
        }),
        getOpalTypes: builder.query({
            query: () => `attributes/opaltypes`
        }),
        getBodyTones: builder.query({
            query: () => `attributes/bodytones`
        }),
        getDomes: builder.query({
            query: () => `attributes/domes`
        }),
        getOrigins: builder.query({
            query: () => `attributes/origins`
        }),
        getColors: builder.query({
            query: () => `attributes/colors`
        }),
        getPatterns: builder.query({
            query: () => `attributes/patterns`
        }),

    })
})

export const {
    useGetAllListingsQuery,
    useGetListingByTitleQuery,
    useGetListingByIdQuery,
    useGetBrightnessesQuery,
    useGetCutsQuery,
    useGetListingStatusesQuery,
    useGetOpalTypesQuery,
    useGetBodyTonesQuery,
    useGetDomesQuery,
    useGetOriginsQuery,
    useGetColorsQuery,
    useGetPatternsQuery
} = listingsApi