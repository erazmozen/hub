import '../css/showpage/showpage.css'

const ProjectLink = ({ title, icons }) => {
    const git = "https://github.com/erazmozen/"
    console.log(icons)
    return (
        <div className='common-button link'>
            <div className='redirect'>
                <a href={`${git}${title}`} target="_blank">{<icons.FiGithub />}</a>
                <a href={`${git}${title}`} target="_blank">{<icons.GoPlay />}</a>
            </div>
            <h3>{title}</h3>
        </div>
    )
}

const ProjectPreview = () => {
    return (
        <div className='projects-preview'>
            <div>
                <h2>My Projects</h2>
                <p>Here are some of the projects that i have done just to showcase what i am capeable of doing. Feel free to contact me in case of a biz offer, or any other thing that may pop up.</p>
            </div>
            <div>
                <small>+38121732712</small>
                <small>dummt@dummy.com</small>
            </div>
        </div>
    )
}

const Projects = ({ icons }) => {

    console.log('projects render')
    return (
        <div className="projects">
            <div className='slink-holder'>
                <ProjectLink icons={icons} title="Fitnes-App" />
                <ProjectLink icons={icons} title="React-Gallery" />
                <ProjectLink icons={icons} title="Portfolio-Template" />
                <ProjectLink icons={icons} title="React-Calculator" />
                <ProjectLink icons={icons} title="Meme-Generator" />
                <ProjectLink icons={icons} title="React-ImageSlider" />
                <ProjectLink icons={icons} title="React-Note-App" />
                <ProjectLink icons={icons} title="Password-Generator" />
            </div>
            <ProjectPreview />
        </div>
    )
}
export default Projects