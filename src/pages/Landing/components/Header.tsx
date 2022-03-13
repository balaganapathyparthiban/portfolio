import { memo, useEffect, useRef, useState } from 'react'
import { motion, useViewportScroll } from 'framer-motion'
import { BiMenuAltLeft } from 'react-icons/bi'

import { ReactComponent as Logo } from '../../../assets/images/logo.svg'

interface IHeader {
    onMenuHandler?: () => void
}

const Header: React.FC<IHeader> = (props) => {
    const { scrollY } = useViewportScroll()

    const scrollRef = useRef<boolean>(false)
    const headerRef = useRef<HTMLElement | null>(null)

    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        const cancelScrollY = scrollY.onChange(() => {
            /* Checking scroll-y, Scrolling in up or bottom direction to hide header */
            if (scrollY.get() < scrollY.getPrevious() && scrollRef.current) {
                scrollRef.current = false
                setHidden(false);
            } else if (scrollY.get() > 46 && scrollY.get() > scrollY.getPrevious() && !scrollRef.current) {
                scrollRef.current = true
                setHidden(true);
            }

            /* Adding shadow effect to header */
            if (!scrollRef.current && scrollY.get() > 0) {
                headerRef?.current?.classList.remove("shadow-transparent")
                headerRef?.current?.classList.add("shadow-lg")
            } else {
                headerRef?.current?.classList.remove("shadow-lg")
                headerRef?.current?.classList.add("shadow-transparent")
            }
        })

        /* Clear scroll-y change event */
        return cancelScrollY
    }, [])

    return (
        <motion.header
            ref={headerRef}
            variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: "-100%" }
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ ease: "anticipate", duration: "0.5" }}
            className="z-10 flex items-center justify-between w-full h-full px-2 py-1 bg-white"
        >
            <div className="w-10 h-full cursor-pointer" onClick={() => props.onMenuHandler && props.onMenuHandler()}>
                <BiMenuAltLeft className="w-full h-full text-gray-800" />
            </div>
            <div className="w-10 h-full">
                <Logo className="w-full h-full" />
            </div>
            <div className="w-10 h-full"></div>
        </motion.header>
    )
}

export default memo(Header)