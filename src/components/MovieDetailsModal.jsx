import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from '../filmRedux/filmsReduxSlice';
import '../Pages/css.css'
function MovieDetailsModal() {

    const dispatch = useDispatch();
    const { selectedMovie, isModalOpen, detailsLoading, detailsError } = useSelector(
        state => state.MoviesData
    )

    if (!isModalOpen) {
        return null
    }

    if (detailsLoading) {
        return (
            <h1 className=" st text-center mt-20 text-3xl">Loading . . .</h1>
        )
    }

    if (detailsError) {
        return (
            <h1 className="st text-center mt-20 text-3xl">{detailsError} </h1>
        )
    }

    return (
        <>


            <div className='fixed inset-0 bg-black/60 flex justify-center items-center z-50'>
                <button
                    onClick={() => dispatch(closeModal())}
                    className='absolute top-5 text-white right-5 rounded-[50%] hover:bg-red-700 transition duration-300 py-2 px-4 border border-white z-20 text-2xl'
                >
                    X
                </button>
                <div className=' bg-[#08111f] shadow-2xl rounded-2xl p-6 w-[1000px] max-h-[90vh] overflow-y-auto relative'>

                    <div className='relative h-[260px] bg-cover bg-center'
                        style={{ backgroundImage: `url(${selectedMovie?.image?.medium})` }} >

                        <div className='absolute inset-0 bg-gradient-to-t from-[#08111f] via-black/50  to-black/30 '></div>

                    </div>
                    <div className='relative px-8 pb-8 -mt-24 flex  gap-8'>
                        {selectedMovie && (

                            <>

                                <div>
                                    <img src={selectedMovie.image?.medium}
                                        alt={selectedMovie.name}
                                        className="w-[240px] rounded-xl border-2 border-white shadow-2xl"
                                    />
                                </div>
                                <div className="flex-1 pt-24 text-white">

                                    <h1 className="text-5xl font-bold">{selectedMovie.name}</h1>

                                    <h1 className="flex items-center gap-3 mt-5"> ⭐<span className="text-yellow-400 text-2xl"> {selectedMovie?.rating?.average}</span></h1>

                                    <div className="space-y-3 mt-6 text-lg">
                                        <p><b>Language:</b> {selectedMovie.language} </p>
                                        <p><b>Status: </b>{selectedMovie.status} </p>
                                        <p><b>Runtime:  </b> {selectedMovie.averageRuntime}</p>
                                        <p><b>Premiered: </b> {selectedMovie.premiered}</p>
                                    </div>

                                    <hr className='my-6 border-gray-700' />

                                    <h2 className="text-2xl font-bold mb-3">Summary</h2>

                                    <div
                                        className="text-gray-300 leading-8"
                                        dangerouslySetInnerHTML={{
                                            __html: selectedMovie.summary
                                        }}
                                    />
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    )

}

export default MovieDetailsModal









