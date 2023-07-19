import { Slider } from "infinite-react-carousel/lib";
import "./Gig.scss";
export const Gig = () => {
  return (
    <div className="gig">
      <div className="container">
        <div className="left">
          <span className="breadcrumb">Bread crumb </span>

          <h1>I will create ai generated art for you</h1>
          <div className="user">
            <img
              className="pp"
              src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <span>John Doe</span>
            <div className="stars">
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <span>5</span>
            </div>
            <Slider className="slider" slidesToShow={1} arrowsScroll={1}>
              <img
                src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs3/289758028/original/617456a368439ed7fc730c2c41c702dc2f36adcc/create-art-characters-and-illustrations-using-ai-generated-images.png"
                alt=""
              />
              <img
                src="https://fiverr-res.cloudinary.com/image/upload/t_gig_pdf_gallery_view_ver4,f_jpg/20230325/P4_compressed_fpecgu.jpg"
                alt=""
              />
              <img
                src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/289758028/original/d02d71b60577ffa2dd5c215b63e28e9d0188b0e4/create-art-characters-and-illustrations-using-ai-generated-images.png"
                alt=""
              />
            </Slider>
            <h2>About this Gig</h2>
            <p>
              Please message me before ordering !! We will create awesome AI
              artwork in various styles using Mid Journey and Stable Diffusion.
              Are you annoyed with so many different flaws created by A.I.? You
              can't create your fantastic artwork because of complex ideas which
              A.I. does not understand well? We are the designers who can
              achieve your special ideas with the help of different A.I. tools
              and professional photo editing skills. Please look carefully,
              there are so many ideas can't be solely created by A.I. with one
              click. You need an artist who can understand your concepts deeply,
              know the limitation of A.I. tools well, and create your awesome
              artwork thoughtfully and skilfully. Designing multiple characters
              is a complex project that requires each of them to adhere to a
              unified artistic style and to be detailed precisely. Usually, this
              type of project falls under our Platinum Package or requires a
              Custom Offer. Please contact us prior to placing your order. The
              Artwork can be used for: Printings / Poster Cover Art Character
              Design Concept Art Logo Design
            </p>
            <div className="seller">
              <h2>About the seller</h2>
              <div className="user">
                <img
                  src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="info">
                  <span>John Doe</span>
                  <div className="stars">
                    <img src="/img/star.png" alt="" />
                    <img src="/img/star.png" alt="" />
                    <img src="/img/star.png" alt="" />
                    <img src="/img/star.png" alt="" />
                    <img src="/img/star.png" alt="" />
                    <span>5</span>
                  </div>
                  <button>Contact Me</button>
                </div>
              </div>

              <div className="box">
                <div className="items">
                  <div className="item">
                    <span className="title">From</span>
                    <span className="desc">English</span>
                  </div>
                </div>
                <hr />
                <p>Hi my name is Roshan.</p>
              </div>
            </div>

            <div className="reviews">
              <h2>Review</h2>
              <div className="item">
                <div className="user">
                  <img
                    src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                  />
                  <div className="info">
                    <span>John Doe</span>
                    <div className="country">
                      <img src="" alt="" />
                      <span>United States</span>
                    </div>
                  </div>
                </div>
                <div className="stars">
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <span>5</span>
                </div>
                <div className="helpful">
                  <span>Helpful?</span>
                  <img src="/img/like.png" alt="" />
                  <span>Yes</span>
                  <img src="/img/dislike.png" alt="" />

                  <span>No </span>
                </div>
              </div>
              <hr />
              <div className="item">
                <div className="user">
                  <img
                    className="pp"
                    src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt="test"
                  />
                  <div className="info">
                    <span>John Doe</span>
                    <div className="country">
                      <img src="" alt="" />
                      <span>United States</span>
                    </div>
                  </div>
                </div>
                <div className="stars">
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <span>5</span>
                </div>
                <div className="helpful">
                  <span>Helpful?</span>
                  <img src="/img/like.png" alt="" />
                  <span>Yes</span>
                  <img src="/img/dislike.png" alt="" />

                  <span>No </span>
                </div>
              </div>
              <hr />
              <div className="item">
                <div className="user">
                  <img
                    src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                  />
                  <div className="info">
                    <span>John Doe</span>
                    <div className="country">
                      <img src="" alt="" />
                      <span>United States</span>
                    </div>
                  </div>
                </div>
                <div className="stars">
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <span>5</span>
                </div>
                <div className="helpful">
                  <span>Helpful?</span>
                  <img src="/img/like.png" alt="" />
                  <span>Yes</span>
                  <img src="/img/dislike.png" alt="" />

                  <span>No </span>
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>
        <div className="right">test</div>
      </div>
    </div>
  );
};
