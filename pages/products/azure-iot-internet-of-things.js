import React, { useState } from "react";
import Head from 'next/head'
import ModalVideo from "react-modal-video";
const AzureIoT = () => {
  const [isOpen, setOpen] = useState(false);
  const [open, setsOpen] = useState(false);
  return (
    <>
      <Head>
        <title>Microsoft Azure IoT Services in Canada: By Dynamics Square</title>
        <meta
          name="description"
          content=" Azure IoT helps you build intelligent environments to connect, monitor, automate, and model devices and applications. Contact Dynamics Square."
        />
           <meta name="robots" content="index,follow" />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.ca/products/azure-iot-internet-of-things/"
        />
        
      </Head>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="2lqX8SFsO-A"
        onClose={() => setOpen(false)}
      /> 
      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1 align-self-center">
              <h1>
              Microsoft Azure IoT
              </h1>
              <p>Enable secure, scalable, and open edge-to-cloud solutions for your business and turn your vision into reality with Azure IoT and Microsoft Cloud.</p>
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
              <img src="/img/azure-Banner.png" alt="azure-Banner" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
        <div className="row justify-content-center">
        <div className="col-lg-8 col-md-8">
          <header className="section-header">
            <h2>What is Azure IoT?</h2>
            <p>Microsoft is the leader in innovation. The tech giant is continuously investing and making new-age tech (such as IoT, AI/ML, or Mixed Reality) available to enhance managed and platform services. IoT or the Internet of Things refers to the monitoring and controlling of all IoT assets using cloud services. These IoT assets are a collection of connected physical objects or things, such as industrial equipment, devices, or censors in the manufacturing and processing industry. Contact Dynamics Square to get started with Azure IoT and Microsoft Cloud for Manufacturing.</p><br /><br />
            <h2>Construct Customized IoT Solutions for Complex Scenarios</h2>
            <p>Discover Azure IoT products and services </p>
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
                            src="/img/icons-azure_cloud-embed.svg"
                            alt="icons-azure_cloud-embed"
                          />
                        </div>
                        <span>Azure IoT hub</span>
                      </button>
                    </h3>
                    <div
                      id="fin1"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        <p>Connectivity and Analytics</p>
                        <p>Seamlessly connect, manage, and scale your IoT devices from the edge to the Microsoft cloud.</p>
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
                            src="/img/icons-azure_agile.svg"
                            alt="icons-azure_agile"
                          />
                        </div>
                        <span>Azure IoT Central</span>
                      </button>
                    </h3>
                    <div
                      id="fin2"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                      <p>Connectivity and Analytics</p>
                      <p>Minimize the burden and cost of IoT management, operations, and development. Accelerate the creation of IoT solutions and grow at scale.</p>
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
                        data-bs-target="#fin3"
                        aria-expanded="false"
                        aria-controls="fin3"
                      >
                        <div className="wr-in">
                          <img
                            src="/img/icons-azure_project-management.svg"
                            alt="icons-azure_project-management"
                          />
                        </div>
                        <span>Azure Digital Twins</span>
                      </button>
                    </h3>
                    <div
                      id="fin3"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        <p>Connectivity and Analytics</p>
                        <p>Deploy futuristic IoT spatial intelligence in your business operations by replicating real-world spaces via connecting several environments to solve problems quickly.</p>
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
                        data-bs-target="#fin4"
                        aria-expanded="false"
                        aria-controls="fin4"
                      >
                        <div className="wr-in">
                          <img
                            src="/img/icons-azure_project-management.svg"
                            alt="icons-azure_project-management"
                          />
                        </div>
                        <span>Azure IoT Edge</span>
                      </button>
                    </h3>
                    <div
                      id="fin4"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        <p>Edge and Device Support</p>
                        <p>Charge up analytics capabilities and enhance your cloud intelligence by migrating workloads and business logic from the cloud to edge devices.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="finace-acc">
                <hr className="mob-disp" />
                <div className="accordion" id="accneww">
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
                            src="/img/icons-azure_innovation.svg"
                            alt="icons-azure_innovation"
                          />
                        </div>
                        <span>Azure Percept</span>
                      </button>
                    </h3>
                    <div
                      id="fin5"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accneww"
                    >
                      <div className="accordion-body">
                       <p>Edge and Device Support</p>
                       <p>Create edge AI solutions using the easy-to-use development platform - Azure Percept and accelerate the edge intelligence from silicon to service.</p>
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
                        data-bs-target="#fin6"
                        aria-expanded="false"
                        aria-controls="fin6"
                      >
                        <div className="wr-in">
                          <img
                            src="/img/icons-azure_security.svg"
                            alt="icons-azure_security"
                          />
                        </div>
                        <span>Azure Sphere</span>
                      </button>
                    </h3>
                    <div
                      id="fin6"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accneww"
                    >
                      <div className="accordion-body">
                        <p>Edge and Device Support</p>
                        <p>Develop, connect, secure, and support smart IoT devices from silicon to cloud.</p>
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
                        data-bs-target="#fin7"
                        aria-expanded="false"
                        aria-controls="fin7"
                      >
                        <div className="wr-in">
                          <img
                            src="/img/icons-azure_machine-learning.svg"
                            alt="icons-azure_machine-learning"
                          />
                        </div>
                        <span>Windows for IoT</span>
                      </button>
                    </h3>
                    <div
                      id="fin7"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accneww"
                    >
                      <div className="accordion-body">
                        <p>Edge and Device Support</p>
                        <p>Get long-term Windows OS (Operating System) support and services from Dynamics Square to manage devices and support your business continuity.</p>
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
                        data-bs-target="#fin8"
                        aria-expanded="false"
                        aria-controls="fin8"
                      >
                        <div className="wr-in">
                          <img
                            src="/img/icons-azure_machine-learning.svg"
                            alt="icons-azure_machine-learning"
                          />
                        </div>
                        <span>Azure RTOS</span>
                      </button>
                    </h3>
                    <div
                      id="fin8"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accneww"
                    >
                      <div className="accordion-body">
                        <p>Edge and Device Support</p>
                        <p>Utilize Microsoft's embedded IoT device development suite - Azure RTOS to make IoT development and connectivity easy.</p>
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
            <div className="col-lg-5  align-self-center">
            <div className="wy-sultion-left-head">
              <h2>Azure IoT Suite</h2>
              <h3>The synonym of intelligence, security, and reliability for your core business processes. Start with Azure and Microsoft Cloud to grow at scale.</h3>
            </div>
            </div>
            <div className="col-lg-7 align-self-center">
              <div className="row gx-4">
                <div className="col-lg-6">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                      Build Intelligent <br />
                      Supply Chain
                      </h3>
                      <div className="overlay">
                        <p>Improve the quality of your services, increase safety, and minimize the cost of transportation and logistics. Manage, track, and monitor connected vehicles, freight, or other assets in real-time with the Internet of Things (IoT).</p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                      Improve Manufacturing <br />
                      & Production 
                      </h3>
                      <div className="overlay">
                        <p>Be a part of Industry 4.0 Services by building open, interoperable IoT solutions to secure and modernize your industrial systems. Gain utmost security from the chip to the cloud by simplifying complex environments.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 top-m">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                      Enhance Field <br />
                      Services Experiences
                      </h3>
                      <div className="overlay">
                        <p>Utilize the power of Connected Field Service (an add-on solution) for Azure IoT Hub that brings Azure IoT platform-as-a-service (PaaS) into Dynamics365 Field Service and delivers enhanced field services.</p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                      Minimize Downtime <br />
                      to its Minimum
                      </h3>
                      <div className="overlay">
                        <p>Foretell and prevent downtime by giving acceleration to predictive maintenance. Improve the overall production efficiency of your manufacturing plant with innovative Azure IoT solutions and industrial IoT (IIoT).</p>
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
                    src="/img/InternetTHingsSide.png"
                    className="fix-im"
                    alt="bisin_leftimg"
                  />
                  <div className="video-ytube video-ytubes">
                    <div className="popup-btn popup-btns">
                      <a
                        href="#javascript:void(0)"
                        onClick={() => setOpen(true)}
                      >
                        <img src="/img/Video-Azure IoT.png" alt="iot" />
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
                <h2>Microsoft Azure IoT & Cloud Services</h2>
                <p>Create and develop industry-specific cloud solutions to drive transformation and achieve desired business outcomes with our Azure IoT and Microsoft Cloud Services.</p>
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
                  <p>Implement the latest tech ecosystem in the industry and take advantage by automating operations with Microsoft's edge AI.</p>
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
                  />
                </div>
                <div className="card_new_content">
                  <h3>Upgrade</h3>
                  <p>Get your IoT devices upgraded to their newest best-in-class software and secure your business operations environment.</p>
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
                  <p>Businesses are already benefiting from our digital twins, mixed reality, & autonomous systems support services. Start yours today.</p>
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
                <h3>Discover the Right IoT & IIoT Approach for Your Business</h3>
                <p>Fine-tune your services with Dynamics Square's help and control your overall costs.</p>
                <div className="text-center m-o-t new-btn-nn">
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
      </section>

    </>
  );
};

export default AzureIoT;
