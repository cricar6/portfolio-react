import { Icon } from '@iconify/react';
import arrowRightIcon from '@iconify/icons-heroicons-outline/arrow-sm-right';

const Item = ({ name, icon, url }) => {
    return (
        <a className="social-media__item" href={url} target="_blank" >
            <Icon className="social-media__item-icon iconify" icon={icon} />
            <p className="social-media__item-title">{name}</p>
            <div className="social-media__item-action">
                <Icon className="iconify" icon={arrowRightIcon} />
            </div>
        </a>
    )
}

export default Item
