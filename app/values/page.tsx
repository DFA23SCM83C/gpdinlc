"use client"
import React from 'react';
import PageTransition from "@/Components/PageTransition";
import Layout from "@/Components/LayoutCards";
type IndexPageProps = {}
type IndexPageRef = React.ForwardedRef<HTMLDivElement>
export default function Page(props: IndexPageProps, ref: IndexPageRef) {
    return (
        <>
            <PageTransition ref={ref}>
            <Layout title="VALUES" description={
    <>
    <div>&nbsp;</div>
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">LOVE</h5>
</div>
<div>&nbsp;</div>
<div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">INTEGRITY</h5>
</div>
<div>&nbsp;</div>
<div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">FELLOWSHIP</h5>
</div>
<div>&nbsp;</div>
<div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">EMPOWERING PEOPLE AROUND</h5>
</div>
</>
}></Layout>
<div>&nbsp;</div>
                <Layout title="MOTTO" description={
                    <>
                        ATAS DASAR RENCANA DAN KEHENDAK TUHAN GPdI NEW LIFE CHICAGO
                        RINDU UNTUK MENJADI:
                        <ul className='max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400'>
                            <li>GEREJA YANG MISIONER </li>
                            <li>GEREJA YANG HIDUP DALAM TUHAN</li>
                            <li>GEREJA YANG PENUH KASIH</li>

                        </ul>
                        Melalui 3 pilar penginjilan, untuk mengajarkan dan mendorong setiap pelayan
dan jemaat GPdI NEW LIFE CHICAGO supaya mengalami secara pribadi dibaptis
dalam roh kudus dan merindukan urapannya, untuk misi Kerajaan Allah.
<div></div>
<b>3 PILAR PENGINJILAN GPdI NEW LIFE CHICAGO:</b>
<ol className="relative border-s border-gray-200 dark:border-gray-700">                  
    <li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
       
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">PELAYANAN KELUAR</h3>
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Memiliki semangat penginjilan dengan menjadi mitranya Allah untuk
menginjili dunia ini</p>
    </li>
    <li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">PELAYANAN KEATAS</h3>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">Menjadi GEREJA dimana SETIAP JEMAAT meiliki kerinduan untuk selalu
beribadah kepada Allah dan ada dalam persekutuan Tuhan </p>
</li>
    <li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">PELAYANAN KEDALAM</h3>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">Menjadi sarana untuk memenuhi maksud Allah yaitu membangun sebuah
jemaat, yang terdiri dari orang-orang kudus, yang sedang
disempurnakan supaya sesuai dengan kepenuhan Kristus</p>
    </li>
</ol>

                    </>
                }></Layout>


            </PageTransition>
        </>
    )
}