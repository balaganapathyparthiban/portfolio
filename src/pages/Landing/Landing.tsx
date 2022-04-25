import { motion } from 'framer-motion'
import { useRef, useState } from 'react'

import About from '../../components/About/About'
import Contact from '../../components/Contact/Contact'
import Experience from '../../components/Experience/Experience'
import Footer from '../../components/Footer/Footer'
import Header from "../../components/Header/Header"
import Intro from '../../components/Intro/Intro'
import Projects from '../../components/Projects/Projects'
import SideMenu from '../../components/SideMenu/SideMenu'

const Landing: React.FC = () => {
    const introRef = useRef<HTMLDivElement | null>(null);
    const aboutRef = useRef<HTMLDivElement | null>(null);
    const experienceRef = useRef<HTMLDivElement | null>(null);
    const projectsRef = useRef<HTMLDivElement | null>(null);
    const contactRef = useRef<HTMLDivElement | null>(null);
    const [showMenu, setShowMenu] = useState(false)

    const onMenuHandler = (event: React.MouseEvent<any>, status: boolean) => {
        event.preventDefault()
        event.stopPropagation()

        setShowMenu(status)
    }

    return (
        <main className="relative w-full h-full overflow-hidden">
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
                    <div className="fixed top-0 z-10 w-[320px] h-12">
                        <Header sideMenuOpened={showMenu} onMenuHandler={onMenuHandler} />
                    </div>
                    <div ref={introRef} className="w-full h-full pt-16 px-4">
                        <Intro projectRef={projectsRef} />
                    </div>
                    <div ref={aboutRef} className='w-full h-auto px-4'>
                        <About />
                    </div>
                    <div ref={experienceRef} className='mt-16 w-full h-auto px-4'>
                        <Experience />
                    </div>
                    <div ref={projectsRef} className='mt-16 w-full h-auto px-4'>
                        <Projects />
                    </div>
                    <div ref={contactRef} className='mt-16 w-full h-auto px-4'>
                        <Contact />
                    </div>
                    <div className='mt-16 mb-6 w-full h-auto px-4'>
                        <Footer />
                    </div>
                </div>
            </motion.div>
            <SideMenu
                show={showMenu}
                onMenuHandler={onMenuHandler}
                menuRef={{
                    intro: introRef,
                    about: aboutRef,
                    experience: experienceRef,
                    projects: projectsRef,
                    contact: contactRef
                }}
            />
        </main>
    )
}

export default Landing