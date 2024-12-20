import './Profilecontainer.css';

const Profilecontainer = ({profileImage, position}) => {
  return (
    <div className='profile-container'>
        <div className="profile-image">
            <img src={profileImage} alt="" />
        </div>
        <div className="profile-info">
            <h4>{position}</h4>
            <p>Founder & Chairman</p>
            <div className="profile-socials">
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-linkedin-in"></i>
            </div>
        </div>
    </div>
  )
}

export default Profilecontainer