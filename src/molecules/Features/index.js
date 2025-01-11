import React from 'react'
import PortraitCard from '../../atoms/PortraitCard';
import img1 from '../../assets/hero.png'
import img2 from '../../assets/3.png'
import img3 from '../../assets/2.png'


function Features() {
    const CardData = [
        {
            title : "Revolutionizing Wildlife Monitoring with Autonomous Drones",
            description : "Real-time threat detection, behavioral analysis, and automated response with 89% precision.",
            img:img1,
        },
        {
            title : "Revolutionizing Wildlife Monitoring with Autonomous Drones",
            description : "Real-time threat detection, behavioral analysis, and automated response with 89% precision.",
            img:img2,
        },
        {
            title : "Revolutionizing Wildlife Monitoring with Autonomous Drones",
            description : "Real-time threat detection, behavioral analysis, and automated response with 89% precision.",
            img:img3,
        }
    ]
  return (
    <div className='flex flex-row justify-between items-center py-[40px] px-12 max-w-[1100px] m-auto'>
        {CardData.map((item, index) => (
                <PortraitCard key={index} img={item.img} title={item.title} description={item.description}/>
        ))}
    </div>
  )
}

export default Features;
