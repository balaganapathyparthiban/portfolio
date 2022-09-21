import dayjs from "dayjs"
import { useState } from "react"

import appInfo from '../../assets/json/app_info.json'
import TitleSection from "../TitleSection/TitleSection"

const Experience: React.FC = () => {
    const [experiences, setExperiences] = useState(appInfo.experiences)

    return (
        <div className="w-full h-auto flex flex-col text-primary">
            <TitleSection title="Experience" />
            <div className="grid grid-cols-1 mt-10 md:grid-cols-2">
                {
                    experiences.map((experience, eIndex) => {
                        const eJoined = dayjs(experience.joined).format('MMMM YYYY')
                        let eRelieved = 'Present'
                        let eTotalExperienceInPosition = dayjs().diff(dayjs(experience.joined), 'years', true).toFixed(1)
                        if(experience.relieved) {
                            eRelieved = dayjs(experience.relieved).format('MMMM YYYY')
                            eTotalExperienceInPosition = dayjs(experience.relieved).diff(dayjs(experience.joined), 'years', true).toFixed(1)
                        }

                        return (
                            <div key={eIndex}>
                                <div className="flex flex-col">
                                    <div className="w-full h-auto flex flex-row">
                                        <div className="mr-4 w-12 h-auto">
                                            <img className="w-full h-auto" src={experience.logo} />
                                        </div>
                                        <div className="w-60 flex flex-col">
                                            <h1 className="font-semibold md:text-base">{experience.title}</h1>
                                            <h2 className="text-sm md:text-base">{experience.subTitle}</h2>
                                            <h3 className="text-sm opacity-75 md:text-base">{`${eJoined} - ${eRelieved} . ${eTotalExperienceInPosition} Yr`}</h3>
                                            <h4 className="text-sm opacity-50 md:text-base">{experience.location}</h4>
                                            <div className="pt-4 w-full"></div>
                                        </div>
                                    </div>
                                    {
                                        experience.positions.map((position, pIndex) => {
                                            const joined = dayjs(position.joined).format('MMMM YYYY')
                                            let relieved = 'Present'
                                            let totalExperienceInPosition = dayjs().diff(dayjs(position.joined), 'years', true).toFixed(1)
                                            if(position.relieved) {
                                                relieved = dayjs(position.relieved).format('MMMM YYYY')
                                                totalExperienceInPosition = dayjs(position.relieved).diff(dayjs(position.joined), 'years', true).toFixed(1)
                                            }

                                            return (
                                                <div key={pIndex} className="flex flex-row">
                                                    <div className="mr-4 w-12 h-auto flex flex-row justify-center relative">
                                                        <div className="w-2 h-2 rounded-full bg-primary opacity-50 mt-2"></div>
                                                        {
                                                            experience.positions[pIndex + 1] ? (
                                                                <div className="absolute top-5 w-0.5 h-3/4 bg-primary opacity-25"></div>
                                                            ) : null
                                                        }
                                                    </div>
                                                    <div className="w-60 flex flex-col md:w-80">
                                                        <h1 className="font-semibold md:text-base">{position.title}</h1>
                                                        <h3 className="text-sm opacity-75 md:text-base">{`${joined} - ${relieved} . ${totalExperienceInPosition} Yr`}</h3>
                                                        <p className="text-sm pt-4 md:text-base">{position.descriptionIntro}</p>
                                                        <ul className="text-sm list-disc ml-4 md:text-base">
                                                            {
                                                                position.descriptionDetailList.map((detail, dIndex) => {
                                                                    if (dIndex > 0 && !position.showMore) return null

                                                                    return (
                                                                        <li key={dIndex} className="my-1">
                                                                            {!position.showMore ? detail.substring(0, 30) : detail}
                                                                            {
                                                                                !position.showMore ?
                                                                                    <span className="font-semibold cursor-pointer"
                                                                                        onClick={() => {
                                                                                            setExperiences(experiences.map((each, eachIndex) => {
                                                                                                if (eachIndex === eIndex) {
                                                                                                    each.positions = each.positions.map((eachPosition, eachPositionIndex) => {
                                                                                                        if (eachPositionIndex === pIndex) {
                                                                                                            eachPosition.showMore = true
                                                                                                        }
                                                                                                        return eachPosition
                                                                                                    })
                                                                                                }
                                                                                                return each
                                                                                            }))
                                                                                        }}
                                                                                    >
                                                                                        ...show more
                                                                                    </span>
                                                                                    : null
                                                                            }
                                                                        </li>
                                                                    )
                                                                })
                                                            }
                                                        </ul>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                {
                                    (eIndex + 1) !== experiences.length ? (
                                        <hr className="w-full h-2 mt-6 mb-2 md:hidden" />
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

export default Experience