import Projects from "../showpage/Projects"

const ShowPage = ({icons}) => {
    console.log('ShowPage render')
    return (
        <div className="background-rounded showpage">
            <h1>ShowPage</h1>
            <Projects icons={icons} />
        </div>
    )
}

export default ShowPage