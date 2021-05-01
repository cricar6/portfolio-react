import './Disciplines.scss';
import Item from './Item/Item';

function Disciplines() {
    return (
        <article className="disciplines">
            <h3 className="disciplines__title">My competencies</h3>
            <Item title="UX Design" text="I can take the requeriments of a new interface from scratch, realize user testings and prototypes in order to design an interface that achieve the expectations and needs of the target."/>
            <Item title="Front-end Dev" text="I can estimate an interface and their funcitonal requeriments with attention and detail in order to code it without losing the design purpuse and aesthetic of the functionality, creating code modular and reusable, and using the best technologies and libraries to achieve the UI Design needs and requeriments."/>
            <Item title="UX Design" text="I can translate requeriments into usable and desirable interfaces, prioritizing accesibility, making user testings  in order to validate that the user needs are being satisfied."/>
            
        </article>
    )
}

export default Disciplines
