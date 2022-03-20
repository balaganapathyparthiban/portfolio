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
            <SideMenu show={showMenu} onMenuHandler={onMenuHandler} />
            <motion.div
                className="absolute top-0 z-20 w-full h-full overflow-hidden shadow-lg"
                variants={{
                    visible: { x: "-80%", y: "6%", height: "90%", borderRadius: "24px" },
                    hidden: { x: 0, y: 0, height: "100%", borderRadius: "0px" }
                }}
                animate={showMenu ? "visible" : "hidden"}
                transition={{ ease: "anticipate", duration: "0.5", delay: 0.25 }}
            >
                <div
                    id="landing-view-port"
                    className="w-full h-full overflow-x-hidden overflow-y-auto bg-white"
                    style={{ overflowY: showMenu ? "hidden" : "auto" }}
                    onClick={(event) => onMenuHandler(event, false)}
                >
                    <div className="fixed top-0 z-10 w-full h-12">
                        <Header onMenuHandler={onMenuHandler} />
                    </div>
                    <div className="w-full h-auto p-2 mt-12">
                        {
                            Array(100).fill(null).map((e, i) => (
                                <div key={i}>
                                    <p>{i}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </motion.div>
        </main>
    )
}

export default Landing