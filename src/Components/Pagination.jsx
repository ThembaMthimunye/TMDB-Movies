import React from 'react';
import PropTypes from 'prop-types';

//  import '../index.css'

 const Pagination = ({ totalPosts, postsPerPage, onPageChange }) => {
     // Calculate total number of pages
     const totalPages = Math.ceil(totalPosts / postsPerPage);
      //Create an array of page numbers
     const pages = Array.from({ length: totalPages  }, (_, i) => i + 1);

     return (
         <div   className="ml-[55rem]">
             {pages.map((page) => (
                <>
                
                 <button 
                     className="page-button text-black mt-20 ml-10 mb-10 bg-[#7379FF] font-semibold rounded-lg shadow-md hover:bg-blue-600 hover:text-white focus:outline-red focus:ring-2 focus:ring-blue-300 "
                    //  px-4 py-2 bg-[#7379FF] text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 w-[6rem] h-[3rem] ml-[67rem] mt-[-3rem]
                     key={page}
                     onClick={() => onPageChange(page)}
                     aria-label={`Go to page ${page}`}
                 >
                     {page}
                 </button>
                </>
                 
                 
             ))}
         </div>
     );
 };

 Pagination.propTypes = {
     totalPosts: PropTypes.number.isRequired,
     postsPerPage: PropTypes.number.isRequired,
      onPageChange: PropTypes.func.isRequired,
  };

  export default Pagination;
// import React from 'react'

// const Pagination = (totalPosts, postsPerPage) => {
//     let pages=[];
//     for(let i=1 ;i<=Math.ceil(totalPosts/postsPerPage) ;i++)
//     {
//         pages.push(i);
//     }
//   return (
//     <div>
//       {
//         pages.map((page,index)=>{
//             <button
//                                   className="h-[10rem] w-[20rem]"
//                                  key={page}
//                                 //  onClick={() => onPageChange(page)}
//                                 //   aria-label={`Go to page ${page}`}
//                                 // key={index}
//                               >
//                                  {page}
//                               </button>

//         })
//       }
//     </div>
//   )
// }

// export default Pagination



