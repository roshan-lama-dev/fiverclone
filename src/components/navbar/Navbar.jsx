import { useEffect, useState } from "react";
import "./Navbar.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest";
export const Navbar = () => {
  const [active, setActive] = useState(false);
  // this usestate is used to handle the options
  const [open, setOpen] = useState(false);

  // the green background in the navbar is only displayed when we are in the home page. this can be achieved using the useLocation hook.
  const { pathname } = useLocation();
  //   this function helps check the scroll position of the y axis and changes the state accrodingly
  const isActive = () => {
    // window.scrollY checks the postion of the y axis
    window.scrollY > 0 ? setActive(true) : setActive(false);
    // console.log(window.scrollY);
  };

  const navigate = useNavigate();
  // what  is the use of the useEffect in this context
  // also go through the useEffect video once more
  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const handleLogout = async () => {
    try {
      await newRequest.post("/auth/logout");
      localStorage.removeItem("currentUser");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  return (
    // change the navbar colo r according to the active state.
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link to="/" className="link">
            <span className="text">fiverr</span>
            <span className="dot">.</span>
          </Link>
        </div>
        <div className="links">
          <Link className="link">Fiverr Business</Link>
          <Link className="link"> Explore</Link>
          <Link className="link">English</Link>
          <Link className="link">Sign In</Link>
          {/* if the user is already a seller we don't have to show this option */}
          {!currentUser?.isSeller && <span>Become a Seller</span>}
          {!currentUser && (
            <Link className="link" to="/register">
              <button>Join</button>
            </Link>
          )}
          {/* if we have the current users / the user is logged in we change the links. we will display the user profile and the username along with the options  */}
          {currentUser && (
            // when the user clicks the user icon, the state for the options is changed
            <div className="user" onClick={() => setOpen(!open)}>
              {/* use the react Icons for the icons and image placeholder. check the airbnb clone for this */}
              <img src={currentUser.img || "img/noavatar.jpg"} alt="test" />
              <span>{currentUser?.username}</span>
              {/* the option menu are displayed conditionally  */}
              {open && (
                <div className="options">
                  {currentUser?.isSeller && (
                    <>
                      <Link className="link" to="/mygigs">
                        Gigs
                      </Link>
                      <Link className="link" to="/add">
                        Add New Gig
                      </Link>
                    </>
                  )}
                  <Link className="link" to="/orders">
                    Orders
                  </Link>
                  <Link className="link" to="/messages">
                    Messages
                  </Link>
                  <Link className="link" onClick={handleLogout}>
                    Logout
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {/* Only show the submenu when the state is active */}
      {(active || pathname !== "/") && (
        <>
          <hr />
          <div className="menu">
            <span>Graphics & Desing</span>
            <span>Video & Animation</span>
            <span>Writing & Translation</span>

            <span>AI Services</span>
            <span>Digital Marketing</span>
            <span>Music & Audio</span>
            <span>Programming & Tech</span>
            <span>Business</span>
            <span>Lifestyle</span>
          </div>
        </>
      )}
    </div>
  );
};
