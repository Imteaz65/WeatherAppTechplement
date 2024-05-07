import { useRef } from "react";

function SearchBar({cityName}){

  const inputValue=useRef(0);

  return(
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex align-center justify-content-center w-100">
            <input type="text" ref={inputValue} className="h-100 fs-5 pt-1 pb-1 ps-1 pe-1" />
            <button className="btn btn-dark" onClick={()=> {cityName(inputValue)} }>Search</button>
          </div>
        </div>
      </div>
    </>
  )
}
export default SearchBar;