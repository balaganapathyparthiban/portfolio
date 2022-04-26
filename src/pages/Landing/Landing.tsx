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
                    <div className="fixed top-0 left-0 z-10 w-full h-12">
                        <Header
                            sideMenuOpened={showMenu}
                            onMenuHandler={onMenuHandler}
                            menuRef={{
                                intro: introRef,
                                about: aboutRef,
                                experience: experienceRef,
                                projects: projectsRef,
                                contact: contactRef
                            }}
                        />
                    </div>
                    <div className='w-full h-full pt-16 px-6 md:px-12 md:pt-24 lg:px-24 lg:pt-20 xl:w-[1024px] xl:mx-auto'>
                        <div ref={introRef} className="w-full h-full">
                            <Intro projectRef={projectsRef} />
                        </div>
                        <div ref={aboutRef} className='mt-16 w-full h-auto md:mt-20 lg:mt-24'>
                            <About />
                        </div>
                        <div ref={experienceRef} className='mt-16 w-full h-auto md:mt-20 lg:mt-24'>
                            <Experience />
                        </div>
                        <div ref={projectsRef} className='mt-16 w-full h-auto md:mt-20 lg:mt-24'>
                            <Projects />
                        </div>
                        <div ref={contactRef} className='mt-16 w-full h-auto md:mt-20 lg:mt-24'>
                            <Contact />
                        </div>
                        <div className='mt-16 mb-6 w-full h-auto'>
                            <Footer />
                        </div>
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