import React from 'react'
import './event.css'
import Birthday from '../assests/Birthday.png'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { MdLocationPin } from 'react-icons/md'
import { BsChevronRight } from 'react-icons/bs'

const Event = ({ inputs }) => {
  return (
    <div className='event'>
      <div className='event1'>
        <div className='header'>
          <h1>Birthday Bash</h1>
          <p>Hosted by Elysia</p>
        </div>
        <div className='box'>
          <div className='box1'>
            <div className='icon'>
              <FaRegCalendarAlt />
            </div>
            <div className='pTag'>
              <h4>18 August 6:00PM</h4>
              <p>to <span>19 August 1:00PM </span>UTC +10</p>
              
            </div>
            <div>
              <BsChevronRight />
            </div>
          </div>
          <div className='box2'>
            <div className='icon'>
              <MdLocationPin />
            </div>
            <div className='pTag'>
              <h4>{inputs.street}</h4>
              <p>{inputs.suburb}, {inputs.state}, {inputs.postcode}</p>
            </div>
            <div>
              <BsChevronRight />
            </div>
          </div>
          
        </div>
      </div>
      <div className='event2'>
        <img src={Birthday} alt='Birthday' />
      </div>
    </div>
  )
}

export default Event