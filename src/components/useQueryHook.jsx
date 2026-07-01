import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const fetchData = () => {
    return axios.get('https://api.tvmaze.com/shows')
}

export const useQueryHook = () => {
    return useQuery({
        queryKey: ['movies'],
        queryFn: fetchData,
        select: (data) => {
            return data.data.filter(
                (movie) => movie.rating.average >= 8.5
            )
        }
    })
}