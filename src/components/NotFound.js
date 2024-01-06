import React from 'react'
function NotFound() {
  return (
    <div>
      <div className="container">
        <h1 className='head-center'>
            oops!
        </h1>
        <h2 className="head-center2">
            404 - PAGE NOT FOUND
        </h2>
        <div className="div-para">
        <p className="para-1">The page you are looking for might have been removed had its name changed or its temporary unavailable</p>
        </div>
      </div>
      <button id="go-home"><a href ="/">GO TO HOMEPAGE</a></button>
    </div>
  )
}

export default NotFound
