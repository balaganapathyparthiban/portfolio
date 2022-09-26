import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

import { ReactComponent as Logo } from '../../assets/images/logo.svg'

const SplashScreen: React.FC = (props) => {
    const [showSplashScreen, setShowSplashScreen] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setShowSplashScreen(false)
        }, 2000)
    }, [])

    if (!showSplashScreen) {
        return (
            <>
                {props.children}
            </>
        )
    } else {
        return (
            <div className="opacity-100 w-screen h-screen bg-white flex flex-row items-center justify-center absolute top-0 left-0 right-0 bottom-0 z-50">
                <motion.div
                    className="w-24 h-24"
                    animate={{ opacity: 0.5, rotateZ: 360 }}
                    transition={{ ease: "easeInOut", duration: 2, repeat: Infinity }}
                >
                    <Logo className="w-full h-full text-primary" />
                </motion.div>
            </div>
        )
    }

}

export default SplashScreen