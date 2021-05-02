
const ProjectDetailed = ({projectContent}) => {
    return (
        <section className="project-detail__container">
            
            {projectContent.map((content) => {
                if (content.type == "text") {
                    return <section className={"project-detail__content project-detail__content--" + content.type}>
                        <h4 className="project-detail__content-title">{content.title}</h4>
                        <p className="project-detail__content-text">{content.content}</p>
                    </section>
                } else {
                    return <section className={"project-detail__content project-detail__content--" + content.type}>
                        <img src={content.url} alt=""/>
                    </section>
                }
            })}
        </section>
    )
}

export default ProjectDetailed
