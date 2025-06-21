import React from 'react'
import SideBar from './Components/Home/SideBar'
import { Routes, Route } from 'react-router-dom'

import Player from './Components/Home/Player'
import Favourites from './Components/Home/Favourites'
import Feed from './Components/Home/Feed'
import Library from './Components/Home/Library'
import Trending from './Components/Home/Trending'

export default function App()
{
  return (
    <div className='flex min-h-screen'>
      <SideBar />

      <Routes>
        <Route path='/' element={<Player />} />
        <Route path='/Favourites' element={<Favourites />} />
        <Route path='/Feed' element={<Feed />} />
        <Route path='/Library' element={<Library />} />
        <Route path='/Trending' element={<Trending />} />
      </Routes>
    </div>
  )
}
