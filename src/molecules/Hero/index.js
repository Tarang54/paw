import React from 'react'
import Button from '../../atoms/Button/Index';
import HeroImg from "../../assets/1.png";
import HeroImg2 from "../../assets/4.png";
function Hero({index}) {
    const HeroData = [
        {
            title : "Revolutionizing Wildlife Monitoring with Autonomous Drones",
            description : "Real-time threat detection, behavioral analysis, and automated response with 89% precision.",
            btn1: "Watch Demo",
            btn2: "Learn More",
            leftWidth: "50%",
            rightWidth: "45%",
            img:HeroImg,
            imgWidth: "100%",
            bottomMargin: "25px",
            isCenter: false
        },
        {
            title : "Cutting-Edge Features of Our System",
            description : "Explore the features that make our system stand out.",
            btn1: null,
            btn2: "Learn More",
            leftWidth: "70%",
            rightWidth: "20%",
            img: HeroImg2,
            imgWidth: "100%",
            bottomMargin:"0px",
            isCenter: false
        },
        {
          title: "See Our System in Action",
          description : "Experience our drone monitoring system firsthand.",
          btn1: null,
          btn2: "Watch Full Demo",
          leftWidth: "100%",
          rightWidth: "0%",
          img: null,
          imgWidth: "0%",
          bottomMargin:"0px",
          isCenter: true
        }
    ]
  return (
    <div className='flex flex-row justify-between items-center py-[40px] px-12 max-w-[1100px] m-auto' style={{marginBottom: HeroData[index].bottomMargin}}>
      <div className="flex flex-col gap-6 justify-around" style={{width: HeroData[index].leftWidth, textAlign: HeroData[index].isCenter ? "center" : null}}>
        <div className="text-[40px] font-bold leading-[48px]">{HeroData[index].title}</div>
        <div className="text-[16px]">{HeroData[index].description}</div>
        <div className="flex flex-row flex-wrap items-center gap-2 justify-start">
            {HeroData[index].btn1 && <Button onClick={() => console.log('clicked2')} customText={HeroData[index].btn1} customStyles={{backgroundColor: "white", border: "1px solid black",minWidth: "130px", padding:"0 12px", color: "black", borderRadius: "8px", width: "40%", height: "40px"}}/>}
            {HeroData[index].btn2 && <Button onClick={() => console.log('clicked')} customText={HeroData[index].btn2} customStyles={{backgroundColor: "#1F72EA", padding:"0 12px", minWidth: "130px", color: "white", borderRadius: "8px", width: "40%", height: "40px", margin: HeroData[index].isCenter ? "auto" : null}}/>}
        </div>
      </div>
      <div className="hero-right" style={{width: HeroData[index].rightWidth}}>
        <img src={HeroData[index].img} alt="" className='self-end' width={HeroData[index].imgWidth}/>
      </div>
    </div>
  )
}

export default Hero
