import './HandScroll.scss'
import HandTop from '../../assets/HandTop.png'
import HandBottom from '../../assets/HandBottom.png'
import Scroller from '../Scroller/Scroller'

const HandScroll = () => {
    return (
        <article className="hand-scroll">
            <div className="hand-scroll__hand-top">
                <img src={HandTop}/>
            </div>

            <Scroller />

            <div className="hand-scroll__hand-bottom">
                <img src={HandBottom}/>
            </div>
        </article>
    )
}

export default HandScroll
