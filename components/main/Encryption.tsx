"use client";
import React, { useState, useEffect } from "react";
import Link from 'next/link';

import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";

const Encryption = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.thingspeak.com/channels/2497564/feeds.json?api_key=QBSAOZVEIWG864Q7&results=2");
        const jsonData = await response.json();
        setData(jsonData);
        // console.log(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
// console.log(data['feeds'][0]);
  return (
    <div className="flex flex-row relative items-center justify-center min-h-screen w-full h-full" id="display">
      <div className="absolute w-auto h-auto top-0 z-[5]">
        <motion.div
          variants={slideInFromTop}
          className="text-[40px] font-medium text-center text-gray-200"
        >
          Display
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            
          </span>
         
        </motion.div>
      </div>


      <div className="Welcome-box px-[250px] py-[40px] border my-[300px] border-[#7042f88b] opacity-[0.9]">
        <h1 className="Welcome-text text-[12px]">{data && data.message}</h1>
      
        <div className="text-gray-300 mb-10">
          <p>Flow Rate:</p>
          {/* Adjusting the style for the flow rate value */}
          <p className="Flow-text text-[160px] font-bold">{data && data["feeds"][0][data["feeds"][0].length-1]}</p>
          <p>Total:</p>
          {/* Adjusting the style for the total value */}
          <p className="Flow-text text-[160px] font-bold">{data && data.total}</p>
        </div>
        
      </div>
   

    
    </div>
  );
};

const DisplayLink = () => (
  <Link href="/encryption">
    <a className="cursor-pointer">Display</a>
  </Link>
);

export default Encryption;
export { DisplayLink };
