import { createSlice } from "@reduxjs/toolkit"
import { getAllMovies, getMovieDetails } from "../Api/moviesApi"

const initialState = {
    movies: [],
    isLoading: false,
    error: null,
    detailsLoading: false,
    detailsError: null,
    isModalOpen: false,
    selectedMovie: null,
}


const movieSlice = createSlice({
    name: 'movieData',

    initialState,
    reducers: {
        closeModal: (state) => {
            state.isModalOpen = false
            state.selectedMovie = null
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllMovies.pending, (state, action) => {
                state.isLoading = true;
                state.error = null
            })
            .addCase(getAllMovies.fulfilled, (state, action) => {
                state.isLoading = false;
                state.movies = action.payload;
                state.error = null;
            })
            .addCase(getAllMovies.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action?.error?.message

            })


            .addCase(getMovieDetails.pending, (state, action) => {
                state.detailsLoading = true;
                state.detailsError = null
                state.isModalOpen = true
                state.selectedMovie = null
            })
            .addCase(getMovieDetails.fulfilled, (state, action) => {
                state.detailsLoading = false;
                state.detailsError = null
                state.isModalOpen = true
                state.selectedMovie = action.payload
            })
            .addCase(getMovieDetails.rejected, (state, action) => {
                state.detailsLoading = false;
                state.detailsError = action?.error?.message
                state.isModalOpen = false
                state.selectedMovie = null

            })
    }
})
export const {closeModal}=movieSlice.actions
export default movieSlice.reducer