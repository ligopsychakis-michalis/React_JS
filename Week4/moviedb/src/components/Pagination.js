import React from 'react';
import '../styles/Pagination.scss';

export default function Pagination({pages, changePage}){
    if (pages){
        let pagesArray = [];
        for (let i = 1; i <= pages; i++){ pagesArray.push(i) }

        return (
            <div className="pagination">
                {pagesArray.map((page,i) => (
                    <button className="pages" onClick={changePage} key={i}>
                        {page}
                    </button>
                ))}
            </div>
        );
    }else{
        return <></>;
    }
   
};