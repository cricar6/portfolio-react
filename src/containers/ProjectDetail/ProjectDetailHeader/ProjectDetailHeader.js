import penIcon from '@iconify/icons-bx/bx-pen'
import codeIcon from '@iconify/icons-gg/brackets'
import userIcon from '@iconify/icons-bx/bx-user-pin'
import Icon from '@iconify/react'
import SocialMedia from '../../../components/SocialMedia/SocialMedia'

const ProjectDetailHeader = ({ name, tags, image, socialMedia}) => {
    return (
        <section className="project-detail__header">
            <section className="project-detail__header-info">
                <section className="tags">
                    {tags.includes("ui") && <Icon className="iconify" icon={penIcon} />}
                    {tags.includes("dev") && <Icon className="iconify" icon={codeIcon} />}
                    {tags.includes("ux") && <Icon className="iconify" icon={userIcon} />}
                </section>
                <h2 className="project-detail__name">{name}</h2>
                <SocialMedia socials={socialMedia} />
            </section>
            <img className="project-detail__header-background" src={image} alt=""/>
        </section>
    )
}

export default ProjectDetailHeader
