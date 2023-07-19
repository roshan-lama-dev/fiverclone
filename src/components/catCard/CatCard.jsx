import { Link } from "react-router-dom";
import "./CatCard.scss";

// this is a card component that takes the informtaion from the backend and creates the card
export const CatCard = ({ item }) => {
  return (
    // click on the card takes us to the specific category
    <Link to="/gigs/12">
      <div className="catCard">
        <img src={item?.img} alt="" />
        <span className="desc">{item.desc}</span>
        <span className="title">{item.title}</span>
      </div>
    </Link>
  );
};
