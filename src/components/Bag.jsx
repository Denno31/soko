import React from 'react'

function Bag() {
  return (
        <div className="p-1 cart">
      <div className="bag-header">
        <h2>
          Bag<span className="badge">0</span>
        </h2>
      </div>
      <div className="bag">
        <img src="/images/cartempty.jpg" alt="" />
        <div className="descrip">
          <p>
            <strong className="f-1">It's empty here</strong>
          </p>
          <p>Start shopping to add items to your bag</p>
        </div>
      </div>
    </div>
  )
}

export default Bag
