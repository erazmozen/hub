import '../css/showpage/showpage.css'

const ProjectLink = ({ title }) => {
    const git = "https://github.com/erazmozen/"
    return (
        <a className='common-button' href={`${git}${title}`} target="_blank">{title}</a>
    )
}

const Projects = () => {
    console.log('projects render')
    return (
        <div className="projects">
            <div className='link-holder'>
                <ProjectLink title="Fitnes-App" />
                <ProjectLink title="React-Gallery" />
                <ProjectLink title="Portfolio-Template" />
                <ProjectLink title="React-Calculator" />
                <ProjectLink title="Meme-Generator" />
                <ProjectLink title="React-ImageSlider" />
                <ProjectLink title="React-Note-App" />
                <ProjectLink title="Password-Generator" />
            </div>
        </div>
    )
}
export default Projects