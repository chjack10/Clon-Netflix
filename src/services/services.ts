import {process} from './types'
import axios from "axios";

// const API_KEY = process.env.API_KEY;
const API_KEY: string = 'c1734bb6aa9811b97528c7f3ea31e0e9'

export const APItmdb = {
    baseUrl: "https://api.themoviedb.org/3",
    entity: {
      topRatedMovies: "/movie/top_rated",
      topRatedTv: "/tv/top_rated",
      popularMovies: "/movie/popular",
      popularTv: "/tv/popular",
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

export const tryGetPopularMovies = async (page = 1) => {
  try {
    const res = await axios(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
    );
    return res.data.results;
  } catch (error) {
    return error;
  }
};

export const apiBuilder = {
  tryGet: async (entity, lang = "es", page = 1) => {
    const url = `${APItmdb.baseUrl}${APItmdb.entity[entity]}${API_KEY}${APItmdb.language[lang]}${APItmdb.pagination}${page}`;
    try {
      const res = await axios(url);
      return res.data.results;
    } catch (error) {
      return error;
    }
  },
  tryGetById: async (entity, id, lang = "es") => {
    const url = `${APItmdb.baseUrl}${APItmdb.entity[entity]}/${id}${API_KEY}${APItmdb.language[lang]}`;
    try {
      const res = await axios(url);
      return res;
    } catch (error) {
      return error;
    }
  },
  tryGetPoster: (path, quality = apiQuality.posterLarge) => {
    return `${APItmdb.imageUrl}${APItmdb.quality[quality]}${path}`;
  },
};

console.log(tryGetPopularMovies())