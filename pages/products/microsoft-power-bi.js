import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay, FreeMode, Mousewheel, Navigation } from "swiper";
import ModalVideo from "react-modal-video";
// import Blog from "../../components/Blog";
const PowerBI = () => {
  const [isOpen, setOpen] = useState(false);
  const [open, setsOpen] = useState(false);
  return (
    <>
      <Head>
      <title>Trusted Microsoft Power BI Partner | Power BI Experts & Support</title>
        <meta
          name="description"
          content="Certified Power BI consultants in Canada: Get Power BI implementation, customization, and support. Call +1 289 807 0740 for demo and pricing."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.ca/products/microsoft-power-bi/"
        />     
        <meta name="robots" content="index,follow" />
      </Head>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="Az1NOVaHexs"
        onClose={() => setOpen(false)}
      /> 
       <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 align-self-center">
              <h1 className="new-heding-colo">
              Microsoft Power BI Partner 
              </h1>
              <p className="banner-para">Let your data lead the way to business success with our reliable Power BI consulting services. From designing and implementing to customizing reports and dashboards, our certified Power BI experts will ensure that your data is leveraged to its fullest potential.</p>
              <div>
                <div className="text-center text-lg-start">
                  <Link href="#exampleModal">
                    <a
                      data-bs-toggle="modal"
                      className="btn-get-started scrollto"
                    >
                      <span>Get Free Consultation</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              {/* <Image
                src="/img/Power-BI-banner.png"
                alt="Power-BI-dashboard-banner"
                width={1165}
                height={608}
              /> */}
              <video className="video-screens" autoPlay loop muted poster="/img/video-thumb.png">
                  <source src="/video/power-b-banner-videos.mp4" />
                </video>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <header className="section-header section-header-new-ct">
              <h2>Take charge <span> of your data with </span>MS Power BI
                </h2>
                <p>Data is valuable for business when used effectively. However, to produce valuable insights, you need to know how to use it. Microsoft Power BI can help you make the most of the data you produce daily, providing the tools to extract valuable insights and make informed decisions.</p>
              </header>
            </div>
          </div>
          <div className="row pps-to">
            <div className="col-lg-5 align-self-center">
              <div className="vide-s">
                {/* <img src="/img/poerbi-demo-pic.png" alt="pic" /> */}
                <video className="video-screen" autoPlay loop muted poster="/img/video-thumb.png">
                  <source src="/video/powerBI-vid.mp4" />
                </video>
              </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-6 align-self-center">
              <div className="new-sol-con-side">
                <h3 className="custt-hh">What Is <span>Microsoft Power BI?</span></h3>
                <p>Power BI is a set of Business Intelligence tools that simplify the process of collecting, analyzing, visualizing, and integrating data for making data-driven decisions.</p> 

                <p>It's not just a digitalization move but a business transformation strategy. Power BI offers easy-to-use dashboards, interactive visualizations, and insightful reports.</p>

                <p>Ready to transform your business with data-driven decisions? Try Microsoft Power BI and unlock the full potential of your data.</p>
                <div className="text-center text-lg-start">
                  <Link href="#exampleModal">
                    <a
                      data-bs-toggle="modal"
                      className="btn-get-started scrollto"
                    >
                      <span>Get Started Now</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          {/* <div className="row justify-content-center" style={{paddingBottom:"40px"}}>
            <div className="col-lg-9">
              <header className="section-header section-header-new-ct">
                <h2>
                <span>Simple & quick way to </span> unlock data
                </h2>
                <p>The market is not short of business intelligence tools, but there is a sharp distinction that Power BI possesses against other software. Deriving intelligent business insights involves integrating data from multiple sources, harvesting contextual value from the volumes of information, and producing easy-to-understand reports. Not every BI tool can handle such an overwhelming and accuracy-demanding process. Power BI, on the other hand, can streamline data analytics and help you make informed business decisions in real-time with on-premises or in-the-cloud dashboards and appealing reports.</p>
                <p style={{color:'#1d3557'}}><b>With Microsoft Power BI, you can</b></p>
              </header>
            </div>
          </div> */}
           <div style={{paddingBottom:'60px'}} className="row pps-tot">
           
          
            <div className="col-lg-6 align-self-center">
              <div className="new-sol-con-side">
                <h3 className="custt-hh">Simple & quick way to <span>unlock data</span></h3>
                <p>Microsoft Power BI stands out from other business intelligence tools because it can handle the complex process of integrating data from multiple sources, extracting value from large amounts of information, and producing easy-to-understand reports.</p>

                <p>With a trusted <Link href="/"><a><b>Microsoft Power BI Partner</b></a></Link> in Canada, you can streamline data analytics, make informed decisions in real-time, and access on-premises or cloud-based dashboards and reports.</p>
                <div className="text-center text-lg-start">
                  <Link href="#exampleModal">
                    <a
                      data-bs-toggle="modal"
                      className="btn-get-started scrollto"
                    >
                      <span>Get Started Now</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-5 align-self-center">
              <div className="vide-s">
                <img src="/img/sideshp-1.png" alt="Microsoft-Power-BI-Logo" />
                {/* <video className="video-screen" autoPlay loop muted poster="/img/video-thumb.png">
                  <source src="/video/powerBI-vid.mp4" />
                </video> */}
              </div>
            </div>
          </div>
        </div>
        <section>
          <div className="container">
          <div className="col-lg-12">
            <h3 className="custt-hh">With <span>Power BI</span>, you can</h3>
            </div>
          </div>
        </section>
        <div className="container-fluid">
          <div className="row">
           
            <div>
            <Swiper
                autoplay={{
                  delay: 1,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                    speed: 20000,
                  },
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                    speed: 20000,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                    speed: 20000,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                    speed: 20000,
                  },
                  1300: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                    speed: 20000,
                  },
                  1400: {
                    slidesPerView: 4,
                    spaceBetween: 15,
                    speed: 20000,
                  }
                }}
                loop={false}
                freeMode={true}
                mousewheel={true}
                pagination={{
                  clickable: true,
                }}
                modules={[Autoplay, FreeMode, Mousewheel,Pagination]}
                className="mySwiper busine-swiper"
              >
                <SwiperSlide>
                  <div className="card card-ds-slide">
                    <div className="card-body">
                      <h3 className="card-title power-title">Get Real-Time Insights with Every Click</h3>
                      <p className="card-text">Quickly understand your business performance with customizable smart dashboards. Predict the contextual effects of your decisions, avoid pitfalls, and make informed choices.</p>
                    </div>
                    <img
                      src="/img/slider-bi-dem-1.png"
                      className="card-img-bottom"
                      alt="power bi real time insights"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card card-ds-slide">
                    <div className="card-body">
                      <h3 className="card-title power-title">Drag & drop to visualise insights</h3>
                      <p className="card-text">Generate multiple reports to monitor business growth in real-time and uncover patterns using intuitive filters and drag-and-drop features.</p>
                    </div>
                    <img
                      src="/img/slider-bi-dem-2.png"
                      className="card-img-bottom"
                      alt="Power bi drag and drop"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card card-ds-slide">
                    <div className="card-body">
                      <h3 className="card-title power-title">Access intelligence from anywhere</h3>
                      <p className="card-text">Access your business intelligence hub anytime and anywhere with the Power BI app for iOS, Android, and Windows.</p>
                    </div>
                    <img
                      src="/img/slider-bi-dem-3.png"
                      className="card-img-bottom"
                      alt="access power bi anywhere"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card card-ds-slide">
                    <div className="card-body">
                      <h3 className="card-title power-title">Keep your data protected at all times</h3>
                      <p className="card-text">Protect your data with strong governance policies, including report sharing, BYOK (Bring Your Own Key), and real-time access monitoring.</p>
                    </div>
                    <img
                      src="/img/slider-bi-dem-4.png"
                      className="card-img-bottom"
                      alt="power bi data protection"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card card-ds-slide">
                    <div className="card-body">
                      <h3 className="card-title power-title">
                      Your personal intelligence assistance
                      </h3>
                      <p className="card-text">No need to learn complex query language or make complicated adjustments for reports. Simply ask natural language questi ons and Power BI will produce refined visualizations.</p>
                    </div>
                    <img
                      src="/img/slider-bi-dem-5.png"
                      className="card-img-bottom"
                      alt="Power BI visualisations"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card card-ds-slide">
                    <div className="card-body">
                      <h3 className="card-title power-title">
                      Foster a culture of collaboration
                      </h3>
                      <p className="card-text">Implement a data-led approach to business operations and achieve accuracy and excellence by giving your team access to live reports and dashboards.</p>
                    </div>
                    <img
                      src="/img/slider-bi-dem-6.png"
                      className="card-img-bottom"
                      alt="Power BI data rich reports"
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div>
                <div className="text-center">
                  <Link href="#exampleModal">
                    <a
                      data-bs-toggle="modal"
                      className="btn-get-started scrollto"
                    >
                      <span>Schedule a call</span>
                    </a>
                  </Link>
                </div>
              </div>
        </div>
      </section>

      {/* <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <img src="/img/micrsoft-bc-image.png" alt="" />
          </div>
        </div>
      </div> */}











      <section className="nn-bg">
        {/* <div className="bb">
          <img src="/img/bus-bg.png" alt="bgimage" />
        </div> */}
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <header className="section-header section-header-new-ct">
                <h2>
                  <span>Microsoft Power BI </span>Capabilities
                </h2>
              </header>
            </div>
          </div>
          <div className="row solution-new-tab-content d-lg-none">
            <div className="col-lg-12">
              <div className="finace-acc">
                <div className="accordion" id="accnew">
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin1"
                        aria-expanded="false"
                        aria-controls="fin1"
                      >
                        <span>Power BI Desktop</span>
                      </button>
                    </h3>
                    <div
                      id="fin1"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                      <div className="inner-con-div">
                      <ul>
                        <li>Generate high-quality & visual reports through free to install Windows desktop BI app</li>
                        <li>Build seamless data models through a UI as simple as that of Excel & Powerpoint</li>
                        <li>Impress your board with compelling reports featuring multiple pages, Power BI visuals, buttons, and filters</li>
                      </ul>
                      <div className="call-butt">
                        <Link href="#exampleModal">
                          <a
                            data-bs-toggle="modal"
                            className="btn-get-started scrollto"
                          >
                            <span>Feel Free to Contact Us to Get a Demo</span>
                          </a>
                        </Link>
                      </div>
                    </div>
                      </div>
                    </div>
                  </div>
                 
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin2"
                        aria-expanded="false"
                        aria-controls="fin2"
                      >
                        <span>Power BI Mobile</span>
                      </button>
                    </h3>
                    <div
                      id="fin2"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                      <div className="inner-con-div">
                      <ul>
                        <li>Drive your business remotely by accessing data through your mobile devices</li>
                        <li>Gain a comprehensive view of your data analytics on live dashboards on the go</li>
                        <li>Annotate reports & set alerts and push notifications via Power BI mobile app</li>
                      </ul>
                      <div className="call-butt">
                        <Link href="#exampleModal">
                          <a
                            data-bs-toggle="modal"
                            className="btn-get-started scrollto"
                          >
                            <span>Contact us to get a quote</span>
                          </a>
                        </Link>
                      </div>
                    </div>
                      </div>
                    </div>
                  </div>
                 
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin3"
                        aria-expanded="false"
                        aria-controls="fin3"
                      >
                        <span>Power BI Service</span>
                      </button>
                    </h3>
                    <div
                      id="fin3"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                      <div className="inner-con-div">
                      <ul>
                        <li>Distribute your visually attractive and informative reports easily</li>
                        <li>Pack your reports with enterprise-grade details and enable create & edit features online</li>
                        <li>Streamline collaboration by enabling your team to create reports using your data</li>
                      </ul>
                      <div className="call-butt">
                        <Link href="#exampleModal">
                          <a
                            data-bs-toggle="modal"
                            className="btn-get-started scrollto"
                          >
                            <span>Feel Free to Contact Us to Get a Demo</span>
                          </a>
                        </Link>
                      </div>
                    </div>
                      </div>
                    </div>
                  </div>
                 
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin4"
                        aria-expanded="false"
                        aria-controls="fin4"
                      >
                        <span>Power BI Pro</span>
                      </button>
                    </h3>
                    <div
                      id="fin4"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                      <div className="inner-con-div">
                      <ul>
                        <li>Share data visualisations easily with team for enhanced collaboration</li>
                        <li>Let data guide your decision-making process by accessing visualizations on mobile</li>
                        <li>Adjust permissions to share data visualizations and report to individuals outside the office</li>
                      </ul>
                      <div className="call-butt">
                        <Link href="#exampleModal">
                          <a
                            data-bs-toggle="modal"
                            className="btn-get-started scrollto"
                          >
                            <span>Feel free to contact us to get a demo</span>
                          </a>
                        </Link>
                      </div>
                    </div>
                      </div>
                    </div>
                  </div>
                 
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin5"
                        aria-expanded="false"
                        aria-controls="fin5"
                      >
                        <span>Power BI Premium</span>
                      </button>
                    </h3>
                    <div
                      id="fin5"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                      <div className="inner-con-div">
                      <ul>
                        <li>Utilise advance functionalities like application lifecycle management, paginated reports, etc.</li>
                        <li>Use visual cues to push your content from development through testing to production</li>
                        <li>Access and share Power BI dashboard from mobile with Power BI mobile and also share reports on the go</li>
                      </ul>
                      <div className="call-butt">
                        <Link href="#exampleModal">
                          <a
                            data-bs-toggle="modal"
                            className="btn-get-started scrollto"
                          >
                            <span>Contact us to get a quote</span>
                          </a>
                        </Link>
                      </div>
                    </div>
                      </div>
                    </div>
                  </div>
                 
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin6"
                        aria-expanded="false"
                        aria-controls="fin6"
                      >
                        <span>Power Embedded</span>
                      </button>
                    </h3>
                    <div
                      id="fin6"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                      <div className="inner-con-div">
                      <ul>
                        <li>Leverage capabilities and features with embedded Power BI from within your applications</li>
                        <li>Automate monitoring, management and deployment of analytics</li>
                        <li>Take complete control of access and authorization to make changes in reports</li>
                      </ul>
                      <div className="call-butt">
                        <Link href="#exampleModal">
                          <a
                            data-bs-toggle="modal"
                            className="btn-get-started scrollto"
                          >
                            <span>Streamline your projects today</span>
                          </a>
                        </Link>
                      </div>
                    </div>
                      </div>
                    </div>
                  </div>
                 
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin7"
                        aria-expanded="false"
                        aria-controls="fin7"
                      >
                        <span>Power BI Report Server</span>
                      </button>
                    </h3>
                    <div
                      id="fin7"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                      <div className="inner-con-div">
                      <ul>
                        <li>Create interactive reports with enterprise capabilities of SQL Server Reporting Services</li>
                        <li>Allow and manage access to reports through a centralized dashboard</li>
                        <li>Customise reports at scale with freeform drag-and-drop capabilities</li>
                      </ul>
                      <div className="call-butt">
                        <Link href="#exampleModal">
                          <a
                            data-bs-toggle="modal"
                            className="btn-get-started scrollto"
                          >
                            <span>Book Free Consultation</span>
                          </a>
                        </Link>
                      </div>
                    </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row tabs-none">
            <div className="cpl-lg-12">
              <div className="d-flex align-items-start">
                <div
                  className="nav flex-column nav-pills me-3 solution-new-tab"
                  id="s-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <button
                    className="nav-link active"
                    id="s-pills-home-1-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#s-pills-home-1"
                    type="button"
                    role="tab"
                    aria-controls="s-pills-home-1"
                    aria-selected="true"
                  >
                    <h3>Power BI Desktop</h3>
                  </button>
                  <button
                    className="nav-link"
                    id="s-pills-home-2-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#s-pills-home-2"
                    type="button"
                    role="tab"
                    aria-controls="s-pills-home-2"
                    aria-selected="false"
                  >
                    <h3>Power BI Mobile</h3>
                  </button>
                  <button
                    className="nav-link"
                    id="s-pills-hpme-3-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#s-pills-hpme-3"
                    type="button"
                    role="tab"
                    aria-controls="s-pills-hpme-3"
                    aria-selected="false"
                  >
                    <h3>Power BI Service</h3>
                  </button>
                  <button
                    className="nav-link"
                    id="s-pills-home-4-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#s-pills-home-4"
                    type="button"
                    role="tab"
                    aria-controls="s-pills-home-4"
                    aria-selected="false"
                  >
                    <h3>Power BI Pro</h3>
                  </button>
                  <button
                    className="nav-link"
                    id="s-pills-home-5-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#s-pills-home-5"
                    type="button"
                    role="tab"
                    aria-controls="s-pills-home-5"
                    aria-selected="false"
                  >
                    <h3>Power BI Premium</h3>
                  </button>
                  <button
                    className="nav-link"
                    id="s-pills-home-6-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#s-pills-home-6"
                    type="button"
                    role="tab"
                    aria-controls="s-pills-home-6"
                    aria-selected="false"
                  >
                    <h3>Power Embedded</h3>
                  </button>
                  <button
                    className="nav-link"
                    id="s-pills-home-7-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#s-pills-home-7"
                    type="button"
                    role="tab"
                    aria-controls="s-pills-home-7"
                    aria-selected="false"
                  >
                    <h3>Power BI Report Server</h3>
                  </button>
                </div>
                <div
                  className="tab-content solution-new-tab-content"
                  id="s-pills-tabContent-"
                >
                  <div
                    className="tab-pane fade show active"
                    id="s-pills-home-1"
                    role="tabpanel"
                    aria-labelledby="s-pills-home-1-tab"
                  >
                    <div className="inner-con-div">
                      <ul>
                        <li>Generate high-quality & visual reports through free to install Windows desktop BI app</li>
                        <li>Build seamless data models through a UI as simple as that of Excel & Powerpoint</li>
                        <li>Impress your board with compelling reports featuring multiple pages, Power BI visuals, buttons, and filters</li>
                      </ul>
                      <div className="call-butt">
                        <Link href="#exampleModal">
                          <a
                            data-bs-toggle="modal"
                            className="btn-get-started scrollto"
                          >
                            <span>Feel Free to Contact Us to Get a Demo</span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="s-pills-home-2"
                    role="tabpanel"
                    aria-labelledby="s-pills-home-2-tab"
                  >
                      <div className="inner-con-div">
                        <ul>
                          <li>Drive your business remotely by accessing data through your mobile devices</li>
                          <li>Gain a comprehensive view of your data analytics on live dashboards on the go</li>
                          <li>Annotate reports & set alerts and push notifications via Power BI mobile app</li>
                        </ul>
                      <div className="call-butt">
                        <Link href="#exampleModal">
                          <a
                            data-bs-toggle="modal"
                            className="btn-get-started scrollto"
                          >
                            <span>Contact us to get a quote</span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="s-pills-hpme-3"
                    role="tabpanel"
                    aria-labelledby="s-pills-hpme-3-tab"
                  >
                    <div className="inner-con-div">
                        <ul>
                          <li>Distribute your visually attractive and informative reports easily</li>
                          <li>Pack your reports with enterprise-grade details and enable create & edit features online</li>
                          <li>Streamline collaboration by enabling your team to create reports using your data</li>
                        </ul>
                      <div className="call-butt">
                        <Link href="#exampleModal">
                          <a
                            data-bs-toggle="modal"
                            className="btn-get-started scrollto"
                          >
                            <span>Feel Free to Contact Us to Get a Demo</span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="s-pills-home-4"
                    role="tabpanel"
                    aria-labelledby="s-pills-home-4-tab"
                  >
                    <div className="inner-con-div">
                    <ul>
                          <li>Share data visualisations easily with team for enhanced collaboration</li>
                          <li>Let data guide your decision-making process by accessing visualizations on mobile</li>
                          <li>Adjust permissions to share data visualizations and report to individuals outside the office</li>
                        </ul>
                      <div className="call-butt">
                        <Link href="#exampleModal">
                          <a
                            data-bs-toggle="modal"
                            className="btn-get-started scrollto"
                          >
                            <span>Feel free to contact us to get a demo</span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="s-pills-home-5"
                    role="tabpanel"
                    aria-labelledby="s-pills-home-5-tab"
                  >
                    <div className="inner-con-div">
                    <ul>
                          <li>Utilise advance functionalities like application lifecycle management, paginated reports, etc.</li>
                          <li>Use visual cues to push your content from development through testing to production</li>
                          <li>Access and share Power BI dashboard from mobile with Power BI mobile and also share reports on the go</li>
                        </ul>
                      <div className="call-butt">
                        <Link href="#exampleModal">
                          <a
                            data-bs-toggle="modal"
                            className="btn-get-started scrollto"
                          >
                            <span>Contact us to get a quote</span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="s-pills-home-6"
                    role="tabpanel"
                    aria-labelledby="s-pills-home-6-tab"
                  >
                    <div className="inner-con-div">
                    <ul>
                          <li>Leverage capabilities and features with embedded Power BI from within your applications
</li>
                          <li>Automate monitoring, management and deployment of analytics</li>
                          <li>Take complete control of access and authorization to make changes in reports</li>
                        </ul>
                      <div className="call-butt">
                        <Link href="#exampleModal">
                          <a
                            data-bs-toggle="modal"
                            className="btn-get-started scrollto"
                          >
                            <span>Streamline your projects today</span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="s-pills-home-7"
                    role="tabpanel"
                    aria-labelledby="s-pills-home-7-tab"
                  >
                    <div className="inner-con-div">
                    <ul>
                          <li>Create interactive reports with enterprise capabilities of SQL Server Reporting Services</li>
                          <li>Allow and manage access to reports through a centralized dashboard</li>
                          <li>Customise reports at scale with freeform drag-and-drop capabilities</li>
                        </ul>
                      <div className="call-butt">
                        <Link href="#exampleModal">
                          <a
                            data-bs-toggle="modal"
                            className="btn-get-started scrollto"
                          >
                            <span>Book Free Consultation</span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="casestudys" className="casestudys ">
        <div className="container" data-aos="fade-up">
          <div className="row  gy-4">
          <div className="col-lg-6 align-self-center">
              <div className="sec-title">
                <h2>See how our clients&apos; businesses thrive.</h2>
                <p>Dynamics 365 Case Stories</p>
              </div>
              <Swiper
                autoplay={{
                  delay: 10000,
                  disableOnInteraction: false,
                }}
                slidesPerView={1}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper casestudys-sled-1"
              >
                <SwiperSlide>
                  <div className="casestudys-slider-item">
                    <div className="profile mt-auto">
                      
                      <p>
                        Streamline Manufacturing & Accounting with D365 Business
                        Central On-Premise
                      </p>
                      {/* <div className="case-button">
                        <a
                          href="/case-studies/dmic/"
                          className="btn btn-md btn-custom-1"
                        >
                          Read More
                        </a>
                      </div> */}
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="casestudys-slider-item">
                    <div className="profile mt-auto">
                      
                      <p>
                        Implemented Custom EFT Module to improvise Payment
                        Methods
                      </p>
                     
                      {/* <div className="case-button">
                        <a
                          href="/case-studies/spectra/"
                          className="btn btn-md btn-custom-1"
                        >
                          Read More
                        </a>
                      </div> */}
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="casestudys-slider-item">
                    <div className="profile mt-auto">
                      
                      <p>
                        Implementation of Microsoft Dynamics Business Central
                        Cloud
                      </p>
                     
                      {/* <div className="case-button">
                        <a
                          href="/case-studies/shimco/"
                          className="btn btn-md btn-custom-1"
                        >
                          Read More
                        </a>
                      </div> */}
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="col-lg-1 align-self-center"></div>
             <div className="col-lg-5 align-self-center">
              <Image
                src="/img/case-study-side-banner.png"
                alt="case-study-side-banner"
                width={640}
                height={592}
              />
            </div>
          </div>
        </div>
      </section> 
      <section className="call-to-action-center hero-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="call-to-action-content">
                <h3>Do you want to watch Power BI in Action?</h3>
                <p>Discuss your business problems with our Power BI experts, we can reveal the best-in-class Power BI solution customized to your business.</p>
                <div className="text-center m-o-t new-btn-nn">
                  <Link href="#exampleModal"><a
                    data-bs-toggle="modal"
                    
                    className="btn-get-started scrollto"
                  >
                    <span>Get Started Now</span></a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <header className="section-header section-header-new-ct">
                <h2>Drive Success with Our Power BI Consulting Services</h2>
                <p>Tired of making decisions based on incomplete or unreliable information? It's time to take control of your data with Dynamics Square's <Link href="/contact-us/"><a><b>Power BI Consulting Services</b></a></Link>. Say goodbye to guesswork and hello to a data-driven approach that enables you to derive key insights from multiple sources. Let <Link href="/"><a><b>Dynamics Square</b></a></Link> help you unlock the power of your data today.</p>
              </header>
            </div>
          </div>
          <div className="row ppd-top">
            <div className="col-lg-4">
              <div className="new-card-sol new-card-sol-b">
                <div className="head-img">
                  <img src="/img/power-bi-icons-1.png" alt="icons" />
                </div>
                <div className="body">
                  <h3>Power BI Implementation</h3>
                  <p>Supercharge your business strategy with data analysis, pattern modelling, and visual reporting with stress-free Power BI implementation. Kickstart your data-driven growth journey with a Power BI dashboard that includes bespoke functions and capabilities. Our team of <Link href="/contact-us/"><a>Power BI Experts</a></Link> makes your business relevant in these competitive times with a solid BI roadmap.</p>
                  <Link href="#exampleModal">
                    <a data-bs-toggle="modal">
                      <span>Implement Now</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="new-card-sol new-card-sol-b">
                <div className="head-img">
                  <img src="/img/power-bi-icons-2.png" alt="icons" />
                </div>
                <div className="body">
                  <h3>Power BI Migration</h3>
                  <p>Microsoft Power BI makes data mining, analytics, and visualization easier than ever before. Maximize the value of your data with our expert migration services. We provide end-to-end support, from establishing a BI architecture to migrating from a legacy tool.</p>
                  <Link href="#exampleModal">
                    <a data-bs-toggle="modal">
                      <span>Migrate Today</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="new-card-sol new-card-sol-b">
                <div className="head-img">
                  <img src="/img/power-bi-icons-3.png" alt="icons" />
                </div>
                <div className="body">
                  <h3>Power BI Support</h3>
                  <p>Our dedicated Power BI support team offers absolute support and maintenance around the clock at every stage of BI implementation and deployment. Our end-to-end training and support will ensure that your team is fully capable of data integration, modeling, analysing, and building stunning visuals.</p>
                  <Link href="#exampleModal">
                    <a data-bs-toggle="modal">
                      <span>Call For Support</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="back-bg back-power-bi">
        <div className="container">
          <div className="row">
            <div className="col-lg-6"></div>
            <div className="col-lg-6">
              <div className="sidenn-wr">
                <h2>Dynamics Square - Your Perfect <br /> <span>Power BI Partner</span></h2>
                <div className="repet-col">
                  <div className="icon">
                    <i className="bi bi-check-lg"></i>
                  </div>
                  <div className="cont">
                    <p>We are a <Link href="/"><a ><strong>Microsoft Gold Partner</strong></a></Link> and our core competent team is fully certified and is regularly updated</p>
                  </div>
                </div>
                <div className="repet-col">
                  <div className="icon">
                    <i className="bi bi-check-lg"></i>
                  </div>
                  <div className="cont">
                    <p>Our customer-first policy ensures that businesses derive maximum ROI with an optimized strategy and Power BI help</p>
                  </div>
                </div>
                <div className="repet-col">
                  <div className="icon">
                    <i className="bi bi-check-lg"></i>
                  </div>
                  <div className="cont">
                    <p>Our flexible Power BI pricing options give enterprises of all sizes to leverage the key benefits & capabilities of Power BI</p>
                  </div>
                </div>
                <div className="cll-bt">
                  <Link href="#exampleModal">
                    <a
                      data-bs-toggle="modal"
                      className="btn-get-started scrollto"
                    >
                      <span>Talk to expert</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
<section id="counts" className="counts counts-bg">
        <div className="container" data-aos="fade-up">
          <div className="row gy-4">
            <div className="col-lg-3 col-md-6">
              <div className="count-box">
                <div className="count-box-image">
                  <img
                    src="/img/Icon awesome-user-check.png"
                    alt="awesome-user-check"
                    width="48"
                    height="48"
                  />
                </div>
                <div className="count-box-info">
                  <span>
                  155
                  </span>
                  <span className="inner">+</span>
                  <p>Microsoft Consultants</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="count-box">
                <div className="count-box-image">
                  <img
                    src="/img/Icon awesome-award.png"
                    alt="Icon awesome-award"
                    width="48"
                    height="48"
                  />
                </div>
                <div className="count-box-info">
                  <span>
                  12
                  </span>
                  <span className="inner">+</span>
                  <p>Years of Expertise</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="count-box">
                <div className="count-box-image">
                  <img
                    src="/img/Icon awesome-globe-asia.png"
                    alt="Icon awesome-globe-asia"
                    width="48"
                    height="48"
                  />
                </div>
                <div className="count-box-info">
                  <span>
                  7
                  </span>
                  <span className="inner">+</span>
                  <p>Global Presence</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="count-box">
                <div className="count-box-image">
                  <img
                    src="/img/Icon ionic-md-thumbs-up.png"
                    alt="awesome-user-check"
                    width="48"
                    height="48"
                  />
                </div>
                <div className="count-box-info">
                  <span>
                  99
                  </span>
                  <span className="inner">%</span>
                  <p>Customer Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section id="pricing" className="pricing">
        <div className="container">
          <header className="section-header">
            <h2>Microsoft Power BI Pricing</h2>
            <p>
              Being a trusted Power BI implementation partner, we can reveal the
              best-suited Power BI pricing plans for your business to grow.
            </p>
          </header>
          <div className="row gy-4 p-9">
            <div className="col-lg-4">
              <div className="box power-new-price">
                <h3>
                  Power BI <br />
                  Pro
                </h3>
                <div className="price price-power">
                  £7.50<span>Per-User/Per Month</span>
                </div>
                <ul>
                  <li>
                    <i className="bi bi-check-lg"></i>Connect to over 100 data
                    sources
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Mobile app
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>1GB model size limit
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Embed Power BI visuals
                    into PowerApps, SharePoint and Teams
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>8 Data refreshes daily
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>10 GB per user storage
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>AI visuals
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Embedded APIs and controls
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Data security and
                    encryption
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Metrics with content
                    creation and publishing
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Native integration with
                    other Microsoft solutions
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Share dashboards,
                    datasets, and reports with other Power BI users
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Create app work and
                    peer-to-peer sharing
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="box power-new-price">
                <h3>
                  Power BI
                  <br />
                  Premium
                </h3>
                <div className="price price-power">
                  £15.10<span>Per-User/Per Month</span>
                </div>
                <ul>
                  <li>
                    <i className="bi bi-check-lg"></i>100 GB model size limit
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>100 TB of storage
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Access to one API surface
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>XMLA endpoint read/write
                    connectivity
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Data flows
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Analyse data stored in
                    Azure Data Lake Storage
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Application lifecycle
                    management
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Embed Power BI visuals
                    into PowerApps, SharePoint and Teams
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Larger storage size for
                    extended deployment
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Advanced AI features
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>48 data refreshes daily
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Geo distribution, pin to
                    memory and read-only replicas
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Publish reports to share
                    and collaborate
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="box power-new-price">
                <h3>
                  Power BI
                  <br />
                  Premium
                </h3>
                <div className="price price-power">
                  £3,766.70<span>Per Capacity/Month</span>
                </div>
                <ul>
                  <li>
                    <i className="bi bi-check-lg"></i>100 GB model size limit
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>100 TB of storage
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Access to one API surface
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>XMLA endpoint read/write
                    connectivity
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Data flows
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Analyse data stored in
                    Azure Data Lake Storage
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Application lifecycle
                    management
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Embed Power BI visuals
                    into PowerApps, SharePoint and Teams
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Larger storage size for
                    extended deployment
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Advanced AI features
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>48 data refreshes daily
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Geo distribution, pin to
                    memory and read-only replicas
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>On-premise reporting
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>400 GB model size limit
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Azure Autoscale add-on
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Multi-location deployment
                    management
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="price-btn price-btnasd d-flex justify-content-center">
                <Link href="#exampleModal">
                  <a data-bs-toggle="modal" className="btn-get-red">
                    <span>Get Power Bi Now</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section> */}


      <section className="solution-faq faq">
        <div className="container">
          <header className="section-header">
            <h2>Microsoft Power BI FAQs</h2>
          </header>
          <div className="row justify-content-center mar-top-7">
            <div className="col-lg-8">
              <div className="accordion accordion-flush" id="faqlist1">
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-1"
                    >What is Microsoft Power BI and how can it benefit my organization?</button>
                  </h3>
                  <div
                    id="faq-content-1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                     <p>Power BI is a suite of business analytics tools that enables you to visualize and share insights from your data. It allows you to easily connect to various data sources, create interactive reports, and share them across your organization. By leveraging Power BI, decision-makers can make better-informed choices based on real-time insights.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-2"
                    >How does Power BI integrate with other Microsoft tools and services? </button>
                  </h3>
                  <div
                    id="faq-content-2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>Power BI seamlessly integrates with various Microsoft products, such as Excel, Azure, and <Link href="/products/microsoft-dynamics-365/"><a>Dynamics 365</a></Link>. This allows for a more cohesive data analytics experience and helps in streamlining your organization's workflow.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-3"
                    >Can Power BI connect to non-Microsoft data sources?</button>
                  </h3>
                  <div
                    id="faq-content-3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                     <p>Yes, Power BI supports a wide range of data sources, including SQL databases, cloud-based services, and on-premises data. It can connect to popular third-party services like Salesforce, Google Analytics, and more.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-4"
                    >How secure is my data in Power BI?</button>
                  </h3>
                  <div
                    id="faq-content-4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                     <p>Power BI employs robust security measures to protect your data. These include data encryption, role-based access control, and compliance with GDPR and other industry regulations. You can also set up additional security measures like conditional access and data classification.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-5"
                    >Can I create custom visualizations in Power BI?</button>
                  </h3>
                  <div
                    id="faq-content-5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>Yes, Power BI offers a flexible platform that allows you to create custom visuals using the Power BI Custom Visuals SDK. You can also import visuals created by the Power BI community or third-party vendors.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-6"
                    >How does Power BI help with real-time data analysis?</button>
                  </h3>
                  <div
                    id="faq-content-6"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>Power BI enables real-time data analysis by connecting to data streams and refreshing data in real-time. This allows decision-makers to access the most up-to-date information, facilitating timely and informed decisions.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-7"
                    >Can I collaborate with my team in Power BI? </button>
                  </h3>
                  <div
                    id="faq-content-7"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist7"
                  >
                    <div className="accordion-body">
                      <p>Yes, Power BI supports collaboration through features like shared dashboards, reports, and data sets. You can also use Power BI Apps to package and distribute content to your team or the entire organization.</p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-8"
                    >Is Power BI available on mobile devices? </button>
                  </h3>
                  <div
                    id="faq-content-8"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>Power BI offers native apps for iOS, Android, and Windows devices. These apps enable you to access and interact with your dashboards and reports on the go, ensuring you're always informed.</p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-9"
                    >How can I ensure data governance in Power BI?</button>
                  </h3>
                  <div
                    id="faq-content-9"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>Power BI provides tools to manage data access and usage across your organization. You can set up role-based access control, track usage, and set up data classification policies to ensure proper data governance.</p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-10"
                    >What are the pricing options for Power BI? </button>
                  </h3>
                  <div
                    id="faq-content-10"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>Power BI offers a variety of pricing options tailored to different needs. Power BI Pro is a per-user subscription for individual users, while Power BI Premium provides dedicated cloud capacity and advanced features for organizations. There's also a free version called Power BI Desktop for individual use.</p>
                      <p><Link href="/contact-us/"><a>Contact our Power BI Experts now.</a></Link></p>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="blogs-extra">
        <div className="container">
         <div className="row justify-content-center">
          <div className="col-lg-8">
          <header className="section-header">
            <h2>Explore Our Recent Blogs & Resources</h2>
            <p>
              Whether you are a start-up, an SMB, or an enterprise, the Dynamics
              Square blog is the best place to get inspired and learn more about
              Microsoft Business Applications.
            </p>
          </header>
          </div>
         </div>
          <div className="row top-2 gx-5 justify-content-center">
   
            <div className="col-lg-6">
              <div className="blogs-extra-title">
                <h3>Important Power BI Links:</h3>
              </div>
              <div className="blogs-extra-right">
                <ul>
                  <li>
                    <a
                      target="_self"
                      rel=""
                      href="https://blog.dynamicssquare.co.uk/what-is-power-bi/"
                    >
                      <i className="bi bi-box-arrow-up-right"></i>What is Power
                      BI?
                    </a>
                  </li>

                  <li>
                    <a
                      target="_blank"
                      rel=""
                      href="https://www.youtube.com/watch?v=Evkj4zfpk0Q"
                    >
                      <i className="bi bi-box-arrow-up-right"></i>Free Power BI
                      Webinar
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel=""
                      href="https://docs.microsoft.com/en-gb/power-bi/consumer/end-user-license"
                    >
                      <i className="bi bi-box-arrow-up-right"></i>Power BI
                      Licensing Guide
                    </a>
                  </li>
                  <li>
                    <Link href="https://blog.dynamicssquare.co.uk/power-bi-architecture/">
                      <a>
                        <i className="bi bi-box-arrow-up-right"></i>Power BI
                        Architecture
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://blog.dynamicssquare.co.uk/power-bi-reports/">
                      <a>
                        <i className="bi bi-box-arrow-up-right"></i>Power BI
                        Reports
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://blog.dynamicssquare.co.uk/implement-power-bi-for-your-business/">
                      <a>
                        <i className="bi bi-box-arrow-up-right"></i>Why Your
                        Business Should Implement Power BI?
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default PowerBI;
