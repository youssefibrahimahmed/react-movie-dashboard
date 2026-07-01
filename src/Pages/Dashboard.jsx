    import axios from 'axios'
    import React, { useEffect, useState } from 'react'
    import Card from '../components/card'
    import { useDispatch, useSelector } from 'react-redux'
    import { getAllMovies } from '../Api/moviesApi'
import { getMovieDetails } from '../Api/moviesApi'
import MovieDetailsModal from '../components/movieDetailsModal'
    function Dashboard() {

        const dispatch = useDispatch()
        const username = useSelector(state => state.loginData.username)
        const isLoggedIn = useSelector(state => state.loginData.isLoggedIn)
        const error = useSelector(state => state.MoviesData.error)
        const movieData = useSelector(state => state.MoviesData.movies)
        const isLoading = useSelector(state => state.MoviesData.isLoading)
if (isLoading) {
    return <h1 className="st text-center mt-20">Loading...</h1>;
}

if (error) {
    return <h1 className="st text-center mt-20">{error}</h1>;
}
        useEffect(()=>{
            if(movieData.length===0){
                dispatch(getAllMovies("https://api.tvmaze.com/shows"))
            }
        },[dispatch,movieData.length])
        
        const topMovie = movieData.length > 0 ? movieData.reduce((max, movie) =>
            (movie.rating?.average) > (max.rating?.average) ? movie : max
        ) : null
        
        const lowestMovie = movieData.length > 0 ? movieData.reduce((min, movie) =>
            (movie.rating?.average || 999) < (min.rating?.average || 999) ? movie : min
        ) : null

        const averageRating = movieData.length > 0 ?
        movieData.reduce((sum, movie) =>
                sum + (movie.rating?.average || 0), 0
            ) / movieData.length : null
        return (
            <>
<MovieDetailsModal />

                <div className='flex flex-col justify-around bg-gray-950 py-25 '>
                    {isLoggedIn && (<>
                        <div className="totalMovies h-fit py-5 shadow-[0_0_15px_rgba(59,130,246,0.4)] px-5 py-0 border-1 border-gray-400 rounded-lg text-white  relative items-center justify-center mx-auto    text-center ">
                            <p className='font-semibold mt-2 text-2xl px-5  py-2 text-white bg-blue-500 hover:bg-blue-700 transition duration-300 rounded-xl  '>{username}</p>
                            <h1 className="text-2xl font-bold mt-3">Username</h1>
                        </div>
                    </>)}

                    <div className='flex  justify-around mb-10 bg-gray-950  '>

                        <div className="totalMovies h-fit py-5 shadow-[0_0_15px_rgba(59,130,246,0.4)] px-5 py-0 border-1 border-gray-400 rounded-lg text-white  relative items-center justify-center mx-auto    text-center ">
                            <p className='font-semibold mt-2 text-2xl px-5  py-2 text-white bg-blue-500 hover:bg-blue-700 transition duration-300 rounded-xl  '>{movieData.length}</p>
                            <h1 className="text-2xl font-bold mt-3">Total Shows</h1>
                        </div>

                        <div className="totalMovies h-fit py-5 shadow-[0_0_15px_rgba(59,130,246,0.4)] px-5 py-0 border-1 border-gray-400 rounded-lg text-white  relative items-center justify-center mx-auto    text-center ">
                            <p className='font-semibold mt-2 text-2xl px-5  py-2 text-white bg-blue-500 hover:bg-blue-700 transition duration-300 rounded-xl  '>{topMovie?.rating?.average}</p>
                            <h1 className="text-2xl font-bold mt-3">Top Rating</h1>
                        </div>

                        <div className="totalMovies h-fit py-5 shadow-[0_0_15px_rgba(59,130,246,0.4)] px-5 py-0 border-1 border-gray-400 rounded-lg text-white  relative items-center justify-center mx-auto    text-center ">
                            <p className='font-semibold mt-2 text-2xl px-5  py-2 text-white bg-blue-500 hover:bg-blue-700 transition duration-300 rounded-xl  '>{lowestMovie?.rating?.average}</p>
                            <h1 className="text-2xl font-bold mt-3">Lowest Rating</h1>
                        </div>


                        <div className="h-fit py-5 totalMovies shadow-[0_0_15px_rgba(59,130,246,0.4)] px-5 py-0 border-1 border-gray-400 rounded-lg text-white  relative items-center justify-center mx-auto    text-center ">
                            <p className='font-semibold mt-2 text-2xl px-5  py-2 text-white bg-blue-500 hover:bg-blue-700 transition duration-300 rounded-xl  '>{averageRating?.toFixed(1)}</p>
                            <h1 className="text-2xl font-bold mt-3">Avg Ratnig</h1>
                        </div>


                    </div>
                    <div className="container max-w-5xl mx-auto shadow-[0_0_15px_rgba(59,130,246,0.4)] bg-black border-1 border-gray-400 rounded-lg  mx-auto">

                        <h1 className="text-2xl text-white font-bold text-center mb-5 mt-4 relative">Top & Lowest Movies</h1>

                        <div className="topLowest flex justify-evenly">

                            <div className="topMovies mb-20">
                                <h1 className='text-white text-center font-bold mb-5 relative '>Top Movie Rate </h1>
                                <Card
    key={topMovie?.id}
    id={topMovie?.id}
    imgSrc={topMovie?.image?.medium}
                                    name={topMovie?.name}
                                    rating={topMovie?.rating?.average}
                                />
                            </div>
                            <div className="topMovies mb-20">
                                <h1 className='text-white text-center font-bold mb-5 relative '>Lowest Movie Rate </h1>

                                <Card
                                    key={lowestMovie?.id}
                                    id={lowestMovie?.id}
                                    imgSrc={lowestMovie?.image?.medium}
                                    name={lowestMovie?.name}
                                    rating={lowestMovie?.rating?.average}
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </>

        )
    }

    export default Dashboard


    {/* <h1> Top Movies Rating</h1>
                    <h2>{topMovie.name}</h2>
                    <h3>{topMovie.rating?.average}</h3>
                    <img src={topMovie?.image?.medium} alt="" /> */}
    {/* <div className="container shadow-[0_0_15px_rgba(59,130,246,0.4)] bg-black border-1 border-gray-400 mt-5 rounded-lg  mx-auto">

                    <h1 className="text-2xl text-white font-bold text-center mb-5 mt-4 relative">Top & Lowest Movies</h1>

                    <div className="topLowest flex justify-around">

                        <div className="topMovies mb-20">
                            <h1 className='text-white text-center font-bold mb-5 relative '>Top Movie Rate </h1>
                            <Card
                                imgSrc={topMovie?.image?.medium}
                                name={topMovie?.name}
                                rating={topMovie?.rating?.average}
                            />
                        </div>
                        <div className="topMovies mb-20">
                            <h1 className='text-white text-center font-bold mb-5 relative '>Lowest Movie Rate </h1>

                            <Card
                            className=""
                                imgSrc={lowestMovie?.image?.medium}
                                name={lowestMovie?.name}
                                rating={lowestMovie?.rating?.average}
                            />
                        </div>
                    </div>
                </div>
                <div className="averageRating mt-15 text-white relative items-center justify-center mx-auto  w-fit pb-20  text-center flex flex-col">
                    <h1 className="text-2xl font-bold ">Average Ratings</h1>
                    <p className='font-semibold mt-2 text-2xl px-5  py-2 text-white bg-blue-500 hover:bg-blue-700 transition duration-300 rounded-xl  '>{averageRating?.toFixed(1)}</p>
                </div>
            */}
                                    
                                        // const { username, isLoggedIn } = useSelector(
                                        //     state => state
                                        // )
                                    
                                        // const [movies, setMovies] = useState([])
                                    
                                        // const getMovies = async () => {
                                    
                                        //     const response = await axios.get("https://api.tvmaze.com/shows")
                                    
                                        //     setMovies(response.data)
                                        // }
                                    
                                        // useEffect(() => {
                                    
                                        //     getMovies()
                                    
                                        // }, [])
                                    
