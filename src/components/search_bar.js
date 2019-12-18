import React from 'react';

const SearchBar=(props)=>{
    return (
      <div className = 'search_bar'>
        <input
          onChange = {event => props.onTermChange(event.target.value)} />
      </div>
    );

  }



export default SearchBar;
