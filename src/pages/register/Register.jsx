import { useState } from "react";
import "./Register.scss";
import axios from "axios";
import upload from "../../utils/upload";
import newRequest from "../../utils/newRequest";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);

  console.log(file);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    img: "",
    country: "",
    isSeller: false,
    desc: "",
  });

  console.log(user);
  const handleChange = (e) => {
    setUser((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleSeller = (e) => {
    setUser((prev) => {
      return {
        ...prev,
        isSeller: e.target.checked,
      };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = await upload(file);
    try {
      const response = await newRequest.post("/auth/register", {
        ...user,
        img: url,
      });
      console.log(response);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="register">
      <div className="container">
        <form action="" onSubmit={handleSubmit}>
          <div className="left">
            <h1>Create an account</h1>
            <label htmlFor="">Username</label>
            <input
              type="text"
              name="username"
              placeholder="johndoe"
              onChange={handleChange}
            />
            <label htmlFor="">Email</label>
            <input
              type="email"
              name="email"
              placeholder="johndoe@gmail.com"
              onChange={handleChange}
            />
            <label htmlFor="">Password</label>
            <input
              type="password"
              name="password"
              placeholder="password"
              onChange={handleChange}
            />

            <label htmlFor="">Profile Picture</label>
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
            <label htmlFor="">Country</label>
            <input
              type="text"
              name="country"
              placeholder="USA"
              onChange={handleChange}
            />
            <button type="submit">Register</button>
          </div>
          <div className="right">
            <h1>Become a seller</h1>
            <div className="toggle">
              <label htmlFor="">Activate the seller account</label>
              <label htmlFor="" className="switch">
                <input type="checkbox" onChange={handleSeller} />
                <span className="slider round"></span>
              </label>
            </div>

            <label htmlFor="">Phone Number</label>
            <input
              type="text"
              name="phone"
              placeholder="+61 451 431 555"
              onChange={handleChange}
            />
            <label htmlFor="">Description</label>
            <textarea
              name="desc"
              id=""
              cols="30"
              rows="10"
              placeholder="A short description about yourself"
              onChange={handleChange}
            ></textarea>
          </div>
        </form>
      </div>
    </div>
  );
};
