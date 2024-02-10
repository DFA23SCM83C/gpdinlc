"use client"
import React from 'react';
import PageTransition from "@/Components/PageTransition";
import Layout from "@/Components/LayoutCards";

type IndexPageProps = {}
type IndexPageRef = React.ForwardedRef<HTMLDivElement>

export default function Page(props: IndexPageProps, ref: IndexPageRef) {
    return (
        <PageTransition ref={ref}>
            <div className="IndexPage">

                <div className="row">
                    <div className="col-4">
                        <Layout title="Vision" description={
                            <>
                                New Life Chicago berkomitmen menjangkau jiwa-jiwa baru untuk mengenal Yesus
                                Kristus sebagai Tuhan dan Juruselamat; agar mereka mengalami breakthrough,
                                dipulihkan oleh kuasa Roh Kudus agar menjadi murid-murid Kristus yang militant
                                untuk kemuliaan nama Tuhan.
                                <div></div>
                                <b>GPdI NEW LIFE CHICAGO ADALAH KELUARGA KERAJAAN ALLAH YANG:</b>
                                <ul className='max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400'>
                                    <li>MELAKUKAN KASIH</li>
                                    <li>HIDUP BENAR</li>
                                    <li>MENCERMINKAN YESUS</li>
                                    <li>RENDAH HATI</li>
                                    <li>PERCAYA AKAN KUASA DOA</li>
                                    <li>MEMPERLENGKAPI TUBUH KRISTUS YANG SEHAT DAN KUDUS</li>
                                    <li>MAU DI BANGAUN DIDALAM KASIH ALLAH UNTUK MENJADI DEWASA
                                        ROHANI</li>
                                    <li>MENGALAMI TEROBOSAN</li>
                                    <li>BISA MEMBERI DAMPAK POSITIF BAGI KELUARGA DAN LINGKUNGAN</li>
                                    <li>TUNDAK DAN TAAT PADA OTORITAS</li>
                                    <li>BERUSAHA MENJADI GEREJA YANG DAPAT MEMPENGARUHI KOTA
                                        DENGAN NILAI-NILAI KERAJAAN ALLAH</li>

                                </ul>
                            </>
                        }></Layout>
                    </div>
                    <div className="col-4">
                        <Layout title="Mission" description={
                            <ul className='max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400'>
                                <li>DIMURIDKAN DAN MEMURIDKAN </li>
                                <li>PEMBUKAAN KELOMPOK SEL YANG BARU</li>
                                <li>PENUH KASIH</li>
                                <li>KOMUNITAS AUTENTIK /YANG DAPAT DIPERCAYA</li>
                                <li>MEMPERLENGKAPI PELAYAN DAN JEMAAT</li>
                                <li>PENGUTUSAN
                                </li>

                            </ul>
                        }></Layout>
                    </div>
                    <div className="col-4">
                        <Layout title="Location" description="4349 S Kedzie Chicago, IL 60632"></Layout>
                    </div>
                </div>

            </div>
        </PageTransition>
    );
}
