import { FaGithub, FaLinkedin } from "react-icons/fa"

import appInfo from '../../assets/json/app_info.json'
import { ReactComponent as JSFiddle} from '../../assets/images/jsfiddle.svg'
import { redirect } from "../../utils/helper"

const Footer: React.FC = () => {
    return (
        <div className="w-full h-auto flex flex-col text-primary">
            <div className="flex flex-row items-center justify-around w-full h-auto">
                <div className="w-6 h-6"></div>
                <FaLinkedin className='w-6 h-6 cursor-pointer' onClick={() => redirect(appInfo.linkedinURL)} />
                <FaGithub className='w-6 h-6 mx-4 cursor-pointer' onClick={() => redirect(appInfo.githubURL)} />
                <JSFiddle className='w-8 h-6 cursor-pointer' onClick={() => redirect(appInfo.jsfiddleURL)} />
                <div className="w-6 h-6"></div>
            </div>
            <div className="mt-6 text-center">
                <p className="text-xs tracking-widest">Designed & Built by Bala Ganapathy Parthiban</p>
            </div>
        </div>
    )
}

export default Footer