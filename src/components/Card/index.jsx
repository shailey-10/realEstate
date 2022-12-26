import React from 'react'
import {BiBed, BiBath, BiArea, BiHeartCircle} from 'react-icons/bi'
import './Card.css'

const Card = ({prop}) => {
  return (
        <div className='card'>
              <img src={prop.image} alt="" />
              <div className="contents">
                <div className="flex">
              <p className='price'><span>${prop.price}</span>/month</p>
              <BiHeartCircle />
              </div>
              <p className='name'>{prop.name}</p>
              <p className='location'>{prop.location}</p>
              <div className="facilities">
                <p><BiBed /> 3 Beds</p>
                <p><BiBath /> 2 Bathrooms</p>
                <p><BiArea /> 5x2 msq</p>
              </div>
              </div>
            </div>
  )
}

export default Card