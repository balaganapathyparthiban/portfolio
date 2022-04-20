import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaGithub, FaLinkedin, FaCodepen } from 'react-icons/fa'

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
                    <div className="w-screen h-screen pt-16 px-4 flex flex-col items-center justify-start ">
                        <div className='w-full h-auto'>
                            <h1 className='text-primary text-base font-semibold'>Hi There, I'm</h1>
                        </div>
                        <div className='w-full h-auto mt-4'>
                            <h2 className='text-primary text-4xl font-semibold'>Bala Ganapathy Parthiban</h2>
                        </div>
                        <div className='w-full h-auto mt-4'>
                            <h3 className='text-gray-600 text-lg'>
                                A Software Engineer specialised in frontend and backend development for complex scalable web apps. AI & Blockchain practitioner🤖
                            </h3>
                        </div>
                        <div className='w-full h-auto mt-4 flex flex-row'>
                            <FaLinkedin className='text-primary w-6 h-6' />
                            <FaGithub className='text-primary w-6 h-6 mx-4' />
                            <FaCodepen className='text-primary w-6 h-6' />
                        </div>
                        <div className='w-full h-auto mt-12 flex flex-row justify-between items-center text-sm text-center'>
                            <div className='w-auto h-12 border-2 border-primary rounded px-2 flex flex-row items-center justify-center'>
                                <span>Check out my works</span>
                            </div>
                            <div className='mx-2'></div>
                            <div className='w-auto h-12 bg-primary text-white rounded px-2 flex flex-row items-center justify-center'>
                                <span>Check out my resume</span>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
            <SideMenu show={showMenu} onMenuHandler={onMenuHandler} />
        </main>
    )
}

export default Landing