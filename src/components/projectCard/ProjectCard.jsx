import { Link } from "react-router-dom";
import "./ProjectCard.scss";

// this is a card component that takes the informtaion from the backend and creates the card
export const ProjectCard = ({ item }) => {
  return (
    // click on the card takes us to the specific category
    <Link to="/" className="link">
      <div className="projectCard">
        <img src={item?.img} alt="" />
        <div className="info">
          <img src={item?.pp} alt="" />
          <div className="texts">
            <h2>{item.cat}</h2>
            <span>{item.username}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
