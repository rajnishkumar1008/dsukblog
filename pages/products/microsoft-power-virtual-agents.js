import Head from 'next/head'
import Link from 'next/link';
import React, { useState } from "react";
import ModalVideo from "react-modal-video";
const PowerVirtualAgents = () => {
  const [isOpen, setOpen] = useState(false);
  const [open, setsOpen] = useState(false);
  return (
    <>
      <Head>
        <title>Microsoft Power Virtual Agents: Enhance CRM Capabilities</title>
        <meta
          name="description"
          content="Power Virtual Agents is a platform that helps you build smart chatbots, & instant actions to boost your CRM and sales. Reach out to the Dynamics Square team."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.ca/products/microsoft-power-virtual-agents/"
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
                Microsoft
                <br />
                Power Virtual Agents
              </h1>
              <p>Automate customer interaction using <b>Power Virtual Agents</b> to enhance the customer experience and accelerate sales.</p>
              <div>
                <div className="text-center text-lg-start">
                  <a
                    data-bs-toggle="modal"
                    href="#exampleModal"
                    className="btn-get-started scrollto"
                  >
                    <span>Schedule a Demo</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <img
                src="/img/virtual-agent-banner-01.svg"
                alt="virtual-agent-banner-01"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <header className="section-header">
            <h2>What is Power Virtual Agents?</h2>
            <p>Power Virtual Agents is a helpful tool for building AI-enabled chatbots without writing code. You can use custom-built chatbots or virtual agents to automate communication with potential clients, allowing them to communicate with the business 24 hours a day, seven days a week. Virtual agents can be easily created and maintained using a graphical interface without any programming knowledge or the need for data analysts or developers.</p>
          </header>
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
                            src="/img/icons-power-apps_Quick-and-Easy.svg"
                            alt="icons-power-apps_Quick-and-Easy"
                          />
                        </div>
                        <span>Easy Chatbot Creation</span>
                      </button>
                    </h3>
                    <div
                      id="fin1"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        <p>Chatbots can be created using an intuitive graphical interface and the drag-and-drop feature. Also, it comes with various tools, features, and functions to make the whole process seamless and simple.</p>
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
                            src="/img/icons-power-apps_App-Development.svg"
                            alt="icons-power-apps_App-Development"
                          />
                        </div>
                        <span>Smarter Bots</span>
                      </button>
                    </h3>
                    <div
                      id="fin2"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        <p>The <Link href="/products/microsoft-dynamics-365-ai/"><a>Microsoft AI for Power Virtual Agents</a></Link> is so powerful that it recommends the most-used topics for creating a chatbot so that you can simplify your existing complex processes. You can personalize these chatbots to offer a natural level of communication to the end user, making it a smart move for building credibility among potential clients.</p>
                        <p>This tool offers data-driven insights to help you build the perfect app to enhance overall performance, resulting in a productive and efficient workforce.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="finace-acc">
                <hr className="mob-disp" />
                <div className="accordion" id="acccm">
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
                            src="/img/icons-power-apps_Enhancing-Capabilities.svg"
                            alt="icons-power-apps_Enhancing-Capabilities"
                          />
                        </div>
                        <span>Instant Actions</span>
                      </button>
                    </h3>
                    <div
                      id="fin4"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#acccm"
                    >
                      <div className="accordion-body">
                        <p>Chatbots let you automate most of the recurring tasks and enable you to take decisions based on fixed parameters. Once the chatbot is ready, you can deploy it or integrate it with the desired services.</p>
                        <p>Even so, you can integrate other tools to enhance the performance of your bots. You can <Link href="/products/microsoft-power-automate/"><a>integrate Power Automate</a></Link> to create, edit, and manage automated workflows.</p>
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
                            src="/img/icons-power-apps_Responsive-Design.svg"
                            alt="icons-power-apps_Responsive-Design"
                          />
                        </div>
                        <span>Easy to Start</span>
                      </button>
                    </h3>
                    <div
                      id="fin5"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#acccm"
                    >
                      <div className="accordion-body">
                        <p>Because of its simple user interface and high functionality, if you are new to chatbots or <b>Power Virtual Agents</b>, you should have no problems building any chatbot.</p>
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
              <h2>Why choose Power Virtual Agents?</h2>
              <h3>Explore Power Virtual Agents Features</h3>
              </div>
            </div>
            <div className="col-lg-7 align-self-center">
              <div className="row gx-4">
                <div className="col-lg-6">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Easy
                        <br />
                        Integration
                      </h3>
                      <div className="overlay">
                        <p>
                          Easily register, create the bot and embed it on your
                          website with just a few clicks. There is no
                          infrastructure to maintain and no complex systems to
                          implement.
                        </p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        No Coding
                        <br />
                        Required
                      </h3>
                      <div className="overlay">
                        <p>
                          Train your teams by allowing them to easily build bots
                          without the need for intermediaries, coding or
                          artificial intelligence expertise.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 top-m">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Automate
                        <br />
                        Queries
                      </h3>
                      <div className="overlay">
                        <p>
                          Easily automate the most common common queries thanks
                          to the Power Virtual Agent chatbot.
                        </p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Customer
                        <br />
                        Satisfaction
                      </h3>
                      <div className="overlay">
                        <p>
                          Improve customer satisfaction by enabling customers to
                          quickly self-help and resolve issues 24/7 using
                          personalized bot conversations.
                        </p>
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
                    src="/img/virtual-agent-side.png"
                    className="fix-im"
                    alt="virtual-agent-side"
                  />
                  <div className="video-ytube video-ytubes">
                    <div className="popup-btn popup-btns">
                      <a
                        href="#javascript:void(0)"
                        onClick={() => setOpen(true)}
                      >
                        <img
                          src="/img/video-Virtual Agents.png"
                          alt="power-apps-video-banner"
                        />
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
                <h2>Power Virtual Agents Services</h2>
                <p>We offer <b>Power Virtual Agents implementation, upgrade,</b> and <b>support services</b> to all businesses.</p>
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
                  <p>Our experts will <b>deploy Power Virtual Agents</b> to meet both the core and basic requirements on time.</p>
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
                  <p>Get seamless support to enable your bots work 24x7.</p>
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
            <h2>Power Virtual Agents Pricing</h2>
            <p>Explore Power Virtual Agents Plans, Costs, And Availability to Start Running Your Business Apps.</p>
          </header>
          <div className="row gy-4 p-9 justify-content-center">
            <div className="col-lg-4">
              <div className="box box-099">
                <h3>Power Virtual Agents</h3>
                <div className="price">
                $256 (CAD)<span>Per month for 2,000 sessions(2)</span>
                </div>
                <p className="small-tt">
                Run intelligent chatbots across websites and other channels.
                </p>
                <ul>
                  <li>Requires access to the Microsoft 365 admin center with global administrator or billing administrator roles.</li>
                </ul>
              </div>
            </div>


            <div className="col-lg-4">
              <div className="box box-099">
                <h3>Sessions add-on</h3>
                <div className="price">
                $128 (CAD)<span>Per month for 1,000 sessions(2)</span>
                </div>
                <p className="small-tt">Add additional sessions to your Power Virtual Agents plan.</p>
                <ul>
                  <li>
                  Requires a Power Virtual Agents license.
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
                  <span>Activate Power Agents Now!</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="blogs-extra">
        <div className="container">
        <header className="section-header">
            <h2>
            Explore Our Recent Blogs & Resources
            </h2>
            <p>Whether you are a start-up, an SMB, or an enterprise, the Dynamics Square blog is the best place to get inspired and learn more about Microsoft Business Applications.</p>
          </header>
          <div className="row top-2 gx-5 justify-content-center">
            <Blog />
            <div className="col-lg-6">
              <div className="blogs-extra-title">
                <h3>Important Power BI Links:</h3>
              </div>
              <div className="blogs-extra-right">
                <ul>
                  <li>
                    <a href="/what-is-power-bi/">
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
                      href="https://docs.microsoft.com/en-us/power-bi/consumer/end-user-license"
                    >
                      <i className="bi bi-box-arrow-up-right"></i>Power BI
                      Licensing Guide
                    </a>
                  </li>
                  <li>
                    <a href="/power-bi-architecture/">
                      <i className="bi bi-box-arrow-up-right"></i>Power BI
                      Architecture
                    </a>
                  </li>
                  <li>
                    <a href="/power-bi-reports/">
                      <i className="bi bi-box-arrow-up-right"></i>Power BI
                      Reports
                    </a>
                  </li>
                  <li>
                    <a href="/implement-power-bi-for-your-business/">
                      <i className="bi bi-box-arrow-up-right"></i>Why Your
                      Business Should Implement Power BI?
                    </a>
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

export default PowerVirtualAgents;