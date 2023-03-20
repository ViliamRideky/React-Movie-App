import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { projectFirestore } from '../firebase/config'
import './OneMovie.css'

const OneMovie = () => {

    const [data, setData] = useState({})
    const [error, setError] = useState("")

    const { movieId } = useParams()

    useEffect(() => {
        projectFirestore.collection("movies").doc(movieId).get().then((document) => {

            if (document.exists) {
                setData(document.data())
            } else {
                setError("Movie was not found")
            }
        }).catch((err) => {
            setError(err.message)
        })
    }, [movieId])

    return (
        <div className='movies'>
            {error && <p>{error}</p>}
            <h1>{data.title}</h1>
            <p>{data.minage} +</p>
            <p>{data.time} min</p>
            <Link exact to="/all-movies">Back to list of movies</Link >
        </div>
    )
}

export default OneMovie