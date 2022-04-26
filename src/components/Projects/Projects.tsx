import { FiGithub } from 'react-icons/fi'
import { MdOpenInNew } from 'react-icons/md'

import appInfo from '../../assets/json/app_info.json'
import { redirect } from '../../utils/helper'
import TitleSection from "../TitleSection/TitleSection"

const Projects: React.FC = () => {
    return (
        <div className="w-full h-auto flex flex-col text-primary">
            <TitleSection title="Projects" />
            <div className="grid grid-cols-1 gap-y-6 mt-6 text-primary md:grid-cols-2 md:gap-x-6 ">
                {
                    appInfo.projects.map((project, pIndex) => {
                        return (
                            <div key={pIndex} className="mt-4 px-4 py-6 border w-full h-auto rounded-md shadow-md bg-white">
                                <div className="flex flex-row items-center justify-between">
                                    <p className="text-sm">{project.type}</p>
                                    <div className="flex flex-row items-center">
                                        {
                                            project.github ? (
                                                <FiGithub className='text-primary text-xl cursor-pointer' onClick={() => redirect(project.github)} />
                                            ) : null
                                        }
                                        {
                                            project.siteURL ? (
                                                <>
                                                    <div className='ml-2'></div>
                                                    <MdOpenInNew className='text-primary text-xl cursor-pointer' onClick={() => redirect(project.siteURL)} />
                                                </>
                                            ) : null
                                        }
                                    </div>
                                </div>
                                <h1 className="text-2xl font-semibold mt-1">{project.title}</h1>
                                <h2 className="mt-4 opacity-75">{project.description}</h2>
                                <h2 className='mt-2 text-sm tracking-widest'>
                                    <ul>
                                        {
                                            project.infoList.map((info, iIndex) => {
                                                return (
                                                    <li key={iIndex}>{info}</li>
                                                )
                                            })
                                        }
                                    </ul>
                                </h2>
                                {
                                    project.screenShot ? (
                                        <img src={project.screenShot} className="w-full h-auto rounded-md mt-2" />
                                    ) : null
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Projects