import Projects from "../showpage/Projects"

const ShowPage = ({icons}) => {
    console.log('ShowPage render')
    return (
        <div className="background-rounded showpage">
            <Projects icons={icons} />
        </div>
    )
}

export default ShowPage