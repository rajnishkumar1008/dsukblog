import React, { useState } from "react";
import Head from 'next/head'
import ModalVideo from "react-modal-video";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination } from "swiper";
import Link from "next/link";
const MicrosoftCloudForNonprofit = () => {
  const [isOpen, setOpen] = useState(false);
  const [open, setsOpen] = useState(false);
  return (
    <>
      <Head>
        <title>Microsoft Cloud for Nonprofits: A Fundraising Tool in Canada</title>
        <meta
          name="description"
          content="Microsoft Cloud for Nonprofits is the ultimate tool to quickly provide help by reimagining team efforts across your nonprofit organization. Contact us for more."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.ca/industries/microsoft-cloud-for-nonprofit/"
        />
     <meta name="robots" content="index,follow" />
        
      </Head>
    <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="k9ZCzwj4FV8&t=2s"
        onClose={() => setOpen(false)}
      />
      <main>
        <section className="Solution-banner hero-1 hero">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mobile-1 align-self-center">
                <h1>
                  Microsoft Cloud
                  <br />
                  For NonProfit
                </h1>
                <p>Enable Microsoft's vibrant cloud technology for a shared belief and altruistic ideal, & help your <b>nonprofit hub</b> run on tight budgets, eliminate data silos, and <b>work with other not for profit (NFP) partners</b> to drive constituent management, fundraising, awards, program delivery, and impact tracking.</p>
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
              <div className="col-lg-6 align-self-center">
                <img
                  src="/img/Not-For-Profit-banner.png"
                  alt="Not-For-Profit-banner"
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
              <h2>Enable Accurate, Consistent, Rapid Yet Detailed, & Efficient Recording of Observations</h2>
              <p>Dedicated to helping nonprofits and their partners, <b>Microsoft cloud for nonprofits</b> provides solutions that help you successfully centralize your data, people, and processes to impact millions of lives. Successfully drive higher social impact and industry-standard definitions of constituent management, fundraising, awards, program delivery, and impact tracking data by integrating Dynamics 365 nonprofit accelerator or better known as Dynamics <b>365 NFP accelerator</b> to <b>Dynamics 365 Business Apps</b> like <Link href="/products/dynamics-365-business-central/"><a>Business Central</a></Link>, <Link href="/products/microsoft-power-apps/"><a>Power Apps</a></Link>, and <Link href="/products/microsoft-dynamics-365/"><a>Microsoft Dynamics 365</a></Link> using <b>Azure services</b> and Microsoft's cloud security network.</p>
            </header>
            </div>
          </div>
            
          </div>
        </section>
        <section className="Solution-business-why custom-pd-1">
          <div className="container">
            <div className="row gx-5">
              <div className="col-lg-6 align-self-center">
                <h2>Why Choose Microsoft Cloud for Nonprofits?</h2>
                <p>To deliver exceptional, unified, and data-driven decisions across your <b>not-for-profit organization</b> and enhance disaster response while guaranteeing faster delivery of life-saving essentials.</p>
              </div>
              <div className="col-lg-6 align-self-center">
                <div className="content-icons-modil-1">
                  <div className="content-inner-moil-1">
                    <div className="icons-left">
                      <div className="ext-bord">
                        <i className="bi bi-check2"></i>
                      </div>
                    </div>
                    <div className="cintent-right">
                      <p>Empower your organization, especially the frontline employees, to effectively manage donors, supporters, and volunteers to drive results.</p>
                    </div>
                  </div>

                  <div className="content-inner-moil-1">
                    <div className="icons-left">
                      <div className="ext-bord">
                        <i className="bi bi-check2"></i>
                      </div>
                    </div>
                    <div className="cintent-right">
                      <p>Maximize the capability of your organization in managing volunteers and ensuring unified fundraising to effectively derive your mission.</p>
                    </div>
                  </div>
                  <div className="content-inner-moil-1">
                    <div className="icons-left">
                      <div className="ext-bord">
                        <i className="bi bi-check2"></i>
                      </div>
                    </div>
                    <div className="cintent-right">
                      <p>Engage proactively with support channels by leveraging built-in analytics tools in Dynamics 365 and provide support to your nonprofit mission.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="call_to_action call_to_action-height">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div className="call_to_action-right over-img">
                  <img src="/img/MaskGroup8.png" alt="image" />
                </div>
              </div>
              <div className="col-lg-7 align-self-center">
                <div className="call_to_action-left">
                  <h3>Get expert advice now!</h3>
                  <p>Looking to simplify your operations, extend your outreach, and manage all stages of high-touch fundraising?</p>
                  <div className="m-o-t m-o-t-inde">
                    <a
                      data-bs-toggle="modal"
                      href="#exampleModal"
                      className="btn-get-started scrollto"
                    >
                      <span>Talk to our Expert</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="industry_service_bottoms">
          <div className="container">
          <div className="row justify-content-center g-5">
            <div className="col-lg-8">
            <header className="section-header">
            <h2>Capabilities of Microsoft Cloud for Nonprofits</h2>
            <p>Implement a Feature-rich Solution Tailored to Boost Your Nonprofit Mission</p>
          </header>
            </div>
          </div>
            <div className="row position-relative">
              <div className="col-lg-6 ">
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img">
                    <img
                      src="/img/icons-nonprofits_Constituent Management.svg"
                      alt="icons-nonprofits_Constituent Management"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Fundraising</h3>
                    <p>Simplify and maximize your fundraising with <b>Microsoft nonprofit accelerator</b> and track all your major fundraising stages to help millions and transform your organization.</p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img">
                    <img
                      src="/img/icons_Personalized Engagement.svg"
                      alt="icons_Personalized Engagement"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Constituent management</h3>
                    <p>Effectively manage constituent profile that details biographical information, communication methods, preferences, relationships, salutations, employment and educational histories, donations, and awards.</p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img">
                    <img
                      src="/img/icons_Constituent Analytics.svg"
                      alt="icons_Constituent Analytics"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Donation management</h3>
                    <p>One-time and recurring gifts, gifts in kind, and grant disbursements are all included in the sample dashboard for seamless donation management.</p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img">
                    <img
                      src="/img/icons-_centralised data.svg"
                      alt="icons-_centralised data"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Awards management</h3>
                    <p>Organize awards received and distributed using an awards management data model and use sample applications for related tasks including dockets, inquiries, requests, awards recommendations, reviews, and budgets.</p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img">
                    <img
                      src="/img/icons-nonprofits_Awards Management.svg"
                      alt="icons-nonprofits_Awards Management"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Program delivery</h3>
                    <p>With the outcome and result model, nonprofits can measure results, communicate impacts, and align beneficiaries and funds to their results.</p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img">
                    <img
                      src="/img/icons-nonprofits_Constituent Management.svg"
                      alt="icons-nonprofits_Constituent Management"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Membership management</h3>
                    <p>Membership Category defines membership levels and Membership entity creates and tracks membership over time, linking Constituents to Membership Categories.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img">
                    <img
                      src="/img/icons-nonprofits_Awards Management.svg"
                      alt="icons-nonprofits_Awards Management"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>IATI processes</h3>
                    <p>Use IATI - a global campaign and Microsoft initiative to ensure aid money gets to its intended recipients with the goal of reducing poverty and improving living standards worldwide.</p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img">
                    <img
                      src="/img/icons-nonprofits_Constituent Management.svg"
                      alt="icons-nonprofits_Constituent Management"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Finance and CRM data integrator</h3>
                    <p>Use tailored templates for connecting NFP accelerator constituents, donations, awards, and programs to finance and operations.</p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img">
                    <img
                      src="/img/icons-nonprofits_program delivery.svg"
                      alt="icons-nonprofits_program delivery"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Case management</h3>
                    <p>Ensures that partners can track clients and tie cases to specific program goals by providing building blocks to their staff.</p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img">
                    <img
                      src="/img/icons-nonprofits_Awards Management.svg"
                      alt="icons-nonprofits_Awards Management"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Project management & program design</h3>
                    <p>Establish a discipline for tracking activities and progress towards a theory of change ensuring that programs are delivered in line with indicators, goals, budgets, and results.</p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img">
                    <img
                      src="/img/icons-nonprofits_Constituent Management.svg"
                      alt="icons-nonprofits_Constituent Management"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Assessment management</h3>
                    <p>Record detailed observations accurately, consistently, rapidly, and efficiently to deliver nimble services.</p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img">
                    <img
                      src="/img/icons-nonprofits_program delivery.svg"
                      alt="icons-nonprofits_program delivery"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Not-for-profit operations toolkit</h3>
                    <p>Through an application that allows workers to enter their time and expenses, approve their submissions, and track costs, small nonprofits can centrally manage their award budgets.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="call-to-action-center hero-4">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <div className="call-to-action-content">
                  <h3>Implement effective and highly productive strategies across your organization with Dynamics Square Experts.</h3>
                  <div className="text-center m-o-t m-o-t-hv">
                    <a
                      data-bs-toggle="modal"
                      href="#exampleModal"
                      className="btn-get-started scrollto"
                    >
                      <span>Connect with an Expert today!</span>
                    </a>
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
                      src="/img/non-profit side.png"
                      className="fix-im"
                      alt="non-profit side"
                    />
                    <div className="video-ytube video-ytubes">
                      <div className="popup-btn popup-btns">
                        <a
                          href="#javascript:void(0)"
                          onClick={() => setOpen(true)}
                        >
                          <img
                            src="/img/Video-Non Profit.png"
                            alt="Video-Non Profit"
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
              <div className="col-lg-6 d-flex align-items-center">
                <div className="side-heading">
                  <h2>Get Started with Microsoft Cloud for Nonprofits and ensure sure help to affected!</h2>
                  <p>Incorporate integrated solution that helps your organization quickly raise funds, market insights, proactively curate content, and automate engagement journeys.</p>
                  <div className="text-lg-start mm-t">
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
        {/* <section id="pricing" className="pricing">
          <div className="container">
            <header className="section-header">
              <h2>Microsoft Cloud for Nonprofits</h2>
              <p>Discover the affordable and sizable Microsoft 365 Cloud Nonprofit pricing.</p>
            </header>
            <div className="row gy-4 p-9">
              <div className="col-lg-3">
                <div className="box box-22 box-11">
                  <h3>Basic</h3>
                  <div className="price">
                    <sup>£</sup>0<span>Per Month</span>
                  </div>
                  <ul>
                    <li>
                      <strong>Available To Nonprofits Of All Sizes</strong>
                    </li>
                    <li> Prerequisite licensing costs only</li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3">
                <div className="box box-22 box-11">
                  <h3>Standard</h3>
                  <div className="price">
                    <sup>$</sup>---<span>Per Month</span>
                  </div>
                  <ul>
                    <li>
                      <strong>
                        Plan 1 For Nonprofits
                        <br /> 1-250 Employees
                      </strong>
                    </li>
                    <li>Prerequisite licensing costs +</li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3">
                <div className="box box-22 box-11">
                  <h3>Standard</h3>
                  <div className="price">
                    <sup>$</sup>---<span>Per Month</span>
                  </div>
                  <ul>
                    <li>
                      <strong>
                        Plan 2 For Nonprofits And IGOs <br />
                        250+ Employees
                      </strong>
                    </li>
                    <li>Prerequisite licensing costs +</li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3">
                <div className="box box-22 box-11">
                  <h3>Azure Services</h3>
            
                  <ul>
                    <li className="textdd">
                      <strong>As Metered</strong>
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
        </section> */}

        <section className="industry-more-sec">
          <div className="container">
            <header className="section-header">
              <h2>Explore Other Industries</h2>
            </header>
            <div className="row mobile-margin-01">
              <div className="col-lg-12">
                <div className="swiper mySwiper">
                  <div className="swiper-wrapper">
                    <Swiper
                      autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                      breakpoints={{
                        640: {
                          slidesPerView: 1,
                          spaceBetween: 20,
                        },
                        768: {
                          slidesPerView: 1,
                          spaceBetween: 40,
                        },
                        1024: {
                          slidesPerView: 2,
                          spaceBetween: 10,
                        },
                        1300: {
                          slidesPerView: 3,
                          spaceBetween: 10,
                        },
                        1400: {
                          slidesPerView: 3,
                          spaceBetween: 10,
                        },
                      }}
                      freeMode={true}
                      pagination={{
                        clickable: true,
                      }}
                      modules={[Autoplay, FreeMode, Pagination]}
                      className="mySwiper"
                    >
                      <SwiperSlide>
                        <div className="swiper-slide">
                          <div className="industries-list-more">
                            <a href="/industries//food-and-beverages/">
                              <div className="img-wrp">
                                <img
                                  src="/img/Food-and-beverage.svg"
                                  alt="Food-and-beverage"
                                />
                              </div>
                              <div className="text-wrp-content">
                                <h3>Food & Beverages</h3>
                                <p>
                                Enable a smart supply chain that reacts automatically to help you drive accelerated growth with <Link href="/products/dynamics-365-supply-chain-management/"><a>Dynamics 365 Supply Chain Management</a></Link> for your food, beverages, and processing business.
                                </p>
                                <span>Explore Now</span>
                              </div>
                            </a>
                          </div>
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className="swiper-slide">
                          <div className="swiper-slide">
                            <div className="industries-list-more">
                              <a href="/industries/ecommerce/">
                                <div className="img-wrp">
                                  <img
                                    src="/img/Ecommerce.svg"
                                    alt="Ecommerce"
                                  />
                                </div>
                                <div className="text-wrp-content">
                                  <h3>E-Commerce</h3>
                                  <p>Bring your back office, in-store, call center, & eCommerce to a single platform & deliver customer-centric buying experiences at scale with <Link href="/products/microsoft-dynamics-365-commerce/"><a>Dynamics 365 Commerce</a></Link>.</p>
                                  <span>Explore Now</span>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="swiper-slide">
                          <div className="swiper-slide">
                            <div className="industries-list-more">
                              <a href="/industries/professional-services/">
                                <div className="img-wrp">
                                  <img
                                    src="/img/proffesional-service.svg"
                                    alt="proffesional-service"
                                  />
                                </div>
                                <div className="text-wrp-content">
                                  <h3>Professional Services</h3>
                                  <p>Keep data, people, and processes on a unified platform to deliver world-class professional services experience & transparency with <Link href="/industries/professional-services/"><a>Dynamics 365 for professional services</a></Link>.</p>
                                  <span>Explore Now</span>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="swiper-slide">
                          <div className="swiper-slide">
                            <div className="industries-list-more">
                              <a href="/industries/microsoft-cloud-for-manufacturing/">
                                <div className="img-wrp">
                                  <img
                                    src="/img/microsoft-cloud-for-manufacturing.svg"
                                    alt="microsoft-cloud-for-manufacturing"
                                  />
                                </div>
                                <div className="text-wrp-content">
                                  <h3>Manufacturing & Distribution</h3>
                                  <p>Drive innovation, optimize manufacturing processes, and make relationships strong by building your manufacturing more resilient and sustainable with <Link href="/industries/microsoft-cloud-for-manufacturing/"><a>Microsoft Cloud for Manufacturing</a></Link>.</p>
                                  <span>Explore Now</span>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="swiper-slide">
                          <div className="swiper-slide">
                            <div className="industries-list-more">
                              <a href="/industries/startups/">
                                <div className="img-wrp">
                                  <img
                                    src="/img/start-up.svg"
                                    alt="start-up"
                                  />
                                </div>
                                <div className="text-wrp-content">
                                  <h3>Startups</h3>
                                  <p>Improve your startup's management by leveraging maximum resources. Implement Microsoft's innovative solutions and start building at your pace with <Link href="/industries/startups/"><a>Microsoft Dynamics 365 for Startups</a></Link>.</p>
                                  <span>Explore Now</span>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                  <div className="swiper-pagination"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default MicrosoftCloudForNonprofit;
