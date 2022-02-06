import React from 'react'

const LongCard = (props) => {
  return (

            <div className=" card card-horizontal">
                
                <img src={props.img} alt={props.alt} />
                <div className="card-body">
                    <a href={props.link}>
                        <h2 className="card-title">{props.name}</h2>
                    </a>
                    <h4 className="card-text">{props.tools}</h4>
                    <p className="card-text">{props.description}</p>                
                </div>
            </div>

    )

}

export default LongCard
