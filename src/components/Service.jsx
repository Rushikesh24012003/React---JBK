import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Service() {
  return (
    <div>
      <br></br>
      <h3>Service Component</h3>
      <br></br>
      <Link to="admin">Admin services </Link> &nbsp;&nbsp;
      <Link to="user">User Services</Link>
      <Outlet></Outlet>
    </div>
  )
}

export default Service
