import { FaGithub, FaLinkedin } from 'react-icons/fa'

import appInfo from '../../assets/json/app_info.json'
import { ReactComponent as JSFiddle} from '../../assets/images/jsfiddle.svg'
import { redirect, scrollToView } from '../../utils/helper'

interface IInto {
    projectRef: React.MutableRefObject<HTMLDivElement | null>,
}

const Intro: React.FC<IInto> = (props) => {
    return (
        <div className="w-full h-full flex flex-col justify-start ">
            <div className='w-full h-auto'>
                <h1 className='text-primary text-base font-semibold'>Hi There, I'm</h1>
            </div>
            <div className='w-full h-auto mt-4'>
                <h2 className='text-primary text-4xl font-semibold'>Bala Ganapathy Parthiban</h2>
            </div>
            <div className='w-full h-auto mt-4'>
                <h3 className='text-gray-600 text-lg'>
                    A Software Engineer specialized in frontend and backend development for complex scalable web apps. AI & Blockchain practitioner🤖
                </h3>
            </div>
            <div className='w-full h-auto mt-4 flex flex-row text-primary '>
                <FaLinkedin className='w-6 h-6 cursor-pointer' onClick={() => redirect(appInfo.linkedinURL)} />
                <FaGithub className='w-6 h-6 mx-4 cursor-pointer' onClick={() => redirect(appInfo.githubURL)} />
                <JSFiddle className='w-8 h-6 cursor-pointer' onClick={() => redirect(appInfo.jsfiddleURL)} />
            </div>
            <div className='w-64 h-14 mt-12 border-2 border-primary rounded-md text-primary flex flex-row justify-center items-center text-base text-center cursor-pointer' onClick={() => scrollToView(props.projectRef)}>
                <p className='tracking-widest'>Check out my works!</p>
            </div>
        </div>
    )
}

export default Intro