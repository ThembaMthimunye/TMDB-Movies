import React from 'react'
import  { useEffect, useState } from 'react';

const Filter = ({movies, setFiltered, activeGenre, setActiveGenre}) => {
    console.log(activeGenre)

    useEffect(()=>{
        if (activeGenre===0){
            setFiltered(movies);
            return;
        }
        const filtered=movies.filter((movie)=>movie.genre_ids.includes(activeGenre)
    );
    setFiltered(filtered);
    } ,[activeGenre])
    return (
        <div className='ml-[50rem] '>
            <button className="text-blue-700 text-1xl bg-[ FFFFFF] text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 w-[6rem] h-[2.5rem] mt-20
            "
            onClick={()=>setActiveGenre(0)}
            
            >
                all
            </button>
            <button className="text-blue-700 text-1xl bg-[ FFFFFF] text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 w-[6rem] h-[2.5rem] mt-20"
                onClick={()=>setActiveGenre(35)}
            >
                comedy
            </button>
            <button className="text-blue-700 text-1xl bg-[ FFFFFF] text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 w-[6rem] h-[2.5rem] mt-20"
            onClick={()=>setActiveGenre(28)}
            >
                action
            </button>
            
        </div>
    )
}


export default Filter
