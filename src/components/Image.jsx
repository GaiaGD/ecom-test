import React from 'react'

export default function Image(props){
    return (
        <div
        className={`${props.className} image-container`}
        >
            <img
            src={props.img.url}
            className="image-grid" />
        </div>
    )
}