import {process} from './types'
import axios from "axios";
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Tmdb, TmdbPopularTV } from './types'


// const API_KEY = process.env.API_KEY;
const API_KEY: string = 'c1734bb6aa9811b97528c7f3ea31e0e9'

export const APItmdb = {
    baseUrl: "https://api.themoviedb.org/3",
    entity: {
      popularMovies: "/movie/popular",
      topRatedMovies: "/movie/top_rated",
      latestMovies: "/movie/latest",
      popularTv: "/tv/popular",
      topRatedTv: "/tv/top_rated",
      latestTv: "/tv/latest",
    },
    language: {
      en: "&language=en-US",
      es: "&language=es-ES",
    },
    pagination: "&page=",
    imageUrl: "https://image.tmdb.org/t/p",
    quality: {
      posterSmall: "/w200",
      posterMedium: "/w300",
      posterLarge: "/w500",
      backdropSmall: "/w300",
      backdropMedium: "/w780",
      backdropLarge: "/w1280",
    },
};

export const apiQuality = {
  posterSmall: "posterSmall",
  posterMedium: "posterMedium",
  posterLarge: "posterLarge",
  backdropSmall: "backdropSmall",
  backdropMedium: "backdropMedium",
  backdropLarge: "backdropLarge",
};

export const apiEntity = {
  topRatedMovies: "topRatedMovies",
  popularMovies: "popularMovies",
  topRatedTv: "topRatedTv",
  popularTv: "popularTv",
  movieById: "movieById",
  tvById: "tvById",
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
  tryGet: async (entity, lang = "es", page = 1) => {
    const url = `${APItmdb.baseUrl}${APItmdb.entity[entity]}?api_key=${API_KEY}${APItmdb.language[lang]}${APItmdb.pagination}${page}`;
    try {
      const res = await axios(url);
      return res.data.results;
    } catch (error) {
      return [];
    }
  },
  tryGetById: async (entity, id, lang = "es") => {
    const url = `${APItmdb.baseUrl}${APItmdb.entity[entity]}/${id}?api_key=${API_KEY}${APItmdb.language[lang]}`;
    try {
      const res = await axios(url);
      return res;
    } catch (error) {
      return [];
    }
  },
  tryGetImg: (path, quality = apiQuality.posterLarge) => {
    return `${APItmdb.imageUrl}${APItmdb.quality[quality]}${path}`;
  },
};

// Define a service using a base URL and expected endpoints
export const tmdbApi = createApi({
  reducerPath: 'tmdbApi',
  baseQuery: fetchBaseQuery({ baseUrl: APItmdb.baseUrl }),
  endpoints: (builder) => ({
    getEntityList: builder.query<Tmdb, string >({
      query: (entity, lang = "en", page = 1) => `${APItmdb.entity[entity]}?api_key=${API_KEY}${APItmdb.language[lang]}${APItmdb.pagination}${page}`,
    }),
    getImg: builder.query<string, string>({
      query: (path, quality = apiQuality.posterLarge) => `${APItmdb.imageUrl}${APItmdb.quality[quality]}${path}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetEntityListQuery, useGetImgQuery } = tmdbApi