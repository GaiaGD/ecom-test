import React, {useContext, useState} from 'react'
import { Context } from '../Context'

export default function Image(props){

    const [hovered, setHovered] = useState(false)
    const {toggleFavorite} = useContext(Context) 

    const heartIcon = hovered && <i onClick={() => toggleFavorite(props.img.id)} className="ri-heart-line favorite"></i>
    const cartIcon = hovered && <i className="ri-add-circle-line cart"></i>

    return (
        <div className={`${props.className} image-container`} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} >
            {heartIcon}
            {cartIcon}
            <img src={props.img.url} className="image-grid" />
        </div>
    )
}