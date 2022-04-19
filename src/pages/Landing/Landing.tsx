import { AnimatePresence, motion } from 'framer-motion'
import { useRef, useState } from 'react'

import Header from "./components/Header"
import SideMenu from './components/SideMenu'

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
                    visible: { x: "-75%" },
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
                    <div className="w-full h-auto p-4 mt-12">
                        <div className='w-full h-auto'>
                            <h1>Hi There, I'm</h1>
                        </div>
                        <div className='w-full h-auto'>
                            <h2>Bala Ganapathy Parthiban</h2>
                        </div>
                        <div className='w-full h-auto'>
                            <h3>
                                A Software Engineer specialised in frontend and backend development for complex scalable web apps. Want to know more about my work? Check out my project portfolio & resume.
                            </h3>
                        </div>
                    </div>
                </div>
            </motion.div>
            <SideMenu show={showMenu} onMenuHandler={onMenuHandler} />
        </main>
    )
}

export default Landing