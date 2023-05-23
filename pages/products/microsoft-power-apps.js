import Head from 'next/head'
import Link from 'next/link';
import React, { useState } from "react";
import ModalVideo from "react-modal-video";
const PowerApps = () => {
  const [isOpen, setOpen] = useState(false);
  const [open, setsOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Microsoft Power Apps: Build Low-Code Apps Quickly</title>
        <meta
          name="description"
          content="Microsoft Power Apps is a platform that helps your team quickly build need-specific business management apps. To learn more, speak with Dynamics Square."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.ca/products/microsoft-power-apps/"
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
          <div className="row">
            <div className="col-lg-6 mobile-1 align-self-center">
              <h1>
                Microsoft Power Apps
              </h1>
              <p>Build personalized business applications using a low-code or no-code application platform.</p>
              <div>
                <div className="text-center text-lg-start">
                  <a
                    data-bs-toggle="modal"
                    href="#exampleModal"
                    className="btn-get-started scrollto"
                  >
                    <span>Learn More</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <img
                src="/img/power-apps-banner-01.svg"
                alt="power-apps-banner-01"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 col-md-9">
            <header className="section-header">
            <h2>What are Power Apps?</h2>
            <p>Power Apps is a powerful platform to help you build custom applications using apps, connectors, a data platform, and services. It offers an effortless and effective platform for businesses to use drag-and-drop features to quickly and efficiently build an app. Also, using pre-built templates, users can quickly deploy the apps to create new business opportunities while enhancing business growth.</p>
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
                            src="/img/icons-power-apps_Quick-and-Easy.svg"
                            alt="icons-power-apps_Quick-and-Easy"
                          />
                        </div>
                        <span>Simple & Quick</span>
                      </button>
                    </h3>
                    <div
                      id="fin1"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                       <p>The process of <b>developing and deploying an application</b> using <b>Power Apps</b> is pretty easy using pre-built tools and templates.</p>
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
                        <span>Modern App Development</span>
                      </button>
                    </h3>
                    <div
                      id="fin2"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        <p>You can easily build personalized and professional apps while simplifying the complex processes of a business. It comes with in-built <Link href="/products/microsoft-dynamics-365-ai/"><a>AI (Artifical Intelligence)</a></Link> to help you add advanced features to the apps with ease.</p>
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
                            src="/img/icons-power-apps_Enhancing-Capabilities.svg"
                            alt="icons-power-apps_Enhancing-Capabilities"
                          />
                        </div>
                        <span>Innovation at Fingertips</span>
                      </button>
                    </h3>
                    <div
                      id="fin3"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                       <p>You can explore different opportunities with <b>Microsoft Power Apps</b> to build a desired application. Users are free to build apps based on unique requirements and specific business needs.</p>
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
                            src="/img/icons-power-apps_Responsive-Design.svg"
                            alt="icons-power-apps_Responsive-Design"
                          />
                        </div>
                        <span>Responsive Design</span>
                      </button>
                    </h3>
                    <div
                      id="fin4"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#acccm"
                    >
                      <div className="accordion-body">
                        <p>Apps built <b>using Microsoft Power Apps</b> are responsive by nature, making them accessible on any device or operating system.</p>
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
                            src="/img/icons-power-apps_Data.svg"
                            alt="icons-power-apps_Data"
                          />
                        </div>
                        <span>Seamless Data Access</span>
                      </button>
                    </h3>
                    <div
                      id="fin5"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#acccm"
                    >
                      <div className="accordion-body">
                        <p>Using <b>Microsoft Data verse</b>, you can easily host your data, whether your server data is hosted on <b>cloud servers or on-premises data servers</b>. Even so, these apps can extract data externally whenever needed.</p>
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
              <h2>Re-imagine Your Business with Microsoft Power Apps</h2>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="row gx-4">
                <div className="col-lg-6">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                      Empower Anyone
                        <br />
                        to Build Apps
                      </h3>
                      <div className="overlay">
                        <p>Power apps are a productive platform to help your business achieve more simplicity while enhancing overall efficiency and productivity. It can help you build apps to eliminate redundancies and solve various business problems using low-code techniques.</p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                      Create Apps
                        <br />
                        from Data
                      </h3>
                      <div className="overlay">
                        <p>Data is the key to becoming successful in business. This data can help you build interactive and responsive apps with a simple user-experience so that you can resolve the issue using minimal efforts, time, and resources.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 top-m">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                      Build Smart
                        <br />
                        Apps
                      </h3>
                      <div className="overlay">
                        <p>The Power Apps canvas allows users to create smart apps from the beginning with minimal knowledge of coding languages. Also, you can customize and optimize the required parts of the app to make them ideal for you.</p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                      Integrate & Extend
                        <br /> Your Apps
                      </h3>
                      <div className="overlay">
                        <p>When there is a need to resolve a more complex issue, you can easily integrate more than 200 data connectors. Even so, you can create and integrate a custom connector like a professional developer using minimal code.</p>
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
                    src="/img/power apps-side.png"
                    className="fix-im"
                    alt="power apps-side"
                  />
                  <div className="video-ytube video-ytubes">
                    <div className="popup-btn popup-btn">
                      <a
                        href="#javascript:void(0)"
                        onClick={() => setOpen(true)}
                      >
                        <img src="/img/video-ower-apps.png" />
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
                <h2>Microsoft Power Apps Services</h2>
                <p><b>Microsoft Power Apps</b> can skyrocket your business growth and increase the ROI once implemented, along with digitalizing core business applications.</p>
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
                  <p><b>Implement Power Apps</b> and make your business open for new opportunities to ensure consistent growth.  </p>
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
                  <p>Get continuous support for Power Apps to make it work effortlessly.</p>
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
          <div className="row justify-content-center">
            <div className="col-lg-9 col-md-9">
            <header className="section-header">
            <h2>Microsoft Power Apps Pricing</h2>
            <p>Investigate the most cost-effective Power Apps Pricing and Licensing options.</p>
          </header>
            </div>
          </div>
          <div className="row gy-4 p-9">
            <div className="col-lg-4">
              <div className="box box-99">
                <h3>Subscription Plans</h3>
                <p>
                Best for businesses that want predictable user-based licensing - with the flexibility to license users to run one app at a time or run unlimited apps.
                </p>
                <div className="price">
                $6.40 (CAD)<span>Per-User/App/Month</span>
                </div>
                <p className="small-tt">Run one app per user, need more additional licenses to provide access for other users.</p>
                <ul>
                  <li>
                  Includes 250 AI Builder service credits per month.<sup>1</sup>
                  </li>
                  <li>Requires access to the Microsoft 365 admin center with global administrator or billing administrator roles.</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="box box-99">
                <h3>Subscription Plans(Per user plan)</h3>
                <p>Suitable for enterprises that need predictable user-based licensing along with the flexibility to license users to run one app at a time or run unlimited apps.</p>
                <div className="price">
                $25.60<span>Per-User/Month</span>
                </div>
                <p className="small-tt">Run unlimited apps and portals per user for one flat monthly rate.</p>
                <ul>
                  <li>Includes 500 AI Builder service credits per month.</li>
                  <li>Available to buy now with a credit card.</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="box box-99">
                <h3>Pay-as-you-go plan</h3>
                <p>Best for businesses who wants to pay the price whenever they run an app on monthly basis.</p>
                <div className="price">
                $12.80 (CAD)<span>Per Active User/App/Month<sup>2</sup></span>
                </div>
                <p className="small-tt">Use an Azure subscription to pay per user based on the number of unique apps or portals a user runs each month.</p>
                <ul>
                  <li>
                  Requires an Azure subscription.
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
                  <span>Let's Get Started</span>
                </a>
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
                <h3>Want to Explore more Possibilities of Power Apps?</h3>
                <p>Talk to Our experts for one-on-one Consultation Call.</p>
                <div className="text-center m-o-t new-btn-nn">
                  <a
                    data-bs-toggle="modal"
                    href="#exampleModal"
                    className="btn-get-started scrollto"
                  >
                    <span>Book Calendar Today</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="solution-faq faq">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 col-md-9">
            <header className="section-header">
            <h2>
            Have You Got Questions About Microsoft Power Apps?
            </h2>
            <p>Click through FAQs Tailored for You! </p>
          </header>
            </div>
          </div>
          <div className="row justify-content-center mar-top-7">
            <div className="col-lg-8">
              <div className="accordion accordion-flush" id="faqlist1">
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-2"
                    >Is Power Apps a framework?</button>
                  </h3>
                  <div
                    id="faq-content-2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>Power Apps component framework public preview allows developers and makers to edit data sets and test custom components.</p>
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
                    >Is Power Apps SaaS or PaaS?</button>
                  </h3>
                  <div
                    id="faq-content-3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>Power Apps is a platform-as-a-service (PaaS) that provides a range of business services. Without having to build and maintain a complex infrastructure, you can build, run, and maintain apps.</p>
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
                    >How many rows can Power Apps handle?</button>
                  </h3>
                  <div
                    id="faq-content-4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>A table can contain no more than 15,000 rows, which Power Apps cannot read. When you create an Excel table, make sure the name is unique. Add the Import from Excel data source option to Power Apps Studio.</p>
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
                    >What is the difference between Power Platforms and PowerApps?</button>
                  </h3>
                  <div
                    id="faq-content-5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>Power Apps is part of the broader Microsoft Power Platform built on Azure cloud services. It is a quick app development platform and includes native capabilities for <Link href="/products/microsoft-dynamics-365-sales/"><a>Microsoft Dynamics Sales</a></Link>, Service, <Link href="/products/microsoft-dynamics-365-field-service/"><a>Field Service</a></Link>, <Link href="/products/microsoft-dynamics-365-marketing/"><a>Marketing</a></Link>, and Talent Acquisition Apps.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PowerApps;