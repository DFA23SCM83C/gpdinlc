import React from "react";
import '../app/globals.css'
import '../Components/style.css'
import 'tailwindcss/tailwind.css';
export default function Jumbotron (){
    return (
     
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
               <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">GPDI NLC</h1>
                    <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">THE YEAR LET GOD DRIVE YOU LIFE</h5>
                    <div className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <blockquote className="p-4 my-4 border-s-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800">
                    <p className="text-xl italic font-medium leading-relaxed text-gray-900 dark:text-white">"Penghotbah 9:10 FAYH: APA PUN YANG ENGKAU LAKUKAN, 
lakukanlah dengan sebaik-baiknya, karena di dalam alam maut yang 
sedang kautuju tidak akan ada lagi pekerjaan, perencanaan, 
pengetahuan, ataupun hikmat.</p>
</blockquote>
</div>
<div style={{padding:"10px"}}></div>
<div className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
<blockquote className="p-4 my-4 border-s-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800">
<p className="text-xl italic font-medium leading-relaxed text-gray-900 dark:text-white">"Efesus 4:15-16: TB: 15 tetapi dengan teguh berpegang kepada 
kebenaran di dalam kasih kita bertumbuh di dalam segala hal ke arah 
Dia, Kristus, yang adalah Kepala. 16 Dari pada-Nyalah seluruh tubuh, 
yang rapi tersusun dan diikat menjadi satu oleh pelayanan semua 
bagiannya, sesuai dengan kadar pekerjaan tiap-tiap anggota menerima 
pertumbuhannya dan membangun dirinya dalam kasih."</p>
</blockquote>
</div>
<div style={{padding:"10px"}}></div>
                    <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                        <a href="/values" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                            Values
                            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                        <a href="/info" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                            Videos
                        </a>
                    </div>
                </div>
         
    
    )
}