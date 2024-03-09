import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import useQueryParams from '../hooks/useQueryParams'
import convertObjectToQueryString from '../utils/convertQueryStringToObject';

export const Header = ({query, setQuery}) => {
  const {pathname} = useLocation();
  const navigate = useNavigate();
  const initiaValues = useQueryParams();
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <h1>Task Page</h1>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
      <form className="d-flex" onSubmit={(e)=> navigate(`/?search=${query}`)}>
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>setQuery(e.target.value)} />
        </form>
    </div>
  </div>
</nav>
    </>
  )
}
