import React, { useState } from 'react'
import styles from './Search.module.css';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
function Search() {
    const [searchText, setSearchText] = useState("");
    const navigate = useNavigate(); // so the search could be added to the url
    const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/?search="+searchText)

   }
  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
        <div className={styles.searchBox}>
             <input className={styles.searchInput} type='text' value={searchText} placeholder='Type your movie here' onChange={(e) => setSearchText(e.target.value.toUpperCase())} />
             <button className={styles.searchButton} type='submit'>
                <FaSearch size={20} />
             </button>
        </div>
    </form>
  )
}

export default Search;

 