import React, { useState } from "react";
import Head from 'next/head'
import ModalVideo from "react-modal-video";
import Link from "next/link";
import Image from "next/image";
const HumanResource = () => {
  const [isOpen, setOpen] = useState(false);
  const [open, setsOpen] = useState(false);
  return (
    <>
      <Head>
        <title>Dynamics 365 Human Resources: A Self-Service HR Tool</title>
        <meta
          name="description"
          content="Hire the right talent to solve tomorrow's challenges today with Dynamics 365 Human Resources. Contact the Dynamics Square team for implementation help." />
          <meta name="robots" content="index,follow" />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.ca/products/dynamics-365-human-resources/"
        />
        
      </Head>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="yCJ7C1KS-Jw"
        onClose={() => setOpen(false)}
      />
      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1 align-self-center">
              <h1>
                Dynamics 365
                Human Resources
              </h1>
              <p>Increase employee engagement with best practices, smart strategies, and creative tactics and successfully adapt recognition programs in uncertain times using Microsoft Dynamics 365 Human Resource. </p>
              <div>
                <div className="text-center text-lg-start">
                  <a
                    data-bs-toggle="modal"
                    href="#exampleModal"
                    className="btn-get-started scrollto"
                  >
                    <span>Get a Demo</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <Image src="/img/Human-Resource-banner.png" alt="Human-Resource-banner" width={778} height={473} />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
        <div className="row justify-content-center"> 
        <div className="col-lg-9 col-md-9"> 
        <header className="section-header"> 
        <h2>What Is Dynamics 365 Human Resources?</h2> 
        <p>Microsoft Dynamics 365 Human Resources (formerly Microsoft Dynamics 365 Talent) is cloud-based human resources management (HRM) software. This app provides a set of tools on its modern dashboard to help HR teams transform the employee experience and support the company's long-term business goals and outcomes.</p>
        <p><b>Implement Microsoft Dynamics 365 Human Resource</b> to increase organizational agility and optimize your HR programs to create an environment in which your employees and business can thrive.</p>
       </header> 
      </div>
      </div>
          <div className="row p-lg-6">
            <div className="col-lg-6">
              <div className="finace-acc">
                <div className="accordion" id="accnew">
                  <div className="accordion-item">
                    <h3 className="accordion-header" >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin1"
                        aria-expanded="false"
                        aria-controls="fin1"
                      >
                        <div className="wr-in">
                          <img
                            src="/img/icons-_Highly-Flexible-Solution.svg"
                            alt="icons"
                            width="48" height="48"
                          />
                        </div>
                        <span>Reimagine Employee Experiences</span>
                      </button>
                    </h3>
                    <div
                      id="fin1"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                     <p>Engage and help grow your employees with connected self-service experiences.</p>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="accordion-item">
                    <h3 className="accordion-header" >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin2"
                        aria-expanded="false"
                        aria-controls="fin2"
                      >
                        <div className="wr-in">
                          <img
                            src="/img/icons-_Connected-HR-Practices.svg"
                            alt="icons"
                            width="48" height="48"
                          />
                        </div>
                        <span>Enhance HR Programs</span>
                      </button>
                    </h3>
                    <div
                      id="fin2"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                     <p>Streamline leave and absence, time, benefit, and compensation management programs to reduce operational costs.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="finace-acc">
              <hr className="mob-disp" />
                <div className="accordion" id="accnews">
                  <div className="accordion-item">
                    <h3 className="accordion-header" >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin3"
                        aria-expanded="false"
                        aria-controls="fin3"
                      >
                        <div className="wr-in">
                          <img
                            src="/img/icons-_Actionable-Insights.svg"
                            alt="icons"
                            width="48" height="48"
                          />
                        </div>
                        <span>Accelerate Organizational Agility</span>
                      </button>
                    </h3>
                    <div
                      id="fin3"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnews"
                    >
                      <div className="accordion-body">
                     <p>Integrate Dynamics 365 Human Resources with Dataverse to enable HR to run with the flexibility and agility that the business requires.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                {/* <hr className="mob-disp" /> */}
                <div className="accordion" id="accnews">
                  <div className="accordion-item">
                    <h3 className="accordion-header" >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin4"
                        aria-expanded="false"
                        aria-controls="fin4"
                      >
                        <div className="wr-in">
                          <img
                            src="/img/icons-_Highly-Flexible-Solution.svg"
                            alt="icons"
                            width="48" height="48"
                          />
                        </div>
                        <span>Incorporate Workforce Insights</span>
                      </button>
                    </h3>
                    <div
                      id="fin4"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnews"
                    >
                      <div className="accordion-body">
                     <p>Access rich dashboards on any device that allow you to analyze and visualize people's data for data-driven decisions.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="Solution-business-why">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 align-self-center">
            <div className="wy-sultion-left-head">
            <h2>Microsoft Dynamics 365 Human Resources Features</h2>
              <h3>See how Microsoft Dynamics 365 HR can help Elevate Your Financial Capabilities.</h3>
            </div>
              
            </div>
            <div className="col-lg-7">
              <div className="row gx-4">
                <div className="col-lg-6">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                      Build Business <br /> Competencies
                      </h3>
                      <div className="overlay">
                        <p>Leverage networks, data judgment, business acumen, and leadership for thoughtful, helpful suggestions. Let your employees show off what they know and can do.</p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                      Considerate 
                        <br />
                        Your Employees 
                      </h3>
                      <div className="overlay">
                        <p>It is easier to achieve better results and to be more productive when you know your employees well. Dynamics 365 Human Resources provides you with the ability to understand employees & managers well, making organizations a better place to work.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 top-m">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                      Adopt Modern
                        <br />
                        Analytics 
                      </h3>
                      <div className="overlay">
                        <p>Making business strategy decisions in the digital age relies heavily on data. Measure profitability, margin, ROI, and TSR, as well as turnover, employee attitudes, bench strength, & performance to keep the business running smoothly.</p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                      Assess Business
                        <br />
                        Readiness 
                      </h3>
                      <div className="overlay">
                        <p>Identify whether you have the manpower, resources, and support to implement different strategies. Provide your HR professionals with regular opportunities to bridge HR with the broader business strategy and goals.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="busine_service_bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="busine_service_bottom-left">
                <div className="busine_service_bottom-right">
                  <Image
                    src="/img/human-resource side.png"
                    className="fix-im"
                    alt="Dynamics 365 Human Resources Service"
                    width={561}
                    height={531}
                  />
                  <div className="video-ytube video-ytubes">
                    <div className="popup-btn popup-btns">
                      <div
                        onClick={() => setOpen(true)}
                      >
                        <Image src="/img/Video-Human Resource.png" alt="Video-Human-Resource" width={340} height={226} />
                        <span className="cente-icns">
                          <img
                            src="/img/play_icons.svg"
                            alt="play_icons"
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="side-heading">
                <h2>Dynamics 365 HR Services</h2>
                <p>Take your resourcing capabilities to the next level</p>
              </div>
              <div className="busine_service_bottom-right">
                <div className="card_new_img">
                  <img
                    src="/img/Business-Central-Implementation-icons.svg"
                    alt="Business-Central-Implementation-icons"
                    width="64" height="64"
                  />
                </div>
                <div className="card_new_content">
                  <h3>Implementation</h3>
                  <p>Integrate Dynamics 365 Human Resources to accelerate and improve your human resource processes.</p>
                  <div className="action-content">
                    <a data-bs-toggle="modal" href="#exampleModal">
                    Get Started 
                    </a>
                  </div>
                </div>
              </div>
              <div className="busine_service_bottom-right">
                <div className="card_new_img">
                  <img
                    src="/img/Business Central Upgrade-icons.svg"
                    alt="Business Central Upgrade-icons"
                    width="64" height="64"
                  />
                </div>
                <div className="card_new_content">
                  <h3>Upgrade</h3>
                  <p>Set up your HR System with advanced human resources capabilities to optimize your human resources.</p>
                  <div className="action-content">
                    <a data-bs-toggle="modal" href="#exampleModal">
                    Get Started 
                    </a>
                  </div>
                </div>
              </div>
              <div className="busine_service_bottom-right">
                <div className="card_new_img">
                  <img
                    src="/img/Business-Central-Support-icons.svg"
                    alt="Business-Central-Support-icons"
                    width="64" height="64"
                  />
                </div>
                <div className="card_new_content">
                  <h3>Support</h3>
                  <p>We can help you optimize your Dynamics 365 resources and ensure smoother operations in your organization.</p>
                  <div className="action-content">
                    <a data-bs-toggle="modal" href="#exampleModal">
                    Get Started 
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="call-to-action-center hero-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="call-to-action-content">
                <h3>Align Your HR Activities To The Organization's Goals & Create HR Magic!</h3>
                <p>Scale company culture, employee engagement, and recognition in the digital world with Dynamics 365 Human Resources</p>
                <div className="text-center m-o-t new-btn-nn">
                  <a href="#about" className="btn-get-started scrollto">
                    <span>Get Started Today</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="pricing" className="pricing">
        <div className="container">
          <header className="section-header">
            <h2>Dynamics 365 Human Resources Pricing</h2>
            <p>Explore the Dynamic pricing slabs for Dynamics 365 HR</p>
          </header>
          <div className="row gy-4 p-9 justify-content-center">
            <div className="col-lg-6 col-md-6">
              <div className="box box-22">
                <h3>
                Dynamics 365 Human Resources
                </h3>
                <div className="price">
                  $120<span>Per-User/Per Month</span>
                </div>
                <ul>
                  <li className="text-center">
                  Includes full application capabilities
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="box box-22">
                <h3>
                Dynamics 365 Human Resources Self-Service
                </h3>
                <div className="price">
                  $4<span>Per-User/Per Month</span>
                </div>
                <ul>
                  <li className="text-center">
                  Employee and manager self-service capabilities
                  </li>
                </ul>
              </div>
            </div>
            

            <div className="col-lg-12 col-md-12">
              <div className="price-btn price-btnasd d-flex justify-content-center">
                <a
                  data-bs-toggle="modal"
                  href="#exampleModal"
                  className="btn-get-red"
                >
                  <span>Request a demo</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HumanResource;
