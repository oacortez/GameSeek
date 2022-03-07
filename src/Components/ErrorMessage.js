import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/ErrorMessage.scss'


const ErrorMessage = ({message}) => {

  return (
    <div className='error-container'>
      <h4 className='error-message'>Sorry we were unable to find this resource for you! Please try again</h4>
      <h5>{message}</h5>
      <Link to={'/'}>
        <button className='go-back-home-btn'>OK</button>
      </Link>
    </div>
  )
}

export default ErrorMessage
