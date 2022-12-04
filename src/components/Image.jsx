import React, {useContext, useState} from 'react'
import { Context } from '../Context'
import PropTypes from "prop-types"
import useHover from "../hooks/useHover"

function Image({className, image}){
    const [hovered, ref] = useHover()
    const {cartItems} = useContext(Context)
    const {toggleFavorite, addToCart, removeFromCart} = useContext(Context) 

    function heartIcon() {
        if(image.isFavorite) {
            return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(image.id)}></i>
        } else if(hovered) {
            return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(image.id)}></i>
        }
    }

    function cartIcon(itemId){

        if (cartItems.some(itemInCart => itemInCart.id === itemId)){
            return <i className="ri-shopping-cart-fill cart" onClick={() => removeFromCart(itemId)} ></i>
        }
        else if(hovered){
            return <i className="ri-add-circle-line cart" onClick={() => addToCart(image)}></i>
        }
    }

    return (
        <div className={`${className} image-container`} ref={ref} >
            {heartIcon()}
            {cartIcon(image.id)}
            <img src={image.url} className="image-grid" />
        </div>
    )


    Image.propTypes = {

        className: PropTypes.string,

        image: PropTypes.shape({
            url: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
            isFavorite: PropTypes.bool
          })
    }

}

export default Image