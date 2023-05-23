import Head from "next/head";
import Link from "next/link";
import Form from "../components/Form";
const ScheduleDemoForm = () => {
  return (
    <>
      <Head>
        <title>
          Book a Free Demo for MS Dynamics 365 & Power Platform Apps{" "}
        </title>
        <meta
          name="description"
          content="Embrace the power of Dynamics 365 and Power Platform with a FREE demo. Schedule now and discover how these business apps can transform operations."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.ca/schedule-a-demo/"
        />
      </Head>
      <section className="Solution-banner hero-1 hero hero-demo-form">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 align-self-center text-center">
              <h1>Book a FREE Demo Now!</h1>
              <h3 style={{ fontSize: "18px", paddingBottom: "40px" }}>
                Deploy an all-in-one and efficient cloud-based ERP system,{" "}
                <Link href="/products/dynamics-365-business-central/">
                  <a>Microsoft Dynamics 365 Business Central</a>
                </Link>{" "}
                to open new Business Oppurtunites.{" "}
              </h3>
              <div></div>
            </div>
          </div>
        </div>
      </section>
      <section className="custom-sed-demp-wraper" style={{paddingBottom:"160px"}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-8  align-self-center">
              <div className="sedule-form">
                <Form />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="footer-contact-s">
        <div className="container">
          <div className="row justify-content-center">
          <div className="col-lg-4">
              <div className="const-list-name">Ontario</div>
              <div className="contact-list">
                <div className="icons-left">
                  <i className="bi bi-geo-alt"></i>
                </div>
                <div className="content-right">
                  800 Steeles Ave. W. #B10155 Thornhill, ON. L4J 7L2
                </div>
              </div>
              <div className="contact-list">
                <div className="icons-left">
                  <i className="bi bi-telephone"></i>
                </div>
                <div className="content-right">
                  <a target="_self" rel="" href="tel:+12898070740">
                  +1 289 807 0740
                  </a>
                </div>
              </div>
              <div className="contact-list">
                <div className="icons-left">
                  <i className="bi bi-envelope"></i>
                </div>
                <div className="content-right">info@dynamicssquare.com</div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="const-list-name">British Columbia</div>
              <div className="contact-list">
                <div className="icons-left">
                  <i className="bi bi-geo-alt"></i>
                </div>
                <div className="content-right">
                  398-2416 Main St. Vancouver BC V5T 3E2
                </div>
              </div>
              <div className="contact-list">
                <div className="icons-left">
                  <i className="bi bi-telephone"></i>
                </div>
                <div className="content-right">
                  <a target="_self" rel="" href="tel:+17783815388">
                  +1 778 381 5388
                  </a>
                </div>
              </div>
              <div className="contact-list">
                <div className="icons-left">
                  <i className="bi bi-envelope"></i>
                </div>
                <div className="content-right">info@dynamicssquare.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer id="footer" className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-5 col-md-12 footer-info">
                <a href="/" className="logo d-flex align-items-center">
                  <img
                    src="/img/dsuk-footer-logo.svg"
                    alt="dsuk-footer-logo"
                    width="282"
                    height="19"
                  />
                </a>
                <p>
                  Dynamics Square is Canada leading Microsoft Gold Certified Partner
                  that caters to the needs of orgnizations who can source
                  next-gen Microsoft Business Apps from our highly skilled
                  Microsoft consultants.
                </p>
                <img
                  src="/img/microsoft-partner.svg"
                  alt="microsoft-partner"
                  className="footer-img"
                  width="210" height="74"
                />
                <img
                  src="/img/Tech-For-Socil-Impact.svg"
                  alt="Tech-For-Socil-Impact"
                  className="footer-img"
                  width="210" height="74"
                />
                <div className="footer-award">
                  <img src="/img/award-1.png" alt='top micrsoft dynamics crm company' width="100" height="100" />
                  <img src="/img/award-1.png" alt='top micrsoft dynamics crm company' width="100" height="100" />
                  <img src="/img/award-1.png" alt='top micrsoft dynamics crm company' width="100" height="100" />
                </div>
              </div>
              <div className="col-lg-2 col-12 footer-links">
                <p>BUSINESS APPS</p>
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <a href="/products/dynamics-365-business-central/">
                      Business Central
                    </a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <a href="/products/microsoft-dynamics-365-finance/">
                      Finance
                    </a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <a href="/products/dynamics-365-supply-chain-management/">
                      Supply Chain
                    </a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <a href="/products/microsoft-dynamics-365-sales/">
                      Sales
                    </a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <a href="/products/microsoft-power-bi/">
                      Power BI
                    </a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <a href="/products/microsoft-azure/">Azure IoT</a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <a href="/products/microsoft-dynamics-erp/">
                      ERP (NAV/GP/AX)
                    </a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <a href="/products/microsoft-dynamics-crm/">
                      CRM
                    </a>
                  </li>
  
                </ul>
              </div>
              <div className="col-lg-2 col-12 footer-links">
                <p>QUICK LINKS</p>
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <a href="/about-us/">About us</a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <a href="/why-us/">Why Us</a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <a href="/our-services/">Our Services</a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <a href="/partner/">Our Partners</a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <a href="/contact-us/">Contact Us</a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <a
                      target="_self"
                      href="https://blog.dynamicssquare.ca/"
                      rel=""
                    >
                      Blogs
                    </a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <a href="/privacy-policy/">Privacy policy</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-12 text-md-start">
                <p>CONNECT WITH US</p>

                <div className="social-links mt-3">
                    <a
                      target="_blank"
                      rel=""
                      href="https://twitter.com/dsquare_ca"
                      className="twitter"
                      aria-label="visit twitter"
                    >
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a
                      target="_blank"
                      rel=""
                      href="https://www.facebook.com/dynamicssquareca"
                      className="facebook"
                      aria-label="visit facebook"
                    >
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a
                      target="_blank"
                      rel=""
                      href="https://www.youtube.com/c/DynamicsSquare"
                      className="instagram"
                      aria-label="visit instagram"
                    >
                      <i className="bi bi-youtube"></i>
                    </a>
                    <a
                      target="_blank"
                      rel=""
                      href="https://www.linkedin.com/company/dynamics-square-canada/"
                      className="linkedin"
                      aria-label="visit linkedin"
                    >
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                <br />
                {/* <div className="subbb">
                  <p>Subscribe Newsletter</p>
                  <span>
                    Get Dynamics 365 Product Updates, Free Webinars, Blogs,
                    Offers And Much More!
                  </span>
             
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            &copy; Copyright &nbsp;<span>2023 Dynamics Square.</span>
            <div className="footer-extra-link">
              <a href="/terms-of-use/" style={{color:'#ff6f7a'}}>Terms of Use </a>
              <a href="/cookie-policy/" style={{color:'#ff6f7a'}}>| Cookie </a>
              {/* <a href="/sitemap.xml">| Sitemap</a> */}
            </div>
          </div>
        </div>
      </footer>
      <div className='call-bb-wr'>
      <button class="fixed-button wobble" type="button">
      <a href="tel:+12898070740" target="_self"><i class="bi bi-telephone-fill"></i></a>
</button>

      </div>
    </>
  );
};

export default ScheduleDemoForm;
