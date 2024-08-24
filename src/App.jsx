import { useState } from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Movies from './Components/Movies'
import Nowplaying from './Components/Nowplaying'
import MovieDetails from './Components/MovieDetails'
import SearchMovie from './Components/SearchMovie'
import Trending from './Components/Trending'
import Filter from './Components/Filter'

 

function App() {


  return (
       <>
         <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
             <Route path='/MovieDetails/:id' element={<MovieDetails />}/>

             <Route path='' element={<Movies ></Movies>}/>
             <Route path=''element={<SearchMovie/>}/>
           </Routes>

         </BrowserRouter>

         {/* <Nowplaying/>   */}
       </>
        


      // <SearchMovie/>
  )
}

export default App
