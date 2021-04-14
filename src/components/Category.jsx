import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { categoryList } from '../actions/productActions'
function Category() {
  const dispatch = useDispatch()
  const { error, categories, loading } = useSelector(
    (state) => state.categories,
  )
  useEffect(() => {
    dispatch(categoryList())
  }, [])
  return loading ? (
    <div>Loading...</div>
  ) : error ? (
    <div></div>
  ) : (
    <div className="category py-1">
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            {category.category} ({category.items})
          </li>
        ))}
      </ul>
      <h3>View all categories &#62;</h3>
    </div>
  )
}
export default Category
