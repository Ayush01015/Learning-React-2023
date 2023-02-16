import React from 'react'
import { useParams } from 'react-router-dom'
const RestaurantsMenu = () => {
    const {id} = useParams();
  return (
    <div>
      <h1>Restaurants {id}</h1>
      <h1>AUh</h1>
    </div>
  )
}

export default RestaurantsMenu
