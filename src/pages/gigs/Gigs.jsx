import { useState } from "react";
import "./Gigs.scss";
import { gigs } from "../../data";
import { GigCard } from "../../components/gigCard/GigCard";

export const Gigs = () => {
  const [sort, setSort] = useState("sales");
  const [isClicked, setIsClicked] = useState(false);

  const reSort = (type) => {
    setSort(type);
    setIsClicked(false);
  };
  return (
    <div className="gigs">
      <div className="container">
        <span className="breadcrumb">BreadCrumb / Bread</span>
        <h1>AI</h1>

        <p>This also needs to be dynamic </p>
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input type="text" placeholder="min" />
            <input type="text" placeholder="max" />
            <button>Apply</button>
          </div>
          <div className="right">
            {/* <img src="./img/down.png" alt="test" /> */}
            <span className="sortBy" onClick={() => setIsClicked(!isClicked)}>
              Sort By
            </span>
            <span className="sortType">
              {sort === "sales" ? "Best Selling" : "Newest"}
            </span>
            {/* <img src="./img/down.png" alt="" /> */}

            {isClicked && (
              <div className="rightMenu">
                {sort === "sales" ? (
                  <span onClick={() => setSort("createdAt")}>Newest</span>
                ) : (
                  <span onClick={() => setSort("sales")}>Best Selling</span>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="cards">
          {gigs.map((items) => {
            return <GigCard key={items.id} item={items} />;
          })}
        </div>
      </div>
    </div>
  );
};
