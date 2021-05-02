import './Project.scss'
import penIcon from '@iconify/icons-bx/bx-pen'
import codeIcon from '@iconify/icons-gg/brackets'
import userIcon from '@iconify/icons-bx/bx-user-pin'
import Icon from '@iconify/react'
import ProjectLink from './ProjectLink/ProjectLink'


const Project = ({ name, id, tags, type, images, number}) => {
    return (
        <section className="project">

            <section className="project__info">
                <section className="tags">
                    {tags.includes("ui") && <Icon className="iconify" icon={penIcon} />}
                    {tags.includes("dev") && <Icon className="iconify" icon={codeIcon} />}
                    {tags.includes("ux") && <Icon className="iconify" icon={userIcon} />}
                </section>
                <div className="project__name-container">
                    <p className="project__previous">04</p>
                    <p className="project__current">0{number+1}</p>
                    <h3 className="project__name">{name}</h3>
                </div>
                <ProjectLink title="View Project" reference={id}/>
            </section>
            <section className={"project__images project__images--" + type}>
            {type !== "responsive" ? 
                images.map((image) => (<img src={image}></img>)) :
                images.map((image) => (<div className={"project__responsive-"+image.type}><img src={image.url}/></div>))
            }
            </section>
            

        </section>
    )
}

export default Project
