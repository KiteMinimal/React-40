import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <div className='flex items-center justify-between py-4 px-4 bg-red-700'>
        <h1 className='text-2xl font-semibold'>Sheryians coding school</h1>
        <div className='text-xl font-medium flex gap-4'>
          <Link to="./">About</Link>
          <Link to="./courses">courses</Link>
          <Link to="./kodr">kodr</Link>
        </div>

    </div>
  )
}

export default Nav