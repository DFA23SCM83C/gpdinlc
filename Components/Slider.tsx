import React, {useEffect, useRef, useState} from "react";
import {motion} from "framer-motion";
import image from "@/app/image";
import '../app/carousel.css';

export default function Slider (){

    const [width , setwidth] =useState(0)
    const carousel = useRef();
    useEffect(()=>{
        // Check if carousel.current is defined
        if (carousel.current) {
            setwidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
        }

    },[])
    return (
        <>
            <div className="bodycarousel">
                <motion.div className="carousel" whileTap={{cursor:"grabbing"}}>
                    <motion.div drag="x" dragConstraints={{right:0 ,left: -2000}}  className="inner-carousel"
                    >
                        {image.map((image, index) => {
                            const imageUrl = image.src;
                            return (
                                <motion.div key={index} className="item">
                                    <img src={imageUrl} alt=''/>
                                </motion.div>
                            )
                        })}
                    </motion.div>
                </motion.div>
            </div>
        </>
    );
}