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

            <div className="body center">
            <div className="example-container" style={{paddingLeft:'5px'}}>
           <Example></Example>
            </div>
            </div>

        </PageTransition>
    );
}