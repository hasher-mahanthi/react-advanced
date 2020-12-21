import React from 'react'

//CSS files
import './SearchBar.css';


function SearchBar(props:any) {
    const OnChange=(e:any)=>{
      props.onInputChange(e.target.value);
    }
    
    return (
        <div>
       <input  className="search-input"
       placeholder="Search By Name"
       onChange={OnChange}
       />
       </div>
    )
}

export default SearchBar
