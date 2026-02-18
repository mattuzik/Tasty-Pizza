import { useEffect, useState, useContext, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SearchContext } from '../App'
import { setCatedoryId } from '../redux/slices/filterSlice'

import Categories from '../components/Categories/Categories'
import Sort from '../components/Sort/Sort'
import PizzaBlock from '../components/PizzaBlock/PizzaBlock'
import Skeleton from '../components/PizzaBlock/Skeleton'
import { fetchPizzas } from '../redux/slices/pizzasSlice'

const categories = [
  'Все',
  'Мясные',
  'Вегетарианские',
  'Гриль',
  'Острые',
  'Закрытые'
]

const Home = () => {
  // States && Variables
  const dispatch = useDispatch()

  const {seacrhValue} : any = useContext(SearchContext)

  const [order, setOrder] = useState(false)
  const [isDesc, setIsDesc] = useState('desc')

  const { items, status } = useSelector((state : any) => state.pizzas)
  const { categoryId, sort } = useSelector((state : any) => state.filter)
  const sortType = sort.sortProp


  // Functions
  const onCategoryClick = useCallback((id: number) => {
    dispatch(setCatedoryId(id))
  }, [])

  const onChangeOrderClick = () => {
    setOrder(!order)
  }

  // Search
  const categorySearch = categoryId > 0 ? `category=${categoryId}` : ''


  // Render
  const pizzas = items.filter((obj : any) => {
    if (obj.title.toLowerCase().includes(seacrhValue.toLowerCase())) {
      return true
    }
    return false
  }).map((obj : any) => <PizzaBlock {...obj} key={obj.id}/>)

  const skeletons = [...new Array(4)].map((item, id) => <Skeleton key={id}/>) 


  const getPizzas = async () => {
    // @ts-ignore
    dispatch(fetchPizzas({
      isDesc,
      sortType,
      categorySearch
    }))

    window.scrollTo(0, 0)
  }


  // Effects
  useEffect(() => {
    if(order) {
      setIsDesc('asc')
    }
    else {
      setIsDesc('desc')
    }
  }, [order])

  useEffect(() => {
    getPizzas()
  }, [categoryId, sort, isDesc])


  // App
  return ( 
    <>
      <div className="content__top">
        <Categories 
          value={categoryId} 
          onCategoryClick={(id : number) => onCategoryClick(id)}
          categories={categories}
        />

        <Sort 
          onChangeOrderClick={onChangeOrderClick}
          order={order}
        />
      </div> 

      <h2 className="content__title">{categories[categoryId]}</h2>

      {
        status === 'error' ? (<div className="failed">
          <h2 className='failed__title'>Не удалось получить пиццы 😕</h2>
          <p className='failed__dect'>
            Вероятней всего, у вас отсутствует подключение к интернету.
          </p>
        </div>) :  (
        <div className="content__items">
          {
            status === 'loading'
            ? skeletons
            : pizzas
          }
        </div>
        )
      }
    </>
  )
}
 
export default Home