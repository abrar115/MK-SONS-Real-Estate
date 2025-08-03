import React from 'react'
import './Next.css'
import { useLocation } from 'react-router-dom';



function Next() {
  const location = useLocation();
  const { user } = location.state || {};
  if (!user) {
    return <div>No user found, please login first.</div>;
  }
  const name = user.email.charAt(0).toUpperCase() + user.email.slice(1)
  return (
    <div>
      <nav className='Next_nav'>
        <ul>
            <li>Hi {name} </li>
        </ul>
      </nav>
    </div>
  )
}

export default Next
