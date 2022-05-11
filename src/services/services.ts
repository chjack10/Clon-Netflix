import {process} from './types'

const API_KEY = process.env.API_KEY;

export const API = {
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

