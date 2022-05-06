import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { motion } from 'framer-motion'

import appInfo from '../../assets/json/app_info.json'
import { ReactComponent as JSFiddle } from '../../assets/images/jsfiddle.svg'
import { redirect, scrollToView } from '../../utils/helper'

interface IInto {
    projectRef: React.MutableRefObject<HTMLDivElement | null>,
}

const Intro: React.FC<IInto> = (props) => {
    return (
        <div className="w-full h-full flex flex-col justify-center">
            <motion.div
                className='w-full h-auto'
                variants={{
                    visible: { y: 0, opacity: 1 },
                    hidden: { y: "50px", opacity: 0 }
                }}
                initial="hidden"
                animate="visible"
                transition={{ ease: "easeInOut", duration: "1.2" }}
            >
                <h1 className='text-primary text-base font-semibold'>Hi There, I'm</h1>
            </motion.div>
            <motion.div
                className='w-full h-auto mt-4'
                variants={{
                    visible: { y: 0, opacity: 1 },
                    hidden: { y: "100ox", opacity: 0 }
                }}
                initial="hidden"
                animate="visible"
                transition={{ ease: "easeInOut", duration: "1.4" }}
            >
                <h2 className='text-primary text-4xl font-semibold md:text-6xl lg:text-8xl'>Bala Ganapathy Parthiban</h2>
            </motion.div>
            <motion.div
                className='w-full h-auto mt-4'
                variants={{
                    visible: { y: 0, opacity: 1 },
                    hidden: { y: "150px", opacity: 0 }
                }}
                initial="hidden"
                animate="visible"
                transition={{ ease: "easeInOut", duration: "1.6" }}
            >
                <h3 className='text-gray-600 text-lg md:text-xl lg:text-2xl'>
                    A Software Engineer specialized in frontend and backend development for complex scalable web apps. AI & Blockchain practitioner🤖
                </h3>
            </motion.div>
            <motion.div
                className='w-full h-auto mt-4 flex flex-row text-primary'
                variants={{
                    visible: { y: 0, opacity: 1 },
                    hidden: { y: "200px", opacity: 0 }
                }}
                initial="hidden"
                animate="visible"
                transition={{ ease: "easeInOut", duration: "1.8" }}
            >
                <FaLinkedin className='w-6 h-6 cursor-pointer' onClick={() => redirect(appInfo.linkedinURL)} />
                <FaGithub className='w-6 h-6 mx-4 cursor-pointer' onClick={() => redirect(appInfo.githubURL)} />
                <JSFiddle className='w-8 h-6 cursor-pointer' onClick={() => redirect(appInfo.jsfiddleURL)} />
            </motion.div>
            <motion.div
                className='w-64 h-14 mt-12 border-2 border-primary rounded-md text-primary flex flex-row justify-center items-center text-base text-center cursor-pointer'
                onClick={() => scrollToView(props.projectRef)}
                variants={{
                    visible: { y: 0, opacity: 1 },
                    hidden: { y: "250px", opacity: 0 }
                }}
                initial="hidden"
                animate="visible"
                transition={{ ease: "easeInOut", duration: "2" }}
            >
                <p className='tracking-widest'>Check out my works!</p>
            </motion.div>
        </div>
    )
}

export default Intro