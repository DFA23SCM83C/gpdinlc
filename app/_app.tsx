"use client"
import { AnimatePresence } from 'framer-motion'
import { AppProps } from 'next/app'
import { usePathname } from 'next/navigation'; // Import usePathname instead of useRouter

const onExitComplete = () => {
    window.scrollTo({ top: 0 })
}
export default function App({ Component, pageProps }: AppProps) {
    const pageKey = usePathname(); // Use usePathname instead of useRouter().asPath

    return (
        <AnimatePresence onExitComplete={onExitComplete} initial={false} mode="wait" >
            <Component key={pageKey} {...pageProps} />
        </AnimatePresence>
    )
}
