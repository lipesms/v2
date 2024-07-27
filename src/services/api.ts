import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { PortfolioProps } from '../types'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://lipesms.github.io/v2//src/data.json'
  }),
  endpoints: (builder) => ({
    getProfileData: builder.query<PortfolioProps, void>({
      query: () => ''
    })
  })
})

export const { useGetProfileDataQuery } = api

export default api
