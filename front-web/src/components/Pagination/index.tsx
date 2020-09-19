import React from 'react';
import './styles.css';

type Props = {

    totalPage?: number;
    goToPage: Function;
    activePage: number;

}

const Pagination = ({ totalPage = 0, goToPage, activePage }: Props) => {

    const paginationItems = Array.from(Array(totalPage).keys());

    return (

        <div className="pagination-container">
            {paginationItems.map(item => (
                <button key={item} className={`pagination-item ${activePage === item? 'active': 'inactive'}`}
                onClick={() => goToPage(item)}
                >
                    {item + 1}
                </button>
            ))}
        </div>

    )

}

export default Pagination;