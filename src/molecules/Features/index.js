import React from 'react'
import PortraitCard from '../../atoms/PortraitCard';
import img1 from '../../assets/hero.png'
import img2 from '../../assets/3.png'
import img3 from '../../assets/2.png'
import LandCard from '../../atoms/LandCard';


function Features({index}) {
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
    const LandCardData = [
        {
            title : "Embedded Video",
            description : "Immerse yourself in the world of wildlife monitoring.",
            img:img2,
        },
        {
            title : "Interactive Simulation",
            description : "Interact with our system for a live demo experience.",
            img:img2,
        }
    ]
  return (
    <>
        {index === 0 ? 
            <div className='flex flex-row justify-between items-center py-[40px] px-12 max-w-[1100px] m-auto'>
                {CardData.map((item, index) => (
                        <PortraitCard key={index} img={item.img} title={item.title} description={item.description}/>
                ))}
            </div>: 
            //for bottom features - landscape mode
            <div className='flex flex-row justify-between items-center py-[40px] px-12 max-w-[1100px] m-auto'>
                {LandCardData.map((item, index) => (
                     <LandCard key={index} img={item.img} title={item.title} description={item.description}/>
                ))}
            </div>
            }
    </>
  )
}

export default Features;
