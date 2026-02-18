import calcTotal from "./calcTotal"

const getItemsFromLs = () => {
  const data = localStorage.getItem('cart')
  const items = data ? JSON.parse(data) : []
  // return data ? JSON.parse(data) : []
  const totalPrice = calcTotal(items)

  return {
    items,
    totalPrice
  }
}

export default getItemsFromLs