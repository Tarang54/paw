import React from 'react'
import Avatar from '../../assets/avatar.png'
import Button from '../../atoms/Button/Index';

function AboutUs() {
  return (
    <div className='bg-black bg-opacity-60'>
      <div className="max-w-[1100px] flex flex-row justify-between items-center p-12 m-auto">
        <img src={Avatar} className='' alt="" />
        <div className='basis-3/5'>
            <div className='text-[24px] text-white leading-[32px] font-bold'>Who We Are</div>
            <div className="text-[12px] my-[10px] bg-gray-400 inline-block leading-[16px] p-[3px] rounded">
                Mission-driven
            </div>
            <div className='text-[16px] text-white leading-[24px]'>Leveraging technology for wildlife conservation.</div>
        </div>
        <Button className='basis-1/5' onClick={() => console.log('clicked3')} customText="Read More About Our Vision" customStyles={{backgroundColor: "#1F72EA", padding:"0 12px", maxWidth: "230px", color: "white", borderRadius: "8px", width: "40%", height: "40px"}}/>
      </div>
    </div>
  )
}

export default AboutUs;
