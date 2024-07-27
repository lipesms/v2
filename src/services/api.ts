import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {
  AboutMe,
  Apresentation,
  Contact,
  Experiences,
  Project,
  Skills
} from '../types'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://lipesms.github.io/v2//src/data'
  }),
  endpoints: (builder) => ({
    getApresentationData: builder.query<Apresentation, void>({
      query: () => '/apresentation.json'
    }),
    getAboutMeData: builder.query<AboutMe, void>({
      query: () => '/aboutMe.json'
    }),
    getSkillsData: builder.query<Skills, void>({
      query: () => '/skills.json'
    }),
    getExperiencesData: builder.query<Experiences, void>({
      query: () => '/experiences.json'
    }),
    getProjectsData: builder.query<Project[], void>({
      query: () => '/projects.json'
    }),
    getContactsData: builder.query<Contact[], void>({
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
