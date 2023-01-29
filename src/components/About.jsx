import { useState } from "react";
import dataArr from "./API/howToUse";
const About = () => {
  const img1 =
    "https://images.unsplash.com/photo-1632044889829-7770c6296ca0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80";
  const img2 =
    "https://images.unsplash.com/photo-1470298609667-dcd85581b096?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1372&q=80";
  const [data, setData] = useState(dataArr);
  return (
    <section className="container about common-section about my-5">
      <h3 className="text-center my-5">About Us</h3>
      <div className="mb-5">
        <div className="row">
          <div className="col-12 col-lg-6 text-center about-left-img">
            <img className="img-fluid m-0 mt-4" src={img1} alt="about-us" />
          </div>
          <div className="col-12 col-lg-6 m-0 about-list mt-4">
            <h5 className="mini-title">
              AVAILEBLE @ GOOGLE AND IOS STORE ONLY
            </h5>
            <h4 className="main-heading">How To Use The App</h4>
            {data.map((data) => {
              const { id, title, info } = data;
              return (
                <div key={id} className="col-12 w-100">
                  <div className="row about-info">
                    <div className="col-2 about-no p-0 ">{id}</div>
                    <div className="col-10 about-data">
                      <h5>{title}</h5>
                      <p className="main-hero-para">{info}</p>
                    </div>
                  </div>
                </div>
              );
            })}
            <br />
            <button className="btn-style btn-style-border">Learn More</button>
          </div>
        </div>
      </div>
      <div className="container mb-5 m-0">
        <div className="row">
          <div className="col-12 col-lg-7 m-0 about-right-contents about-list pt-5">
            <h5 className="mini-title">
              AVAILEBLE @ GOOGLE AND IOS STORE ONLY
            </h5>
            <h4 className="main-heading">How To Use The App</h4>
            {data.map((data) => {
              const { id, title, info } = data;
              return (
                <div key={id} className="col-12 w-100 ">
                  <div className=" row  about-info">
                    <div className="col-2 about-no p-0 ">{id}</div>
                    <div className="col-10 about-data ">
                      <h5>{title}</h5>
                      <p className="main-hero-para w-100">{info}</p>
                    </div>
                  </div>
                </div>
              );
            })}
            <br />
            <button className="btn-style btn-style-border">Learn More</button>
          </div>
          <div className="col-12 col-lg-5 text-center about-right-img">
            <img className="img-fluid mt-5" src={img2} alt="about-us" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
