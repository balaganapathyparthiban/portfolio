import { memo, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { BiMenuAltLeft } from 'react-icons/bi'

import { ReactComponent as Logo } from '../../../assets/images/logo.svg'

interface IHeader {
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
            className="z-10 flex items-center justify-between w-full h-full px-2 py-1 bg-white"
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" }
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ ease: "anticipate", duration: "0.5" }}
        >
            <div className="w-10 h-full">
                <Logo className="w-full h-full" />
            </div>
            <div className="w-10 h-full cursor-pointer" onClick={(event) => props.onMenuHandler && props.onMenuHandler(event, true)}>
                <BiMenuAltLeft className="w-full h-full text-gray-800" />
            </div>
        </motion.header>
    )
}

export default memo(Header)