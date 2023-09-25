"use client"
import PageLayout from "@/Components/PageLayout";
import React from 'react';
import PageTransition from "@/Components/PageTransition";
import {Example} from "@/Components/Carousel";
import "@/Components/style.css";
type IndexPageProps = {}
type IndexPageRef = React.ForwardedRef<HTMLDivElement>
export default function Page (props: IndexPageProps, ref: IndexPageRef){
    return (
        <PageTransition ref={ref}>

            <div className="body center">
            <div className="example-container">
           <Example></Example>
            </div>
            </div>

        </PageTransition>
    );
}