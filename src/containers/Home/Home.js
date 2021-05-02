import './Home.scss'
import ProeficienciesResume from '../../components/ProeficienciesResume/ProeficienciesResume'
import HandScroll from '../../components/HandScroll/HandScroll'
import Project from '../../components/Project/Project'
import StatusScrollBar from '../../components/StatusScrollBar/StatusScrollBar'

const Home = ({ proeficiencies, projects }) => {
    return (
        <section className="home">
            <section className="home__intro">
                <section className="home__intro-container">
                    <h2 className="home__intro-container-subtitle">Building interfaces that can</h2>
                    <h1 className="home__intro-container-title">Change the world</h1>
                    <p className="home__intro-container-text">I use UI Design and Development as tools to build experiences.</p>
                    <ProeficienciesResume proeficiencies={proeficiencies} />
                </section>
                
                <HandScroll />
            </section>
            <section className="home__projects-container">
                <section className="home__projects">
                    <section className="home__projects-wrapper">
                        {projects.map((item, index) => (<Project key={item.id} number={index} name={item.name} id={item.id} tags={item.tags} type={item.project_type} images={item.images}/>))}
                    </section>
                </section>
                <StatusScrollBar projects={projects} />
            </section>
           
        </section>
    )
}

export default Home
