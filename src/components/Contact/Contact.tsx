import appInfo from '../../assets/json/app_info.json'
import { redirect } from '../../utils/helper'
import TitleSection from '../TitleSection/TitleSection'

const Contact: React.FC = () => {
    return (
        <div className="w-full h-auto flex flex-col text-primary">
            <TitleSection title="Get In Touch" />
            <div className="flex flex-col mt-6 text-primary text-center items-center justify-center">
                <h2 className='w-full h-auto text-lg md:w-96 lg:w-[450px]'>
                    Send a general message or details of a project you'd like me to be a part of and I'll get back to you as soon as possible😀.
                </h2>
                <div className='mt-12 w-auto h-auto rounded-md py-3 tracking-wider text-primary border-2 border-primary px-6 flex flex--row item-center justify-center cursor-pointer' onClick={() => redirect(`mailto:${appInfo.emailAddress}`)}>
                    <p>Say Hello👋</p>
                </div>
            </div>
        </div>
    )
}

export default Contact