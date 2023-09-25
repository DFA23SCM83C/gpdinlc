"use client"
import PageLayout from "@/Components/PageLayout";
import React from "react";
import PageTransition from "@/Components/PageTransition";

import Slider from "@/Components/Slider";
import Jumbotron from "@/Components/Jumbotron";
type IndexPageProps = {}
type IndexPageRef = React.ForwardedRef<HTMLDivElement>

import { Carousel } from 'flowbite-react';
export default function Home (props: IndexPageProps, ref: IndexPageRef){

    return (
        <PageTransition>

          <Jumbotron></Jumbotron>
        </PageTransition>

    );
}