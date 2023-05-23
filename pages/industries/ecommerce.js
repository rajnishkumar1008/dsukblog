import React, { useState } from "react";
import Head from 'next/head'
import ModalVideo from "react-modal-video";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination } from "swiper";
import Link from "next/link";
const Ecommerce = () => {
  const [isOpen, setOpen] = useState(false);
  const [open, setsOpen] = useState(false);
  return (
    <>
      <Head>
        <title>Dynamics 365 Commerce: A Cloud E-Commerce Solution</title>
        <meta
          name="description"
          content="Microsoft Dynamics 365 Commerce-a cloud solution to unify your e-Commerce business processes to quickly market your products. Contact Dynamics Square."
        />
        <meta name="robots" content="index,follow" />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.ca/industries/ecommerce/"
        />
      </Head>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="1gbGf0dXUNE"
        onClose={() => setOpen(false)}
      /> 
      <main>
        <section className="Solution-banner hero-1 hero">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mobile-1 align-self-center">
                <h1>
                  Microsoft Dynamics 365
                  <br />
                  For Ecommerce
                </h1>
                <p>Create an E-Commerce site and give people what they want. Bring data, customers, and <b>E-Commerce business partners</b> to a unified platform and deliver a personalized online shopping experience to drive sales with <Link href="/products/microsoft-dynamics-365-commerce/"><a>Dynamics 365 Commerce</a></Link>.</p>
                <div className="text-center text-lg-start">
                  <a
                    data-bs-toggle="modal"
                    href="#exampleModal"
                    className="btn-get-started scrollto"
                  >
                    <span>Get a Demo</span>
                  </a>
                </div>
              </div>
              <div className="col-lg-6 align-self-center">
                <img
                  src="/img/ecommerce banner.png"
                  alt="Microsoft Dynamics 365 For Ecommerce"
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
              <h2>What is E-Commerce?</h2>
              <p>Today's requirement to sustain your online business or say your e-commerce platform is a secure and scalable e-commerce solution that satisfies your customers and your business. Customize products and offers for customers, process transactions quickly and securely, and focus on delivering personalized customer service. To make it better and more efficient, take the help of an intuitive <b>E-Commerce management platform</b> like <b>Microsoft Dynamics 365 Commerce</b>.</p>
            </header>
              </div>
            </div>
           
          </div>
        </section>
        <section style={{marginTop:'-90px'}}>
          <div className="container">
          <div className="row justify-content-center">
              <div className="col-lg-9 col-md-9">
              <header className="section-header">
              <h2>What is Dynamics 365 Commerce?</h2>
              <p>Microsoft's Dynamics 365 is a unique E-Commerce solution that helps you deliver highly personalized and seamless buying experiences for your customers and business partners. Implement this Microsoft cloud solution and start engaging across all your traditional and emerging channels, build loyalty, exceed customer expectations, and transform your online business into a brand. Microsoft Dynamics 365 Commerce not only helps you modernize your retail store but goes beyond and provides you with AI-driven insights to better streamline your operations.</p>
            </header>
              </div>
            </div>
           
          </div>
        </section>
        <section className="Solution-business-why custom-pd-1">
          <div className="container">
            <div className="row gx-5">
              <div className="col-lg-6 align-self-center">
                <h2>How can I accelerate my E-Commerce business with Dynamics 365 Commerce?</h2>
                <p>By automating data, using solutions with built-in <Link href="/products/microsoft-dynamics-365-ai/"><a>AI (Artificial Intelligence) capabilities</a></Link>, and cloud platforms.</p>
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
                      <p>
                      With the help of Dynamics 365 for eCommerce businesses, enterprises can automate their data, streamline their processes, and enable resource optimization to support process continuation and faster the entire e-commerce flow.
                      </p>
                    </div>
                  </div>

                  <div className="content-inner-moil-1">
                    <div className="icons-left">
                      <div className="ext-bord">
                        <i className="bi bi-check2"></i>
                      </div>
                    </div>
                    <div className="cintent-right">
                      <p>Built-in data automation tool helps you optimize your resources and support your business continuity while making your entire E-Commerce faster.</p>
                    </div>
                  </div>

                  <div className="content-inner-moil-1">
                    <div className="icons-left">
                      <div className="ext-bord">
                        <i className="bi bi-check2"></i>
                      </div>
                    </div>
                    <div className="cintent-right">
                      <p>Using real-time analytics, AI-driven customer insights enable every employee in your organization to make decisions and drive sales by accelerating manufacturing and production.</p>
                    </div>
                  </div>
                  <div className="content-inner-moil-1">
                    <div className="icons-left">
                      <div className="ext-bord">
                        <i className="bi bi-check2"></i>
                      </div>
                    </div>
                    <div className="cintent-right">
                      <p><b>Microsoft Dynamics 365 Commerce</b> is not only an app but a full-fledged eCommerce solution that assists you in managing your stock level, tracking shipping, and faster product delivery along with a hassle-free return and refund process. </p>
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
                  <h3>Want to discuss your requirements with our Dynamics 365 Experts?</h3>
                  <p>Connect, share your problems and ideas, and let our people execute the right solution for you to drive your eCommerce business.</p>
                  <div className="m-o-t m-o-t-inde">
                    <a
                      data-bs-toggle="modal"
                      href="#exampleModal"
                      className="btn-get-started scrollto"
                    >
                      <span>Schedule a Demo Now!</span>
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
              <h2>Microsoft Dynamics 365 Commerce Features</h2>
              <p>Re-imagine the way customers interact with your products, and improve direct sales to increase customer engagement before, after, and at the point of <Link href="/products/microsoft-dynamics-365-sales/"><a>sales with Microsoft Cloud</a></Link>, <Link href="/products/azure-iot-internet-of-things/"><a>Azure</a></Link>, and <Link href="/products/microsoft-power-apps/"><a>Power Apps</a></Link>. </p>
            </header>
              </div>
            </div>
            <div className="row position-relative g-5">
              <div className="col-lg-6">
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/Distribution-Delivery.svg"
                      alt="Distribution-Delivery"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Personalize Shopping Experiences</h3>
                    <p>Get people interested in buying your products and services by analyzing your e-commerce site's web traffic and browse-to-buy conversion rates, and defining offers, and new products on customers' behavior using <Link href="/products/microsoft-azure/"><a>Microsoft Azure</a></Link>.</p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/inventory-management-icon-01.svg"
                      alt="inventory-management-icon-01"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Transact Sales Securely</h3>
                    <p>Increase your transactions by increasing customers. Derive more customers and transactions by creating an easy-to-navigate e-commerce buying experience and deploying it using a more secure and compliant E-Commerce platform like <b>Dynamics 365 Commerce</b>.</p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/connect-collaborate.svg"
                      alt="Customer Management"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Meet Customer Demands</h3>
                    <p>Adapt to the size and seasonality of your business to develop the ability to automatically handle increasing customer demand for your products and services using <b>Microsoft's PaaS (platform as a service)</b> and App services.</p>
                  </div>
                </div>
            
              </div>
              <div className="col-lg-6">
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/Design-and-Training.svg"
                      alt="Supply Chain Management"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Optimize Supply Chain</h3>
                    <p>Save time and money by intelligently streamlining your supply chain, reduce support costs, and increase satisfaction with your sellers and suppliers by incorporating online self-service portals.</p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/Service-Management.svg"
                      alt="Production Management"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Drive Your Sales</h3>
                    <p>Drive more sales by focusing on sales, not managing your IT infrastructure, because sales are the core of your business. Take advantage of Microsoft's pre-built services in the cloud and create an e-commerce solution to enhance your sales and increase profits.</p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/icons-ax-_procurment.svg"
                      alt="Procurement"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Implement Scalable e-commerce</h3>
                    <p>Using Azure services, architect a scalable e-commerce web page that includes simple order processing workflows. Build personalized experiences by introducing Azure Functions and Web Apps and leave IT infrastructure to Azure. </p>
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
                  <h3>Want to Build a simple, agile, and reliable eCommerce experience?</h3>
                  <p>Discuss your requirements with our Microsoft consultants and reveal a game-changing highly relevant e-Commerce solution for your business or idea.</p>
                  <div className="text-center m-o-t m-o-t-hv">
                    <a
                      data-bs-toggle="modal"
                      href="#exampleModal"
                      className="btn-get-started scrollto"
                    >
                      <span>Meet an Expert</span>
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
                      src="/img/Ecommerce side.png"
                      className="fix-im"
                      alt="Ecommerce side"
                    />

                    <div className="video-ytube video-ytubes">
                      <div className="popup-btn popup-btns">
                        <a
                          href="#javascript:void(0)"
                          onClick={() => setOpen(true)}
                        >
                          <img
                            src="/img/video-Ecommerce.png"
                            alt="video-Ecommerce"
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
                  <h2>Get the more unified retail commerce solution for you!</h2>
                  <ul>
                    <li>Derive Omnichannel Engagement</li>
                    <li>Deliver Rich Personalization</li>
                    <li>Earn Customer Loyalty for life</li>
                    <li>Make your digital commerce more streamlined</li>
                    <li>Build AI-driven intelligent commerce</li>
                    <li>Maximize Customer Conversions</li>
                    <li>Meet Global needs with API-first eCommerce solutions</li>
                    <li>Proactively safeguard your data</li>
                  </ul>
                  <div className="text-lg-start">
                    <a
                      data-bs-toggle="modal"
                      href="#exampleModal"
                      className="btn-get-started scrollto"
                    >
                      <span>Get Started with Dynamics 365 Commerce</span>
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
              <h2>Explore Other Industries & Discover More Dynamics 365 Solutions</h2>
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
                          <div className="industries-list-more">
                            <a href="/industries/food-and-beverages/">
                              <div className="img-wrp">
                                <img
                                  src="/img/Food-and-beverage.svg"
                                  alt="Food-and-beverage"
                                />
                              </div>
                              <div className="text-wrp-content">
                                <h3>Food & Beverages</h3>
                                <p>Create and deploy an adaptive and intelligent supply chain that automatically responds to evolving demands with <Link href="/products/dynamics-365-supply-chain-management/"><a>Dynamics 365 Supply Chain Management</a></Link> for your food, beverage, and processing industry.</p>
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
                              <a href="/industries/microsoft-cloud-for-nonprofit/">
                                <div className="img-wrp">
                                  <img
                                    src="/img/NotforProfit.svg"
                                    alt="NotforProfit"
                                  />
                                </div>
                                <div className="text-wrp-content">
                                  <h3>Not for Profit</h3>
                                  <p>Drive your mission of helping people in need at scale and provide quick assistance by automating your daily operations with <Link href="/industries/microsoft-cloud-for-nonprofit/"><a>Dynamics 365 for Non-Profits</a></Link> <b>Hubs</b>.</p>
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
                                  <p>Bring people, data, and processes close to your business on a more unified business management platform with <Link href="/industries/professional-services/"><a>Dynamics 365 for Professional Services</a></Link> and deliver top-notch professional services.</p>
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
                                  <p>Manufacture a more resilient and sustainable manufacturing environment by driving innovation, optimizing processes, and strengthening customer relationships with <Link href="/industries/microsoft-cloud-for-manufacturing/"><a>Microsoft Cloud for Manufacturing</a></Link>. </p>
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
                                  <p>Utilize <Link href="/industries/startups/"><a>Dynamics 365 for Startups</a></Link> to manage all end-to-end processes and build a culture of innovation for your startup and gradually turn it into a growing company.</p>
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

export default Ecommerce;

