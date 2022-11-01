import React from "react";
import style from "./Paginator.module.css"
import ReactPaginate from "react-paginate";

export const Paginator = ({selectPage, totalCount, usersOnPage}) => {
    const {pages, active} = style
    const pagesCount = Math.ceil(Number(totalCount) / usersOnPage);

    return (
        <ReactPaginate
            className={pages}
            breakLabel="..."
            nextLabel="next"
            onPageChange={(event) => selectPage(event.selected + 1)}
            pageRangeDisplayed={3}
            pageCount={pagesCount}
            previousLabel="prev"
            renderOnZeroPageCount={null}
            activeClassName={active}
        />
    )
}
