interface ITitleSection {
    title: string
}

const TitleSection: React.FC<ITitleSection> = (props) => {
    return (
        <div className="w-full h-auto z-0 flex flex-row items-center relative">
            <h2 className="bg-white z-10 w-auto text-2xl text-primary font-semibold md:text-4xl">{props.title}</h2>
            <div className="bg-white z-10 w-2 h-2"></div>
            <div className="absolute z-0 ml-2 w-full h-0.5 bg-primary opacity-25"></div>
        </div>
    )
}

export default TitleSection