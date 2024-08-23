import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Pagination from './Pagination';
import { FaSearch } from 'react-icons/fa';

const Movies = () => {
    const navigate = useNavigate();
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(8);
    const [input, setInput] = useState('');
    const [movies1, setMovies1] = useState([]);

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = movies.slice(firstPostIndex, lastPostIndex);
    const totalPosts = movies.length; // Update this to reflect the actual total posts if needed

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=22abeadcfc022241b78e1520137e687e`)
            .then(res => res.json())
            .then(json => setMovies(json.results));
    }, []);

    useEffect(() => {
        if (input) {
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=22abeadcfc022241b78e1520137e687e&query=${encodeURIComponent(input)}`)
                .then(res => res.json())
                .then(json => setMovies1(json.results || []));
        } else {
            setMovies1([]); // Clear search results if input is empty
        }
    }, [input]);

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const goToDetails = (id) => {
        navigate(`./MovieDetails/${id}`);
    };

    return (
        <>
            <div className='bg-grey w-full rounded-lg h-full p-15 text-white'>
                <div className="w-full max-w-md px-4 py-8 mx-auto">
                    <div className="relative">
                        <input
                            value={input}
                            type="text"
                            onChange={handleChange}
                            id="search"
                            placeholder="Search for movies..."
                            className=" font-semibold text-black w-full py-3 px-4 pr-12 border border-[#7379FF]-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <FaSearch className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500" />
                    </div>
                </div>

                {input ? (
                <div className='bg-[ FFFFFF] text-white'>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mx-4 lg:mx-40">
                        {movies1.length > 0 ? (
                            movies1.map((movie) => (
                                <div
                                    key={movie.id}
                                    className="bg-[ FFFFFF] cursor-pointer border border-gray-300 rounded-lg overflow-hidden"
                                    onClick={() => goToDetails(movie.id)}
                                >
                                    <img
                                        className="w-full h-[200px] object-cover"
                                        src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'default-image-url'}
                                        alt={movie.title}
                                    />
                                    <div className="p-4">
                                        <h1 className="text-center text-lg font-semibold truncate">{movie.title}</h1>
                                        <p className="text-center text-sm text-gray-500">{movie.release_date}</p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-center col-span-full">No movies found</p>
                        )}
                        
                    </div>
                    </div>
                ) : (
                    <div className="bg-[ FFFFFF] text-white">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mx-4 lg:mx-40">
                            {currentPosts.map((movie) => (
                                <div
                                    key={movie.id}
                                    className="bg-[ FFFFFF] cursor-pointer border border-gray-300 rounded-lg overflow-hidden"
                                    onClick={() => goToDetails(movie.id)}
                                >
                                    <img
                                        className="w-full h-[200px] object-cover"
                                        src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'default-image-url'}
                                        alt={movie.title}
                                    />
                                    <div className="p-4">
                                        <h1 className="text-center text-lg font-semibold truncate">{movie.title}</h1>
                                        <p className="text-center text-sm text-gray-500">{movie.release_date}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <Pagination
                            totalPosts={totalPosts}
                            postsPerPage={postsPerPage}
                            onPageChange={setCurrentPage}
                        />
                    </div>
                )}
            </div>
        </>
    );
};

export default Movies;
