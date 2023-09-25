import React from "react";
import NavBar from "@/Components/NavBar";


export default function PageLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <main className="   p-24">
                <div className="z-10  w-full   font-mono text-sm ">
                <NavBar/>
                {children}
                </div>
            </main>
        </>
    );
}
