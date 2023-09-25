"use client"
import PageLayout from "@/Components/PageLayout";
import PageTransition from "@/Components/PageTransition";
import React from "react";
import HorizontalCard from "@/Components/Contact";
type IndexPageProps = {}
type IndexPageRef = React.ForwardedRef<HTMLDivElement>

export default function Page (props: IndexPageProps, ref: IndexPageRef){
    return (
        <PageTransition ref={ref}>
            <div className="IndexPage">
                <HorizontalCard></HorizontalCard>
            </div>
        </PageTransition>
    );
}