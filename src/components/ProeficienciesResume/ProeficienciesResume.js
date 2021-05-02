import './ProeficienciesResume.scss'
import Item from './Item/Item';


const ProeficienciesResume = ( { proeficiencies }) => {
    return (
        <article className="proeficiencies-resume">
            {proeficiencies.map((item) => (<Item key={item.id} icon={item.icon} title={item.title}/>))}
        </article>
    )
}

export default ProeficienciesResume
