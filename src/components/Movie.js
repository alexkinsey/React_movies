import React from 'react';
import { useParams } from 'react-router-dom';

// CONFIG
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';

// COMPONETS
import Grid from './Grid';
import Spinner from './Spinner';
import BreadCrumb from './BreadCrumb'
import MovieInfo from './MovieInfo';

// HOOK
import { useMovieFetch } from '../hooks/useMovieFetch';

// IMAGE
import NoImage from '../images/no_image.jpg';

const Movie = () => {
  const { id } = useParams();
  const { state: movie, loading, error } = useMovieFetch(id);

  console.log(movie);

  if (loading) return <Spinner />;
  if (error) return <div>Something went wrong...</div>;
  return (
    <>
      <BreadCrumb movieTite={movie.original_title} />
      <MovieInfo movie={movie} />
    </>
  );
};

export default Movie;
