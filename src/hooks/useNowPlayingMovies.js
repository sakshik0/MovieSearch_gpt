import { useEffect } from "react";
import { useDispatch} from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies=()=>{
     // Fetching Data from TMDB API and update store
  const dispatch=useDispatch();
  const getNowPlayingMovies = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        API_OPTIONS
      );
      const json = await response?.json();
      console.log(json?.results);
      dispatch(addNowPlayingMovies(json?.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

};

export default useNowPlayingMovies;
