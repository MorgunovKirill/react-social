import React from 'react';
import classes from './Paginator.module.css';

const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChange}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={classes.pagination}>
            {pages.map(p => (
                <span
                    key={Math.random + p}
                    className={currentPage === p ? classes.selectedPage : ""}
                    onClick={() => { onPageChange(p) }} >{p}</span>
            ))}
        </div>
    )
}

export default Paginator;
