import { useDispatch } from "react-redux"
import { getMovieDetails } from "../Api/moviesApi"


function Card({ imgSrc, name, rating, id }) {
    const dispatch = useDispatch()

    return (
        <>
            <div  className="w-[220px]  hover:shadow-[0_0_25px_rgba(255,255,255,0.8)] h-[470px] bg-white rounded-xl relative overflow-hidden flex flex-col shadow-xl  hover:shadow-2xl transition duration-300 hover:-translate-y-2">

                <img
                    src={imgSrc}
                    alt={name}
                    className="w-full  object-cover"
                />

                <div className="p-4">
                    <h1 className="font-bold text-lg ">
                        {name}
                    </h1>

                    <p className="text-yellow-500 font-semibold my-2">
                        ⭐ {rating}
                    </p>
                    <div className="boxContainer w-full px-4 py-2 absolute top-[83%] left-[0]">

                        <button className="mt-4 w-full  bg-blue-600    hover:bg-blue-700 text-white py-2 rounded-lg" onClick={() => dispatch(getMovieDetails(id))}>
                            Details
                        </button>
                    </div>
                </div>

            </div>
        </>
    )

}

export default Card