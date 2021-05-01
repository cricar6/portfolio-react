import { Icon } from '@iconify/react';
import arrowRightIcon from '@iconify/icons-heroicons-outline/arrow-sm-right';

const Item = ({ name, icon, url }) => {
    return (
        <a class="social-media__item" href={url}>
            <Icon className="social-media__item-icon iconify" icon={icon} />
            <p class="social-media__item-title">{name}</p>
            <div class="social-media__item-action">
                <Icon className="iconify" icon={arrowRightIcon} />
            </div>
        </a>
    )
}

export default Item
