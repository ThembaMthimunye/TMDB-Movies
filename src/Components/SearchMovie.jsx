import React, { useEffect, useState } from 'react';
import { FaSearch } from "react-icons/fa"

const SearchMovie = () => {
    const [input, setInput] = useState('');
    const [movies1, setMovies1] = useState([])

    const handleChange = (value) => {

        setInput(value);
        // fetchData(value);
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=22abeadcfc022241b78e1520137e687e&query=${input}`)
            .then(res => res.json())
            .then(json => setMovies1(json.results));
        console.log(movies1)

    }
    return (

        <div className='bg-black w-[100%] br-[10px] h-full p-15'>
            {
                console.log(input)
            }

            <div class="w-full max-w-md px-4 py-8 ">
                <div class=''>
                    <input value={input} type="text" onChange={(e) => handleChange(e.target.value)} id="search" placeholder="Search for movies..." class="w-full py-3 px-4 pr-12 border border-[#7379FF]-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ml-[40rem] mt-[7rem]">
                    </input>
                </div>
                {/* <div class="px-4 py-2 bg-[#7379FF] text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 w-[6rem] h-[3rem] ml-[67rem] mt-[-3rem]">
                    <button class="text-lg  ">SEARCH</button>
                </div> */}
                <FaSearch class="px-4 py-2 bg-[#7379FF] text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 w-[6rem] h-[3rem] ml-[67rem] mt-[-3rem]" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mx-4 lg:mx-40">
                {movies1.map((movie) => (
                    <div
                        key={movie.id}
                        className="cursor-pointer border border-gray-300 rounded-lg overflow-hidden"

                    >
                        <img
                            className="w-full h-[200px] object-cover"
                            src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'default-image-url'}
                            alt={movie.title}
                        />
                        <div className="p-4">
                            <h1 className="text-center text text-lg font-semibold truncate">{movie.title}</h1>
                            <p className="text-center text-sm text-gray-500">{movie.release_date}</p>
                        </div>
                    </div>
                ))}
            </div>


        </div>

    )
}

export default SearchMovie
