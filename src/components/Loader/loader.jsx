import React, { useEffect } from "react";

import { motion, cubicBezier } from "framer-motion";
import { anim } from "../anim";

const Loader = ({ setLoading }) => {
  const text = ["G", "e", "n", "s", "h", "i", "n"];

  useEffect(()=>{
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);
   
    return () => clearTimeout(timer);
  },[])

  const loadingText = {
    initial: { opacity: 0 },
    animate: (i = 1) => ({
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.3,
        delayChildren: 0.4 * i,
        ease: cubicBezier(0.64, 0, 0.78, 0),
      },
    }),
  };

  const child = {
    animate: { opacity: 1,},
    initial: { opacity: 0,},
  };

  const popUp ={
    initial : {
      opacity: 0,
      y: 30
    },
    animate : {
      opacity : 1,
      y: 0,
      transition : {
        duration: 1.5,
        delay: 2.5,
        ease: cubicBezier(0.64, 0, 0.78, 0),
      }
    },
  }

  return (
    <motion.div>
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <motion.div className="text-5xl genshin-text" {...anim(loadingText)}>
          {text.map((letter, index) => (
            <motion.span key={index} variants={child}>
              {letter}
            </motion.span>
          ))}
        </motion.div>
        <motion.div className="p-2" {...anim(popUp)}>
          <h1 className="text-xl genshin-text">Impact</h1>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Loader;
