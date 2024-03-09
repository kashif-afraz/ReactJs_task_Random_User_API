import React from 'react'
import { Route, Routes as RouterRoutes} from 'react-router-dom'
import { Cards } from './components/Cards'
import HomeLayout from './Layouts/HomeLayout'
import { Profile } from './components/Profile'
import Home from './pages/Home'

const Routes = () => {
  return (
    <RouterRoutes>
      <Route element={<HomeLayout/>}>
        <Route path={"/"} element={<Home />}/>
        <Route path={"/profile"} element={<Profile />}/>
      </Route>
    </RouterRoutes>
  )
}

export default Routes