// const API_KEY = 'e4f6a126a698a1313c28d052471833ff';
const ACCESS_TOKEN = `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNGY2YTEyNmE2OThhMTMxM2MyOGQwNTI0NzE4MzNmZiIsInN1YiI6IjY2MzI1MGQyNjYxMWI0MDEyNzY1ZWM1YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TEQ73aIxy_q4xe4SdEPvZY362OEHGIAyv637YhSCB7E`;
const BASE_PATH = 'https://api.themoviedb.org/3';

interface IMovie {
  id: number;
  backdrop_path: string;
  poster_path: string;
  title: string;
  overview: string;
}

export interface IGetMoviesResult {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
};

export const getMovies = async () => {
  return fetch(
    `${BASE_PATH}/movie/now_playing?language=en-US&page=1&region=kr`,
    options
  ).then((res) => res.json());
};
