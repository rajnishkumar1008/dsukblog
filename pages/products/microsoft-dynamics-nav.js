import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import ModalVideo from "react-modal-video";
const MicrosoftDynamicsNAV = () => {
  const [isOpen, setOpen] = useState(false);
  const [open, setsOpen] = useState(false);
  return (
    <>
      <Head>
        <title>Microsoft Dynamics NAV: An On-premises ERP Module</title>
        <link
          rel="canonical"
          href="https://www.dynamicssquare.ca/products/microsoft-dynamics-nav/"
        />
        <meta
          name="description"
          content="Microsoft Dynamics NAV is an older version of Dynamics 365 Business Central that seamlessly offers process automation features. Contact Dynamics Square."
        />
        <meta name="robots" content="index,follow" />
      </Head>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="4sdOb8PUE-o"
        onClose={() => setOpen(false)}
      />
      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1 align-self-center">
              <h1>
                Microsoft
                <br />
                Dynamics NAV
              </h1>
              <p>With Dynamics NAV, you get an industry-ready, highly customizable all-in-one ERP solution that caters to small and mid-market-sized businesses. Provide personalized experiences, automate workflows, and manage multidimensional finances with ease.</p>
              <div>
                <div className="text-center text-lg-start">
                  <Link href="#exampleModal">
                    <a
                      data-bs-toggle="modal"
                      className="btn-get-started scrollto"
                    >
                      <span>Get Started Today!</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <Image src="/img/nav-banner.png" alt="Microsoft Dynamics NAV" width={1024} height={576} />
            </div>
          </div>
        </div>
      </section>
      <section className="busine_service_bottom custom001">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 align-self-center">
              <div className="side-heading">
                <h2>
                  What Is Microsoft <br /> Dynamics NAV?
                </h2>
              </div>
              <div className="custom002">
                <p>Navision or Dynamics NAV (now <b>Dynamics 365 Business Central</b>) is a unique business management software package that seamlessly streamlines and optimizes your core business processes. Dynamics NAV is among the top Microsoft ERP (Enterprise Resource Planning) solutions that offer a 360-degree view of your business activities and provide you with functionalities built for connecting all your departments, such as finance, accounting, operations, sales, inventory, warehousing, supply chain, customer services, and other business-related areas.</p>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="busine_service_bottom-left">
                <div className="busine_service_bottom-right">
                  <Image
                    src="/img/NAV-implementation.jpg"
                    className="fix-im"
                    alt="d605-left"
                    width={1000} height={563}
                  />
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
                <h3>Think smart and take the right path for growth & success.</h3>
                <p>Get an ERP solution that fits all industries and quickly adapts to business processes regardless of the size or needs of the organization.</p>
                <div className="text-center m-o-t new-btn-nn">
                  <Link href="#exampleModal">
                    <a
                      data-bs-toggle="modal"
                      className="btn-get-started scrollto"
                    >
                      <span>Get Started with Dynamics NAV now!</span>
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
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <header className="section-header">
                <h2>Business Advantages of Deploying Dynamics NAV</h2>
                <p>Microsoft Dynamics NAV is a highly integrated, extendable cloud solution that offers endless possibilities and creates doors for new business opportunities. Explore the benefits of <b>implementing NAV in the Microsoft cloud</b>, or on-premises, i.e., on your private servers, or choose the hybrid (cloud + private servers) deployment option with the help of a Microsoft certified Cloud Solution Provider (CSP) Partner - <b>Dynamics Square</b>.</p>
              </header>
            </div>
          </div>
          <div className="row p-lg-6">
            <div className="col-lg-6">
              <div className="finace-acc">
                <div className="accordion" id="accnewas">
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
                        <span>Easy Deployments Options</span>
                      </button>
                    </h3>
                    <div
                      id="fin1"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accnewas"
                    >
                      <div className="accordion-body">
                        <p>Choose a desired and business-centric option to deploy Dynamics NAV. Usually, Dynamics NAV is for on-premises, but with our expertise in implementing cloud ERP solutions, you can get NAV's successor - Dynamics 365 Business Central: a highly advanced business management solution. Also, you can go for NAV's hybrid deployment that combines the capabilities of private servers and the cloud.</p>
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
                        <span>Integrate and Extend</span>
                      </button>
                    </h3>
                    <div
                      id="fin2"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accnewas"
                    >
                      <div className="accordion-body">
                        <p>Software integration is crucial to enhance the power of parent software. Bring all your sub-systems on a unified single system's user interface by integrating payroll, CRM, the Power Platform, and other Microsoft and non-Microsoft information systems to Dynamics NAV. Let different systems communicate with each other to exchange data via suitable integration to enhance the performance of your business ops and increase employee productivity.</p>
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
                        data-bs-target="#fin3"
                        aria-expanded="false"
                        aria-controls="fin3"
                      >
                        <span>Workflow Automation</span>
                      </button>
                    </h3>
                    <div
                      id="fin3"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accnewas"
                    >
                      <div className="accordion-body">
                        <p>Reduce the workload of your teams by automating repetitive and manual tasks. Create rules, build logic, and automate actions using NAV-based legal requirements such as <b>MTD compliance by the UK Govt</b>, industry standards, and best practices. Build custom workflows based on business requirements mapping or <b>contact the team of Microsoft-certified Dynamics 365 consultants</b> for tech or non-tech support. </p>
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
                        data-bs-target="#fin11"
                        aria-expanded="false"
                        aria-controls="fin11"
                      >
                        <span>Multi-Domain Finances</span>
                      </button>
                    </h3>
                    <div
                      id="fin11"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accnews"
                    >
                      <div className="accordion-body">
                        <p>Effortlessly manage multi-domain and multiple labels, or dimensions and tag transactions for highly detailed revenue and allocating expenses. Seamlessly manage different locations, currencies, companies, or legal entities with Dynamics NAV. This ERP software also helps you manage fixed assets and meet legal requirements via numerous depreciation books.</p>
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
                        data-bs-target="#fin12"
                        aria-expanded="false"
                        aria-controls="fin12"
                      >
                        <span>Personalization & Accessibility</span>
                      </button>
                    </h3>
                    <div
                      id="fin12"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accnews"
                    >
                      <div className="accordion-body">
                        <p>We live in an increasingly chaotic world. It becomes difficult to find relevance among numerous problems and their solutions. Business continuity requires constant access to the correct data and personalized solutions.</p>
                        <p>Through NAV's interactive user interface and dashboard, users can easily accomplish their goals with role-tailored limitations and specifications. We can save you a lot of money and help with business continuity by having your employees access real-time data from Windows clients, web clients, SharePoint clients, and embedded <b>Power BI</b> using a tablet, mobile, or PC. </p>
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
                        data-bs-target="#fin13"
                        aria-expanded="false"
                        aria-controls="fin13"
                      >
                        <span>Manufacturing & Production</span>
                      </button>
                    </h3>
                    <div
                      id="fin13"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accnews"
                    >
                      <div className="accordion-body">
                        <p>To meet demands continuously, businesses follow continuation in manufacturing and production. Deploy an intelligent industry-ready solution, Dynamics NAV, and better manage your discrete, process-based, basic, or agile manufacturing. Build a smart manufacturing environment (using Microsoft cloud for manufacturing) that forecasts your business's inputs, outputs, and capacity levels. Effectively manage your projects, fixed-price or time-and-materials jobs with NAV's next-level project management functionality.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="busine_service_bottom custom05">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 align-self-center">
              <div className="busine_service_bottom-left custom012">
                <img
                  src="/img/microosoft-partner.png"
                  alt="microosoft-partner.png"
                />
              </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-6 align-self-center">
              <div className="side-heading-custom-01">
                <h2>Are you looking to upgrade your Dynamics? Is your Dynamics NAV Inefficient? Are you in search of top-notch Dynamics support and services? </h2>
              </div>
              <div className="custom-p-001">
                <p>We understand your concerns. There come times when excellent software becomes obsolete even after so many integrations, upgrades, and support. That's why businesses want us to help them with the desired business solution to maintain business continuity and accelerated growth. </p>  <p>Get in Touch with us and reveal a suitable Dynamics NAV solution for your growing business, such as upgrading your NAV to Dynamics 365 Business Central or upgrading Dynamics NAV to its latest version.</p>
              </div>
              <div>
                <div className="text-center text-lg-start">
                  <a
                    data-bs-toggle="modal"
                    href="#exampleModal"
                    className="btn-get-started scrollto"
                  >
                    <span>Get Started Now!</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="Solution-business-whys">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <header className="section-header">
                <h2>Dynamics NAV Pricing and Licensing</h2>
                <p>Investing in NAV might look costly, but it is worth the effort if you see the quick ROIs and profitability. 550K+ businesses are using Microsoft Dynamics NAV to grow and scale. Explore its pricing and licensing.</p>
              </header>
            </div>
          </div>
          <div className="row g-5">
            <div className="col-lg-6">
              <div className="parten-more parten-more-ss">
                <h3>Dynamics NAV Starter Pack</h3>
                <span>Features</span>
                <p>The starter pack provides access to three users across your organization to manage finances and trade-related functions.</p>
                <p>However, you can also access the basic features of the Supply Chain Management, Sales, and Project operations app without restrictions.</p>
                <p>With this features pack, you can also avail AI-driven actionable insights, create reports, and share them across the organization with a single click.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="parten-more  parten-more-ss">
                <h3>Dynamics NAV Extended Pack</h3>
                <span>Features</span>
                <p>This pack is for your growing organization.</p>
                <p>If you want to accelerate your productivity by efficiently managing complex and cluttery business operations, choose this extended pack that offers you modules (including the Starter Pack functionalities) to manage your manufacturing, warehouses, and more.</p>
                <p>You can also customize it as the need arises.</p>
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
                <h3>Is your Dynamics NAV partner not listening to your calls and problems?</h3>
                <p>Get connected with our highly trained and people-first Microsoft consultants, share your requirements, and get help right away.</p>
                <div className="text-center m-o-t new-btn-nn">
                  <Link href="#exampleModal">
                    <a
                      data-bs-toggle="modal"
                      className="btn-get-started scrollto"
                    >
                      <span>Book a Free Call Now!</span>
                    </a>
                  </Link>
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
                    src="/img/Microsoft-Dynamics-NAV-sede-pic.png"
                    className="fix-im"
                    alt="Dynamics 365 Finance Service"
                    width={520} height={513}
                  />
                  {/* <img
                    src="/img/ico6.svg"
                    className="flot-img"
                    alt="ico6"
                  /> */}
                  <div className="video-ytube video-ytubes">
                    <div className="popup-btn popup-btns">
                      <Link href="#javascript:void(0)">
                        <a onClick={() => setOpen(true)}>
                          <Image
                            src="/img/Microsoft-Dynamics-NAV_video.png"
                            alt="Microsoft-Dynamics-NAV_video"
                            width={390} height={259}
                          />
                          <span className="cente-icns">
                            <img src="/img/play_icons.svg" alt="play_icons" />
                          </span>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="side-heading">
                <h2>Microsoft Dynamics NAV Partners Canada</h2>
                <p>We are Canada's trustworthy and leading Dynamics NAV implementation, upgrade, and support partner. Our goal is to offer you cost-efficient, highly integrated cloud ERP and CRM solutions.</p>
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
                  <p>Deploy value-generating enterprise practices by leveraging the intelligence of Dynamics NAV.</p>
                  <div className="action-content">
                    <Link href="#exampleModal">
                      <a data-bs-toggle="modal">Get Started</a>
                    </Link>
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
                  <p>Migrate your data & business processes to a modern ERP solution or upgrade your legacy/old Dynamics versions to their latest versions.</p>
                  <div className="action-content">
                    <Link href="/dynamics-nav-to-business-central/">
                      <a>Get Started</a>
                    </Link>
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
                  <p>Drive business continuity with our 24/7/365 Dynamics support services and ensure smoother workflows throughout the year.</p>
                  <div className="action-content">
                    <Link href="#exampleModal">
                      <a data-bs-toggle="modal">Get Started</a>
                    </Link>
                  </div>
                </div>
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
              questions about Dynamics NAV?
            </h2>
            <p>Click through FAQs Tailored for You!</p>
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
                    >What is the difference between Microsoft Dynamics NAV and Navision?</button>
                  </h3>
                  <div
                    id="faq-content-1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>Did you mean, are Dynamics NAV and Navision the same? The answer is Yes. Microsoft Dynamics NAV is Navision. Microsoft renamed Dynamics Navision to Microsoft Dynamics NAV, and then again in 2018, Microsoft renamed it to Dynamics 365 Business Central - a cloud ERP app for efficient business management. Business Central is an evolved version of Dynamics NAV and comes with highly advanced features to bring agility to your business operations.</p>
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
                    >What is the cost of Microsoft NAV?</button>
                  </h3>
                  <div
                    id="faq-content-2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>For monthly subscription plans, you can get fixed prices but for an app like Dynamics NAV, no Dynamics 365 partner can be sure about its costs since it depends on business processes and the complexity of operations and customization. The cost also depends on factors, including company size, industry type, number of users, and storage requirements. Final prices are determined by the choice of your package (Starter or Extended) and the integrations.</p>
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
                    >Is it mandatory to migrate my operations on NAV to Business Central?</button>
                  </h3>
                  <div
                    id="faq-content-3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>This question cannot be answered definitively. Business Central is the best solution for current and predictive processes. With easy scalability and a simple user interface, BC helps businesses grow rapidly. While the functionality and accessibility of NAV are limited to business management. Business Central is more than ERP, it is a complete business management solution.</p>
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

export default MicrosoftDynamicsNAV;
