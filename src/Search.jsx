import React from "react";


const Search = (props)=>{
    

    return(
        <div className="search">
            <input
              type="search"
              placeholder="Search your city, Find your beer!!"
              className="search-input"
              value={props.text}
              onChange={props.onChange}
            ></input>

            <button onClick={props.onClick} >SEARCH</button>
        </div>


    )

}

export default Search;