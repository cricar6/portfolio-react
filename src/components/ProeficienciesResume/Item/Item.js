import { Icon } from '@iconify/react';

const Item = ({ title, icon}) => {
    return (
        <section class="proeficiencies-resume__item">
            <Icon className="iconify proeficiencies-resume__item-icon" icon={icon} />
            <p class="proeficiencies-resume__item-title">{title}</p>
        </section>
    )
}

export default Item
