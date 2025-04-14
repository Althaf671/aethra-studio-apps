"use client"

import React from "react";
import { motion } from "framer-motion"
import getImage from "../../assets/misc/assetsLoader";

function LoadingCircleSpinner() {
    return (
        <div className="spinner-bg fixed inset-0 flex items-center justify-center bg-opacity-10 z-1000">
            <motion.div
                className="loading-bg w-20 h-20 border-4 border-white"
                animate={{ rotate: 360 }}
                transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />
            <img src={getImage('misc/AethraLogo.jpeg')} className="absolute w-17 h-17 rounded-full" alt="Aethra-Logo" />
        </div>
    )
}

export default LoadingCircleSpinner;