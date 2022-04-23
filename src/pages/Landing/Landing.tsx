import { motion } from 'framer-motion'
import { useState } from 'react'
import About from '../../components/About/About'
import Experience from '../../components/Experience/Experience'

import Header from "../../components/Header/Header"
import Intro from '../../components/Intro/Intro'
import SideMenu from '../../components/SideMenu/SideMenu'

const Landing: React.FC = () => {
    const [showMenu, setShowMenu] = useState(false)

    const onMenuHandler = (event: React.MouseEvent<any>, status: boolean) => {
        event.preventDefault()
        event.stopPropagation()

        setShowMenu(status)
    }

    return (
        <main className="relative w-screen h-screen overflow-hidden">
            <motion.div
                className="absolute top-0 z-20 w-full h-full overflow-hidden shadow-lg"
                variants={{
                    visible: { x: "-60%" },
                    hidden: { x: 0 }
                }}
                animate={showMenu ? "visible" : "hidden"}
                transition={{ ease: "easeInOut", duration: "0.5", delay: 0.25 }}
            >
                <div
                    id="landing-view-port"
                    className="w-full h-full overflow-x-hidden overflow-y-auto bg-white"
                    style={{ overflowY: showMenu ? "hidden" : "auto" }}
                    onClick={(event) => onMenuHandler(event, false)}
                >
                    <div className="fixed top-0 z-10 w-full h-12">
                        <Header sideMenuOpened={showMenu} onMenuHandler={onMenuHandler} />
                    </div>
                    <div className="w-screen h-screen pt-16 px-4">
                        <Intro />
                    </div>
                    <div className='w-screen h-auto px-4'>
                        <About />
                    </div>
                    <div className='mt-16 w-screen h-auto px-4'>
                        <Experience />
                    </div>
                </div>
            </motion.div>
            <SideMenu show={showMenu} onMenuHandler={onMenuHandler} />
        </main>
    )
}

export default Landing