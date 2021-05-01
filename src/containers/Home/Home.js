import './Home.scss'
import Button from '../../components/Button/Button'
import ProeficienciesResume from '../../components/ProeficienciesResume/ProeficienciesResume'
import Scroller from '../../components/Scroller/Scroller'
import SocialMedia from '../../components/SocialMedia/SocialMedia'
import HandScroll from '../../components/HandScroll/HandScroll'

const Home = () => {
    return (
        <section className="home">
            {
                /*
                <SocialMedia />
                <Button />
                <ProeficienciesResume />
                <Abilities />
                <Scroller />
                */
            }

            <section className="home__intro">
                <section className="home__intro-container">
                    <h2 className="home__intro-container-subtitle">Building interfaces that can</h2>
                    <h1 className="home__intro-container-title">Change the world</h1>
                    <p className="home__intro-container-text">I use UI Design and Development as tools to build experiences.</p>
                    <ProeficienciesResume />
                </section>
                <HandScroll />
            </section>
            <section class="home__projects">
            
            </section>
           
        </section>
    )
}

export default Home
