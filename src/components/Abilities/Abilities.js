import './Abilities.scss'
import Item from './Item/Item'
import happyIcon from '@iconify/icons-heroicons-outline/emoji-happy';
import clipboardIcon from '@iconify/icons-heroicons-outline/clipboard-list';
import annotationIcon from '@iconify/icons-heroicons-outline/annotation';
import groupIcon from '@iconify/icons-heroicons-outline/user-group';

const Abilities = () => {
    return (
        <article class="abilities">
            <Item title="Teamworker" icon={happyIcon}/>
            <Item title="Frustration Tolerant" icon={clipboardIcon}/>
            <Item title="Fast Prioritizer" icon={annotationIcon}/>
            <Item title="Good Comunicator" icon={groupIcon}/>
        </article>
    )
}

export default Abilities
