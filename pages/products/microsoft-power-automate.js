import Head from 'next/head'
import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import Link from 'next/link';
const PowerAutomate = () => {
  const [isOpen, setOpen] = useState(false);
  const [open, setsOpen] = useState(false);
  return (
    <>
      <Head>
        <title>Microsoft Power Automate: Build Low-code Automations</title>
        <meta
          name="description"
          content="Empower your team to build low-cost low-code automation using Microsoft Power Automate. Reduce lead times & increase output. Contact Dynamics Square."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.ca/products/microsoft-power-automate/"
        />
        <meta name="robots" content="index,follow" />
        
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
                Microsoft Power Automate
              </h1>
              <p>Experience the power of automation in different apps and services to enhance performance, reliability, and productivity with Microsoft Power Automate (formerly Microsoft Flow).</p>
              <div>
                <div className="text-center text-lg-start">
                  <a
                    data-bs-toggle="modal"
                    href="#exampleModal"
                    className="btn-get-started scrollto"
                  >
                    <span>Get Started</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <img
                src="/img/power-automate-banner.svg"
                alt="power-automate-banner"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
         <div className='row justify-content-center'>
          <div className='col-lg-9'>
          <header className="section-header">
            <h2>What is Power Automate?</h2>
            <p>With Power Automate, your team can automate, build useful apps, and build workflows quickly, saving time and development costs. You can utilize hundreds of apps and services to enhance productivity, streamline business operations and solve issues with numerous no-code approaches.</p>
            <p><b>Begin automation with Power Automate anytime, anywhere.</b></p>
          </header>
          </div>
         </div>
          <div className="row p-lg-6">
            <div className="col-lg-6">
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
                        <div className="wr-in">
                          <img
                            src="/img/icons-power-automate_Quick-and-Secure.svg"
                            alt="icons-power-automate_Quick-and-Secure"
                          />
                        </div>
                        <span>Secure & Agile</span>
                      </button>
                    </h3>
                    <div
                      id="fin1"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        <p>Power Automate is a creative platform that offers creators powerful features such as drag-and-drop, prebuilt connectors, and low-code development tools to create automated systems quickly and securely.</p>
                      </div>
                    </div>
                  </div>
                  <hr />
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
                        <div className="wr-in">
                          <img
                            src="/img/icons-power-automate_Enhanced-Efficiency.svg"
                            alt="icons-power-automate_Enhanced-Efficiency"
                          />
                        </div>
                        <span>Increased Efficiency</span>
                      </button>
                    </h3>
                    <div
                      id="fin2"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        <p>Visualize, analyze, and make your workflows more efficient from start to finish to understand if they'll occur. Reduce guesswork while automating flow processes to finalize them.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="finace-acc">
                <div className="accordion" id="acccm">
                <hr className="mob-disp" />
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
                        <div className="wr-in">
                          <img
                            src="/img/icons-power-automate_AI-Support.svg"
                            alt="icons-power-automate_AI-Support"
                          />
                        </div>
                        <span>Driven by AI</span>
                      </button>
                    </h3>
                    <div
                      id="fin4"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#acccm"
                    >
                      <div className="accordion-body">
                        <p>Powered by <Link href="/products/microsoft-dynamics-365-ai/"><a>Microsoft AI technology</a></Link> Power Automate not only helps you easily drive automation but also assists in several ways. Get started with creating new flows based on your business model.</p>
                      </div>
                    </div>
                  </div>
                  <hr />
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
                        <div className="wr-in">
                          <img
                            src="/img/icons-power-automate_Highly-Compatible.svg"
                            alt="icons-power-automate_Highly-Compatible"
                          />
                        </div>
                        <span>High Compatibility</span>
                      </button>
                    </h3>
                    <div
                      id="fin5"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#acccm"
                    >
                      <div className="accordion-body">
                       <p>One of the best things about this platform is its compatibility with other devices & platforms. Apps developed using this platform are consistent and offer the same features and functionality across various devices, such as desktops, web, & mobile.</p>
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
              <h2>Features of Microsoft Power Automate</h2>
              <h3>Power Automate comes in four of its different versions. Choose the one that best fits your needs.</h3>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="row gx-4">
                <div className="col-lg-6">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                      Power Automate
                        <br />
                        for Desktop
                      </h3>
                      <div className="overlay">
                        <p>Build apps for Windows desktops and create automated flows to reduce repetitive tasks. Employ the UI-based Robotics Process Automation (RPA) power to automate flows directly from your Windows 11 menu.</p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                      Power Automate
                        <br />
                        for Mobiles
                      </h3>
                      <div className="overlay">
                        <p>Activate, run and manage cloud flows anytime, anywhere by developing automated flows for your mobile phone at your convenience.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 top-m">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                      Power Automate
                        <br />
                        for Web 
                      </h3>
                      <div className="overlay">
                        <p>Power Automate for the web is a central portal that helps you create & save flows, analyze them later, & empower you to do more.</p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                      Power Automate
                        <br />
                        for Microsoft Teams 
                      </h3>
                      <div className="overlay">
                        <p>For Microsoft Teams, this app allows you to build flows in the Microsoft cloud to facilitate teamwork and collaboration and enhance overall team productivity.</p>
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
                  <img
                    src="/img/power automate-side.png"
                    className="fix-im"
                    alt="power automate-side"
                  />
                  
                  <div className="video-ytube video-ytubes">
                    <div className="popup-btn popup-btns">
                      <a
                        href="#javascript:void(0)"
                        onClick={() => setOpen(true)}
                      >
                        <img src="/img/Video Power-automate.png" alt="Power-automate" />
                        <span className="cente-icns">
                          <img
                            src="/img/play_icons.svg"
                            alt="play_icons"
                          />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="side-heading">
                <h2>Dynamics Square's Power Automate Services</h2>
                <p>Change the whole perspective of doing business. Streamline and digitally operate and manage all your services.</p>
              </div>
              <div className="busine_service_bottom-right">
                <div className="card_new_img">
                  <img
                    src="/img/Business-Central-Implementation-icons.svg"
                    alt="Business-Central-Implementation-icons"
                  />
                </div>
                <div className="card_new_content">
                  <h3>Implementation</h3>
                  <p>Get Power Automate solutions implemented with <Link href="/"><a>Dynamics Square</a></Link> in a simplified and cost-efficient way without compromising security.</p>
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
                  />
                </div>
                <div className="card_new_content">
                  <h3>Support</h3>
                  <p>We help all our clients with the utmost quality support, ensuring you have what you have been waiting for years.</p>
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
      <section id="pricing" className="pricing">
        <div className="container">
          <header className="section-header">
            <h2>Affordable Power Automate Pricing</h2>
            <p>Dynamics Square helps you with subscription plans that are best for you!</p>
          </header>
          <div className="row gy-4 p-9">
            <div className="col-lg-4">
              <div className="box box-99">
                <h3>Subscription Plans</h3>
                <p>
                License by user
                </p>
                <span className="cs-colo">Per user plan</span>
                <div className="price">
                $19.20 CAD<span>Per-User/Month</span>
                </div>
                <p className="small-tt">Automate cloud apps, services, and data by using digital process automation (DPA). Users can create and run unlimited flows with this plan.</p>
                <ul>
                  <li>Cloud flows (DPA)</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="box box-99">
                <h3>Subscription Plans</h3>
                <p>
                License by user
                </p>
                <span className="cs-colo">Per user plan with attended RPA</span>
                <div className="price">
                $51.20 CAD<span>Per-User/Month</span>
                </div>
                <p className="small-tt">Provides the same features as the base user plan, plus the ability to automate desktop legacy apps via robotic process automation (RPA).</p>
                <ul>
                  <li>Cloud flows (DPA)</li>
                  <li>Desktop flows (RPA) in attended mode</li>
                  <li>5,000 AI Builder credits/month</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="box box-99">
                <h3>Subscription Plans</h3>
                <p>
                License by flow
                </p>
                <span className="cs-colo">Per flow plan</span>
                <div className="price">
                $128 CAD<span>per flow/Month; minimum 5 flows1,2 </span>
                </div>
                <p className="small-tt">Streamline digital process automation (DPA) for unlimited users within an organization. </p>
                <ul>
                  <li>
                  Cloud flows (DPA)
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
                  <span>Get Power Apps Now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PowerAutomate;