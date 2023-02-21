import { useEffect, useState } from "react";
import Seo from "../components/Seo";

const API_KEY = "249aafa794cc04e94eef1cf2be0a7589"

export default function Home() {
  const [movies, setMovies] = useState()
  useEffect(() => {
    (async () => {
      const { results } = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        )
      ).json()
      setMovies(results)
    })()
  }, [])
  return (
    <div>
      <Seo title="Index" />
      <h1>Hello Next!!!</h1> 
      {!movies && <h4>Loading...</h4>}
      {movies?.map((movie) => (
        <div key={movie.id}>
          <h4>{movie.original_title}</h4>
        </div>
      ))}
    </div>
  )
}