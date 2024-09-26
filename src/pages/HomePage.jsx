import React from 'react'
import Hero from '../components/Hero';
import DisplayAllSch from './DisplayAllSch';
import Scholarships from '../components/Scholarships';
const HomePage = () => {
  return (
   <>
   <Hero/>
   <Scholarships isHome='true'/>
   <DisplayAllSch/>
   </>
  )
}

export default HomePage