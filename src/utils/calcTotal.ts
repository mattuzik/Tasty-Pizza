import { CartItem } from '../redux/slices/cartSlice'

const calcTotal = (items: CartItem[]) => {
  return items.reduce((sum, obj) => (obj.price * obj.count) + sum, 0)
}
export default calcTotal