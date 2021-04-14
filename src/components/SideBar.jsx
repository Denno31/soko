import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { searchProductCategory, listProducts } from '../actions/productActions'

function SideBar({ openSidebar, onHandleSideBar }) {
  const { error, categories, loading } = useSelector(
    (state) => state.categories,
  )

  const dispatch = useDispatch()
  return (
    <aside className={`sidebar ${openSidebar ? 'open' : ''}`}>
      <h2>Categories</h2>
      <button className="close-btn" onClick={onHandleSideBar}>
        X
      </button>
      <ul>
        {loading ? (
          <div></div>
        ) : error ? (
          <div></div>
        ) : (
          categories.map((category) => (
            <li
              key={category.id}
              onClick={() => {
                //  ? props.onHandleSetCategory(category.category)
                dispatch(searchProductCategory(category.category))
                document.querySelector('.close-btn').click()
              }}
            >
              {category.category} ({category.items})
            </li>
          ))
        )}
      </ul>
      <h3
        onClick={() => {
          // props.onHandleSetCategory('All Categories')
          dispatch(listProducts())
          document.querySelector('.close-btn').click()
        }}
      >
        View all categories &#62;
      </h3>
    </aside>
  )
}

export default SideBar
