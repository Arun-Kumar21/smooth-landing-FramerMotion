import React, { useEffect, useState } from "react";

import { cubicBezier, motion } from "framer-motion";
import { anim } from "../anim";

const Banner = () => {
  const [backPos , setBackPos] = useState("bottom left");

  useEffect(()=>{
    setTimeout(()=>{
      setBackPos("center center")
    }, 500)
  },[])

  const shrinkIn = {
    initial: {
      scale: 0.9,
    },
    animate: {
      scale: 0.8,
      transition: {
        duration: 1,
        delay: 0.5,
      },
    },
  };

  const scaleUp = {
    initial: { scale: 0.7 },
    animate: {
      scale: 1.4,
      transition: {
        duration: 1,
        delay: 0.5,
      },
    },
  };

  const banner = {
    animate: {
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.1,
      },
    },
  };

  const letterAnimation = {
    initial: { y: 200 },
    animate: {
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1,
      },
    },
  };

  const popOut = {
    initial: {
      opacity: 0,
      y: 30,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.7,
        ease: cubicBezier(0.64, 0, 0.78, 0),
      },
    },
  };

  return (
    <motion.div className="w-screen h-screen relative" {...anim(banner)}>
      <div className="absolute">
        <svg width="200" height="200" viewBox="0 0 100 100">
          <motion.path
            d="M50,10
           a40,40 0 1,0 0,80
           a40,40 0 1,0 0,-80"
            fill="transparent"
            strokeWidth="1"
            stroke="#000"
            initial={{ pathLength: 0, pathOffset: 1 }}
            animate={{ pathLength: 1, pathOffset: 0 , scale: 1.2}}
            transition={{ duration: 2, delay: 1.5 }}
          />
          <motion.path
           d="M50,10 
           a30,30 0 1,0 0,60
           a30,30 0 1,0 0,-60"
            fill="transparent"
            strokeWidth="1"
            stroke="#000"
            initial={{ pathLength: 0, pathOffset: 1 }}
            animate={{ pathLength: 1, pathOffset: 0 }}
            transition={{ duration: 2.3, delay: 1.8 }}
          />
        </svg>
      </div>
      <motion.div
        className="text-9xl absolute p-8 genshin-text z-10 flex flex-col"
        {...anim(letterAnimation)}
      >
        <div>Raiden</div>
        <div className="ps-32">Shogun</div>
      </motion.div>

      <motion.div className="banner-image" style={{
        backgroundPosition : backPos,
        transition : "background-position 1s ease-in-out"
      }} {...anim(shrinkIn)}>
        <div className="nav-container w-full h-full">
          <div className="nav-hero flex justify-center items-center genshin-text font-bold w-full h-40 border-b border-black text-3xl">
            <motion.h1 {...anim(letterAnimation)}>Genshin</motion.h1>
          </div>
          <div className="main-nav ps-12 flex items-center justify-between p-4 genshin-text font-bold w-full h-40 bg-slate-200/90 text-3xl border-black border-b-2">
            <div className="w-1/2 h-full">
              <img src="/images/barcode.png" alt="" className="w-full h-full" />
            </div>
            <motion.div
              className="genshin-text text-7xl font-bold"
              id="main-banner"
            >
              Impact
            </motion.div>
          </div>
          <div className="empty border-b border-black h-40"></div>
          <div className="body-space border-r border-black"></div>
          <div className="nav-links border-black border-r border-t bg-slate-200/90 z-20">
            <motion.div className="w-full h-28 border-b border-black">
              <ul className="flex justify-between items-center h-full w-full p-4 genshin-text">
                <motion.li className="text-2xl" {...anim(popOut)}>
                  Home
                </motion.li>
                <motion.li className="text-2xl" {...anim(popOut)}>
                  About
                </motion.li>
                <motion.li className="text-2xl" {...anim(popOut)}>
                  Collection
                </motion.li>
              </ul>
            </motion.div>

            <div className="w-full h-52 flex justify-center items-center p-4">
              <motion.div className="genshin-text text-7xl" layout {...anim()}>
                Reign of Serenity
              </motion.div>
            </div>
          </div>
          <div className="hero-text border-black border-r border-t flex justify-center items-center bg-slate-200/90 text-[13rem] genshin-text z-30">
            <motion.h1 {...anim(letterAnimation)}>Genshin</motion.h1>
          </div>
          <div className="hero-image z-20 flex justify-end items-center absolute top-0 left-[25%] scale-75 h-screen w-screen">
            <motion.img src="/images/raiden.png" alt="" {...anim(scaleUp)} />
          </div>
          <div className="empty-space border-black border-t bg-slate-900/70"></div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Banner;
