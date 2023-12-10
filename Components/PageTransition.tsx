import React, { forwardRef, useMemo } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'
import NavBar from "@/Components/NavBar";
import {Footer} from "flowbite-react";

type PageTransitionProps = HTMLMotionProps<'div'>
type PageTransitionRef = React.ForwardedRef<HTMLDivElement>

function PageTransition({ children, ...rest }: PageTransitionProps, ref: PageTransitionRef) {
    const onTheRight = { x: '100%' }
    const inTheCenter = { x: 0 }
    const onTheLeft = { x: '-100%' }

    const transition = { duration: 0.6, ease: 'easeInOut' }

    return (<>
        <main className="     p-12">
        <div className="row">
            <div className="col-12">
                <NavBar/>
            </div>
            <div className="col-12 " >
                <motion.div
                    ref={ref}
                    initial={onTheRight}
                    animate={inTheCenter}
                    exit={onTheLeft}
                    transition={transition}
                    {...rest}
                >

                    {children}
                </motion.div>
            </div>

        </div>

            <Footer container>
            <Footer.Copyright
            by="GPDI NLC™"
            href="/"
            year={2023}
        />
        <Footer.LinkGroup>
            <Footer.Link href="/about">
                About
            </Footer.Link>
            <Footer.Link href="/event">
                Events
            </Footer.Link>
            <Footer.Link href="/contact">
                Contact
            </Footer.Link>

        </Footer.LinkGroup>
        </Footer>

        </main>
        </>
    )
}

export default forwardRef(PageTransition)