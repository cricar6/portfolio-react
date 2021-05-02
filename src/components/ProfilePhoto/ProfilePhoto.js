import './ProfilePhoto.scss';
import photo from '../../assets/ProfilePhoto.png'

const ProfilePhoto = () => {
    return (
        <article className="profile-photo">
            <img src={photo} alt="Cristian Rodríguez"/>
        </article>
    )
}

export default ProfilePhoto
