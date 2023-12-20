import React from 'react'
import './BestOffers.css'

const Offers = [
    {id: 1, 
        url: 'https://images.pexels.com/photos/122244/pexels-photo-122244.jpeg?auto=compress&cs=tinysrgb&w=600',
        name: '7Seasons Apartments' , 
        location: 'Keshington, London' ,
        price: '$6500/night'
    },
    {id: 2,
         url: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=600',
        name: 'Along with the villa' ,
        location: 'Hungary, Budapest' ,
         price: '$65000/night'
        },
    {
        id: 3,
        url: 'https://images.pexels.com/photos/302831/pexels-photo-302831.jpeg?auto=compress&cs=tinysrgb&w=600',
        name: 'Resort and Recreation',
        location: 'William Street, Baxon',
        price: '$65000/night'
    },
    {
        id: 4,
        url: 'https://images.pexels.com/photos/2972864/pexels-photo-2972864.jpeg?auto=compress&cs=tinysrgb&w=600',
        name: 'Beautiful and Classy',
        location: 'Citadines OPera Paris, France',
        price: '$65000/night'
    },
    {
        id: 5,
        url: 'https://images.pexels.com/photos/2057611/pexels-photo-2057611.jpeg?auto=compress&cs=tinysrgb&w=600',
        name: 'Permanent peace',
        location: 'Sugar apartments, Brazil',
        price: '$65000/night'
    }
]


const BestOffers = () => {
  return (
    <div className='BestOffers'>
        <h2>Trending Offers</h2>
        <div className="bestofferholder">
        {Offers.map(offer => {
            return (
                <div className='offerholder' key={offer.id} >
                    <img src={offer.url} style={{ height: '16.4vh',
                    width: '15vw',
                    borderRadius: '2vw',
                    marginRight: '1vw',
                    margin: 'auto' }} />
                    
                    <h3>{offer.name}</h3>
                    <p>{offer.location}</p>
                    <h5>{offer.price}</h5>
                </div>
            )
        })

        }
     </div>
    </div>
  )
}

export default BestOffers