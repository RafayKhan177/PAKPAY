import { SettingsApplications } from "@mui/icons-material";
import { useState } from "react";

const Contact = () => {
  const img =
    "https://media.istockphoto.com/id/922512798/photo/business-presentation.webp?s=1024x1024&w=is&k=20&c=z-ukLstOWta4hvHgDaZDto9HqOSBUsFNZmreuqrPbIc=";
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });
  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUserData({ ...userData, [name]: value });
  };
  const SubmitData = async (event) => {
    const { firstName, lastName, phone, email, address, message } = userData;
    if (firstName && lastName && phone && email && address && message) {
      event.preventDefault();
      const res = await fetch(
        "https://pakpay-7f6c2-default-rtdb.firebaseio.com/userDataRecord.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "Application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            phone,
            email,
            address,
            message,
          }),
        }
      );
      if (res) {
        alert("Submited");
        setUserData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          address: "",
          message: "",
        });
      } else {
        alert("Please Fill The Form");
      }
    } else {
      alert("Please Fill The Form");
    }
  };
  return (
    <section className="contact-us-section">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-10 mx-auto">
            <div className="row">
              <div className="contact-us-leftSide col-12 col-lg-5">
                <div className="main-heading">
                  <h3>
                    Contact With Our <br /> Sales Teams
                  </h3>
                  <p className="main-hero-para">
                    Our sales teams are dedicated to helping you find the
                    perfect solution for your needs. Whether you're looking for
                    information on our products and services, or are ready to
                    make a purchase, we're here to help.
                  </p>
                </div>
                <figure>
                  <img src={img} alt="contact-img" className="img-fluid" />
                </figure>
              </div>
              <div className="contact-rightSide coll-12 col-lg-7">
                <form method="POST">
                  <div className="row">
                    <div className="col-12 col-lg-6 contact-input-feild">
                      <input
                        type="text"
                        name="firstName"
                        id=""
                        value={userData.firstName}
                        onChange={postUserData}
                        placeholder="First Name"
                        className="form-control"
                      />
                    </div>
                    <div className="col-12 col-lg-6 contact-input-feild">
                      <input
                        type="text"
                        name="lastName"
                        id=""
                        value={userData.lastName}
                        onChange={postUserData}
                        placeholder="Last Name"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 col-lg-6 contact-input-feild">
                      <input
                        type="tel"
                        name="phone"
                        id=""
                        value={userData.phone}
                        onChange={postUserData}
                        placeholder="Phone"
                        className="form-control"
                      />
                    </div>
                    <div className="col-12 col-lg-6 contact-input-feild">
                      <input
                        type="email"
                        name="email"
                        id=""
                        value={userData.email}
                        onChange={postUserData}
                        placeholder="Email"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 contact-input-feild">
                      <input
                        type="text"
                        name="address"
                        id=""
                        value={userData.address}
                        onChange={postUserData}
                        placeholder="Add Address"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 contact-input-feild">
                      <input
                        type="text"
                        name="message"
                        id=""
                        value={userData.message}
                        onChange={postUserData}
                        placeholder="Enter Your Message"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label className="form-check-label" for="flexCheckDefault">
                      <p>
                        I agree that PAKPAY can contact me via email or above
                        phone number
                      </p>
                    </label>
                  </div>
                  <button className="btn-style w-100" onClick={SubmitData}>
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
