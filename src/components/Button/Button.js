import PropTypes from 'prop-types';
import './Button.scss'

import { Icon } from '@iconify/react';
import arrowRightIcon from '@iconify/icons-heroicons-outline/arrow-sm-right';

const Button = ({ title}) => {
    return (
        <button class="main-button">
            <p class="main-button__title">
                {title}
            </p>
            <div class="main-button__action">
                <Icon className="iconify" icon={arrowRightIcon} />
            </div>
        </button>
    )
}

Button.defaultProps = {
    title: 'Text by default'
}

Button.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Button
