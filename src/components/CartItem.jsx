import React, {useState, useContext} from "react"
import { Context } from '../Context'

function CartItem({item, cost}) {
    const {removeFromCart} = useContext(Context) 
    const [hovered, setHovered] = useState(false)

    function cartIcon() {
        if(hovered) {
            return <i className="ri-delete-bin-fill" onClick={() => removeFromCart(item.id)}></i>
        } else {
            return <i className="ri-delete-bin-line"></i>
        }
    }

    return (
        <div className="cart-item" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            {cartIcon()}
            <img src={item.url} width="130px" />
            <p id={item.id}>${cost}</p>
        </div>
    )
}

export default CartItem