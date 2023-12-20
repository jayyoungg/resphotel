import React from 'react'
import './TrendingDestination.css'

const destinationImg = [
    { id: 1, url: 'https://images.pexels.com/photos/2373201/pexels-photo-2373201.jpeg?auto=compress&cs=tinysrgb&w=600', description: 'Visiting the best tourist areas chosen by the audience', location: 'London, Uk' , price: 250000 },
    { id: 2, url: 'https://images.pexels.com/photos/6480209/pexels-photo-6480209.jpeg?auto=compress&cs=tinysrgb&w=600', description: 'Visiting the best tourist areas chosen by the audience', location: 'Istanbul, Turkey' , price: 300000 },
    { id: 3, url: 'https://images.pexels.com/photos/19425327/pexels-photo-19425327/free-photo-of-a-bed-in-a-hotel-room.jpeg?auto=compress&cs=tinysrgb&w=600', description: 'Visiting the best tourist areas chosen by the audience', location: 'Montmarte, France' , price: 450000 }
]

const TrendingDestination = () => {
    return (
        <div className="TrendingDestination">
            <h2>Trending Destinations</h2>

            <div className="destimgholder">

                {destinationImg.map(destimg => {
                    return (
                        <div className="destinations" key={destimg.id}>
                            <img src={destimg.url} style={{ height: '15.4vh', width: '8vw', borderRadius: '2vw', float: 'left', marginRight: '1vw' }} />
                            <h3>{destimg.location}</h3>
                            <p>{destimg.description}</p>
                            <p>Price: {destimg.price}</p>
                        </div>
                    )
                })

                }
            </div>

        </div>

    )
}

export default TrendingDestination