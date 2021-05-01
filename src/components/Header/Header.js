import './Header.scss';
import PropTypes from 'prop-types';

const Header = ({ logo }) => {
    return (
    <header class="header">
        <section class="header__logo">
            <img src={logo} alt="Cristian Rodríguez"/>
        </section>
        <nav class="navigation">
            <ul class="navigation__container">
                <li class="navigation__item">
                    <button class="navigation__button">
                        About Me
                    </button>
                </li>
            </ul>
        </nav>
    </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header