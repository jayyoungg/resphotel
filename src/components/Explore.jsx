import React from 'react'
import './Explore.css'

const Explorer = [
    {
        id: 1,
        url: 'https://images.pexels.com/photos/19235968/pexels-photo-19235968/free-photo-of-luxurious-interior-of-opera-garnier.jpeg?auto=compress&cs=tinysrgb&w=600',
        name: 'La temple, France ',
        description: 'A nice place to chill'
    },
    {
        id: 2,
        url: 'https://images.pexels.com/photos/699466/pexels-photo-699466.jpeg?auto=compress&cs=tinysrgb&w=600',
        name: 'Eiffel Tower, Paris',
        description: 'A wonderful sight to see'
    },
    {
        id: 3,
        url: 'https://images.pexels.com/photos/19457037/pexels-photo-19457037/free-photo-of-street-by-palais-garnier-in-paris-france.jpeg?auto=compress&cs=tinysrgb&w=600',
        name: 'Paris, France',
        description: 'Very calm and relaxing place'
    }
]

const Explore = () => {
  return (
    <div className='Explore'>
        <h2>Explore France</h2>

        <div className="exploreholder">
            {Explorer.map(explorer =>{
                return(
                    <div className="exploring" key={explorer.id}>
                        <img src={explorer.url} style={{ height: '15.4vh', width: '15vw', borderRadius: '2vw', float: 'left', marginRight: '1vw' }} />
                        <h3>{explorer.name}</h3>
                        <p>{explorer.description}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Explore