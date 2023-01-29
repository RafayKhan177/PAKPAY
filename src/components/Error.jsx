import { NavLink } from "react-router-dom";


const Error = () => {
  return (
    <div id="notFound">
      <div className="not-found">
        <div className="not-found404">
          <h1>404</h1>
          <h3>We Are Sorry, Page Not Found!</h3>
          <p>
            THE PAGE YOU ARE LOOKING FOR MIGHT HAVE BEEN REMOVED AND ITH NAME
            CHANGEDOR IS TEMPORARILY UNAVAILABLE
          </p>
          <NavLink to="/home"> <button className="btn-style ">BACK TO HOME PAGE</button> </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Error;
