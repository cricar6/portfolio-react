import PropTypes from 'prop-types';
import './Button.scss'
import { Link } from 'react-router-dom';

import { Icon } from '@iconify/react';
import arrowRightIcon from '@iconify/icons-heroicons-outline/arrow-sm-right';

const Button = ({ title, reference}) => {
    return (
        <Nav.Link className="main-button" to={reference} replace>
            <p className="main-button__title">
                {title}
            </p>
            <div className="main-button__action">
                <Icon className="iconify" icon={arrowRightIcon} />
            </div>
        </Nav.Link>
    )
}

Button.defaultProps = {
    title: 'Text by default'
}

Button.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Button
