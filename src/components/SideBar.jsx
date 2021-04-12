import React from 'react'

function SideBar({ openSidebar, onHandleSideBar }) {
  return (
    <aside className={`sidebar ${openSidebar ? 'open' : ''}`}>
      <h2>Categories</h2>
      <button className="close-btn" onClick={onHandleSideBar}>
        X
      </button>
      <ul>
        <li>Electronics</li>
        <li>Face Masks</li>
        <li>Grocery</li>
        <li>Home</li>
        <li>Kids</li>
      </ul>
    </aside>
  )
}

export default SideBar
