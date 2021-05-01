import './ProeficienciesResume.scss'
import penIcon from '@iconify/icons-bx/bx-pen';
import codeIcon from '@iconify/icons-gg/brackets';
import userIcon from '@iconify/icons-bx/bx-user-pin';
import Item from './Item/Item';

const ProeficienciesResume = () => {
    return (
        <article class="proeficiencies-resume">
            <Item icon={penIcon} title="UI Designer"/>
            <Item icon={codeIcon} title="Front-end Developer"/>
            <Item icon={userIcon} title="UX Designer"/>

        </article>
    )
}

export default ProeficienciesResume
