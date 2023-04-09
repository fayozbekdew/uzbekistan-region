import React from 'react'
import './Search.css'
import { Link } from 'react-router-dom'

const Search = () => {
  return (
    <form className="search container" action="#">
            <input className='search__input' type="search" name="search" placeholder="Search for a country…" aria-label="Search for a country…" required autoComplete='off'/>
        </form>
  )
}

export default Search