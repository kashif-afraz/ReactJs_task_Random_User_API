import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'

const HomeLayout = () => {
  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default HomeLayout