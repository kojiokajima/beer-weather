import React from "react";


const Search = (props)=>{
    

    return(
        <form className="search" onSubmit={props.onSubmit}>
            <input
              type="search"
              placeholder="Search your city, Find your beer!!"
              className="search-input"
            ></input>

            <button type="submit"  >SEARCH</button>
        </form>


    )

}

export default Search;