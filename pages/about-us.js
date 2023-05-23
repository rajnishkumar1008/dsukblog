
import Head from 'next/head'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";


const AboutUs = () => {
  // const [isSSR, setIsSSR] = useState(true);
  // useEffect(() => {
  //   setIsSSR(false);
  // }, []);


  return (
    <>
      <Head>
        <title>About Microsoft Dynamics 365 In Canada: By Dynamics Square</title>
        <meta
          name="description"
          content="Dynamics Square is one of Canada's leading Microsoft Dynamics 365 implementation partners. Get in touch with us for low-cost CRM and ERP solutions."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.ca/about-us/"
        />
        <meta name="robots" content="index,follow" />
      </Head>
      <main>
        <section className="Solution-banner hero-1 hero about-banner">
          <div className="container">
            <div className="row">
              <div className="col-lg-6  mobile-1 align-self-center">
                <h1>Empowering Businesses to Lead Future Transformations</h1>
                <p>We're a leading Microsoft Gold partner, integrating enterprise-grade cloud-based ERP & CRM solutions to help you become smarter, and faster in business decisions.</p>
              </div>
              <div className="col-lg-6 align-self-center">
                <img src="/img/group-2193.png" alt="About" />
              </div>
            </div>
          </div>
        </section>

        <section className="about-intr">
          <div className="container">
            <div className="col-lg-12">
              <div className="about-intr-wrpper">
                <div className="left-content">
                  <h3>
                    We're Microsoft
                    <br />
                    Gold Partners
                  </h3>
                </div>
                <div className="right-content">
                  <p>As a Microsoft Gold Partner and trusted by 250+ clients worldwide, we're proactively delivering Microsoft cloud technology solutions, training, and support from a team of 135+ highly skilled Microsoft consultants.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="counter-sec">
          <div className="container">
            <div className="row inner-side-pad">
              <div className="col-lg-4 col-md-4">
                <div className="counter-sec inerr">
                  <h3>250+</h3>
                  <p>Clients Worldwide</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="counter-sec inerr">
                  <h3>135+</h3>
                  <p>Certified Pofessionals</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="counter-sec inerr">
                  <h3>11+</h3>
                  <p>Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mission">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <header className="section-header">
                  <h2>Building Trust Among Companies & Customers</h2>
                  <p>
                    Relationships are built over an ever-valuable commodity,
                    Trust. We're out with a simple motto in mind: Be the most
                    preferred technology solution provider in the Global IT
                    Infrastructure by developing trust among companies and
                    clients for rapid business growth.
                  </p>
                </header>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="mission-content">
                  <div className="mission-inner-con">
                    <img src="/img/mission.png" alt="mission" />
                    <h3>Mission</h3>
                    <p>On a mission with a powerful set of Microsoft Business Applications such as Dynamics 365 Business Central, Finance, Sales, and Supply Chain that are hosted on Microsoft Azure Cloud, a highly secure and advanced cloud network to enable every business on the planet to achieve more.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="mission-content">
                  <div className="mission-inner-con">
                    <img src="/img/vission.png" alt="vission" />
                    <h3>Vision</h3>
                    <p>By integrating Power BI, AI, and ML - powered by Microsoft cloud technology - we simplify and automate business processes, improve customer experience, and boost sales ROI.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="mission-content">
                  <div className="mission-inner-con">
                    <img src="/img/approch-new.png" alt="approch" className="wsd" />
                    <h3>Approach</h3>
                    <p>By making cloud technology accessible, we aim to build long-term relationships. Our fundamental values are "customer centricity" and "value proposition". All our actions are focused on our clients - engaging, informing, and adding value to their vision.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mission">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 align-self-center">
                <div className="mission-pic">
                  <img
                    src="/img/miss-lefiimage.png"
                    alt="miss-lefiimage"
                  />
                </div>
              </div>
              <div className="col-lg-6 align-self-center">
                <div className="mission-content-building">
                 <h3>Building Long Term Association</h3>
                 <p>By making cloud technology accessible, we aim to build long-term relationships. Our fundamental values are "customer centricity" and "value proposition". All our actions are focused on our clients - engaging, informing, and adding value to their vision.</p>
                 <h4>See how our incredible people can help you</h4>
                 <div>
                    <div className="text-center text-lg-start">
                      <a
                        data-bs-toggle="modal"
                        href="#exampleModal"
                        className="btn-get-started scrollto"
                      >
                        <span>Get In Touch</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="domain-expertise">
          <div className="container">
          <div className="row justify-content-center">
              <div className="col-lg-8">
                <header className="section-header">
                  <h2>Get To Know Our Passionate Team</h2>
                  <p>Dynamics Square is led by a team of seasoned professionals who are always looking for new business opportunities.</p>
                </header>
              </div>
            </div>
          <div className="row">
              <div className="col-lg-4">
                <div className="team-memb">
                  <div className="tem-mem-pic">
                    <img src="/img/gaurav-goyal.png" alt="gaurav-goyal" />
                  </div>
                  <div className="tem-mem-info">
                    <h4>Gaurav Goyal</h4>
                    <span>Co - Founder</span>
                    <p>"Nurturing people and investing in their capabilities to build a resilient organization."</p>
                  </div>
                  {/* <div className="social">
                    <a href="https://www.linkedin.com/in/gauravg1">
                      <i className="bi bi-linkedin"></i>
                      </a>
                    </div> */}
                </div>
              </div>
              <div className="col-lg-4">
                <div className="team-memb">
                  <div className="tem-mem-pic">
                    <img src="/img/manish-goyal.png" alt="manish-goyal" />
                  </div>
                  <div className="tem-mem-info">
                    <h4>Manish Goyal</h4>
                    <span>Co - Founder</span>
                    <p>"Helping companies with Digital Transformation using innovative Microsoft cloud technology"</p>
                  </div>
                  <div className="social">
                    <a href="https://www.linkedin.com/in/manish-g-74854a44">
                      <i className="bi bi-linkedin"></i>
                      </a>
                    </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="team-memb">
                  <div className="tem-mem-pic">
                    <img src="/img/dr-felton-lean.png" alt="dr-felton-lean" />
                  </div>
                  <div className="tem-mem-info">
                    <h4>Dr. Felton Lean</h4>
                    <span>The People Person</span>
                    <p>"Helping employees and organisations to achieve more through learning and development."</p>
                  </div>
                  {/* <div className="social">
                    <a href="https://www.linkedin.com/in/dr-felton-lean-5941bb2b/">
                      <i className="bi bi-linkedin"></i>
                      </a>
                    </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="bg-drak">
          <div className="container">
          <div className="row justify-content-center">
              <div className="col-lg-8">
                <header className="section-header section-header-white-new">
                  <h2>Milestones Achieved Since Inception </h2>
                </header>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{
                    delay: 6000,
                    disableOnInteraction: true,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper about-timeline"
                >
                  <SwiperSlide>
                    <div className="inner-slider-cont">
                      <h4>2011</h4>
                      <p>Dynamics Square came into existence</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="inner-slider-cont">
                      <h4>2012</h4>
                      <p>Became Microsoft Certified Silver Partner</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="inner-slider-cont">
                      <h4>2015</h4>
                      <p>Started our Footprints in Australia</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="inner-slider-cont">
                      <h4>2016</h4>
                      <p>Launched US/UK Operations</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="inner-slider-cont">
                      <h4>2017</h4>
                      <p>Became Competent for D365 Customer Engagement</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="inner-slider-cont">
                      <h4>2018</h4>
                      <p>Became Microsoft Gold Certified Partner</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="inner-slider-cont">
                      <h4>2019</h4>
                      <p>Launched Singapore Operations</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="inner-slider-cont">
                      <h4>2020</h4>
                      <p>Emerged as Power Platform competent</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div className="inner-slider-cont">
                      <h4>2021</h4>
                      <p>
                        Gained competency with entire Microsoft Business
                        Applications
                      </p>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </section>



        <section>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9">
              <header className="section-header">
              <h2>We are not merely an IT Solutions provider, but your partner in growth.  </h2>
              </header>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <img src="/img/group-2192.svg" alt="group-2192"></img>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9">
              <header className="section-header">
              <h2>Accelerate and Future-proof Your Business with Deep Industry Expertise.</h2>
              <p><b>With us, your business grows at full throttle.</b></p>
              <p>Since 2011, Dynamics Square has been helping SMBs and large enterprises grow and scale by providing the latest IT technology solutions.</p>
              </header>
              </div>
            </div>
            <Swiper
            autoplay={{
              delay: 6000,
              disableOnInteraction: true,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination ,Autoplay]} className="mySwiper mySwiper-about">
            <SwiperSlide>
              <div className="row bg-grays">
                  <div className="col-lg-6 align-self-center">
                    <div className="text-center">
                    <img src="/img/new-side-1.png" alt="new-side-1" />
                    </div>
                  </div>
                  <div className="col-lg-6 align-self-center">
                    <div className="slider-new-com">
                      <h3>Bring the Change with Microsoft's SaaS Cloud ERP Solutions</h3>
                      <p>With modern ERP systems powered by machine learning, artificial intelligence, and cloud technology, we ensure continuous business growth and sustainability.</p>
                      <ul className="new-com-list">
                        <li>
                          <a href="/products/dynamics-365-business-central/">
                          <img src="/img/group-2122.png" alt="group-2192" />
                          <span>Business <br /> Centeral</span>
                          </a>
                        </li>
                        <li>
                          <a href="/products/microsoft-dynamics-365-finance/">
                          <img src="/img/group-2123.png" alt="group-2192" />
                          <span>finance</span>
                          </a>
                        </li>
                        <li>
                          <a href="/products/microsoft-dynamics-365-commerce/">
                          <img src="/img/group-2124.png" alt="group-2192" />
                          <span>commerce</span>
                          </a>
                        </li>
                        <li>
                          <a href="/products/dynamics-365-human-resources/">
                          <img src="/img/group-2125.png" alt="group-2192" />
                          <span>hr</span>
                          </a>
                        </li>
                        <li>
                          <a href="/products/dynamics-365-supply-chain-management/">
                          <img src="/img/group-2126.png" alt="group-2192" />
                          <span>Supply <br /> chain</span>
                          </a>
                        </li>
                        <li>
                          <a href="/products/dynamics-365-project-operations/">
                          <img src="/img/group-2127.png" alt="group-2192" />
                          <span>project <br /> operation</span>
                          </a>
                        </li>
                        
                        
                      </ul>
                    </div>
                  </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="row bg-grays">
                  <div className="col-lg-6 align-self-center">
                    <div className="text-center">
                    <img src="/img/group-2152.png" alt="new-side-1" />
                    </div>
                  </div>
                  <div className="col-lg-6 align-self-center">
                    <div className="slider-new-com">
                      <h3>Understand Customers, Deliver the Ultimate Customer Experience</h3>
                      <p>We help you understand your customers, build strong relationships, nurture clients and boost sales through Microsoft CRM solutions.</p>
                      <ul className="new-com-list">
                        <li>
                          <a href="/products/microsoft-dynamics-365-sales/">
                          <img src="/img/group-2138.png" alt="group-2192" />
                          <span>Sales</span>
                          </a>
                        </li>
                        <li>
                          <a href="/products/microsoft-dynamics-365-marketing/">
                          <img src="/img/group-2139.png" alt="group-2192" />
                          <span>Marketing</span>
                          </a>
                        </li>
                        <li>
                          <a href="/products/microsoft-dynamics-365-field-service/">
                          <img src="/img/group-2137.png" alt="group-2192" />
                          <span>Field <br /> Service</span>
                          </a>
                        </li>
                        <li>
                          <a href="/products/microsoft-dynamics-365-customer-service/">
                          <img src="/img/group-2136.png" alt="group-2192" />
                          <span>Customer <br /> Service</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="row bg-grays">
                  <div className="col-lg-6 align-self-center">
                    <div className="text-center">
                    <img src="/img/group-215.png" alt="new-side-1" />
                    </div>
                  </div>
                  <div className="col-lg-6 align-self-center">
                    <div className="slider-new-com">
                      <h3>Integrated Microsoft Solutions to Foster Impactful Decisions </h3>
                      <p>Get a complete picture of your customers by analyzing data from various sources including social media, interactions, and communications with other Microsoft business apps that can be integrated seamlessly with Microsoft Dynamics 365 modules.</p>
                      <ul className="new-com-list">
                        <li>
                          <a href="/products/microsoft-power-bi/">
                          <img src="/img/group-2214.png" alt="group-2192" />
                          <span>Power <br /> Bi</span>
                          </a>
                        </li>
                        <li>
                          <a href="/products/microsoft-power-automate/">
                          <img src="/img/group-2213.png" alt="group-2192" />
                          <span>Power <br /> Automate</span>
                          </a>
                        </li>
                        <li>
                          <a href="/products/microsoft-power-apps/">
                          <img src="/img/group-2211.png" alt="group-2192" />
                          <span>Power <br /> Apps</span>
                          </a>
                        </li>
                        <li>
                          <a href="/products/microsoft-power-virtual-agents/">
                          <img src="/img/group-22101.png" alt="group-2192" />
                          <span>Virtual <br /> Agent</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="row bg-grays">
                  <div className="col-lg-6 align-self-center">
                    <div className="text-center">
                    <img src="/img/group-2154.png" alt="new-side-1" />
                    </div>
                  </div>
                  <div className="col-lg-6 align-self-center">
                    <div className="slider-new-com">
                      <h3>Make Unthinkable Happen with Emerging Technologies</h3>
                      <p>Save time and money by connecting your business to an intelligent Microsoft Cloud Ecosystem, Mixed Reality, & AI/ML. With Microsoft Dynamics 365, you can gain insights into your customers, optimize business processes, and automate workflows to drive efficiency and growth.</p>
                      <ul className="new-com-list">
                        <li>
                          <a href="/products/microsoft-dynamics-365/mixed-reality/">
                          <img src="/img/group-1998.png" alt="group-2192" />
                          <span>Mixed <br /> Reality</span>
                          </a>
                        </li>
                        <li>
                          <a href="/products/microsoft-azure/">
                          <img src="/img/group-2164.png" alt="group-2192" />
                          <span>Azure</span>
                          </a>
                        </li>
                        <li>
                          <a href="/products/microsoft-dynamics-365-ai/">
                          <img src="/img/group-1977.png" alt="group-2192" />
                          <span>AI</span>
                          </a>
                        </li>
                        
                        
                      </ul>
                    </div>
                  </div>
              </div>
            </SwiperSlide>
            </Swiper>
          </div>
        </section>

        <section>
          <div className="container">
          <div className="row justify-content-center">
              <div className="col-lg-8">
                <header className="section-header">
                  <h2>Why Choose Dynamics Square?</h2>
                  <p>Disrupting traditional ways of serving people is in our veins. We provide IT solutions and technology consulting that is available at reasonable and fixed prices. Our solutions are tailored to fit your business purposes.</p>
                </header>
              </div>
            </div>
          </div>
        </section>

        <section className="marn-bus-bo">
          <div className="container">
            <header className="section-header">
              <h2>Business Partners We Have Worked With</h2>
            </header>
            <div className="row">
              <div className="col-lg-12">
                <img src="/img/clients.jpg" alt="clients"></img>
              </div>
              <div className="col-lg-12 col-md-12">
              <div className="price-btn d-flex justify-content-center">
                <a
                  href="/case-studies/"
                  className="btn-get-red"
                >
                  <span>Read Success Stories</span>
                </a>
              </div>
            </div>
            </div>
          </div>
        </section>


        <section>
          <div className="container">
            <header className="section-header">
              <h2>Our Presence Worldwide</h2>
            </header>
            <div className="row">
              <div className="col-lg-12">
                <img src="/img/word-map.png" alt="word-map"></img>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AboutUs;