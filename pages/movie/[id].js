import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Header from "/components/Header";
import Footer from "/components/Footer";

const API_KEY = "e04ef0767144f1d3e5ec3a089f172425";

async function getMovie(movieId) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
  );
  return await res.json();
}

const MoviePage = () => {
  const router = useRouter();
  const { id } = router.query; // Router kancası ile id parametresini al

  //   console.log("ID:", id);

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      if (id) {
        const movieData = await getMovie(id);
        setMovie(movieData);
      }
    };
    fetchMovie();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full h-screen dark:bg-gray-900 bg-indigo-100">
      <Header />
      <div className="p-40 md:pt-10 flex flex-col md:flex-row items-center content-center max-w-7xl mx-auto md:space-x-6">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          width={500}
          height={300}
          className="rounded-2xl"
          style={{
            maxWidth: "100%",
            height: "100%",
          }}
          placeholder="blur"
          blurDataURL="/assets/spinner.svg"
          alt="Movie poster"
        />
        <div className="p-2">
          <h2 className="text-lg mb-3 font-bold">
            {movie.title || movie.name}
          </h2>
          <p className="text-lg mb-3">
            <span className="font-semibold mr-1 dark:text-gray-200">Overview:</span>
            {movie.overview}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1 text-gray-600">
              Date Released:
            </span>
            {movie.release_date || movie.first_air_date}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1 text-gray-600">Rating:</span>
            {movie.vote_count}
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MoviePage;
