import React, { useState } from "react";
import Head from 'next/head'
import ModalVideo from "react-modal-video";
import Link from "next/link";
import Image from "next/image";


const FieldService = () => {
  const [isOpen, setOpen] = useState(false);
  const [open, setsOpen] = useState(false);
  return (
    <>
      <Head>
        <title>Microsoft Dynamics 365 Field Service: AI-Enabled Service Tool</title>
        <meta
          name="description"
          content="Explore Dynamics 365 for Field Service and Transform your field services to deliver customer-preferred end-to-end field service. Contact support for more info."
        />
           <meta name="robots" content="index,follow" />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.ca/products/microsoft-dynamics-365-field-service/"
        />
      </Head>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="yCJ7C1KS-Jw"
        onClose={() => setOpen(false)}
      />
      <section className="Solution-banner hero-1 hero ">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1 align-self-center">
              <h1>
                Dynamics 365
                <br />
                Field Service
              </h1>
              <p>Enable more connected field services using IoT and mixed-reality solutions, empower frontline employees, optimize scheduling, and deliver personalized customer experiences with <b>Dynamics 365 for field services</b>.</p>
              <div>
                <div className="text-center text-lg-start">
                  <a
                    data-bs-toggle="modal"
                    href="#exampleModal"
                    className="btn-get-started scrollto"
                  >
                    <span>Get Your Free Demo</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <Image
                src="/img/FieldServicebanner.png"
                alt="Dynamics 365 Customer Service"
                width={771}
                height={478}
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
            <h2>What is Dynamics 365 Field Service?</h2>
            <p><b>Field Service</b> employees strive for better response time, accurate data, effective communication, and less hectic collaboration. <b>Microsoft's Dynamics 365 for field Service</b> does the same by helping you become more proactive than reactive. It uses real-time data insights for highly connected field service experience. As a <Link href="/"><a>Microsoft Dynamics 365 Gold Partner</a></Link>, we help you implement this next-gen field service app to seamlessly:</p>
          </header>
            </div>
          </div>

          <div className="row p-lg-6">
            <div className="col-lg-6">
              <div className="finace-acc">
                <div className="accordion" id="accnew">
                  <div className="accordion-item">
                    <h3 className="accordion-header">
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
                            src="/img/icons_customer-resolution.svg"
                            alt="icons"
                            width="48"
                            height="48"
                          />
                        </div>
                        <span>Deliver Personalized Experiences</span>
                      </button>
                    </h3>
                    <div
                      id="fin1"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                     <p>Engage with your customers, provide post-engagement surveys, and offer self-service scheduling to meet customer expectations with on-time scheduling and technician location information.</p>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="accordion-item">
                    <h3 className="accordion-header">
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
                            src="/img/icons_resource-scheduling.svg"
                            alt="icons"
                            width="48"
                            height="48"
                          />
                        </div>
                        <span>Empower Frontline Employees</span>
                      </button>
                    </h3>
                    <div
                      id="fin2"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                      <p>Empower your frontline workers by helping them access the correct information at the right time via intelligent route planning, internet of things (IoT) integration, & real-time remote expert collaboration using mixed reality.</p>
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
                    <h3 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#cns3"
                        aria-expanded="false"
                        aria-controls="cns3"
                      >
                        <div className="wr-in">
                          <img
                            src="/img/icons_seamless-integration.svg"
                            alt="icons"
                            width="48"
                            height="48"
                          />
                        </div>
                        <span>Increase Employee Productivity</span>
                      </button>
                    </h3>
                    <div
                      id="cns3"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnews"
                    >
                      <div className="accordion-body">
                      <p>Give technicians access to in-context support to quickly resolve problems, build remote collaboration, streamline activities with a mobile-optimized interface, and boost employee productivity.</p>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="accordion-item">
                    <h3 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#cns4"
                        aria-expanded="false"
                        aria-controls="cns4"
                      >
                        <div className="wr-in">
                          <img
                            src="/img/icons_real-time-insight.svg"
                            alt="icons"
                            width="48"
                            height="48"
                          />
                        </div>
                        <span>Optimize Service Operations</span>
                      </button>
                    </h3>
                    <div
                      id="cns4"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnews"
                    >
                      <div className="accordion-body">
                     <p>Inform and dispatch the right technician, smartly manage resource assignments via automated scheduling, and optimize your service delivery capabilities using <b>AI-enabled scheduling recommendations</b>.</p>
                      </div>
                    </div>
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
                <h3>Get Started with Dynamics 365 Field Service Now!</h3>
                <div className="text-center m-o-t new-btn-nn">
                  <a
                    data-bs-toggle="modal"
                    href="#exampleModal"
                    className="btn-get-started scrollto"
                  >
                    <span>Schedule a Free Demo</span>
                  </a>
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
              <h2>Features of Microsoft Dynamics 365 Field Service</h2>
              <h3>Maximize first-time-fix rates, decrease travel time, and boost your frontline employees' productivity </h3>
              </div>
              <div className="m-o-t m-o-t-b">
                {/* <a href="#about" className="btn-get-started scrollto">
                  <span>Know More</span>
                </a> */}
              </div>
              {/* <div className="downlad_guid">
                        <a href="#">
                        <span>Download Microsoft Guide</span>
                        </a>
                     </div> */}
            </div>
            <div className="col-lg-7">
              <div className="row gx-4">
                <div className="col-lg-6">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                      Automated <br />
                      Scheduling
                      </h3>
                      <div className="overlay">
                        <p>Minimize travel time and maximize utilization while responding to delays, cancellations, and urgent work by using the built-in schedule optimization.</p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                      360-degree <br />
                      View 
                      </h3>
                      <div className="overlay">
                        <p>Enhance customer service with <b>Dynamics 365's</b> combined capabilities in <Link href="/products/dynamics-365-supply-chain-management/"><a>Supply Chain Management</a></Link> and <b>Field Service</b>.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 top-m">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                      Resources <br />
                      Optimization 
                      </h3>
                      <div className="overlay">
                        <p>Help service managers assess chances to improve first-time-fix rates by using the rich insights dashboards.</p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                      Remote
                        <br /> Collaboration 
                      </h3>
                      <div className="overlay">
                        <p>With <b>Dynamics 365 Remote Assist</b>, you can conduct remote inspections and real-time consultations with professionals to find solutions to issues more quickly.</p>
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
                    src="/img/Fieldserviceside banner2.png"
                    className="fix-im"
                    alt="Dynamics 365 Field Service"
                    width={557}
                    height={543}
                  />
                  <div className="video-ytube video-ytubes">
                    <div className="popup-btn popup-btns">
                      <a
                        href="#javascript:void(0)"
                        onClick={() => setOpen(true)}
                      >
                        <Image
                          src="/img/Video-Field-Service.png"
                          alt="Fieldservideo"
                          width={390}
                          height={259}
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
                <h2>Dynamics 365 Field Service Support and Services</h2>
                <p><b>Dynamics Square</b> delivers unique implementation support and services that exceed your expectations. </p>
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
                  <p>Get more done with less with our in-demand Dynamics 365 Field Service implementation and reduce service calls.</p>
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
                  <p>We offer unique Dynamics 365 upgrade and customization services that help you achieve continuous growth and drive business continuity.</p>
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
                  <p>Our connected field service support solutions help you turn your field service into a profit center and accelerate your business quickly.</p>
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
            <div className="col-lg-8">
            <header className="section-header">
            <h2>Dynamics 365 Field Service Pricing</h2>
            <p>Provide superior field services and deliver top-notch customer experience with an affordable Dynamics 365 Field Service pricing model.</p>
          </header>
            </div>
          </div>
          <div className="row gy-4 p-9 justify-content-center">
            <div className="col-lg-6 col-md-6">
              <div className="box box-22">
                <h3>
                Dynamics 365 Field Service
                </h3>
                <div className="price">
                $95<span>Per-User/Month</span>
                </div>
                <ul>
                  <li className="text-center">
                  Get the job done right the first time.
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
                <h3>Maximize your business potentialsGet Started with Dynamics 365 Field Service</h3>
                <p>Dispatch the right solution to the right place at the right time.</p>
                <div className="text-center m-o-t new-btn-nn">
                  <a
                    data-bs-toggle="modal"
                    href="#exampleModal"
                    className="btn-get-started scrollto"
                  >
                    <span>Get Started Now</span>
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
            <div className="col-lg-8">
            <header className="section-header">
            <h2>Have You Got Questions About  Dynamics 365 Field Service?</h2>
            <p>Scroll down through tailored FAQs for you!</p>
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
                      What is included in all Dynamics 365 applications? 
                    </button>
                  </h3>
                  <div
                    id="faq-content-1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                     <p>Dynamics 365 suite of business apps is a pack of <Link href="/products/microsoft-dynamics-erp/"><a>powerful ERP (Enterprise Resource Planning)</a></Link>, <Link href="/products/microsoft-dynamics-crm/"><a>CRM (Customer Relationship Management)</a></Link>, and data visualization tools like <Link href="/products/microsoft-power-bi/"><a>Power BI (Business Intelligence)</a></Link>.</p>
                     <p>Like SAP (System Analysis Program), Microsoft has been investing in advanced technologies like AI/ML, IoT, AR/VR, MR (Mixed Reality), and other intelligent technologies. The goal is to provide users with robust data security, 99% or above uptime SLAs (Service level agreements), and all-time phone/web support. You can <Link href="/contact-us/"><a>contact Dynamics Square for a free demo</a></Link> or discuss your requirements with our Microsoft consultants.</p>
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
                    >What is the procedure to install Dynamics 365 Field Service?</button>
                  </h3>
                  <div
                    id="faq-content-2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                     <p>Installing Dynamics 365 Field Service is like putting peanut butter on a piece of your favorite bread or, say installing peanut butter on your favorite bread. You can install Dynamics 365 apps for desktop, mobile, or even your new-gen tab devices. The installation will take about 30 minutes.</p>
                     <p>Here is the sequence of steps to quickly install Dynamics 365 Field Service:</p>
                     <p><b>Step-1</b> Google/Bing Dynamics 365</p>
                     <p><b>Step-2</b> Go to your Microsoft 365 'Admin Center '</p>
                     <p><b>Step-3</b> Select 'Billing'</p>
                     <p><b>Step-4</b> Click on 'Purchase Services'</p>
                     <p><b>Step-5</b> Select 'Dynamics 365 Field Service'</p>
                     <p><b>Step-6</b> Click on 'buy your plan'</p>
                     <p>When your installation process is completed, all apps will appear on your screen - 'Field Service' and 'Field Service Mobile.' You will be prompted for further instructions via your registered email. In case you find yourself in doubt, let Dynamics Square consultants know. <Link href="/contact-us/"><a>Click here</a></Link> to contact us.</p>
                     <p>Finally, begin configuring/setting up your apps for your frontline employees, and enable and help them to create schedules, access, and complete work requests proactively when they are in the field.</p>
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
                    >
                     Is Dynamics 365 Field Service available on-premises?
                    </button>
                  </h3>
                  <div
                    id="faq-content-3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                     <p>Yes! Microsoft offers Dynamics 365 Field Service for on-premises installations too. Not on on-premises, you can use cloud services for your specific data-driven needs like data-security concerns, or exchange reports at speed.</p>
                     <p>Contact Dynamics Square to help you configure Microsoft Dynamics 365 Field Service to automate your field service processes. Our Dynamics 365 Consultants can successfully implement Dynamics 365 Field Service at your existing on-premises systems or guide you if it is required to upgrade your hardware as well.</p>
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
                     What features of Microsoft Dynamics 365 Field Service are crucial to activate? 
                    </button>
                  </h3>
                  <div
                    id="faq-content-4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>Microsoft Dynamics 365 Field Service is a cloud solution to manage all your end-to-end field services, saving you and your frontline employees time, cost, and effort. Implementing Dynamics 365 Field Service is like empowering your field executives to work collaboratively while leveraging onsite experience to help customers resolve issues timely.</p>
                      <p>Here are the crucial features of Dynamics 365 Field Service:</p>
                      <p><b>Dispatching the right help</b>: Create and manage work orders seamlessly at customers' locations and dispatch the right tools and technologies at the right time.</p>
                      <p><b>Improving real-time Collaboration:</b> Enhanced ways of establishing communication are the key to improved collaboration among customer service agents, field technicians, dispatchers, customers, and everyone involved. Infused with the latest technology, Dynamics 365 Field Service helps you manage, schedule, and change field service-related tasks in real-time while fostering strong collaboration among different teams.</p>
                      <p><b>Stock Level Management:</b> Dynamics 365 Field Service is designed and developed to help you manage your stock levels, purchase order fulfillment, task history, product returns, and more. You can also automate generating customer invoices and tracking resources in real-time using embedded IoT solutions.</p>
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
                    >How can Dynamics 365 Field Service mobile app be a gamechanger for SMBs (Small and Midsize Business) and large enterprises?</button>
                  </h3>
                  <div
                    id="faq-content-5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                     <p>Today, most of the stuff you need is available at your fingertips using a mobile app. A mobile app in ways empowers people by allowing them to be more productive by reducing time and effort. Microsoft Field Service mobile app is a great tool to let your team ensure smart scheduling resource optimization by accessing data and insights using mobile devices like Smartphones, Tablets, and other personal internet-accessible devices.</p>
                     <p>Here are the primary capabilities of the Dynamics 365 Field Service mobile app:</p>
                     <ul>
                      <li>Help you foster effective communication and collaboration among employees and customers.</li>
                      <li>Provides highly connected experiences to better engage and deliver improved customer experiences.</li>
                      <li>Assists you in working smarter, from requirement fulfillment to resource scheduling and optimization.</li>
                      <li>You can seamlessly manage the history of your assets, preventive maintenance, inventory, billing, and invoices, along with performing accurate analytics & reporting.</li>
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
                      data-bs-target="#faq-content-6"
                    >What is new in Dynamics 365 Feild Service?</button>
                  </h3>
                  <div
                    id="faq-content-6"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                     <p>You can deliver exceptionally unique customer experiences with new features in Dynamics 365 Field Service:</p>
                     <p><b>Moving to a more proactive field service:</b> Modernizing field service with more connected built-in tools designed and developed to drive customer satisfaction and frontline employee productivity to new heights.</p>
                     <p><b>Deliver customer-oriented experiences:</b> Allow customers to easily schedule service, monitor their progress requests, and accelerate problem resolution.</p>
                     <p><b>Shifting from preventive to predictive maintenance:</b> Transform your services by delivering proactive solutions with IoT tools that are designed for proactive, outcome-based solutions.</p>
                     <p><b>Built-in intelligence to optimize resources:</b> Optimize your resource scheduling with built-in intelligence to enhance customer satisfaction and streamline all field service operations.</p>
                     <p><b>Automate the assigning of the right technician to the right request:</b> Reduce downtime and optimize service quality using connective intelligence to align work requests, resources, and customer preferences.</p>
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
                    >What is the Dynamics 365 Field Service implementation cost?</button>
                  </h3>
                  <div
                    id="faq-content-7"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                     <p>There is no straight answer to describe the Dynamics 365 Field Service implementation cost since it involves varied factors influencing the cost and methods of reducing costs.</p>
                     <p>Field Service is a cloud-based AI-powered field service productivity module under the Dynamics 365 suite of business apps.</p>
                     <p>Here is its pricing to resolve service issues the first time, every time: $ 95 per user/month</p>
                     <p>CTA: <b>Implement Now!</b></p>
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

export default FieldService;
