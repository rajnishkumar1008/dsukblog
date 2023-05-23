import React, { useState } from "react";
import Head from 'next/head'
import ModalVideo from "react-modal-video";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination } from "swiper";
import Link from "next/link";
const Startup = () => {
  const [isOpen, setOpen] = useState(false);
  // const [open, setsOpen] = useState(false);
  return (
    <>
      <Head>
      <meta charSet="utf-8" />
        <title>Dynamics 365 for Food & Beverages Industry: Invent Future</title>
        <meta
          name="description"
          content="Microsoft Dynamics 365 is a suite of intelligent business apps to modernize the food, beverages, and processing industry. Get in touch with Dynamics Square."
        />
        <meta name="robots" content="index,follow" />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.ca/industries/food-and-beverages/"
        />
      </Head>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="blXvCkDi1NI"
        onClose={() => setOpen(false)}
      />
       <main>
        <section className="Solution-banner hero-1 hero">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mobile-1 align-self-center">
                <h1>Microsoft Dynamics 365 for Food & Beverage Industry</h1>
                <p>Connect your data sources, people, and distribution system to an integrated platform and build an <b>intelligent supply chain</b> that auto-reacts to challenges and fosters business continuity.</p>
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
                  src="/img/food-and-beverages-banner.png"
                  alt="Dynamics 365 For Food & Beverages"
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
              <h2>Why Choose Microsoft Dynamics 365 for Food and Beverage operations?</h2>
              <p>Dynamics 365 is Microsoft's brilliant innovation for food beverage, and process manufacturers. Microsoft has every cloud solution that you need, or your business might need in the future to help you build a resilient and sustainable food and beverage supply chain. From <Link href="/products/dynamics-365-supply-chain-management/"><a>Dynamics 365 Supply Chain</a></Link> for large groups to <Link href="/products/dynamics-365-business-central/"><a>Dynamics 365 Business Central</a></Link> for mid-market-sized businesses like FMCGs, you have everything in the <Link href="/products/microsoft-dynamics-365/"><a>Microsoft Dynamics 365 store</a></Link>  - a suite of intelligent business management apps for your growing business. Harness its power by integrating Power BI, Power Apps, and Power Platform on Azure to drive higher outcomes for your investments.</p>
              <div className="text-center">
                  <a
                    data-bs-toggle="modal"
                    href="#exampleModal"
                    className="btn-get-started scrollto"
                  >
                    <span>Request a Demo</span>
                  </a>
                </div>
            </header>
              </div>
            </div>
          </div>
        </section>
        <section className="Solution-business-why custom-pd-1">
          <div className="container">
            <div className="row gx-5">
              <div className="col-lg-6 align-self-center">
                <h2>Bring Smoothness to your operational flows with Dynamics 365</h2>
                <p>Fuel innovation, boost employee productivity, and attract real-time opportunities to run your business the way you want.</p>
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
                      <p>Effectively manage your <b>warehousing, finance, accounting,</b> and <b>supply chain</b> with <b>Dynamics 365 Business Central</b> or <b>Dynamics 365 Supply Chain</b> if you are growing big.</p>
                    </div>
                  </div>

                  <div className="content-inner-moil-1">
                    <div className="icons-left">
                      <div className="ext-bord">
                        <i className="bi bi-check2"></i>
                      </div>
                    </div>
                    <div className="cintent-right">
                      <p>Leverage <b>Microsoft Dynamics 365</b> in the food processing and dairy industry to provide enhanced customer experience based on AI-driven insights.</p>
                    </div>
                  </div>

                  <div className="content-inner-moil-1">
                    <div className="icons-left">
                      <div className="ext-bord">
                        <i className="bi bi-check2"></i>
                      </div>
                    </div>
                    <div className="cintent-right">
                      <p>Attain visibility into your supply chain and boost margins with a single integrated platform like <b>Dynamics 365 for Supply Chain Management</b>.</p>
                    </div>
                  </div>
                  <div className="content-inner-moil-1">
                    <div className="icons-left">
                      <div className="ext-bord">
                        <i className="bi bi-check2"></i>
                      </div>
                    </div>
                    <div className="cintent-right">
                      <p>Use Microsoft 365/Office 365 products such as Teams, Exchange, SharePoint, <Link href="/products/microsoft-power-bi/"><a>Power BI</a></Link>, and Office integrated with <b>Dynamics 365</b> to foster strong collaboration among employees.</p>
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
                  <h3>Want technology experts at your service?</h3>
                  <p><Link href="/contact-us/"><a>Connect with us</a></Link> and share your business requirements to grow your profitability on a scale with our <b>Dynamics 365 solutions</b>.</p>
                  <div className="m-o-t m-o-t-inde">
                    <a
                      data-bs-toggle="modal"
                      href="#exampleModal"
                      className="btn-get-started scrollto"
                    >
                      <span>Meet Our Microsoft Experts</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="industry_service_bottoms">
          <div className="container">
          <div className="row justify-content-center">
              <div className="col-lg-9 col-md-9">
              <header className="section-header">
              <h2>See how you can ripe fruits for your business with Microsoft Dynamics 365 solutions</h2>
            </header>
              </div>
            </div>
            <div className="row position-relative g-4">
              <div className="col-lg-6">
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/Distribution-Delivery.svg"
                      alt="Distribution-Delivery"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Intelligent Warehousing</h3>
                    <p>Produce and procure with Azure ML, automate preventive and corrective maintenance, using embedded Microsoft techs like <b>Power Apps, Azure Data Warehouse,</b> and <b>Azure AI&ML</b>.</p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/Asset-Management.svg"
                      alt="Asset-Management"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Smart Marketing</h3>
                    <p>Empower your marketing team by skilling them with the latest marketing tools, like <Link href="/products/microsoft-dynamics-365-marketing/"><a>Dynamics 365 Marketing</a></Link>, and customer insights to drive product marketing strategies/campaigns.</p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/Customer-Management.svg"
                      alt="Customer-Management"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Accelerated Sales</h3>
                    <p>Employ Power BI-embedded integrated sales automation tools like Microsoft <Link href="/products/microsoft-dynamics-365-sales/"><a>Dynamics 365 Sales</a></Link> to drive accelerated.</p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/Production-Mnagement.svg"
                      alt="Production-Mnagement"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Customer Engagement</h3>
                    <p>Engage more and strengthen your relationships with customers using CRM tools like Customer <Link href="/products/dynamics-365-customer-engagement/"><a>Dynamics 365 Customer Engagement</a></Link> and improve your business to drive higher sales.</p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/predict-opportunity.svg"
                      alt="predict-opportunity"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Manufacturing & Production</h3>
                    <p>Manufacture an intelligent manufacturing environment to produce quality food and beverage goods to fulfill customer satisfaction and demand using <Link href="/industries/microsoft-cloud-for-manufacturing/"><a>Microsoft Cloud for Manufacturing</a></Link>.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
             

                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/Design-and-Training.svg"
                      alt="Design-and-Training"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Supply Chain Management</h3>
                    <p>Take the next step and create an adaptive, resilient supply chain that automatically responds to challenges and helps you with agile planning for business continuity.</p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/Service-Management.svg"
                      alt="Service-Management"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Analytics & Insights</h3>
                    <p>Utilize analytics-driven insights to proactively reduce downtime, enhance inventory accuracy, automating cycle counts to maintain operational excellence and equipment automation.</p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/predict-opportunity.svg"
                      alt="predict-opportunity"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Financial Insights</h3>
                    <p>Have a strategic impact and reduce costs by maximizing financial visibility and profitability with <Link href="/products/microsoft-dynamics-365-finance/"><a>Microsoft Dynamics 365 Finance</a></Link>.</p>
                  </div>
                </div>

                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/icons-ax-_sales-management.svg"
                      alt="Sales-Management"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Quality Control</h3>
                    <p>Enhance the quality of your goods and services to improve your reputation in the market by configuring and customizing <b> Dynamics 365 apps</b> based on your business needs.</p>
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
                  <h3>Take tomorrow's decisions today with Dynamics 365 solutions</h3>
                  <p>Get in touch with our Microsoft products consultants, share your requirements, and find a suitable cloud solution for your food, beverage, and processing business.</p>
                  <div className="text-center m-o-t m-o-t-hv">
                    <a
                      data-bs-toggle="modal"
                      href="#exampleModal"
                      className="btn-get-started scrollto"
                    >
                      <span>Contact Now!</span>
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
              <div className="col-lg-6 align-items-center">
                <div className="busine_service_bottom-left">
                  <div className="busine_service_bottom-right">
                    <img
                      src="/img/food and beverages- side.png"
                      className="fix-im"
                      alt="food and beverages- side"
                    />
                    <div className="video-ytube video-ytubes">
                      <div className="popup-btn popup-btns">
                        <a
                          href="#javascript:void(0)"
                          onClick={() => setOpen(true)}
                        >
                          <img
                            src="/img/Video-Food And beerages.png"
                            alt="Video-Food And beerages"
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
                  <h2>Curious to go beyond the next level of manufacturing and distributing food, beverages, & processed goods?</h2>
                  <p>Uplift the operational capability of your plant and attain a profitable business continuity with <b>Dynamics 365 business apps</b> for the food and beverage industry.</p>
                  <div className="text-lg-start">
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
            </div>
          </div>
        </section>

        <section className="industry-more-sec">
          <div className="container">
          <div className="row justify-content-center">
              <div className="col-lg-9 col-md-9">
              <header className="section-header">
              <h2>Explore Other Industries</h2>
            </header>
              </div>
            </div>
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
                          <div className="swiper-slide">
                            <div className="industries-list-more">
                              <a href="/industries/microsoft-cloud-for-nonprofit/">
                                <div className="img-wrp">
                                  <img
                                    src="/img/NotforProfit.svg"
                                    alt="NotforProfit"
                                  />
                                </div>
                                <div className="text-wrp-content">
                                  <h3>Not for Profit</h3>
                                  <p>Accelerate your fundraising by automating your daily nonprofit mission-related operations, assist the needy and drive efficiency at scale with <Link href="/industries/microsoft-cloud-for-nonprofit/"><a>Dynamics 365 for Non-Profits Hubs</a></Link>.</p>
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
                              <a href="/industries/ecommerce/">
                                <div className="img-wrp">
                                  <img
                                    src="/img/Ecommerce.svg"
                                    alt="Ecommerce"
                                  />
                                </div>
                                <div className="text-wrp-content">
                                  <h3>E-Commerce</h3>
                                  <p>Unite your back office, in-store, call center, and eCommerce experiences to an integrated platform - <Link href="/products/microsoft-dynamics-365-commerce/"><a>Dynamics 365 for Commerce</a></Link> - and deliver a unified buying experience at scale.</p>
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
                                  <p>Exceed the expectations of your customers by bringing data, people, and processes close to your business on a unified business management platform - <Link href="/industries/professional-services/"><a>Dynamics 365 for Professional Services</a></Link>.</p>
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
                                  <p>Build a more resilient and sustainable manufacturing environment by optimizing your manufacturing processes and strengthening customer relationships with <b>Microsoft Cloud for Manufacturing</b>.</p>
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
                                  <p>Turn your growing startup into a brand or company by scaling business operations using Microsoft's numerous productivity and management tools such as Dynamics 365, <Link href="/products/microsoft-power-platform/"><a>Microsoft Power Platform</a></Link>, and <Link href="/products/microsoft-azure/"><a>Microsoft Azure</a></Link>. </p>
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

export default Startup;

