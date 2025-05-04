import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryMeta,
} from "@reduxjs/toolkit/query/react";

// import { API_URL } from "@env";
const API_URL = "http://192.168.15.6/api";

import { RootState } from ".";

import {
  AccountDetailsResponse,
  DefaultResponse,
  ErrorResponse,
  ForgotPasswordChangePasswordRequest,
  ForgotPasswordSendCodeRequest,
  ForgotPasswordValidateCodeRequest,
  SignInRequest,
  SignInResponse,
} from "@source/@types";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}`,
    prepareHeaders: async (headers, { getState }) => {
      const token = (getState() as RootState)?.auth.access_token;

      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

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
    // ** Auth
    signIn: builder.mutation<SignInResponse, SignInRequest>({
      query: (body) => ({
        url: "/auth/sign-in",
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"],
    }),
    signOut: builder.mutation<void, void>({
      query: () => ({
        url: "/auth/sign-out",
        method: "POST",
      }),
    }),
    forgotPasswordSendCode: builder.mutation<
      DefaultResponse,
      ForgotPasswordSendCodeRequest
    >({
      query: (body) => ({
        url: "/auth/forgot-password/send-code",
        method: "POST",
        body,
      }),
    }),
    forgotPasswordValidateCode: builder.mutation<
      DefaultResponse,
      ForgotPasswordValidateCodeRequest
    >({
      query: (body) => ({
        url: "/auth/forgot-password/validate-code",
        method: "POST",
        body,
      }),
    }),
    forgotPasswordChangePassword: builder.mutation<
      DefaultResponse,
      ForgotPasswordChangePasswordRequest
    >({
      query: (body) => ({
        url: "/auth/forgot-password/change-password",
        method: "POST",
        body,
      }),
    }),
    // ** Account
    accountDetails: builder.query<AccountDetailsResponse, void>({
      query: () => ({
        url: "/account/me",
        method: "GET",
      }),
      providesTags: ["User"],
    }),
  }),
});

export const {
  // ** Auth
  useSignInMutation,
  useSignOutMutation,
  useForgotPasswordChangePasswordMutation,
  useForgotPasswordSendCodeMutation,
  useForgotPasswordValidateCodeMutation,
  // ** Account
  useLazyAccountDetailsQuery,
} = api;
