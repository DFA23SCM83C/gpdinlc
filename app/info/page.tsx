"use client"
import React from 'react';
import PageTransition from "@/Components/PageTransition";
import {Example} from "@/Components/Carousel";
import "@/Components/style.css";
type IndexPageProps = {}
type IndexPageRef = React.ForwardedRef<HTMLDivElement>
export default function Page (props: IndexPageProps, ref: IndexPageRef){
    return (
        <PageTransition ref={ref}>
            <ol className="relative border-s border-gray-200 dark:border-gray-700">
            <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">December 2023</time> 
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Christmas 2023</h3>        
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">What is love ?</p>
         <div className="aspect-video">
    <iframe
      className="w-full h-full"
    
      src="https://www.youtube.com/embed/FoCY98Ss4do"
     
     frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen>
    </iframe>
    </div>
    
    </li>
    </ol>
        </PageTransition>
    )}
