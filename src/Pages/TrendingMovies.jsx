import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useState } from 'react'
import { useQueryHook } from '../components/useQueryHook'
import Card from '../components/card';
import MovieDetailsModal from '../components/MovieDetailsModal';
import './css.css'


function TrendingMovies() {

    const [search, setSearch] = useState('')



    const {
        isLoading,
        error,
        data,
        isError,
        isFetching
    } = useQueryHook();

    if (isLoading) {
        return <h1 className='st section'>Loading . . . </h1>
    }
    if (isError) {
        return <h1 className='st section'>{error.message}</h1>
    }

    if (isFetching) {
        return <h1 className='section st'>Fetching . . . </h1>

    }
    // for filter movies 
    const filterMovies = data.filter((movie) =>
        movie.name.toLowerCase().includes(search.toLocaleLowerCase()))

    // average movies rating
    const avgRating = filterMovies.length > 0 ?
        filterMovies.reduce((sum, movie) =>
            sum + (movie.rating.average || 0), 0
        ) / data.length : null

    // top movies rating

    const highiestRating = filterMovies.length > 0 ?

        filterMovies.reduce((max, movie) =>
            (movie.rating?.average) > (max.rating?.average) ? movie : max
        )
        : null
    console.log(data.length)
    return (
        <>
            <MovieDetailsModal />
            <div className="text-2xl font-bold text-center mt-35 bg-blue-600 w-fit mx-auto py-2 px-4 rounded text-white my-0">Trending Movies</div>

            <input
                type="text"
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search Movies..."
                className="w-full max-w-md mx-auto block m-8 px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 text-gray-700"
            />

           
            {/* ------------------------------------------------------------------------------------------------------------------------- */}
            <div className="card flex flex-wrap justify-center gap-4 mt-10 mb-20">


                {filterMovies.length === 0 ? (
                    <h1 className='text-center st text-2xl font-bold mt-10'>
                        No Movies Found
                    </h1>
                ) :

                    filterMovies?.map((movie) => (
                        <Card
                            key={movie.id}
                            id={movie.id}
                            imgSrc={movie.image?.medium}
                            name={movie.name}
                            rating={movie.rating?.average} />
                    ))
                }
            </div>
 {/* ------------------------------------------------------------------------------------------------------------------------- */}

            <div className='flex flex-wrap gap-10 md:flex-row justify-around m-10   '>

                <div className="bg-gray-950 totalMovies h-fit py-5 shadow-[0_0_15px_rgba(59,130,246,0.4)] px-5 py-0 border-1 border-gray-400 rounded-lg text-white  relative items-center justify-center mx-auto    text-center ">
                    <p className='font-semibold mt-2 text-2xl px-5  py-2 text-white bg-blue-500 hover:bg-blue-700 transition duration-300 rounded-xl  '>{data.length}</p>
                    <h1 className="text-2xl font-bold mt-3">Total Trending</h1>
                </div>

                <div className="h-fit py-5 bg-gray-950 totalMovies shadow-[0_0_15px_rgba(59,130,246,0.4)] px-5 py-0 border-1 border-gray-400 rounded-lg text-white  relative items-center justify-center mx-auto    text-center ">
                    <p className='font-semibold mt-2 text-2xl px-5  py-2 text-white bg-blue-500 hover:bg-blue-700 transition duration-300 rounded-xl  '>{avgRating?.toFixed(1) ?? "0.0"}</p>
                    <h1 className="text-2xl font-bold mt-3">Avg Rating</h1>
                </div>

                <div className="totalMovies h-fit py-5 bg-gray-950 shadow-[0_0_15px_rgba(59,130,246,0.4)] px-5 py-0 border-1 border-gray-400 rounded-lg text-white  relative items-center justify-center mx-auto    text-center ">
                    <p className='font-semibold mt-2 text-2xl px-5  py-2 text-white bg-blue-500 hover:bg-blue-700 transition duration-300 rounded-xl  '>{highiestRating?.rating?.average ?? "N/A"}</p>
                    <h1 className="text-2xl font-bold mt-3">Highiest Rating</h1>
                </div>





            </div>
        </>
    )
}

export default TrendingMovies
