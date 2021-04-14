import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  categoryList,
  searchProductCategory,
  listProducts,
} from '../actions/productActions'
function Category(props) {
  const dispatch = useDispatch()

  const { error, categories, loading } = useSelector(
    (state) => state.categories,
  )
  useEffect(() => {
    dispatch(categoryList())
  }, [dispatch])
  return loading ? (
    <div>Loading...</div>
  ) : error ? (
    <div></div>
  ) : (
    <div className="category py-1">
      <ul>
        {categories.map((category) => (
          <li
            key={category.id}
            onClick={() => {
              props.onHandleSetCategory(category.category)
              dispatch(searchProductCategory(category.category))
            }}
          >
            {category.category} ({category.items})
          </li>
        ))}
      </ul>
      <h3
        onClick={() => {
          props.onHandleSetCategory('All Categories')
          dispatch(listProducts())
        }}
      >
        View all categories &#62;
      </h3>
    </div>
  )
}
export default Category
