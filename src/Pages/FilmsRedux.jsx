import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllMovies } from '../Api/moviesApi'
import Card from '../components/card'
import MovieDetailsModal from '../components/movieDetailsModal'
import './css.css'
function FilmsRedux() {

    const dispatch = useDispatch()
    const movieData = useSelector(state => state.MoviesData.movies)
    const isLoading = useSelector(state => state.MoviesData.isLoading)
    const error = useSelector(state => state.MoviesData.error)
    console.log(movieData)


    useEffect(() => {
        dispatch(getAllMovies("https://api.tvmaze.com/shows"))
    }, [dispatch])
    return (
        <div>
            <MovieDetailsModal />
            <div className="text-2xl w-fit text-center mx-auto font-bold text-center mt-20">Films Page</div>
            <div className="card flex flex-wrap justify-center gap-4 mt-10 mb-20">


                {error !== null ? <h1 className='st mt-20 text-center font-bold text-3xl'>{error}</h1> : null}
                {isLoading ?
                    <h1 className='st mt-20 text-center font-bold text-3xl'>Loading . . .</h1> :
                    (movieData.length >= 1 ?

                        (movieData.map(movie =>
                            <Card
                                key={movie.id}
                                id={movie.id}
                                imgSrc={movie.image?.medium}
                                name={movie.name}
                                rating={movie.rating?.average} />
                        ))
                        :
                        (<h6 className='st mt-20 text-center font-bold text-3xl'>No Data</h6>)
                    )
                }
            </div>

        </div>

    )
}

export default FilmsRedux
// <h6 key={movie.id} className='mt-20 text-center font-bold text-3xl'>{movie.name}</h6>))
// if(error!==null){
//     return <h1 className='mt-20'>{error}</h1>
// }