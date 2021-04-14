import React, { useState } from 'react'

import SideBar from './SideBar'
import MenuIcon from '@material-ui/icons/Menu'
function NavBar() {
  const [openSidebar, setOpenSideBar] = useState(false)

  const handleSideBar = () => {
    setOpenSideBar(!openSidebar)
  }
  return (
    <div className="p-head">
      <div className="container">
        <div className="header-1">
          <MenuIcon className="m-icon" onClick={handleSideBar} />
          <span>Store made with Soko</span>
        </div>
      </div>
      <SideBar openSidebar={openSidebar} onHandleSideBar={handleSideBar} />
    </div>
  )
}

export default NavBar
