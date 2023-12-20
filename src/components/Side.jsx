import React from 'react'
import './Side.css'
import Userimg from './Userimg'
import { FaHome, FaCity, FaTicketAlt, FaHeart, FaScrewdriver } from 'react-icons/fa'

const Side = () => {
    return (
        <div className='sidebar'>
            <div className="sideinfo">
                MimaBooking
            </div>
            <Userimg />
            this is the side

            <div className="listings">
                <ul>
                    <li> <FaHome /> {'\u00A0'} Dashboard</li>
                    <li> <FaCity /> {'\u00A0'} Explore City</li>
                    <li> <FaTicketAlt /> {'\u00A0'}Ticket</li>
                    <li> <FaHeart />  {'\u00A0'}Favorites</li>
                    <li> <FaScrewdriver /> {'\u00A0'}Settings</li>
                </ul>
            </div>

        </div>
    )
}

export default Side