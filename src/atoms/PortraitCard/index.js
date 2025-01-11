import React from 'react'

function PortraitCard({img, title, description}) {
  return (
    <div className='m-0 p-0 border-[1px] border-black border-opacity-10 overflow-hidden w-[30%] rounded-lg'>
      <img src={img} alt="" />
      <div className="p-3">
        <p className='leading-[24px] opacity-75 text-[16px]'>{title}</p>
        <p className='leading-[28px] text-[20px] text-nowrap overflow-hidden text-ellipsis'>{description}</p>
      </div>
    </div>
  )
}

export default PortraitCard;
