import './SocialMedia.scss'
import Item from './Item/Item'
import githubIcon from '@iconify/icons-ant-design/github-filled';
import linkedinIcon from '@iconify/icons-ant-design/linkedin-filled';
import behanceIcon from '@iconify/icons-ant-design/behance-circle-filled';

const SocialMedia = () => {
    return (
        <article class="social-media">
            <Item name="My Github" icon={githubIcon} url="#"/>
            <Item name="My LinkedIn" icon={linkedinIcon} url="#"/>
            <Item name="My Behance" icon={behanceIcon} url="#"/>
        </article>
    )
}

export default SocialMedia
