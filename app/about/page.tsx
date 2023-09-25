"use client"
import PageLayout from "@/Components/PageLayout";
import PageTransition from "@/Components/PageTransition";
import React from "react";
import Layout from "@/Components/LayoutCards";
type IndexPageProps = {}
type IndexPageRef = React.ForwardedRef<HTMLDivElement>

export default function Page (props: IndexPageProps, ref: IndexPageRef){

    return (
        <PageTransition ref={ref}>
            <div className="IndexPage">
                <div className="body" >
                    <div className="App" >
                        <Layout title = "Vision" description="Our vision is to be a beacon of hope and transformation in our community, reflecting the spirit of new life in Christ. We aspire to nurture faith, foster unity, and empower individuals to discover their purpose. Together, we'll create a world where God's love brings renewal and abundant life to all."></Layout>

                        <Layout title = "Mission" description="Our mission is to passionately share the message of salvation and God's grace, leading people to embrace new life in Christ. Through worship, discipleship, and compassionate outreach, we aim to foster spiritual growth, build a loving community, and impact our world positively, one soul at a time."></Layout>
                        <Layout title = "Location" description="4349 S Kedzie Chicago, IL 60632"></Layout>
                    </div>
                </div>
            </div>
        </PageTransition>
    );
}