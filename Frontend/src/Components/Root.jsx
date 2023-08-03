import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <div>
        <Navbar/>
        <Main>
            <Outlet/>
        </Main>
        <Footer/>
    </div>
  )
}

export default Root