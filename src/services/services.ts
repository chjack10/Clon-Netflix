import {process} from './types'
import axios from "axios";
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Tmdb from './types'


// const API_KEY = process.env.API_KEY;
const API_KEY: string = 'c1734bb6aa9811b97528c7f3ea31e0e9'

export const APItmdb = {
    baseUrl: "https://api.themoviedb.org/3",
    entity: {
      popularMovies: "/movie/popular/" as string,
      topRatedMovies: "/movie/top_rated/" as string,
      latestMovies: "/movie/latest/" as string,
      popularTv: "/tv/popular/" as string,
      topRatedTv: "/tv/top_rated/" as string,
      latestTv: "/tv/latest/" as string,
    },
    language: {
      en: "&language=en-US" as string,
      es: "&language=es-ES" as string,
    },
    pagination: "&page=" as string,
    imageUrl: "https://image.tmdb.org/t/p" as string,
    quality: {
      posterSmall: "/w200" as string,
      posterMedium: "/w300" as string,
      posterLarge: "/w500" as string,
      backdropSmall: "/w300" as string,
      backdropMedium: "/w780" as string,
      backdropLarge: "/w1280" as string,
    },
};

export const apiQuality = {
  posterSmall: "posterSmall" as string,
  posterMedium: "posterMedium" as string,
  posterLarge: "posterLarge" as string,
  backdropSmall: "backdropSmall" as string,
  backdropMedium: "backdropMedium" as string,
  backdropLarge: "backdropLarge" as string,
};

export const apiEntity = {
  topRatedMovies: "topRatedMovies" as string,
  popularMovies: "popularMovies" as string,
  topRatedTv: "topRatedTv" as string,
  popularTv: "popularTv" as string,
  movieById: "movieById" as string,
  tvById: "tvById" as string,
};

// export const tryGetPopularMovies = async (page = 1) => {
//   try {
//     const res = await axios(
//       `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
//     );
//     return res.data.results;
//   } catch (error) {
//     return error;
//   }
// };

export const apiBuilder = {
  tryGet: async (entity: string, lang: string = "es", page: number = 1) => {
    const url = `${APItmdb.baseUrl}${APItmdb.entity[entity]}?api_key=${API_KEY}${APItmdb.language[lang]}${APItmdb.pagination}${page}`;
    try {
      const res = await axios(url);
      return res.data.results;
    } catch (error) {
      return [];
    }
  },
  tryGetById: async (entity:string, id: string, lang = "es") => {
    const url = `${APItmdb.baseUrl}${APItmdb.entity[entity]}/${id}?api_key=${API_KEY}${APItmdb.language[lang]}`;
    try {
      const res = await axios(url);
      return res;
    } catch (error) {
      return [];
    }
  },
  tryGetImg: (path: any, quality = apiQuality.backdropLarge) => {
    return `${APItmdb.imageUrl}${APItmdb.quality[quality]}${path}`;
  },
};

// Define a service using a base URL and expected endpoints
export const tmdbApi = createApi({
  reducerPath: 'tmdbApi',
  baseQuery: fetchBaseQuery({ baseUrl: APItmdb.baseUrl }),
  endpoints: (builder) => ({
    getEntityList: builder.query<Tmdb, string >({
      query: (entity: string, lang = "en", page = 1) => `${APItmdb.entity[entity]}?api_key=${API_KEY}${APItmdb.language[lang]}${APItmdb.pagination}${page}`,
    }),
    getImg: builder.query<string, string>({
      query: (path, quality = apiQuality.posterLarge) => `${APItmdb.imageUrl}${APItmdb.quality[quality]}${path}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetEntityListQuery, useGetImgQuery } = tmdbApi