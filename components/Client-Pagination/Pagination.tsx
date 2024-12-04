import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";



interface PaginationProps {
    totalPages: number,
    currentPage: number,
    onPageChange: (page: number) => void;
    className?: string;
    prevClassBtn?: string;
    nextClassBtn?: string;
    pageClassBtn?: string
}


const Pagination = ({totalPages, currentPage, onPageChange, className="flex  justify-center items-center space-x-[2rem]", prevClassBtn, nextClassBtn, pageClassBtn}: PaginationProps) => {
    return ( 
            <>
            
            <div className={className}>


                {/* Previous Button */}
                <button
                    className={prevClassBtn}

                    onClick={()=> currentPage>1 && onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                
                >
                     <ChevronLeft size={18} />
                     <span>Previous</span>

                </button>


                <span className={pageClassBtn}>
                    Page {currentPage} of {totalPages}
                </span>



                <button
                    className={nextClassBtn}
                    onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    <span>Next</span>
                    <ChevronRight size={18} />
                </button>


            </div>
            
            
            </>

            // // `flex items-center space-x-1 px-3 py-2 rounded ${
            //     currentPage === totalPages
            //     ? "bg-gray-200 text-gray-500 cursor-not-allowed"
            //     : "bg-blue-500 text-white hover:bg-blue-600"
            // }`



// "px-4 py-2 rounded bg-gray-200 text-gray-700"


     );
}
 
export default Pagination;