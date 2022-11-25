import React from "react";
import ReactPaginate from "react-paginate"
import styled from "styled-components"
import {useTranslation} from "react-i18next";

export const Paginator = ({selectPage, totalCount, usersOnPage}) => {
    const pagesCount = Math.ceil(Number(totalCount) / usersOnPage)
    const {t} = useTranslation()

    return (
        <StyledPaginate>
            <ReactPaginate
                breakLabel="..."
                nextLabel={t("users.nextPage")}
                onPageChange={(event) => selectPage(event.selected + 1)}
                pageRangeDisplayed={3}
                pageCount={pagesCount}
                previousLabel={t("users.prevPage")}
                renderOnZeroPageCount={null}
                containerClassName='pagination'
                activeClassName='active'
            />
        </StyledPaginate>
    )
}

const StyledPaginate = styled.div`
  .pagination {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(40px, 1fr));
    align-items: center;
  }
  
  .pagination li {
    display: grid;
    border-left: 1px solid ${props => props.theme.borderPrimary};
    border-top: 1px solid ${props => props.theme.borderPrimary};
    border-bottom: 1px solid ${props => props.theme.borderPrimary};
    justify-items: center;
    align-items: center;
    height: 25px;
  }

  .pagination li:first-child {
    border-left: 1px solid ${props => props.theme.borderPrimary};
    border-radius: 4px 0 0 4px;
    font-size: 12px;
    font-weight: bold;
  }

  .pagination li:last-child {
    border-right: 1px solid ${props => props.theme.borderPrimary};
    border-radius: 0 4px 4px 0;
    font-size: 12px;
    font-weight: bold;
  }

  .pagination li a {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
  }

  .pagination li:hover {
    cursor: pointer;
  }

  .active {
    background-color: ${props => props.theme.bgColorPrimary};
    font-weight: bold;
  }

  .active a {
    color: ${props => props.theme.colorSecondary};
  }
`
