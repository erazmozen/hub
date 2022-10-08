import Projects from "../showpage/Projects"

const ShowPage = () => {
    console.log('ShowPage render')
    return (
        <div className="background-rounded showpage">
            <h1>ShowPage</h1>
            <Projects />
        </div>
    )
}

export default ShowPage