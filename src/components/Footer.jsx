import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-12 col-lg-10 mmx-auto">
            <div className="row">
              <div className="col-6 col-lg-3 ">
                <ul className="text-center">
                  <p className="heading text-center">Company</p>
                  <li>Text</li>
                  <li>Text</li>
                  <li>Text</li>
                  <li>Text</li>
                </ul>
              </div>
              <div className="col-6 col-lg-3 ">
                <ul className="text-center">
                  <p className="heading text-center">Support</p>
                  <li>Text</li>
                  <li>Text</li>
                  <li>Text</li>
                  <li>Text</li>
                </ul>
              </div>
              <div className="col-6 col-lg-3 ">
                <ul className="text-center">
                  <p className="heading text-center">Services</p>
                  <li>Text</li>
                  <li>Text</li>
                  <li>Text</li>
                  <li>Text</li>
                </ul>
              </div>
              <div className="col-6 col-lg-3 ">
                <div className="row">
                  <p className="heading text-center">Follow us</p>
                  <div className="icon-div col-3 mx-auto">
                    <a href=""></a>
                    <BsFacebook className="icon" />
                  </div>
                  <div className="icon-div col-3 mx-auto">
                    <a href=""></a>
                    <BsInstagram className="icon" />
                  </div>
                  <div className="icon-div col-3 mx-auto">
                    <a href=""></a>
                    <BsTwitter className="icon" />
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="mt-6"></div>
            <p className="text-light text-center">
              Copyright @ 2023 PakPay. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
