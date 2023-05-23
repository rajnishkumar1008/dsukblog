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
  const [open, setsOpen] = useState(false);
  return (
    <>
      <Head>
      <meta charSet="utf-8" />
        <title>Microsoft Cloud for Manufacturing: Create A Resilient Future</title>
        <meta
          name="description"
          content="Microsoft Cloud for Manufacturing is a Microsoft initiative to help SMBs modernize manufacturing businesses. Contact Dynamics Square for more."
        />
        <meta name="robots" content="index,follow" />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.ca/industries/microsoft-cloud-for-manufacturing/"
        />
      </Head>
    <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="qLjfAsQRWaM"
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
                  For Manufacturing
                </h1>
                <p>Securely connect people, assets, workflows, and business processes with Microsoft Cloud for Manufacturing to manufacture a more sustainable future.</p>
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
              <div className="col-lg-6 align-self-center">
                <img
                  src="/img/manufacturing-banner.png"
                  alt="Microsoft Cloud For Manufacturing"
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
              <h2>Build a More Resilient and Sustainable Future</h2>
              <p><b>Microsoft Cloud for Manufacturing</b> is designed and developed to support the manufacturing industry's core processes and delivers capabilities that fit the industry's business needs. These end-to-end cloud solutions powered by <Link href="/products/microsoft-azure/"><a>Microsoft Azure</a></Link>, <b>Dynamics 365 & Power Platform, Microsoft 365,</b> <Link href="/products/microsoft-power-bi/"><a>Power BI</a></Link>, and Network Security are empowering organizations to be more resilient and sustainable.</p>
              <div className="text-center">
                  <a
                    data-bs-toggle="modal"
                    href="#exampleModal"
                    className="btn-get-started scrollto"
                  >
                    <span>Start Your Journey Today</span>
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
                <h2>How can Choosing Microsoft Cloud for Manufacturing benefit my manufacturing company? </h2>
                <p>Re-imagine your manufacturing by making new things happen using IoT-enabled AI-integrated devices, <Link href="/products/microsoft-dynamics-365/mixed-reality/"><a>Mixed Reality</a></Link>, predictive tech, and Microsoft's Azure services. Empower all people close to your manufacturing business to work remotely and transparently.</p>
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
                      <p><b>Digital Empowerment</b></p>
                      <p>Digitally empower your workforce by helping them reskill to increase customer satisfaction using newly developed digital experiences.</p>
                    </div>
                  </div>
                  <div className="content-inner-moil-1">
                    <div className="icons-left">
                      <div className="ext-bord">
                        <i className="bi bi-check2"></i>
                      </div>
                    </div>
                    <div className="cintent-right">
                      <p><b>Safe and Agile Operations</b></p>
                      <p>Build and operate safe & smart, agile factories of the future with industrial IoT (IIoT), Microsoft cloud, <Link href="/products/microsoft-dynamics-365-ai/"><a>Artificial Intelligence</a></Link>, and mixed reality.</p>
                    </div>
                  </div>
                  <div className="content-inner-moil-1">
                    <div className="icons-left">
                      <div className="ext-bord">
                        <i className="bi bi-check2"></i>
                      </div>
                    </div>
                    <div className="cintent-right">
                      <p><b>Build Resilient Supply Chains</b></p>
                      <p>Implement tomorrow's tech today and create adaptive supply chains that have improved visibility, agility, and profitability via intelligent planning, demand sensing, & trace ability.</p>
                    </div>
                  </div>
                  <div className="content-inner-moil-1">
                    <div className="icons-left">
                      <div className="ext-bord">
                        <i className="bi bi-check2"></i>
                      </div>
                    </div>
                    <div className="cintent-right">
                      <p><b>Invest in Innovation</b></p>
                      <p>Discover new ways of accelerating the engineering of business values with digital feedback, loops, and Microsoft's digital twin technology.</p>
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
                  <h3>Want to increase customer engagement?</h3>
                  <p>Get in touch with Dynamics Square's Dynamics 365 Experts and discuss your requirements for your business-centric solution.</p>
                  <div className="m-o-t m-o-t-inde">
                    <a
                      data-bs-toggle="modal"
                      href="#exampleModal"
                      className="btn-get-started scrollto"
                    >
                      <span>Connect Now!</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="industry_service_bottoms">
          <div className="container">
            <header className="section-header">
              <h2>
                Microsoft Cloud
                <br />
                For Manufacturing Features
              </h2>
            </header>
            <div className="row position-relative">
              <div className="col-lg-6">
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/custom-crm-solutions.svg"
                      alt="custom-crm-solutions"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Employee Empowerment</h3>
                    <p>Redefine training, engagement, and knowledge transfer by quickly onboarding employees and helping them build role-based skills and learning paths. </p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/icons_flexibility.svg"
                      alt="icons_flexibility"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Factory Transformation</h3>
                    <p>Create factories of the future that use safe, innovative, and highly productive methods for agile manufacturing such as IoT, cloud computing, AI, and mixed reality.</p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/icons_supply-chain (1).svg"
                      alt="icons_supply-chain (1)"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Supply Chain Visibility</h3>
                    <p>Gain higher visibility into your supply chains by unifying data across your systems, drive agility to respond to quick market changes, and make your supply chains predictive by integrating intelligent business apps and advanced analytics.</p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/icons-power-automate_Enhanced-Efficiency (1).svg"
                      alt="icons-power-automate_Enhanced-Efficiency (1)"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Asset Productivity</h3>
                    <p>Employ predictive solutions like <b>IoT and mixed reality</b> to increase throughput and improve quality & <b>overall equipment effectiveness (OEE),</b> reducing delivery costs.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/icons_customer-relation.svg"
                      alt="icons_customer-relation"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Operational Visibility</h3>
                    <p>Get a 360-degree view of overall business ops by connecting people, products, and processes. Analyze problems and enhance the workflow efficiency of your plant systems.</p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/icons_Improved-Visibility.svg"
                      alt="icons_Improved-Visibility"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Digital Transformation</h3>
                    <p>Replicate real-world things like places, business processes, and people and deliver new products and services built with these capabilities through digital twins and manufacturing cloud solutions.</p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/icons_Streamline-Operations.svg"
                      alt="icons_Streamline-Operations"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Customer Experience</h3>
                    <p>Empower sales teams to exceed customer service expectations using Microsoft's predictive technology to predict, detect, & resolve service issues even before customers know them. </p>
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
                      src="/img/manufacturing side.png"
                      className="fix-im"
                      alt="manufacturing side"
                    />
                    <div className="video-ytube video-ytubes">
                      <div className="popup-btn popup-btns">
                        <a
                          href="#javascript:void(0)"
                          onClick={() => setOpen(true)}
                        >
                          <img
                            src="/img/video-Manufacturing.png"
                            alt="video-Manufacturing"
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
                  <h2>Ready to adopt tomorrow's tech and re-invent your manufacturing?</h2>
                  <p>Enable real-time maintenance updates and maximize the efficiency of your machines with Microsoft Cloud for Manufacturing.</p>
                  <div className="text-lg-start mm-t">
                    <a
                      data-bs-toggle="modal"
                      href="#exampleModal"
                      className="btn-get-started scrollto"
                    >
                      <span>Let's Schedule a Friendly Meet</span>
                    </a>
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
                  <h3>Get Started with Microsoft Cloud for Manufacturing and Manufacture Products at Scale</h3>
                  <p>Implement industrial IoT, AI-powered automation, and manufacturing cloud solutions to improve production efficiency and reduce machine downtime without consulting data scientists.</p>
                  <div className="text-center m-o-t m-o-t-hv">
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
        <section className="industry-more-sec">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
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
                                <p>Deploy <Link href="/products/microsoft-dynamics-365/"><a>Microsoft Dynamics 365</a></Link> for the food, beverages, and processing industry to create an intelligent, adaptive supply chain that auto-reacts to evolution in demand while driving growth and fulfilling customer expectations at scale.</p>
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
                                  <p>Drive efficiency of your nonprofit mission by calling automation into your daily operations <Link href="/industries/microsoft-cloud-for-nonprofit/"><a>Dynamics 365 for Non-Profits</a></Link> <b>Hubs</b> and deliver and affect millions of lives positively.</p>
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
                                  <p>Integrate back office, in-store, call center, and eCommerce experiences at a single platform with <Link href="/products/microsoft-dynamics-365-commerce/"><a>Dynamics 365 Commerce</a></Link> and deliver more unified buying experiences to your customers at scale.</p>
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
                                  <p>Unify data, people, and processes to a highly integrated business management platform - <Link href="/industries/professional-services/"><a>Dynamics 365 for Professional Services</a></Link> and deliver professional services that exceed customer expectations.</p>
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
                                  <p>Harnesses the power of Microsoft Dynamics 365, <Link href="/products/microsoft-power-platform/"><a>Microsoft Power Platform</a></Link>, Microsoft 365, and Microsoft Azure to scale business operations. Turn your startup into a company or brand.</p>
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

