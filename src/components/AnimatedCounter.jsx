import React, { useRef } from 'react'
import { counterItems } from '../constants'
import CountUp from 'react-countup'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedCounter = () => {
  const counterRef = useRef(null)

  useGSAP(() => {
    gsap.from(counterRef.current, {
      scrollTrigger: {
        trigger: counterRef.current,
        start: "top 80%",
      },
      y: 50,
      duration: 1,
      ease: "power2.out"
    })
  }, { scope: counterRef })

  return (
    <div id="counter" ref={counterRef} className="padding-x-lg xl:mt-0 mt-32 relative z-10">
      <div className="mx-auto grid-4-cols">
        {counterItems.map((item, index) => (
          <div
            key={index}
            className="bg-black-200 rounded-lg p-10 flex flex-col justify-center hover:bg-black-300 transition-all duration-300 cursor-pointer"
          >
            <div className="counter-number text-white text-5xl font-bold mb-2">
              <CountUp end={item.value} duration={3} enableScrollSpy scrollSpyOnce /> {item.suffix}
            </div>
            <div className="text-white-50 text-lg font-medium">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AnimatedCounter