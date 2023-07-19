import { useState } from "react";
import "./Login.scss";
import newRequest from "../../utils/newRequest";
// import useNavigate from "react-router-dom";

import { useNavigate } from "react-router-dom";
export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    // console.log("test");
    setError(null);
    e.preventDefault();
    // console.log(username, password);
    try {
      const res = await newRequest.post("/auth/login", { username, password });
      localStorage.setItem("currentUser", JSON.stringify(res.data));
      navigate("/");
      console.log(res.data);
    } catch (error) {
      setError(error.response.data);
    }
  };
  return (
    <div className="login">
      <form
        onSubmit={handleSubmit}
        action="
    "
      >
        <h1>Sign in</h1>
        <label htmlFor="">Username</label>
        <input
          type="text"
          name="useranme"
          placeholder="johndoe"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        {error && error}
      </form>
    </div>
  );
};
