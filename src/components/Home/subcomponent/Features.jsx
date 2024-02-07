import React from 'react'
import Photo from './description/Photo'
import Describe from './description/Describe'
import Details from './description/Details'

const Features = () => {
  return (
    <div className=' h-auto flex flex-col md:flex-row justify-between items-center p-[5rem]  '>
     <Photo/>
     <Describe/>
     <Details/>
    </div>
  )
}

export default Features