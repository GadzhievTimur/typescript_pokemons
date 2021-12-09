import axios from 'axios'
import { useEffect, useState } from 'react'



export const Test = () => {
    const [pokes, setPokes] = useState([]);
    const fetchPokes = async () => {
        for(let i = 1; i < 100; i++){
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`)
        console.log(`response`, response.data.abilities)
        setPokes(response.data)
      }}
      useEffect(() => {
        fetchPokes()
      }, [])
    return (
        <div></div>
    )
}
