import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

export default function Task({chore}) {
    const {id} = useParams()
    const navigate = useNavigate()
    const item = chore.at(id)
return (
    <div>
        <h1>{item}</h1>
        <button onClick={() => navigate("/Todo")}>Go to To-Do List</button>
    </div>
)
}