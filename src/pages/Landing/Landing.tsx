import Header from "./components/Header"

const Landing: React.FC = () => {
    const onMenuHandler = () => {
        alert("onMenuHandler")
    }

    return (
        <main className="relative w-full h-full bg-white">
            <div className="fixed top-0 w-full h-12">
                <Header onMenuHandler={onMenuHandler} />
            </div>
            <div className="w-full h-auto p-2 mt-12">
                {
                    Array(100).fill(null).map((e, i) => (
                        <div key={i}>{i}</div>
                    ))
                }
            </div>
        </main>
    )
}

export default Landing