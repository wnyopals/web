import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { listing, listingRequest } from "../../../types/Listing";
import { successAuth } from "../../../types/Users";
import {
  CurrentUser,
  SignInRequest,
  SignUpRequest,
} from "../../../types/Users";
import { Attribute } from "../../../types/Attributes";

import { setAuthToken } from "../auth";

export const listingsApi = createApi({
  reducerPath: "listingsAPI",
  baseQuery: fetchBaseQuery({
    // baseUrl: "http://localhost:8080/api",
    baseUrl: "https://web-main.onrender.com/api"
  }),
  tagTypes: ["Listing", "Attributes", "Authentication", "User"],
  endpoints: (builder) => ({
    getAllListings: builder.query<listing[], void>({
      query: () => "listing",
      providesTags: ["Listing"],
    }),
    getListingByTitle: builder.query<listing[], string>({
      query: (title) => `listing?title=${title}`,
      providesTags: ["Listing"],
    }),
    getListingById: builder.query<listing, number>({
      query: (id) => `listing/${id}`,
      providesTags: ["Listing"],
    }),
    addListing: builder.mutation<listing, listingRequest>({
      query: (newListing) => ({
        url: "/listing",
        method: "POST",
        body: newListing,
      }),
      invalidatesTags: ["Listing"],
    }),
    updateListing: builder.mutation<listing, listingRequest>({
      query: (updatedListing) => ({
        url: `/listing/${updatedListing?.id}`,
        method: "PUT",
        body: updatedListing,
      }),
      invalidatesTags: ["Listing"],
    }),
    deleteListing: builder.mutation<number, number>({
      query: (listingId) => ({
        url: `/listing/${listingId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Listing"],
    }),
    getBrightnesses: builder.query<Attribute[], void>({
      query: () => `attributes/brightnesses`,
      providesTags: ["Attributes"],
    }),
    getCuts: builder.query<Attribute[], void>({
      query: () => `attributes/cuts`,
      providesTags: ["Attributes"],
    }),
    getListingStatuses: builder.query<Attribute[], void>({
      query: () => `attributes/listingstatuses`,
      providesTags: ["Attributes"],
    }),
    getOpalTypes: builder.query<Attribute[], void>({
      query: () => `attributes/opaltypes`,
      providesTags: ["Attributes"],
    }),
    getBodyTones: builder.query<Attribute[], void>({
      query: () => `attributes/bodytones`,
      providesTags: ["Attributes"],
    }),
    getDomes: builder.query<Attribute[], void>({
      query: () => `attributes/domes`,
      providesTags: ["Attributes"],
    }),
    getOrigins: builder.query<Attribute[], void>({
      query: () => `attributes/origins`,
      providesTags: ["Attributes"],
    }),
    getColors: builder.query<Attribute[], void>({
      query: () => `attributes/colors`,
      providesTags: ["Attributes"],
    }),
    getPatterns: builder.query<Attribute[], void>({
      query: () => `attributes/patterns`,
      providesTags: ["Attributes"],
    }),
    getUser: builder.query<number, number>({
      query: (id) => `users/${id}`,
      providesTags: ["User"],
    }),
    //sign up
    addUser: builder.mutation<CurrentUser, SignUpRequest>({
      query: (newUser) => ({
        url: "/auth/signup",
        method: "POST",
        body: newUser,
      }),
      invalidatesTags: ["User"],
    }),
    //general update
    updateUser: builder.mutation<CurrentUser, CurrentUser>({
      query: (currentUser) => ({
        url: `user/${currentUser.id}`,
        method: "PUT",
        body: currentUser,
      }),
    }),
    //sets the user to "deleted"
    deleteUser: builder.mutation<number, number>({
      query: (currentUserId) => ({
        url: `user/${currentUserId}`,
        method: "DELETE",
        body: currentUserId,
      }),
    }),
    //sign in
    signInUser: builder.mutation<successAuth, SignInRequest>({
      query: (credentials) => ({
        url: '/auth',
        method: 'POST',
        body: credentials,
      }),
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;
          dispatch(setAuthToken(data.accessToken));
        } catch(error) {
          dispatch(setAuthToken(null));
        }
      },
    }),
    /**
     * post username/email and password to receive both an access token and refresh token. refresh token
     *      should be put in localstorage or cookies?
     */
  }),
});

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
  useGetPatternsQuery,
  useAddListingMutation,
  useUpdateListingMutation,
  useDeleteListingMutation,
  useSignInUserMutation,
  useAddUserMutation
} = listingsApi;
