import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryMeta,
} from "@reduxjs/toolkit/query/react";

import { API_URL } from "@env";

import {
  ErrorResponse,
  QuestionaryResponse,
} from "@source/@types";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}/api`,
    prepareHeaders: async (headers) => {
      return headers;
    },
  }) as BaseQueryFn<
    string | FetchArgs,
    unknown,
    ErrorResponse,
    object,
    FetchBaseQueryMeta
  >,
  tagTypes: ["User"],
  endpoints: (builder) => ({
    // ** Account
    Fans: builder.mutation<QuestionaryResponse, FormData>({
      query: (formData) => ({
        url: "/Fans",
        method: "POST",
        body: formData,
      }),
    }),
    // ** Account
    RedditData: builder.query<RedditDataResponse, { id: number }>({
      query: ({ id }) => ({
        url: `/reddit/data?id=${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  // ** Account
  useFansMutation,
  useRedditDataQuery
} = api;
