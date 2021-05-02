import './Abilities.scss'
import Item from './Item/Item'

const Abilities = ({ abilities }) => {
    return (
        <article className="abilities">
            {abilities.map((item) => (<Item key={item.id} icon={item.icon} title={item.title}/>))}
        </article>
    )
}

export default Abilities
