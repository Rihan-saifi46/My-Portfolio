import Navbar from '@/components/Navbar'
import Profile from '@/pages/Profile'
import React from 'react'

const page = () => {
  return (
    <>
    <Navbar/>
      <div>
        <Profile/>
      </div>
    </>
  )
}

export default page