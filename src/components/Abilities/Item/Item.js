import { Icon } from '@iconify/react';

const Item = ({ title, icon }) => {
    return (
        <section class="abilities__item">
            <p class="abilities__item-title">{title}</p>
            <div class="abilities__item-icon">
                <Icon className="iconify" icon={icon} />
            </div>
        </section>
    )
}

export default Item
