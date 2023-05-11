import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className="error gradient__bg">
      <div className="error-container">
        <img src="../assets/images/error.svg" alt="not found" />
        <h3 className="gradient__text">Ohh! Page Not Found</h3>
        <p>We can't seem to find the page youe're looking for</p>
        <Link className="btn-error" to="/">
          BACK HOME
        </Link>
      </div>
    </div>
  )
}

export default Error
