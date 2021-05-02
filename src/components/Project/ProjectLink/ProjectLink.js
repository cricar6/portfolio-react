import React from 'react'
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import arrowRightIcon from '@iconify/icons-heroicons-outline/arrow-sm-right';

const ProjectLink = ({title, reference}) => {
    return (
        <Link className="main-button" to={"/project/" + reference}>
            <p className="main-button__title">
                {title}
            </p>
            <div className="main-button__action">
                <Icon className="iconify" icon={arrowRightIcon} />
            </div>
        </Link>
    )
}

export default ProjectLink
