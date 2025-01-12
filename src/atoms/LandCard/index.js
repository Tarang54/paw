import React from 'react'
import img from '../../assets/1.png'

function LandCard({img, title, description}) {
  return (
    <div className='m-0 p-0 flex border-[1px] border-black border-opacity-10 overflow-hidden w-[45%] rounded-lg'>
      <img src={img} width="100px" height="100px" className='m-4' alt="" />
      <div className="p-3">
        <p className='leading-[28px] text-[20px] '>{title}</p>
        <p className='leading-[24px] opacity-75 text-[16px]'>{description}</p>
      </div>
    </div>
  )
}

export default LandCard
