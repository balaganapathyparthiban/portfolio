import { FaGithub, FaLinkedin, FaCodepen } from 'react-icons/fa'

const Intro: React.FC = () => {
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
            <div className='w-full h-auto mt-4 flex flex-row'>
                <FaLinkedin className='text-primary w-6 h-6' />
                <FaGithub className='text-primary w-6 h-6 mx-4' />
                <FaCodepen className='text-primary w-6 h-6' />
            </div>
            <div className='w-64 h-14 mt-12 border-2 border-primary rounded-md text-primary flex flex-row justify-center items-center text-base text-center'>
                <span>Check out my works!</span>
            </div>
        </div>
    )
}

export default Intro