import React, { useState } from 'react'
import { projectFirestore } from '../firebase/config'
import './Form.css'

const Form = () => {

    const [movieTitle, setMovieTitle] = useState("")
    const [movieAge, setMovieAge] = useState("")
    const [movieTime, setMovieTime] = useState("")

    const submitForm = async (e) => {
        e.preventDefault()
        const newMovie = { title: movieTitle, minage: parseInt(movieAge), time: parseInt(movieTime) }

        try {
            await projectFirestore.collection("movies").add(newMovie)
            setMovieTitle("")
            setMovieAge("")
            setMovieTime("")
        } catch (err) {
            console.log(err.message)
        }

    }

    return (
        <div>
            <h1>Adding movie</h1>
            <form onSubmit={submitForm} className="form">
                <input
                    type="text"
                    placeholder="Title"
                    onChange={(e) => setMovieTitle(e.target.value)}
                    value={movieTitle}
                />

                <input
                    type="number"
                    placeholder="Age rank"
                    min="3"
                    onChange={(e) => setMovieAge(e.target.value)}
                    value={movieAge}
                />

                <input
                    type="number"
                    placeholder="Minutes"
                    min="0"
                    max="540"
                    onChange={(e) => setMovieTime(e.target.value)}
                    value={movieTime}
                />
                <input type="submit" value="Add movie" />
            </form>
        </div>
    )
}

export default Form