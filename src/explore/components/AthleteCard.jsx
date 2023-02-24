import { Link } from "react-router-dom";
import './AthleteCard.css';

const AthleteCard = ({athlete}) => {
  return (
    <Link to={`/u/${athlete.username}`}>
        <div className="AthleteCard">
            <img src='/avatars/zeus.png' className="AthleteCard__img"></img>
            <p className="AthleteCard__username link-primary">@{athlete.username}</p>
        </div>
    </Link>
  )
}

export default AthleteCard