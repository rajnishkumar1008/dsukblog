import React, { useState } from "react";
import Head from 'next/head'
import ModalVideo from "react-modal-video";
import Link from "next/link";
import Image from "next/image";
const CustomerService = () => {
  const [isOpen, setOpen] = useState(false);
  const [open, setsOpen] = useState(false);
  return (
    <>
      <Head>
        <title>Dynamics 365 Customer Service: Understand Customers Better</title>
        <meta
          name="description"
          content="Implement Dynamics 365 Customer Service to better understand your customers and provide them with omnichannel experiences. Contact Dynamics Square."
        />
           <meta name="robots" content="index,follow" />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.ca/products/microsoft-dynamics-365-customer-service/"
        />
      </Head>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="wVFZVajK2YI"
        onClose={() => setOpen(false)}
      />
      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1 align-self-center">
              <h1>
                Dynamics 365
                <br />
                Customer Service
              </h1>
              <p>Incorporate an integrated suite of capabilities, Dynamics 365 Customer Service, to deliver the best customer service experiences possible for your customers and earn them for life.</p>
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
                src="/img/customer-service-banner.png"
                alt="Dynamics 365 Customer Service"
                width={759}
                height={513}
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
                <h2>What Is Dynamics 365 Customer Service?</h2>
                <p>Delivering a customer-centric customer experience (CX) is crucial for today's digital world. Dynamics 365 customer service is designed and developed to do even more. It is a comprehensive, highly customizable, and extremely flexible solution for enterprises looking to transform their customer service, sales, and marketing experiences.</p>
                <p>With this Saas CRM solution, you empower your employees with a single, unified view of the customer to successfully drive omnichannel efficiency. Increase time-to-value for all your business investments by integrating this <Link href="/products/microsoft-dynamics-crm/"><a>cloud-based customer relationship management (CRM) system</a></Link> and unlock new revenue streams, reduce waste, and accelerate inefficiencies.</p>
              </header>
            </div>
          </div>
        </div>
      </section>
      <section className="Solution-business-why">
        <div className="container">
          <div className="row">
            <div className="col-lg-5  align-self-center">
            <div className="wy-sultion-left-head">
            <h2>Dynamics 365 Customer Service Features</h2>
              <h3>Understand your customers & provide them with incredible customer experiences</h3>
              </div>
              {/* <div className="m-o-t m-o-t-b">
                <a href="#about" className="btn-get-started scrollto">
                  <span>Know More</span>
                </a>
              </div> */}
            </div>
            <div className="col-lg-7">
              <div className="row gx-4">
                <div className="col-lg-6 align-self-center">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                      Ease  <br />
                      Agents' Work  
                      </h3>
                      <div className="overlay">
                        <p>AI-driven productivity tools in Dynamics 365 Customer Service support agents with the right information at the right moment to help them close cases faster.</p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                      Optimize <br />
                      Operational Costs
                      </h3>
                      <div className="overlay">
                        <p>With a single, comprehensive platform that provides insights and adapts to future needs, you can cut costs.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 top-m align-self-center">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                      Smart Self-service <br /> Capabilities
                      </h3>
                      <div className="overlay">
                        <p>Use virtual agents and knowledge bases to help customers help themselves.</p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>Know your <br /> customers
                      </h3>
                      <div className="overlay">
                        <p>Personalize and secure customer interactions, & quickly deliver consistent experiences by recognizing and connecting through their preferred channels.</p>
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
                    src="/img/customer-service-side-image.png"
                    className="fix-im"
                    alt="Dynamics 365 Customer Service"
                    width={553}
                    height={591}
                  />
                  <div className="video-ytube video-ytubes">
                    <div className="popup-btn popup-btns">
                      <a
                        data-bs-toggle="modal"
                        // href="#javascript:void(0)"
                        onClick={() => setOpen(true)}
                      >
                        <Image src="/img/video-Customer Service.png" width={390} height={259} />
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
                <h2>Dynamics 365 Customer Service</h2>
                <p>Remove data silos, allow easy cross-departmental collaboration, and present a united front before customers.</p>
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
                  <p>Improve your customer experience and maximize your sales with our top-notch implementation services.</p>
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
                  <p>Upgrade your CRM system capabilities to drive a smarter customer experience with us.</p>
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
                  <p>Improve your customer retention rate with a long-lasting impact by embracing the capabilities of Dynamics 365 Customer Service & our support services.</p>
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
          <div className="col=lg-9">
            <header className="section-header">
                <h2>Dynamics 365 Customer Service Pricing</h2>
                <p>There is no hidden cost with Dynamics 365 Customer Service. We offer cost-effective licensing for commercial, non-profit, and educational users of bundled Dynamics 365 Customer Service Products.</p>
                <p><b>Save 40-45% Now!</b></p>
              </header>
          </div>
         </div>
          <div className="row gy-4 p-9">
            <div className="col-lg-6 col-md-6">
              <div className="box box-22">
                <h3>
                  Dynamics 365 Customer Service
                  <br />
                  Professional
                </h3>
                <div className="price">
                $50 <span>Per-User/Per Month</span>
                </div>
                <ul>
                  <li>
                    <i className="bi bi-check-lg"></i> Case management
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i> Knowledge management
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i> SLAs
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i> Templates
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i> Unlimited number of users
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i> Additional Capabilities
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="box box-22">
                <h3>
                  Dynamics 365 Customer Service
                  <br />
                  Essentials
                </h3>
                <div className="price">
                $95<span>Per-User/Per Month</span>
                </div>
                <ul>
                  <li>
                    <i className="bi bi-check-lg"></i> All features of the
                    Professional set
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i> All features of the
                    Professional set
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i> Case management
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i> Unified service desk
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i> Embedded intelligence
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i> Context-driven
                    suggestions
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i> Service gamification
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i> Customization and
                    extensibility
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i> Portals
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i> Analytics and KPI
                    reporting
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
                  <span>Get started with Cloud CRM</span>
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
                <h3>Discover the Next-Gen CRM Apps at Dynamics Square</h3>
                <p>Optimize your marketing efforts, accelerate sales cycles, and improve customer service with Dynamics 365 Customer Service.</p>
                <p>Modernize Your Customer Experience!</p>
                <div className="text-center m-o-t new-btn-nn">
                  <a
                    data-bs-toggle="modal"
                    href="#exampleModal"
                    className="btn-get-started scrollto"
                  >
                    <span>Talk To Experts Today</span>
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
        <div className="col-lg-8 col-md-8">
          <header className="section-header">
            <h2>
              Have you got questions
              <br />
               about Microsoft Dynamics Customer Service?
            </h2>
            <p>Click through tailored FAQs for the best answers!</p>
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
                      data-bs-target="#faq-content-1"
                    >
                      What is Microsoft Dynamics Customer Service? 
                    </button>
                  </h3>
                  <div
                    id="faq-content-1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                     <p>Microsoft Dynamics Customer Service is a SaaS-based CRM app. It helps your employees embrace collaboration while creating opportunities for your customers to have more personal, compelling experiences. This next-gen CRM app also offers you space to build brand equity, improve satisfaction, and drive more sales. It's a power pack to create customer loyalty and increase revenue.</p>
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
                    >
                    What is Dynamics 365 Customer Service Insights?
                    </button>
                  </h3>
                  <div
                    id="faq-content-2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body"><p>Dynamics 365 customer service insights give businesses access to useful information about important analytics, operational data, and other market trends. These insights enable businesses to take quicker, more informed decisions that support profitability and growth. Businesses can implement the necessary changes to increase customer satisfaction, increase operational efficiency, and more. </p></div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-3"
                    >How do I install Dynamics 365 Customer Service?</button>
                  </h3>
                  <div
                    id="faq-content-3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>You can manually install Dynamics 365 Customer Service app. It is recommended. And then assign user roles before you allow your users to access it.</p>
                      <p>The following steps are needed while installing Dynamics 365 Customer Service:</p>
                      <ul>
                        <li>Sign-up for the Power Platform administration center.</li>
                        <li>Head to the drop-down list of “Resources” - select Dynamics 365 Apps.</li>
                        <li>On the same page, click on “customer service Team member” tile - select install.</li>
                        <li>When you reach the panel saying; “Install Customer Service Team Member”, select a preferred environment from the list.</li>
                        <li>Now, select “Terms of Service” to get agreed upon, and then click “install”.</li>
                        <li>Finally, it's time to assign user roles in the Customer Service app. Then, it's all done. </li>
                      </ul>
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
                    >
                     What distinguishing qualities does Dynamics 365 Customer Service offer? 
                    </button>
                  </h3>
                  <div
                    id="faq-content-4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                     <p>Dynamics 365 customer service has several vital features. You can seamlessly drive better customer experiences, improve customer service, and track customer journeys to serve them with a more personalized solution.</p>
                     <p>The important features of Dynamics 365 Customer Service are listed below:</p>
                      <ul>
                        <li>Comprehensive reports.</li>
                        <li>Integrated CRM system.</li>
                        <li>Cross-functional insights and reporting.</li>
                        <li>Actionable data dashboards.</li>
                        <li>Customer-centric automation.</li>
                        <li>Proactive customer interactions.</li>
                        <li>Optimized processes.</li>
                        <li>Simplified collaboration.</li>
                        <li>Faster response times to customer requests.</li>
                        <li>Better understanding of customers.</li>
                        <li>A fully integrated, cross-functional CRM solution.</li>
                      </ul>
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

export default CustomerService;
