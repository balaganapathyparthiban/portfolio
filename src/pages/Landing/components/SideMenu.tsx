import { motion } from "framer-motion"

interface ISideMenu {
    show: boolean,
    onMenuHandler?: (event: React.MouseEvent<any>, status: boolean) => void
}

const SideMenu: React.FC<ISideMenu> = (props) => {
    return (
        <motion.div
            className="absolute top-0 z-10 w-full h-full overflow-hidden text-white bg-deep-blue"
            variants={{
                visible: {},
                hidden: {}
            }}
            animate={props.show ? "visible" : "hidden"}
            exit="hidden"
            transition={{ ease: "anticipate", duration: "0.5" }}
        >
            <div className="flex flex-col items-end justify-start w-full h-full px-4 py-8">
                <p>hello</p>
                <p onClick={(event) => props.onMenuHandler && props.onMenuHandler(event, false)}>close</p>
            </div>
        </motion.div>
    )
}

export default SideMenu