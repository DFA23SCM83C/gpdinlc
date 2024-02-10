"use client"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from "react";
import PageTransition from "@/Components/PageTransition";
import '../Components/layout.css'
import './globals.css'
import Slider from "@/Components/Slider";
import Jumbotron from "@/Components/Jumbotron";
type IndexPageProps = {}
type IndexPageRef = React.ForwardedRef<HTMLDivElement>
import 'tailwindcss/tailwind.css';
import { Carousel } from 'flowbite-react';
export default function Home (props: IndexPageProps, ref: IndexPageRef){

    return (
        <PageTransition >
  <ToastContainer />
          <Jumbotron></Jumbotron>
        </PageTransition>

    );
}