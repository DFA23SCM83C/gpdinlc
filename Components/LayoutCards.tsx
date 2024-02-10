import {motion} from "framer-motion"
import {useState} from "react"
import 'tailwindcss/tailwind.css';
import  './layout.css'

// @ts-ignore
export default function Layout ({title , description }){

    const [isOpen, setIsOpen] = useState(false)
    return (
        <>

<div className="p-1">
    <motion.div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" onClick={() => setIsOpen(!isOpen)}>
        <motion.h2 layout="position" className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
        </motion.h2>
        {isOpen && (
            <motion.div>
                <div className="text-sm font-normal text-gray-700 dark:text-gray-400">{description}</div>
            </motion.div>
        )}
    </motion.div>
</div>

        </>
    )
}