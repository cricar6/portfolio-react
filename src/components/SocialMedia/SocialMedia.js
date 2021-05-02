import './SocialMedia.scss'
import Item from './Item/Item'


const SocialMedia = ( { socials } ) => {
    return (
        <article className="social-media">
            {socials.map((item) => (<Item key={item.id} icon={item.icon} name={item.title} url={item.url}/>))}
        </article>
    )
}

export default SocialMedia
