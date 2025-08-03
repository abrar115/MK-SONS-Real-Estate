import React from 'react'
import './Next.css'
import { useLocation } from 'react-router-dom';



function Next() {
  const location = useLocation();
  const { user } = location.state || {};
  if (!user) {
    return <div>No user found, please login first.</div>;
  }
  const CurrentDate = new Date()
  const [day, month, year] = [CurrentDate.getDate(), CurrentDate.getMonth() + 1, CurrentDate.getFullYear()]
  const name = user.email.charAt(0).toUpperCase() + user.email.slice(1)
  return (
    <div>
      <nav className='Next_nav'>
        <ul>
            <li>Welcome, {name} to MK & SONS Portal -- {day}/{month}/{year}</li>
        </ul>
      </nav>
    </div>
  )
}

export default Next
