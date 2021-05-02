import './Header.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Header = ({ logo }) => {
    return (
    <header className="header">
        <section className="header__logo">
            <Link to="/" replace>
                <img src={logo} alt="Cristian Rodríguez"/>
            </Link>
        </section>
        <nav className="navigation">
            <ul className="navigation__container">
                <li className="navigation__item">
                    <Link to="/about-me" className="navigation__button" replace>
                        About Me
                    </Link>
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