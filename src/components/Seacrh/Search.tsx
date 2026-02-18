import { useContext } from 'react'
import {SearchContext} from '../../App'
import { memo } from 'react'

const Search = () => {
  const { seacrhValue, setSeacrhValue } : any = useContext(SearchContext)
 
  return ( 
    <input 
      value={seacrhValue}
      className="search"
      onChange={(event) => setSeacrhValue(event.target.value)} 
      placeholder="Поиск пиццы..."
      />
   )
}
 
export default memo(Search)