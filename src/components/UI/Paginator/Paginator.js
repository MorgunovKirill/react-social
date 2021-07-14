import React, { useState } from 'react';
import classes from './Paginator.module.css';

const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChange, portionSize = 10}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={classes.pagination}>
            { portionNumber > 1 ?
            <><button onClick={() => {setPortionNumber(1)}}>Beginning</button><button onClick={() => {setPortionNumber(portionNumber - 1)}}>Previous</button></>
            : null}
            {pages
            .filter(p => (p >= leftPortionPageNumber && p <= rightPortionPageNumber))
            .map(p => (
                <span
                    key={Math.random + p}
                    className={currentPage === p ? classes.selectedPage : ""}
                    onClick={() => { onPageChange(p) }} >{p}</span>
            ))}
            { portionCount > portionNumber ?
            <><button onClick={() => {setPortionNumber(portionNumber + 1)}}>Next</button> <button onClick={() => {setPortionNumber(portionCount)}}>Last</button></> 
            : null}
        </div>
    )
}

export default Paginator;
