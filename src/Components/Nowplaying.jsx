import React, { useEffect, useState } from 'react'

const Nowplaying = () => {

    const [nowplaying, setNowplaying] = useState([])
    const getMovies = () => {
        fetch("https:api.themoviedb.org/3/discover/movie?api_key=22abeadcfc022241b78e1520137e687e")
            .then(res => res.json())
            .then(json => setNowplaying(json.results))
    }

    useEffect(() => {
        getMovies()
    }, [])

    console.log(nowplaying);
  return (
    <div>
      
    
        <div class="bg-black text-white">
            <div class="grid grid-cols-[1fr_1fr_1fr_1fr] grid-rows-[1fr] gap-5 mx-40">
                {nowplaying.map((nowplaying) => (
                    <div>
                            <img class="w-[70%] aspect-[1/1] border m-8 rounded-[3px] border-solid border-[black]" key={nowplaying.id} src={`https:image.tmdb.org/t/p/w500${nowplaying.poster_path}`} alt="" />
                             <h1 class='text-center text-underline'>{nowplaying.title}</h1>
                            <p class='text-center'>{nowplaying.release_date
                            }</p> 
                    </div>
                    
                ))}
                
            </div>
        </div>
    </div>
  )
}

export default Nowplaying
