import { useDispatch } from "react-redux";
import { addItem, removeItem, minusItem } from "../../redux/slices/cartSlice";

type CartItemProps = {
    id: string,
    title: string,
    price: number,
    count: number,
    imageUrl: string,
    type: string,
    size: number
}

const CartItem = (props: CartItemProps) => {
  const {
    id,
    title,
    price,
    count,
    imageUrl,
    type,
    size
  } = props

  const dispatch = useDispatch()

  const onPlusClick = () => {
    dispatch(addItem({
      id,
    }))
  }

  const onMinusClick = () => {
    dispatch(minusItem(id))
  }

  const deleteItem = () => {
    if (window.confirm('Are you sure to delete this item?')) {
      dispatch(removeItem(id))
    }
  }

  return ( 
  <div className="cart__item">
    <div className="cart__item-info">
      <img src={imageUrl} className="cart__item-image" width={80} height={80}/>
      <div className="cart__item-text">
        <h4 className="cart__item-title">{title}</h4>
        <p className="cart__item-info">{type}, {size} см.</p>
      </div>
    </div>

    <div className="cart__item-actions">
      <div className="cart__item-counter">
        <div onClick={onMinusClick} className="button button--outline button--circle cart__item-count-minus">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z" fill="#EB5A1E"/>
          </svg>
        </div>
        <b>{count}</b>
        <div onClick={onPlusClick} className="button button--outline button--circle">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z" fill="#EB5A1E"/>
            <path d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z" fill="#EB5A1E"/>
          </svg>
        </div>
      </div>

      <div className="cart__item-price">
        <b>{price * count} ₽</b>
      </div>

      <div onClick={deleteItem} className="cart__item-remove">
        <div className="button button--outline button--circle">
          <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.80577 6.30671L5.55717 4.05811L7.80577 1.80951C8.2197 1.39558 8.2197 0.724371 7.80577 0.310441C7.39184 -0.103489 6.72063 -0.103489 6.30671 0.310441L4.05811 2.55904L1.80951 0.310441C1.39558 -0.103489 0.724369 -0.103489 0.310439 0.310441C-0.10349 0.724371 -0.103491 1.39558 0.310439 1.80951L2.55904 4.05811L0.310439 6.30671C-0.10349 6.72064 -0.10349 7.39184 0.310439 7.80577C0.724369 8.2197 1.39558 8.2197 1.80951 7.80577L4.05811 5.55717L6.30671 7.80577C6.72063 8.2197 7.39184 8.2197 7.80577 7.80577C8.2197 7.39184 8.2197 6.72064 7.80577 6.30671Z" fill="#D0D0D0" />
          </svg>
        </div>
      </div>
    </div>
  </div>
  )
}
 
export default CartItem;