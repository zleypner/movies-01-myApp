import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { get } from "../utils/httpClient";
import MovieCard from "./MovieCard";
import styles from "./MoviesGrid.module.css";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

function useQuery(){
  return new URLSearchParams(useLocation().search);
}

function MoviesGrid({search}) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading ] = useState(true);
  const [page, setPage] = useState(1);
  const [hasmore, setHasmore] = useState(true);

  console.log(search);
  /*const location = useLocation();
  console.log(location.search); //This hook returns the current location object. This can be useful if you'd like to perform some side effect whenever the current location changes.
*/

  useEffect(() => {
    setIsLoading(true);
    const searchURL = search 
    ? "/search/movie?query=" + search + "&page=" + page
    : "/discover/movie?page="+ page;
    get(searchURL).then((data) => {
      setMovies((prevMovies) => prevMovies.concat(data.results));
      setHasmore(data.page < data.total_pages);
      setIsLoading(false);
    });
  }, [search, page]); // if the parameter search changes it render again

  
  return (
    <InfiniteScroll 
      dataLength={movies.length}
      hasMore={true}
      next={()=> setPage((prevPage) => prevPage +1)}
      loader={<Spinner/>} >
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
    </InfiniteScroll>
  );
  

}

export default MoviesGrid;