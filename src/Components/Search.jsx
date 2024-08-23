// import React from 'react'

// const Search = (props) => {
//     return (
//         <div class="w-full max-w-md px-4 py-8 ">
//             <div class=''>
//                 <input value={props.value} type="text" onChange={(event)=>props.setSearchValue(event.target.value)} id="search" placeholder="Search for movies..." class="w-full py-3 px-4 pr-12 border border-[#7379FF]-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ml-[40rem] mt-[7rem]">
//                 </input>
//             </div>
//             <div class="px-4 py-2 bg-[#7379FF] text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 w-[6rem] h-[3rem] ml-[67rem] mt-[-3rem]">
//                 <button class="text-lg  ">SEARCH</button>
//             </div>
//         </div>
//     )
// }

// export default Search 

import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa"

const SearchMovie = () => {
    const [input, setInput] = useState('');
    const fetchData = (value) => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=22abeadcfc022241b78e1520137e687e&query=${input}`)

            .then((response) => response.json())
            .then((json) => {
                console.log(json);
            })
    }

    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    }
    return (

        <div className='bg-white w-[100%] br-[10px] h-[2.5rem] p-15'>
            {
                console.log(input)
            }


            <div class="w-full max-w-md px-4 py-8 ">
                <div class=''>
                    <input value={input} type="text" onChange={(e) => handleChange(e.target.value)} id="search" placeholder="Search for movies..." class="w-full py-3 px-4 pr-12 border border-[#7379FF]-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ml-[40rem] mt-[7rem]">
                    </input>
                </div>
                <div class="px-4 py-2 bg-[#7379FF] text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 w-[6rem] h-[3rem] ml-[67rem] mt-[-3rem]">
                    <button class="text-lg  ">SEARCH</button>
                </div>
            </div>


        </div>

    )
}

export default SearchMovie

