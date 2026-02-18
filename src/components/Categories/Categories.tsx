import { memo } from "react"

type CategoriesProps = {
  value: number,
  onCategoryClick: Function,
  categories: Array<String>
}

const Categories = (props:CategoriesProps) => {
  const {
    value,
    onCategoryClick,
    categories
  } = props

  return (           
  <div className="categories">
    <ul>
      {
        categories.map((category, id: number) => {
          return <li 
            onClick={() => onCategoryClick(id)} 
            className={Number(value) === id ? "active" : ""}
            key={id}
          >
            {category}
          </li>
        })
      }
      {/* <li onClick={() => onCategoryClick(0)} className={activeId === 0 ? "active" : ""}>Все</li> */}
    </ul>
  </div>
  )
}
 
export default memo(Categories)