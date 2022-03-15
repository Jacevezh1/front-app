import React from 'react'
import { Outlet } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'

const Layout = () => {
  return (
    <div>

      <div class="flex flex-col h-screen justify-between">
        <Header />
              
        <main class="mb-auto">
          <Outlet />
        </main>

        <Footer />
      </div>

    </div>
  )
}

export default Layout