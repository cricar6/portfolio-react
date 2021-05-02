import Abilities from '../../components/Abilities/Abilities'
import Button from '../../components/Button/Button'
import Disciplines from '../../components/Disciplines/Disciplines'
import HandScroll from '../../components/HandScroll/HandScroll'
import ProeficienciesResume from '../../components/ProeficienciesResume/ProeficienciesResume'
import ProfilePhoto from '../../components/ProfilePhoto/ProfilePhoto'
import SocialMedia from '../../components/SocialMedia/SocialMedia'
import './AboutMe.scss'

const AboutMe = ({ socials, proeficiencies, abilities, discplines }) => {
    return (
        <section className="about-me">
            <section className="about-me__intro">
                <section className="about-me__intro-container">
                    <ProfilePhoto />
                    <SocialMedia socials={socials} />
                    <h1 className="about-me__intro-container-title">Hi! I’m Cristian</h1>
                    <ProeficienciesResume proeficiencies={proeficiencies}/>
                    <p className="about-me__intro-container-text">I'm an Interactive Media Designer passionate about technology and design, looking for new opportunities to understand the best practices of coding.</p>
                    <p className="about-me__intro-container-text">As a developer, I have been able to use my advanced knowledge of UX, UI, and HCI in order to improve accessibility and modularity on the projects I have worked on. Moreover, my knowledge about the product development process allows me to see the whole picture since the beginning, which is very helpful to build the whole production code from scratch; this has given me the opportunity on different projects of intercommunicating with several members of a team by prioritizing tasks in order to achieve a Minimum Viable Product (MVP).</p>
                    <Abilities abilities={abilities}/>
                </section>
                <HandScroll />
            </section>
            <Disciplines discplines={discplines} />
            <Button title="Go to Home" reference="/"/>
        </section>
    )
}

export default AboutMe
