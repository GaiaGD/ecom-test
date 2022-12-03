import React, {useState, useContext} from "react"
import { Context } from '../Context'
import CartItem from "../components/CartItem"

function Cart() {
    const {cartItems, emptyCart} = useContext(Context) 
    const [buttonText, setButtonText] = useState("Place Order")

    const itemsInCartPage = cartItems.map(item => (
        <CartItem key={item.id} item={item} cost={"5.99"}/>
    ))


    function totalCost(){
        if(itemsInCartPage.length > 0){
            let total = 0
            for(let i = 0; i < itemsInCartPage.length; i++){
                let itemCost = Number(itemsInCartPage[i].props.cost)
                total += itemCost
            }
            return total.toLocaleString("en-US", {style: "currency", currency: "USD"})
        } else {
            return " $0"
        }
    }

    function placeOrder() {
        setButtonText("Ordering...")
        setTimeout(() => {
            console.log("Order placed!")
            setButtonText("Place Order")
            emptyCart()
        }, 3000)
    }

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {itemsInCartPage}
            <p className="total-cost">Total:  {totalCost()}</p>
            <div className="order-button">
            {cartItems.length > 0 && <button onClick={placeOrder}>{buttonText}</button>}
            </div>
        </main>
    )
}

export default Cart