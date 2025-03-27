import React, { useState } from 'react'
import './Home.css'
import Hearder from '../../components/Hearder/Hearder'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
// import AppDownload from '../../components/AppDownload/AppDownload'

const Home = () => {

  const [category,setCategory] = useState("All")

  return (
    <div>
      
    <Hearder/>
    <ExploreMenu category={category} setCategory={setCategory}/>
    <FoodDisplay category={category}/>
    {/* <AppDownload/> */}
    </div>
  )
}

export default Home
