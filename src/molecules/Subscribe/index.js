import React from 'react'
import Button from '../../atoms/Button/Index'

function Subscribe() {
  return (
    <div className='flex flex-row justify-between items-center  max-w-[1100px] py-[60px] m-auto px-12'>
      <div className="flex flex-col justify-between w-2/5">
        <div className="text-[40px] leading-[48px]">Subscribe to Updates</div>
        <div className="text-[16px] leading-[24px] opacity-75">Stay informed with the latest news and updates.</div>
      </div>
      <div className="w-[50%]">
        <form action="" className='flex flex-col justify-between gap-[5px]'>
            <label htmlFor="">Email</label>
            <input type="email" className='p-[6px] rounded-[6px] border-[1px] border-gray-200' placeholder='Enter your email'/>
            <p className='text-[12px] leading-[16px] text-gray-400'>We respect your privacy</p>
            <div className='my-[15px]'></div>
            <Button onClick={() => console.log('clicked Subscribe')} customText={"Subscribe"} customStyles={{backgroundColor: "#1F72EA", padding:"0 12px", minWidth: "130px", color: "white", borderRadius: "8px", width: "40%", height: "40px"}}/>
        </form>
      </div>
    </div>
  )
}

export default Subscribe
