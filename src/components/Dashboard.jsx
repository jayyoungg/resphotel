import React from 'react'
import './Dashboard.css'
import Searchbar from './Searchbar'
import Datebar from './Datebar'
import Display from './Display'
import TrendingDestination from './TrendingDestination'
import BestOffers from './BestOffers'
import Explore from './Explore'

const Dashboard = () => {
  return (
    <div className='dashboard'>
        <Searchbar />
        <Datebar />
        <Display />
        <TrendingDestination />
        <BestOffers />
        <Explore />
        the dashboard is boarding
    </div>
  )
}

export default Dashboard