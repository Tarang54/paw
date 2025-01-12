import React from 'react'

function Footer() {
  return (
    <div className='flex flex-row justify-between items-center  py-[50px] m-auto px-24'>
      <div>
        <p className='text-[16px] leading-[24px] opacity-75'>© 2024 Wildlife Monitoring System. All rights reserved.</p>
      </div>
      <div className='flex flex-col items-center gap-[8px]'>
        <p className='text-[16px] leading-[24px] opacity-75'>Email: contact@wildlifemonitoring.com</p>
        <p className='flex gap-[5px]'>
            <span><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M4.66666 4.66675L18.3552 23.3334H23.3333L9.64482 4.66675H4.66666Z" stroke="black" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M4.66666 23.3334L12.5627 15.4374M15.4327 12.5674L23.3333 4.66675" stroke="black" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
            </svg></span>
            <span><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M8.16666 11.6667V16.3333H11.6667V24.5H16.3333V16.3333H19.8333L21 11.6667H16.3333V9.33333C16.3333 9.02391 16.4562 8.72717 16.675 8.50838C16.8938 8.28958 17.1906 8.16667 17.5 8.16667H21V3.5H17.5C15.9529 3.5 14.4692 4.11458 13.3752 5.20854C12.2812 6.30251 11.6667 7.78624 11.6667 9.33333V11.6667H8.16666Z" stroke="black" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
            </svg></span>
            <span><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
            <path d="M5.83334 11.6666C5.83334 10.1195 6.44792 8.63576 7.54189 7.5418C8.63585 6.44783 10.1196 5.83325 11.6667 5.83325H23.3333C24.8804 5.83325 26.3642 6.44783 27.4581 7.5418C28.5521 8.63576 29.1667 10.1195 29.1667 11.6666V23.3333C29.1667 24.8803 28.5521 26.3641 27.4581 27.458C26.3642 28.552 24.8804 29.1666 23.3333 29.1666H11.6667C10.1196 29.1666 8.63585 28.552 7.54189 27.458C6.44792 26.3641 5.83334 24.8803 5.83334 23.3333V11.6666Z" stroke="black" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M13.125 17.5C13.125 18.6603 13.5859 19.7731 14.4064 20.5936C15.2269 21.4141 16.3397 21.875 17.5 21.875C18.6603 21.875 19.7731 21.4141 20.5936 20.5936C21.4141 19.7731 21.875 18.6603 21.875 17.5C21.875 16.3397 21.4141 15.2269 20.5936 14.4064C19.7731 13.5859 18.6603 13.125 17.5 13.125C16.3397 13.125 15.2269 13.5859 14.4064 14.4064C13.5859 15.2269 13.125 16.3397 13.125 17.5Z" stroke="black" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M24.0625 10.9375V10.9516" stroke="black" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
            </svg></span>
        </p>

      </div>
    </div>
  )
}

export default Footer
