import { useParams } from "react-router"
import "./ProjectDetail.scss"
import ProjectDetailHeader from "./ProjectDetailHeader/ProjectDetailHeader";
import ProjectDetailed from "./ProjectDetailed/ProjectDetailed";

const ProjectDetail = ({projects}) => {

    const { id } = useParams();

    return (
        <>
            {projects.filter(project => project.id === id).map(currentProject => (
                <section className="project-detail">
                    <ProjectDetailHeader
                        name={currentProject.name} 
                        tags={currentProject.tags} 
                        image={currentProject.backImage} 
                        socialMedia={currentProject.socialMedia} 
                    />
                    <ProjectDetailed
                        projectContent={currentProject.projectContent}
                    />
                </section>
            ))}
        </>  

        
    )
}

export default ProjectDetail
