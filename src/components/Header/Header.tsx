import { memo, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { BiMenuAltLeft } from 'react-icons/bi'
import { CgArrowLongLeftR } from 'react-icons/cg'

import { ReactComponent as Logo } from '../../assets/images/logo.svg'

interface IHeader {
    sideMenuOpened: boolean,
    onMenuHandler?: (event: React.MouseEvent<any>, status: boolean) => void
}

const Header: React.FC<IHeader> = (props) => {
    const scrollRef = useRef<boolean>(false)
    const headerRef = useRef<HTMLElement | null>(null)

    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        const landingViewPort = document.getElementById("landing-view-port")

        let previousScrollTop = 0
        landingViewPort?.addEventListener("scroll", (event) => {
            /* Checking scroll-y, Scrolling in up or bottom direction to hide header */
            if (landingViewPort.scrollTop < previousScrollTop && scrollRef.current) {
                scrollRef.current = false
                setHidden(false);
            } else if (landingViewPort.scrollTop > 46 && landingViewPort.scrollTop > previousScrollTop && !scrollRef.current) {
                scrollRef.current = true
                setHidden(true);
            }

            /* Adding shadow effect to header */
            setTimeout(() => {
                if (!scrollRef.current && landingViewPort.scrollTop > 0) {
                    headerRef?.current?.classList.remove("shadow-transparent")
                    headerRef?.current?.classList.add("shadow-lg")
                    headerRef?.current?.classList.add("border-b")
                } else {
                    headerRef?.current?.classList.remove("shadow-lg")
                    headerRef?.current?.classList.remove("border-b")
                    headerRef?.current?.classList.add("shadow-transparent")
                }
            }, 250)

            previousScrollTop = landingViewPort.scrollTop
        })

        /* Clear scroll-y change event */
        return () => {
            landingViewPort?.removeEventListener("scroll", () => { })
        }
    }, [])

    return (
        <motion.header
            ref={headerRef}
            className="z-10 flex items-center justify-between w-full h-full px-4 bg-white"
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" }
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ ease: "easeInOut", duration: "0.5" }}
        >
            <div className="w-10 h-full">
                <Logo className="w-full h-full text-primary" />
            </div>
            <div className="w-auto h-full flex flex-row items-center">
                <motion.div
                    className='w-10 h-full hidden'
                    variants={{
                        visible: { opacity: 1, display: "block", x: 0 },
                        hidden: { opacity: 0, display: "none", x: "25%" }
                    }}
                    animate={!props.sideMenuOpened ? "visible" : "hidden"}
                    transition={{ ease: "easeInOut", duration: "1", delay: 0.5 }}
                >
                    <BiMenuAltLeft className="w-full h-full text-primary cursor-pointer" onClick={(event) => props.onMenuHandler && props.onMenuHandler(event, true)} />
                </motion.div>
                <motion.div
                    className='w-8 h-full hidden'
                    variants={{
                        visible: { opacity: 1, display: "block", x: 0 },
                        hidden: { opacity: 0, display: "none", x: "-25%" }
                    }}
                    animate={props.sideMenuOpened ? "visible" : "hidden"}
                    transition={{ ease: "easeInOut", duration: "1", delay: 0.5 }}
                >
                    <CgArrowLongLeftR className="w-full h-full text-primary cursor-pointer" onClick={(event) => props.onMenuHandler && props.onMenuHandler(event, false)} />
                </motion.div>
            </div>
        </motion.header>
    )
}

export default memo(Header)