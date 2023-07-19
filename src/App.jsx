import { Navbar } from "./components/navbar/Navbar";
import "./App.scss";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Footer } from "./components/footer/Footer";
import { Home } from "./pages/home/Home";
import { Orders } from "./pages/orders/Orders";
import { MyGigs } from "./pages/myGigs/MyGigs";
import { Add } from "./pages/add/Add";
import { Messages } from "./pages/messages/Messages";
import { Message } from "./pages/message/Message";
import { Login } from "./pages/login/Login";
import { Register } from "./pages/register/Register";
import { Gig } from "./pages/gig/Gig";
import { Gigs } from "./pages/gigs/Gigs";

function App() {
  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },

        {
          path: "/orders",
          element: <Orders />,
        },

        {
          path: "/mygigs",
          element: <MyGigs />,
        },

        {
          path: "/add",
          element: <Add />,
        },

        {
          path: "/messages",
          element: <Messages />,
        },

        {
          path: "/message/:id",
          element: <Message />,
        },

        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/gigs/:id",
          element: <Gigs />,
        },
        {
          path: "/gig/:id",
          element: <Gig />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
