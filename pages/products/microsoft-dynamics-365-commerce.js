import React, { useState } from "react";
import Head from "next/head";
import ModalVideo from "react-modal-video";
import Link from "next/link";
import Image from "next/image";
const Commerce = () => {
  const [isOpen, setOpen] = useState(false);
  const [open, setsOpen] = useState(false);
  return (
    <>
      <Head>
        <title>Use Dynamics 365 for Commerce to Boost your Retail Business</title>
        <meta
          name="description"
          content="With Dynamics 365 Commerce, you can provide your customers and partners with a more unified, personalized, seamless buying experience. Take a free trial."
        />
        <meta name="robots" content="index,follow" />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.ca/products/microsoft-dynamics-365-commerce/"
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
              <h1>Microsoft Dynamics 365 Commerce</h1>
              <p>
                Enable AI-driven intelligence in your e-Commerce business to
                understand your customers and meet their expectations while
                building relationships.{" "}
              </p>
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
              <Image
                src="/img/commerce-banner.png"
                alt="commerce-banner"
                width={723}
                height={473}
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-8">
              <header className="section-header">
                <h2>What is Dynamics 365 Commerce?</h2>
                <p>
                  Meeting deadlines and reaching revenue goals are the
                  cornerstones of any company's success. However, it is only
                  possible to achieve this by integrating innovative
                  technologies such as big data,{" "}
                  <Link href="/products/microsoft-dynamics-365-ai/">
                    <a>AI (Artificial Intelligence)</a>
                  </Link>
                  ,{" "}
                  <Link href="/products/microsoft-dynamics-365/mixed-reality/">
                    <a>Mixed Reality</a>
                  </Link>
                  ,{" "}
                  <Link href="/products/azure-machine-learning/">
                    <a>Machine Learning</a>
                  </Link>
                  , and data analytics.
                </p>
                <p>
                  The Dynamics 365 for Commerce platform provides a seamless,
                  personalized, and scalable e-commerce shopping experience for
                  your customers and partners. Implementing Dynamics 365
                  Commerce will help you build consumer loyalty and exceed their
                  expectations.
                </p>
              </header>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-8">
              <header className="section-header">
                <h2>
                  Transform Your E-Commerce with Dynamics 365 for Commerce
                </h2>
                <p>
                  Re-imagine your retail operations, offer buyers seamless,
                  self-service online shopping experiences, and create the store
                  of the future with all the B2B functionality in demand.
                </p>
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
                            src="/img/icons-commerce_user-experience.svg"
                            alt="icons-commerce_user-experience"
                            width="48"
                            height="48"
                          />
                        </div>
                        <span>Understand Customers</span>
                      </button>
                    </h3>
                    <div
                      id="fin1"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        <p>
                          Reading into your customers' likes and dislikes,
                          encouraging their buying online experiences, and
                          leaning them to take advantage of click-and-collect
                          using Dynamics 365 for Commerce will increase growth
                          and profits.{" "}
                        </p>
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
                            src="/img/icons-commerce_back-office.svg"
                            alt="icons-commerce_back-office"
                            width="48"
                            height="48"
                          />
                        </div>
                        <span>Exceed Expectations</span>
                      </button>
                    </h3>
                    <div
                      id="fin2"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        <p>
                          Consumers seek flexible options to buy and fulfill
                          their needs - where, when, & how to choose. Implement
                          this tool and enable omnichannel experiences to drive
                          customer conversion and sales growth.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="finace-acc">
                <hr className="mob-disp" />
                <div className="accordion" id="news">
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
                            src="/img/icons-commerce_ecommerce-platform.svg"
                            alt="icons-commerce_ecommerce-platform"
                            width="48"
                            height="48"
                          />
                        </div>
                        <span>Build Loyalty</span>
                      </button>
                    </h3>
                    <div
                      id="fin3"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#news"
                    >
                      <div className="accordion-body">
                        <p>
                          By providing exceeded customer expectations by
                          delivering personalized experiences; such as
                          integrated frictionless payment methods, and more
                          connected relevant content, you can build loyalty to
                          your customers.
                        </p>
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
                        data-bs-target="#fin4"
                        aria-expanded="false"
                        aria-controls="fin4"
                      >
                        <div className="wr-in">
                          <img
                            src="/img/icons-commerce_Commerce-Surround-Services.svg"
                            alt="icons-commerce_Commerce-Surround-Services"
                            width="48"
                            height="48"
                          />
                        </div>
                        <span>Modernize Retail</span>
                      </button>
                    </h3>
                    <div
                      id="fin4"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#news"
                    >
                      <div className="accordion-body">
                        <p>
                          You can infuse artificial intelligence and enable
                          data-driven tools across your sales operations to
                          improve customer and partner experience using Dynamics
                          365 Commerce. This tool not only helps you drive
                          greater ROI (return on investment) but optimizes
                          overall business practices.{" "}
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

      <section className="Solution-business-why">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 m--t align-self-center">
              <div className="wy-sultion-left-head">
                <h2>Features of Dynamics 365 for Commerce</h2>
                <h3>
                  Drive Strong Business Decisions Using Your Ecommerce Database
                </h3>
              </div>
            </div>
            <div className="col-lg-7 align-self-center">
              <div className="row gx-4">
                <div className="col-lg-6">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Unified
                        <br />
                        Commerce
                      </h3>
                      <div className="overlay">
                        <p>
                          Integrate intelligent digital storefronts to
                          seamlessly manage various aspects of your commerce,
                          from inventory, cash, and pricing to building loyalty
                          for your brand, with Dynamics 365 Commerce.
                        </p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Intelligent
                        <br />
                        add-ins
                      </h3>
                      <div className="overlay">
                        <p>
                          Enhance shopping experiences for your customers by
                          utilizing AI-driven add-ins. Provide your customers
                          with personalized recommendations both online and in
                          stores and{" "}
                          <Link href="/products/dynamics-365-customer-engagement/">
                            <a>increase customer engagement across channels</a>
                          </Link>
                          .
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 top-m">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Operationa
                        <br />
                        Agility
                      </h3>
                      <div className="overlay">
                        <p>
                          Bring next-level resilience by empowering your
                          workforce to centralize the management of e-Commerce
                          operations using{" "}
                          <Link href="/products/microsoft-dynamics-365/">
                            <a>Microsoft's Dynamics 365</a>
                          </Link>{" "}
                          for Commerce, a unique SaaS (Software as a Service)
                          platform to flex and adapt to constantly evolving
                          business needs.
                        </p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                      Connected <br />
                      Commerce 
                      </h3>
                      <div className="overlay">
                        <p>Make it happen with connected commerce solutions to drive business outcomes, improving customer experiences (CX), stronger engagement, and fulfillment of e-commerce orders via a <Link href="/products/dynamics-365-supply-chain-management/"><a>supply chain that has fidelity</a></Link>.</p>
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
            <div className="col-lg-6">
              <div className="busine_service_bottom-left">
                <div className="busine_service_bottom-right">
                  <Image
                    src="/img/Ecommerce side.png"
                    className="fix-im"
                    alt="Ecommerce side"
                    width={553}
                    height={532}
                  />
                  <div className="video-ytube video-ytubes">
                    <div className="popup-btn popup-btns">
                      <a
                        href="#javascript:void(0)"
                        onClick={() => setOpen(true)}
                      >
                        <Image
                          src="/img/video-Ecommerce.png"
                          alt="video-banner-commerce"
                          width={390}
                          height={259}
                        />
                        {/* <span className="cente-icns">
                          <img
                            src="/img/play_icons.svg"
                            alt="play_icons"
                          />
                        </span> */}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="side-heading">
                <h2>Dynamics 365 Commerce Services</h2>
                <p>Our customer-oriented services help you with everything to build and successfully run your digital commerce.</p>
              </div>
              <div className="busine_service_bottom-right">
                <div className="card_new_img">
                  <Image
                    src="/img/Business-Central-Implementation-icons.svg"
                    alt="Business-Central-Implementation-icons"
                    width={64}
                    height={64}
                  />
                </div>
                <div className="card_new_content">
                  <h3>Implementation</h3>
                  <p>Optimize existing processes to turn your running commerce into a profit-making machine with Dynamics 365 for Commerce.</p>
                  <div className="action-content">
                    <a data-bs-toggle="modal" href="#exampleModal">
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
              <div className="busine_service_bottom-right">
                <div className="card_new_img">
                  <Image
                    src="/img/Business Central Upgrade-icons.svg"
                    alt="Business Central Upgrade-icons"
                    width={64}
                    height={64}
                  />
                </div>
                <div className="card_new_content">
                  <h3>Upgrade</h3>
                  <p>Transform your business operations to achieve higher profitability and scalability with seamless and on-time upgrades for Dynamics 365 Commerce.</p>
                  <div className="action-content">
                    <a data-bs-toggle="modal" href="#exampleModal">
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
              <div className="busine_service_bottom-right">
                <div className="card_new_img">
                  <Image
                    src="/img/Business-Central-Support-icons.svg"
                    alt="Business-Central-Support-icons"
                    width={64}
                    height={64}
                  />
                </div>
                <div className="card_new_content">
                  <h3>Support</h3>
                  <p>Get the desired Dynamics 365 support 24*7*365 to reduce errors and ensure uninterrupted processes.</p>
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
                <h3>Connect Your Commerce to the Cloud, & Lead the e-Commerce Market</h3>
                <p>Our Dynamics 365 experts are ready to analyze your requirements and reveal a specially designed revenue-generating solution. </p>
                <div className="text-center m-o-t new-btn-nn">
                  <a
                    data-bs-toggle="modal"
                    href="#exampleModal"
                    className="btn-get-started scrollto"
                  >
                    <span>Contact Us</span>
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
            <h2>Dynamics 365 Commerce pricing</h2>
          </header>
          <div className="row gy-4 p-9 justify-content-center">
            <div className="col-lg-6 col-md-6">
              <div className="box box-22">
                <h3>Dynamics 365 Commerce</h3>
                <div className="price">
                  $180<span>Per-User/Per Month</span>
                </div>
                <ul>
                  <li className="text-center">
                  Manages omnichannel retail operations with core capabilities. 
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="box box-22">
                <h3>E-Commerce Add-In for Dynamics 365 Commerce</h3>
                <div className="price">
                  $4,000<span>Per-User/Per Month</span>
                </div>
                <ul>
                  <li className="text-center">
                  Includes e-commerce management for Dynamics 365 Commerce. 
                  </li>
                  <li className="text-center">
                    <i className="bi bi-check-lg"></i> Requires Dynamics 365 Commerce   
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
                  <span>Get Started Now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="solution-faq faq">
        <div className="container">
          <header className="section-header">
            <h2>
              Have you got
              <br />
              questions about Dynamics 365 Commerce?
            </h2>
            <p>Click through our FAQs tailored for you!</p>
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
                    >
                     What is Dynamics 365 for Commerce Scale?
                    </button>
                  </h3>
                  <div
                    id="faq-content-1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>While Dynamics 365 Commerce is to help you unify your company's commerce at scale, the Dynamics 365 Scale Unit enables retailers to sell goods even with their poor internet connections! Enterprises can process credit card transactions, issue gift cards, and sync data with HQ even when they are not connected to the internet.</p>
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
                    >Is Dynamics 365 for Retail the same as Dynamics 365 for commerce?</button>
                  </h3>
                  <div
                    id="faq-content-2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>Recently, Microsoft upgraded Dynamics 365 Retail to Dynamics 365 Commerce. This business app offers a comprehensive omnichannel experience to your e-commerce, in-store, and emerging commerce channels. The system can do everything for your organization's commerce needs. Also, See - <Link href="/products/microsoft-dynamics-365-sales/"><a>Dynamics 365 Sales Professional</a></Link> | <Link href="/products/dynamics-365-project-operations/"><a>Dynamics 365 Project and Operations</a></Link></p>
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
                    >What are the top benefits of implementing Dynamics 365 Commerce for my business?</button>
                  </h3>
                  <div
                    id="faq-content-3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>Implementing Dynamics 365 Commerce has numerous benefits, including:</p>
                      <ul>
                        <li>Power of cloud technology</li>
                        <li>Simplified customer engagement</li>
                        <li>Increased customer loyalty</li>
                        <li>Business-specific flexibility, and more</li>
                      </ul>
                      <p>With this business app, you can easily adapt to modern business requirements and an easy-to-use user interface.</p>
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
                    >Are integrations allowed for Dynamics 365 Commerce?</button>
                  </h3>
                  <div
                    id="faq-content-4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>Yes! Absolutely. Dynamics 365 Commerce, like other business apps in the Dynamics 365 suite of business apps, allows integration of needed apps, whether native or third-party. <Link href="/contact-us/"><a>Contact your Dynamics 365 support partner like Dynamics Square</a></Link> to help you build the required application that understands your specific needs and works accordingly.</p>
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
                    >What is the cost of implementing Dynamics 365 Commerce?</button>
                  </h3>
                  <div
                    id="faq-content-5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>There is no fixed answer to this query since a range of factors influence the cost of Dynamics 365 Commerce implementation, including:</p>
                      <ul>
                        <li>Business requirements</li>
                        <li>The complexity of your business operations.</li>
                      </ul>
                      <p>For an accurate estimate, <Link href="/contact-us/"><a>contact us now.</a></Link></p>
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

export default Commerce;
