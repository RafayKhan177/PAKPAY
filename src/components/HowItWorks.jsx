import { useState } from "react";
import dataAPI from "./API/workAPI";
import { AiFillCodeSandboxCircle } from "react-icons/ai";
const HowItWorks = () => {
  const [data, setData] = useState(dataAPI);
  return (
    <section>
      <div className="work-container container">
        <h1 className="main-heading text-center">How Dose It Works</h1>
        <div className="row">
          {data.map((data) => {
            const { id, title, info } = data;
            return (
              <div
                key={id}
                className="col-12 col-lg-4 text-center work-container-subDiv"
              >
                <AiFillCodeSandboxCircle id="icon" />
                <h2 className="subHeadeing">{title}</h2>
                <p className="main-hero-para">{info}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default HowItWorks;
