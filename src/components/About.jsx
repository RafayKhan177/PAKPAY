import { useState } from "react";
import dataArr from "./API/howToUse";
const About = () => {
  const img =
    "https://images.unsplash.com/photo-1674842342916-361c15254730?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80";
  const [data, setData] = useState(dataArr);
  return (
    <section className="container about common-section our-services my-5">
      <h3 className="text-center my-5">About Us</h3>
      <div className="mb-5">
        <div className="row">
          <div className="col-12 col-lg-6 text-center our-services-left-img">
            <img className="img-fluid m-0 mt-5" src={img} alt="about-us" />
          </div>
          <div className="col-12 col-lg-6 our-services-list mt-4">
            <h5 className="mini-title">
              AVAILEBLE @ GOOGLE AND IOS STORE ONLY
            </h5>
            <h4 className="main-heading">How To Use The App</h4>
            {data.map((data) => {
              const { id, title, info } = data;
              return (
                <div key={id} className="row our-services-info">
                  <div className="col-1 our-services-no">{id}</div>
                  <div className="col-10 our-services-data">
                    <h5>{title}</h5>
                    <p className="main-hero-para">{info}</p>
                  </div>
                </div>
              );
            })}
            <br />
            <button className="btn-style btn-style-border">Learn More</button>
          </div>
        </div>
      </div>

      <div className="container mb-5">
        <div className="row">
          <div className="col-12 col-lg-7 our-services-right-contents our-services-list d-flex justify-content-center align-items-start flex-column pt-5">
            <h5 className="mini-title">
              AVAILEBLE @ GOOGLE AND IOS STORE ONLY
            </h5>
            <h4 className="main-heading">How To Use The App</h4>
            {data.map((data) => {
              const { id, title, info } = data;
              return (
                <div key={id} className="row our-services-info">
                  <div className="col-1 our-services-no">{id}</div>
                  <div className="col-10 our-services-data">
                    <h5>{title}</h5>
                    <p className="main-hero-para">{info}</p>
                  </div>
                </div>
              );
            })}
            <br />
            <button className="btn-style btn-style-border">Learn More</button>
          </div>
          <div className="col-12 col-lg-5 text-center our-services-right-img">
            <img className="img-fluid" src={img} alt="about-us" />
          </div>{" "}
        </div>
      </div>
    </section>
  );
};
export default About;
