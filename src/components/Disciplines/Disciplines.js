import './Disciplines.scss';
import Item from './Item/Item';

function Disciplines( { discplines} ) {
    return (
        <article className="disciplines">
            <h3 className="disciplines__title">Profesional Skills</h3>
            {discplines.map((item) => (<Item key={item.id} title={item.title} text={item.text}/>))}
        </article>
    )
}

export default Disciplines
