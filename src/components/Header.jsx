import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Header = () => {
  return (
    <header>
      <section className="container main-hero-container">
        <div className="row">
          <div className=" element1 col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column">
            <h1 className="">
              Online Payment Made <br /> Easy For You
            </h1>
            <p className="main-hero-para">
              Our platform makes online payments simple and convenient for you.
              With just a few clicks, you can send and receive money from
              anyone, anywhere. To get started, sign in to your account and add
              your bank account information. This will allow you to make and
              receive payments directly to and from your bank account.
            </p>
            <span>Get only for you</span>
            <div className="input-group mt-3">
              <input
                type="text"
                className="rounded-pill w-75 me-3 p-2 form-control-text"
                placeholder="Enter Your Email"
              />
              <div className="input-group-button">Get it now</div>
            </div>
            {/* main header */}
          </div>
          <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-hero-section-images">
            <img
              src="https://images.unsplash.com/photo-1556742111-a301076d9d18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="img"
              className="img-fluid"
            />
            <img
              src="https://plus.unsplash.com/premium_photo-1661668451715-0edac830bcd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="img"
              className="img-fluid main-hero-img2"
            />
          </div>
        </div>
      </section>
    </header>
  );
};
export default Header;
