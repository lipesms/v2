import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { PortfolioProps } from '../types'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://lipesms.github.io/v2//src/data'
  }),
  endpoints: (builder) => ({
    getApresentationData: builder.query<PortfolioProps, void>({
      query: () => '/apresentation.json'
    }),
    getAboutMeData: builder.query<PortfolioProps, void>({
      query: () => '/aboutMe.json'
    }),
    getSkillsData: builder.query<PortfolioProps, void>({
      query: () => '/skills.json'
    }),
    getExperiencesData: builder.query<PortfolioProps, void>({
      query: () => '/experiences.json'
    }),
    getProjectsData: builder.query<PortfolioProps, void>({
      query: () => '/projects.json'
    }),
    getContactsData: builder.query<PortfolioProps, void>({
      query: () => '/contacts.json'
    })
  })
})

export const {
  useGetApresentationDataQuery,
  useGetAboutMeDataQuery,
  useGetSkillsDataQuery,
  useGetExperiencesDataQuery,
  useGetProjectsDataQuery,
  useGetContactsDataQuery
} = api

export default api
