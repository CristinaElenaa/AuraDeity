import classes from './SearchBar.module.css';
import React, { useState, useRef } from 'react';

function SearchBar() {

    const searchValueRef = useRef();
    const [searchResult, setSearchResult] = useState([]);
    const [lastSearch, setLastSearch] = useState(localStorage.getItem(localStorage.getItem('user-email')));

    function handleSearch(event) {
        event.preventDefault();
        var enteredSearchValue = searchValueRef.current.value;
        makeApiCall(enteredSearchValue);
    };

    function makeApiCall(searchInput) {
        fetch('https://localhost:7224/api/weather/current',
            {
                method: 'POST',
                body: JSON.stringify({ city: searchInput }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => response.json())
            .then(json => {
                console.log(json);
                setSearchResult(json);
                var userEmail = localStorage.getItem('user-email');
                localStorage.setItem(userEmail, json.city);
                setLastSearch(localStorage.getItem(userEmail));

            })
    };

    return (
        <div>
            <label htmlFor="header-search">
                <span className={classes.textStyle}>Look for a city</span>
            </label>
            <div className={classes.boxStyle}>
                <input
                    type="text"
                    placeholder="Search here"
                    ref={searchValueRef}
                />
                <button type='submit' onClick={handleSearch}>Search</button>
            </div>
            <div className={classes.lastSearchCard}>
                <span className={classes.lastSearchText}>You searched for {lastSearch} recently.</span>
            </div>
            {
                searchResult ?
                    (
                        <div>
                            <table className={classes.weatherTable}>
                                <tr>
                                    <th>Country</th>
                                    <th>City</th>
                                    <th>Temperature</th>
                                </tr>
                                <tr>
                                    <td>{searchResult.country}</td>
                                    <td>{searchResult.city}</td>
                                    <td>{searchResult.temperature}</td>
                                </tr>
                            </table>
                        </div>
                    )
                    :
                    (<span></span>)
            }

        </div>
    );

}

export default SearchBar;