import React from 'react'

const Card = (props) => {
    return (
        
            <div className="card grid grid-gap-1 grid-row-gap1 grid col-2">
                <img src={props.img} alt={props.alt} />
                <h2 className="card-title">{props.name}</h2>
                <h4 className="card-text">{props.stars}</h4>
                <p className="card-text">{props.description}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
    )
}

export default Card
