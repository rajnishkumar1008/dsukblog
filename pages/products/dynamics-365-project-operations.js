import React, { useState } from "react";
import Head from 'next/head'
import ModalVideo from "react-modal-video";
import Link from "next/link";
import Image from "next/image";

const ProjectOperations = () => {
  const [isOpen, setOpen] = useState(false);
  const [open, setsOpen] = useState(false);
  return (
    <>
      <Head>
        <title>Microsoft Dynamics 365 Project Operations: Lead Your Projects</title>
        <meta
          name="description"
          content="Deliver more with less to lead a profitable project-centric business with Dynamics 365 Human Resources. Get more deals. Contact Dynamics Square."
        />
           <meta name="robots" content="index,follow" />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.ca/products/dynamics-365-project-operations/"
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
                <br />
                 Project Operations
              </h1>
              <p>Connect more with your people, bring all your projects to a unified project management application and drive profitability with Dynamics 365 Project Operations.</p>
              <div>
                <div className="text-center text-lg-start">
                  <a
                    data-bs-toggle="modal"
                    href="#exampleModal"
                    className="btn-get-started scrollto"
                  >
                    <span>Get a Free Demo</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <Image src="/img/project-operation-banner.png" alt="project-operation-banner" width={778} height={506}/>
            </div>
          </div>
        </div>
      </section>

      <section>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9 col-md-9">
            <header className="section-header">
              <h2>What Is Dynamics 365 Project Operations?</h2>
              <p>Dynamics 365 Project Operations is a leading project-centric business management app that helps you lead a profitable project-centric business.</p><br />
              <p>Implementing this powerful business app empowers teams to win more contracts, optimize resource utilization, accelerate project delivery, and get business insights from sales to project financials. With this single unified SaaS (Software as a Service) project management platform, you can bring your team together and win the game of driving collaboration, faster project delivery, and maximizing growth potential.</p>
              <p><b>Start deriving visibility, collaboration, and agility across your project-centric business! </b></p>
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
                            src="/img/icon-automation.svg"
                            alt="icons"
                            width="48"
                            height="48"
                          />
                        </div>
                        <span>Exceptional Experiences</span>
                      </button>
                    </h3>
                    <div
                      id="fin1"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                       <p>Improve your project quotes, forecasts, estimations, and scope to win more bids. Deliver outstanding deal management experiences with intuitive KPI dashboards.</p>
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
                            src="/img/icons_resource-management.svg"
                            alt="icons"
                            width="48"
                            height="48"
                          />
                        </div>
                        <span>Simplify Management</span>
                      </button>
                    </h3>
                    <div
                      id="fin2"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                       <p>Dynamics 365 Project Operations uses a configurable CPQ engine to help you succeed in project tracking via invoicing, revenue recognition, and project accounting.</p>
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
                        data-bs-target="#fin3"
                        aria-expanded="false"
                        aria-controls="fin3"
                      >
                        <div className="wr-in">
                          <img
                            src="/img/icons-_manage customer.svg"
                            alt="icons"
                            width="48"
                            height="48"
                          />
                        </div>
                        <span>Drive Success</span>
                      </button>
                    </h3>
                    <div
                      id="fin3"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                       <p>In <Link href="/products/dynamics-365-project-operations/"><a>Microsoft Dynamics Project Operations</a></Link>, you can manage projects flexibly with easy-to-use Microsoft Project features such as Kanban boards and Gantt charts.</p>
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
                        data-bs-target="#fin4"
                        aria-expanded="false"
                        aria-controls="fin4"
                      >
                        <div className="wr-in">
                          <img
                            src="/img/icons_finance-management.svg"
                            alt="icons"
                            width="48"
                            height="48"
                          />
                        </div>
                        <span>Maximize Profitability</span>
                      </button>
                    </h3>
                    <div
                      id="fin4"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnews"
                    >
                      <div className="accordion-body">
                       <p>Maximize profitability by streamlining project finances and complying with International Financial Reporting Standards while managing your project accounting.</p>
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
                        data-bs-target="#fin5"
                        aria-expanded="false"
                        aria-controls="fin5"
                      >
                        <div className="wr-in">
                          <img
                            src="/img/icons_data-management.svg"
                            alt="icons"
                            width="48"
                            height="48"
                          />
                        </div>
                        <span>Optimize Resources</span>
                      </button>
                    </h3>
                    <div
                      id="fin5"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnews"
                    >
                      <div className="accordion-body">
                       <p>Utilize resources efficiently using resource insights, scheduling, governance, and skills matching, & by ensuring that the intended person is on the right project(s).  </p>
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
                        data-bs-target="#fin6"
                        aria-expanded="false"
                        aria-controls="fin6"
                      >
                        <div className="wr-in">
                          <img
                            src="/img/icons_data-management.svg"
                            alt="icons"
                            width="48"
                            height="48"
                          />
                        </div>
                        <span>Improve Business</span>
                      </button>
                    </h3>
                    <div
                      id="fin6"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnews"
                    >
                      <div className="accordion-body">
                       <p>Enhance your business acumen by utilizing consolidated financial and sales data to rapidly adapt to market demands and achieve desired success. </p>
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
              <h2>Dynamics 365 Project Operations</h2>
              <h3>Start Transforming Your Project-centric Business Today!</h3>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="row gx-4">
                <div className="col-lg-6">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                      Streamline <br />
                      Data
                      </h3>
                      <div className="overlay">
                        <p>Accelerate project delivery, drive quality assurance, and achieve success with real-time access to your data.</p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                      Manage <br />
                      Finance
                      </h3>
                      <div className="overlay">
                        <p>Get complete visibility into each project status while simplifying your project costing, budgeting, invoicing, billing, revenue recognition, and compliance management.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 top-m">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                      Automate <br />
                      Projects
                      </h3>
                      <div className="overlay">
                        <p>Project automation allows everyone to stay informed of the project status in real-time so that they can ensure that it is being planned and executed accordingly.</p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                      Ensure <br />
                      Delivery
                      </h3>
                      <div className="overlay">
                        <p>Optimize your project delivery process by ensuring the right talent is aligned with the right projects while controlling the entire project development cycle, and meeting deadlines.</p>
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
                    src="/img/Project-operation-side image.png"
                    className="fix-im"
                    alt="Project-operation-side"
                    width={561}
                    height={557}
                  />
                  <div className="video-ytube video-ytubes">
                    <div className="popup-btn popup-btns">
                      <a
                        href="#javascript:void(0)"
                        onClick={() => setOpen(true)}
                      >
                        <Image src="/img/Video-Video-Project-Operation.png" alt="Project-Operation-video" width={390}
                    height={259} />
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
                <h2>Dynamics 365 Project Operations services we offer</h2>
                <p>Get hassle-free implementation, upgrade, and support services from <Link href="/"><a>Dynamics Square</a></Link>. Give your project operations a boost with our Services.</p>
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
                  <p>Integrate Dynamics 365 Project Service seamlessly into your project.</p>
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
                  <p>Upgrade your existing system with a highly recommended support system that can bring agility while making your project-centric business fruitful.</p>
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
                  <p>Leverage quick and in-demand Dynamics 365 Project Operations Support Services from Dynamics Square and ensure your business operations are project centric.</p>
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
            <div className="col-lg-8 col-md-8">
              <header className="section-header">
                <h2>Dynamics 365 Project Operations Pricing</h2>
                <p>Explore Dynamics 365 Project Operations plans and pricing. Choose wisely based on your needs.</p>
              </header>
            </div>
          </div>
         
          <div className="row gy-4 p-9 justify-content-center">
            <div className="col-lg-6">
              <div className="box box-22">
                <h3>Dynamics 365 Project Operations</h3>
                <div className="price">
                  $120<span>Per-User/Month</span>
                </div>
                <ul>
                  <li className="text-center">
                  Get the accessibility, teamwork, and agility needed to drive success across your project-centric business.
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
      <section className="call-to-action-center hero-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="call-to-action-content">
                <h3>To find out what our Dynamics 365 experts can do for you, contact us now.</h3>
                <div className="text-center m-o-t new-btn-nn">
                  <a
                    data-bs-toggle="modal"
                    href="#exampleModal"
                    className="btn-get-started scrollto"
                  >
                    <span>Click to Get In Touch!</span>
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
              <h2>Want to Explore more about Dynamics 365 Project Operations?</h2>
                <p>Click through FAQs tailored for you!</p>
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
                    >How does Dynamics 365 Project Operations work?</button>
                  </h3>
                  <div
                    id="faq-content-2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                     <p>Streamlining projects while reducing errors, and efficiently managing them via automation is the primary goal of Dynamics 365 Project Operations. If you want to optimize your resources for optimum productivity or gain maximum with minimum efforts, then this software application is the right choice for you.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-1"
                    >Does Microsoft Project Operation integrate with Business Central?</button>
                  </h3>
                  <div
                    id="faq-content-1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                     <p>Yes! You can integrate <Link href="/products/dynamics-365-business-central/"><a>Dynamics 365 Business Central</a></Link> and other add-ons to Dynamics 365 Project Operations to enhance its features. That is because all such business apps and third-party apps are part of <Link href="/products/microsoft-power-platform/"><a>Microsoft Power Platform</a></Link>, hence integrable. Some modules that you can integrate are - <b>Dynamics 365 Human Resources, Sales, Marketing, Customer Service, Power BI, and other data sources.</b></p>
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
                    >In Dynamics 365, How can I install Project Operations?</button>
                  </h3>
                  <div
                    id="faq-content-3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>There are two ways to install project operations:</p>
                      <ul>
                        <li>With the existing CDS environment</li>
                        <li>By creating a new CDS environment</li>
                      </ul>
                      <p>The installation of project operations in a new environment requires a Power Platform Administrator license and a Project Operations license. So, if you choose the latter option, you will be required to create a new CDS environment using the Power Platform admin. While for the first case, you must have access to the Microsoft Power Platform. For more information, you can <Link href="/contact-us/"><a>contact our Dynamics 365 consultants</a></Link>.</p>
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
                    What essential components of Dynamics 365 Project Operations are there?
                    </button>
                  </h3>
                  <div
                    id="faq-content-4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <ul>
                        <li>Project sales management</li>
                        <li>Project accounting</li> 
                        <li>Modern approvals</li> 
                        <li>Billing</li> 
                        <li>Resource planning</li>  
                        <li>Lead management</li> 
                        <li>Time and expense management</li> 
                        <li>Teams' collaboration</li> 
                        <li>Upgrade from Dynamics 365 PSA</li>
                        <li>Project Accounting</li> 
                        <li>External project operations planning</li> 
                        <li>Comprehensive project operations</li>
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
                      data-bs-target="#faq-content-5"
                    >What is the cost of Dynamics 365 Project Operations?</button>
                  </h3>
                  <div
                    id="faq-content-5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>The pricing for Dynamics 365 Project Operations depends on your needs and the type of customization. However, the standard cloud deployment is already mentioned above and is also available on Microsoft's website.</p>
                      <p><b>Remember:</b> On-premises deployment always comes with customized pricing, and it may cost differently.</p>
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

export default ProjectOperations;
