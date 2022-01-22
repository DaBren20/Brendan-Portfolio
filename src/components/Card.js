import React from 'react'

const Card = (props) => {
    return (
        <div className='Row'>
            <div className="row">
                <div className="col-sm-1">
                    <div className="card">
                        <div className="card-body">
                            <img href="" alt="" />
                            <h2 className="card-title">{props.name}</h2>
                            <h4 className="card-text">{props.stars}</h4>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    )
}

export default Card
