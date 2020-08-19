import React from 'react'

export const SearchForm = (props) => {

    return <div className="container-fluid">
        <div className="text-center mb-5  ">
            <h1>Our Products</h1>
            <input placeholder="search" onChange={(e) => props.setSearch(e.target.value)}
                className="form-control w-50 m-auto  " />

        </div></div>
}