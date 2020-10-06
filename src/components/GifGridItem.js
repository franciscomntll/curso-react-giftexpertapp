import React from 'react'

export const GifGridItem = ({id, title, url}) => {
    
    return (
        <div className="card animate__animated animate__bounceInDown animate__delay-10s ">
            <img src={url} alt={title}></img>
            <p>{title}</p>
        </div>
    )
}
