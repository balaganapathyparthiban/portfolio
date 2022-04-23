interface ITitleSection {
    title: string
}

const TitleSection: React.FC<ITitleSection> = (props) => {
    return (
        <div className="w-full h-auto flex flex-row items-center">
            <h2 className="w-auto text-2xl text-primary font-semibold">{props.title}</h2>
            <div className="ml-2 w-3/5 h-0.5 bg-primary opacity-25"></div>
        </div>
    )
}

export default TitleSection