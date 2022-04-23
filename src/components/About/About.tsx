import dayjs from 'dayjs'

import appInfo from '../../assets/json/app_info.json'
import TitleSection from '../TitleSection/TitleSection'

const About: React.FC = () => {
    const expierenceInYears = dayjs().diff(dayjs('2018-10-01'), 'years', true).toFixed(1)

    return (
        <div className="w-full h-auto flex flex-col">
            <TitleSection title='About me' />
            <div className="mt-6 text-lg text-primary">
                <div className='w-auto h-auto'>
                    <p>Hello👋 My name is Bala Ganapathy Parthiban skilled software engineer with {expierenceInYears} years of expierence in full-stack web development. </p>
                    <p className='mt-4'>
                        Love to learn new technologies and making open-source projects check <strong>here</strong> for the projects I've done.
                    </p>
                    <p className='mt-4'>Here are a few technologies I've been working with recently:</p>
                    <div className='grid grid-cols-4 gap-y-4 mt-4'>
                        {
                            appInfo.technologies.map((technology) => (
                                <div key={technology.name} className="flex flex-col items-center justify-center">
                                    <img className='w-8 h-8' src={technology.logo} />
                                    <p className='text-xs text-primary mt-2'>{technology.name}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='mt-8 w-auto h-auto flex flex-row items-center justify-center'>
                    <img className='w-64 h-auto rounded-md shadow-md grayscale-[75%] hover:grayscale-0' src="/images/profile.jpg" />
                </div>
            </div>
        </div>
    )
}

export default About