import { Icon } from '@iconify/react';

const Item = ({ title, icon }) => {
    return (
        <section className="abilities__item">
            <p className="abilities__item-title">{title}</p>
            <div className="abilities__item-icon">
                <Icon className="iconify" icon={icon} />
            </div>
        </section>
    )
}

export default Item
