import Slider from "infinite-react-carousel";

import "./Slide.scss";

// instead of calling the data here, we convert this component as container that allows the reusing of this components.
// therefore we pass the cards as a props.
export const Slide = ({ children, slidesToShow, arrowsScroll }) => {
  return (
    <div className="slide">
      <div className="container">
        <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
          {children}
        </Slider>
      </div>
    </div>
  );
};
