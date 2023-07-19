import { CatCard } from "../../components/catCard/CatCard";
import { Featured } from "../../components/featured/Featured";
import { ProjectCard } from "../../components/projectCard/ProjectCard";
import { Slide } from "../../components/slide/Slide";
import { TrustedBy } from "../../components/trustedBy/TrustedBy";
import { cards } from "../../data";
import { projects } from "../../data";
import "./Home.scss";
export const Home = () => {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      {/* this has created a customised slider for us that  */}
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((items) => {
          return <CatCard key={items?.id} item={items} />;
        })}
      </Slide>

      <div className="features">
        <div className="container">
          <div className="left">
            <h1>A whole world of freelance talent at your fingertip</h1>
            <div className="collection">
              <img src="./img/check.png" alt="" />
              <p>The best for every budget</p>
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
            <div className="collection">
              <img src="./img/check.png" alt="" />
              <p>The best for every budget</p>
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
            <div className="collection">
              <img src="./img/check.png" alt="" />
              <p>The best for every budget</p>
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
            <div className="collection">
              <img src="./img/check.png" alt="" />
              <p>The best for every budget</p>
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
          </div>
          <div className="right">
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_700,dpr_1.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png"
              // controls
            />
          </div>
        </div>
      </div>
      <div className="features dark">
        <div className="container">
          <div className="left">
            <h1>fiverr business</h1>
            <span className="new">New</span>
            <h1>
              A solution built for <i>business</i>
            </h1>
            <p>
              Upgrade to a curated experience to access vetted talent and
              exclusive tools
            </p>

            <div className="collection">
              <img src="./img/check.png" alt="" />
              <p>Talent matching</p>
            </div>
            <div className="collection">
              <img src="./img/check.png" alt="" />
              <p>Dedicated account management</p>
            </div>
            <div className="collection">
              <img src="./img/check.png" alt="" />
              <p>Team collaboration tools</p>
            </div>
            <div className="collection">
              <img src="./img/check.png" alt="" />
              <p>Business payment solutions</p>
            </div>
            <button>Explore Fiverr Business</button>
          </div>
          <div className="right">
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624757/business-desktop-870-x1.png"
              // controls
            />
          </div>
        </div>
      </div>

      <Slide slidesToShow={4} arrowsScroll={4}>
        {projects.map((items) => {
          return <ProjectCard key={items?.id} item={items} />;
        })}
      </Slide>
    </div>
  );
};
