import { MdClose } from 'react-icons/md'

import { redirect, scrollToView } from "../../utils/helper"

interface ISideMenu {
    show: boolean,
    onMenuHandler?: (event: React.MouseEvent<any>, status: boolean) => void,
    menuRef: {
        intro: React.MutableRefObject<HTMLDivElement | null>,
        about: React.MutableRefObject<HTMLDivElement | null>,
        experience: React.MutableRefObject<HTMLDivElement | null>,
        projects: React.MutableRefObject<HTMLDivElement | null>,
        contact: React.MutableRefObject<HTMLDivElement | null>
    }
}

const SideMenu: React.FC<ISideMenu> = (props) => {

    const selectMenu = (event: React.MouseEvent<any>, ref: React.MutableRefObject<HTMLDivElement | null>) => {
        scrollToView(ref)
        setTimeout(() => {
            props.onMenuHandler && props.onMenuHandler(event, false);
        }, 250)
    }

    return (
        <div
            className="absolute top-0 left-0 right-0 bottom-0 z-10 w-full h-full flex flex-col items-end justify-start overflow-hidden text-white bg-primary md:hidden"
        >
            <div className="w-3/5 h-full flex flex-col pl-4 pb-6">
                <div className="w-full h-12 flex flex-row items-center justify-end">
                    <MdClose className="text-white w-10 h-10" onClick={(event) => props.onMenuHandler && props.onMenuHandler(event, false)} />
                </div>
                <div className="w-full h-full flex flex-col items-center text-white">
                    <p className="tracking-widest mt-8 cursor-pointer" onClick={(event) => selectMenu(event, props.menuRef.intro)}>Home</p>
                    <p className="tracking-widest mt-8 cursor-pointer" onClick={(event) => selectMenu(event, props.menuRef.about)}>About me</p>
                    <p className="tracking-widest mt-8 cursor-pointer" onClick={(event) => selectMenu(event, props.menuRef.experience)}>Experience</p>
                    <p className="tracking-widest mt-8 cursor-pointer" onClick={(event) => selectMenu(event, props.menuRef.projects)}>Projects</p>
                    <p className="tracking-widest mt-8 cursor-pointer" onClick={(event) => selectMenu(event, props.menuRef.contact)}>Get In Touch</p>
                    <div className="border-2 border-white w-auto h-auto rounded-md px-4 py-2 mt-10 cursor-pointer hover:bg-white hover:text-primary" onClick={() => redirect("/resume.pdf", '_blank')}>
                        <p className="tracking-widest">Resume</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideMenu