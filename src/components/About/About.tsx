import dayjs from 'dayjs'

import appInfo from '../../assets/json/app_info.json'
import { scrollToView } from '../../utils/helper'
import TitleSection from '../TitleSection/TitleSection'

interface IAbout {
    menuRef: {
        projects: React.MutableRefObject<HTMLDivElement | null>,
    }
}

const About: React.FC<IAbout> = (props) => {
    const expierenceInYears = dayjs().diff(dayjs('2018-10-01'), 'years', true).toFixed(1)

    return (
        <div className="w-full h-auto flex flex-col">
            <TitleSection title='About me' />
            <div className="flex flex-col items-center mt-6 text-lg text-primary lg:flex-row lg:items-stretch">
                <div className='w-auto h-auto lg:w-3/5 lg:mr-6'>
                    <p className='text-base md:text-xl'>Hello👋 My name is Bala Ganapathy Parthiban skilled software engineer with {expierenceInYears} years of expierence in full-stack web development. </p>
                    <p className='mt-4 text-base md:text-xl'>
                        Love to learn new technologies and making open-source projects check <strong className='cursor-pointer' onClick={() => scrollToView(props.menuRef.projects)}>here</strong> for the projects I've done.
                    </p>
                    <p className='mt-4 text-base md:text-xl'>Here are a few technologies I've been working with recently:</p>
                    <div className='grid grid-cols-4 gap-y-4 mt-4 md:mt-6'>
                        {
                            appInfo.technologies.map((technology) => (
                                <div key={technology.name} className="flex flex-col items-center justify-center">
                                    <img className='w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16' src={technology.logo} />
                                    <p className='text-xs text-primary mt-2'>{technology.name}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='mt-8 relative z-0 lg:mt-0'>
                    <img className='w-64 rounded-md shadow-md grayscale-[75%] z-10 hover:grayscale-0 md:w-80 lg:w-96 lg:m-2 lg:shadow-none' src="/images/profile.jpg" />
                    <div className='absolute top-0 left-0 right-0 bottom-0 opacity-25 bg-primary w-36 h-full z-[-1] hidden lg:block'></div>
                </div>
            </div>
        </div>
    )
}

export default About