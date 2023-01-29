import { useState } from "react";
import serviceData from "./API/ServiceAPI";
import { AiFillCodeSandboxCircle } from "react-icons/ai";
const Services = () => {
  const [data, setData] = useState(serviceData);
  return (
    <section className="container-fluid service-main-contaiiner my-5">
      <div className="conatianer service-container">
        <h2 className="main-heading text-center items-center fw-bold mb-3">
          How To Send Money
        </h2>
        <div className="row d-flex justify-content-center gap-4">
          {data.map((data) => {
            const { title, info, id } = data;
            return (
              <div
                key={id}
                className="col-11 col-lg-4 col-md-6 col-xxl-4 py-4 work-container-subDiv"
              >
                <p>
                  <AiFillCodeSandboxCircle id="icon" />
                </p>
                <p className="sub-heading">{title}</p>
                <p>{info}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Services;
