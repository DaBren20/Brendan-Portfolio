import React from 'react'

const Card = (props) => {
    return (
        
            <div className="card grid grid-gap-1 grid-row-gap1 grid col-2">
                
                {/*<img src={props.img} alt={props.alt} />*/}
                <a href={props.link}>
                    <h2 className="card-title">{props.name}</h2>
                </a>
                <h4 className="card-text">{props.stars}</h4>
                <p className="card-text">{props.description}</p>
            </div>
    )
}

export default Card
