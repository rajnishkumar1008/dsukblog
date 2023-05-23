import React, { useState } from "react";
import Head from "next/head";
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
        <title>Dynamics 365 for Professional Services: Practice the Best</title>
        <meta
          name="description"
          content="Dynamics 365 for Professional Services is a cloud-based business management module designed & developed by Microsoft to modernize SMEs/SMBs."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.ca/industries/professional-services/"
        />
        <meta name="robots" content="index,follow" />
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
                Microsoft Dynamics 365 for Professional Services
                </h1>
                <p>Get real-time access and visibility into every project's cost and margin to remain profitable and deliver the highest quality projects on time and budget with <b>Dynamics 365 for Professional Services</b>.</p>
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
                  src="/img/professional service banner.png"
                  alt="Dynamics 365 For Professional Services"
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
                  <h2>Choose Dynamics 365 for Professional Services</h2>
                  <p>Say goodbye to the complicated disparate time and expense entry systems. Start keeping track of your projects, and customers happy!</p>
                  <p>Previously known as <Link href="/products/microsoft-dynamics-ax/"><a>Dynamics AX</a></Link> or <Link href="/products/microsoft-dynamics-365-finance-operations/"><a> Dynamics 365 Finance and Operations</a></Link>, <b>Dynamics 365 for Professional Services</b> is a fully featured <b>enterprise resource planning (ERP) software</b> that enables organizations to monitor the execution of projects and allocate and distribute resources efficiently while increasing the efficiency of project teams.</p>
                  <div className="text-center">
                  <a
                    data-bs-toggle="modal"
                    href="#exampleModal"
                    className="btn-get-started scrollto"
                  >
                    <span>Get Started with Dynamics 365</span>
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
                <h2>Take your industrial and professional services to the next level with Dynamics 365 for Professional Services.</h2>
                <p>Drive your organization's efficiency by strategically optimizing process flows, ensuring on-time delivery with business-centric <b>Dynamics 365 cloud solutions.</b></p>
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
                      <p>Track, manage, and control your entire business organization and its processes at your fingertip by accessing Dynamics 365 on your mobile devices anytime, anywhere.</p>
                    </div>
                  </div>

                  <div className="content-inner-moil-1">
                    <div className="icons-left">
                      <div className="ext-bord">
                        <i className="bi bi-check2"></i>
                      </div>
                    </div>
                    <div className="cintent-right">
                      <p>Ensure real-time reporting and invoicing and enable automation for repeated tasks to boost productivity and empower employees to do more with less using <Link href="/products/dynamics-365-business-central/"><a>Dynamics 365 Business Central</a></Link>.</p>
                    </div>
                  </div>

                  <div className="content-inner-moil-1">
                    <div className="icons-left">
                      <div className="ext-bord">
                        <i className="bi bi-check2"></i>
                      </div>
                    </div>
                    <div className="cintent-right">
                      <p>Intelligently optimize your resources, not your IT practices. Boost your professional services now with <Link href="/products/microsoft-dynamics-365/"><a>Microsoft's Dynamics 365</a></Link> - an intelligent suite of business apps.</p>
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
                  <h3>Empower your employees to maximize your professional capabilities</h3>
                  <p>Talk to our experts for expert advice and discover a suitable <b>Dynamics 365 solution</b> for your professional services ranging from financial, accounting, and human resources to reporting, sales, or optimizing other business tasks.</p>
                  <div className="m-o-t m-o-t-inde">
                    <a
                      data-bs-toggle="modal"
                      href="#exampleModal"
                      className="btn-get-started scrollto"
                    >
                      <span>Meet an Expert today!</span>
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
            <div className="col-lg-9">
            <header className="section-header">
              <h2>Microsoft cloud solutions for you!</h2>
              <p><b>Boost your Professional Services with Dynamics 365 apps</b></p>
              <p>Explore how <b>Dynamics 365 solutions</b> help you drive the successful execution of your projects and other professional services </p>
              <br /> <br />
            </header>
            </div>
           </div>
            <div className="row position-relative">
              <div className="col-lg-6">
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/icons-commerce_user-experience.svg"
                      alt="icons-commerce_user-experienc.svg"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Real-time access to data</h3>
                    <p>With access to real-time data & actionable insights, improve your customer experience and maximize customer engagement to increase profitability and growth.</p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/icons_Customer-Feedback- (1).svg"
                      alt="Business Central Upgrade-icons"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Customized Solutions</h3>
                    <p>Improve your process optimization, speed up service flows to accelerate growth, and maximize ROIs with our highly customized business-centric <b>Cloud ERP</b> and <b>Relationship Management Solutions</b>.</p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/connect-collaborate-1.svg"
                      alt="connect-collaborate-1"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Intelligent Planning & Budgeting</h3>
                    <p>Take the help of <b>Microsoft's AI-driven</b> actionable insights, forecast, and prepare reports and plans to drive maximized results.</p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/icons-implementation-service_Sales-.svg"
                      alt="icons-implementation-service_Sales-"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Optimized HR & Payroll</h3>
                    <p>Engage, recruit, and onboard the right talent. Optimize your human & financial resources and improve your human efficiency level at scale with <Link href="/products/dynamics-365-human-resources/"><a>Dynamics 365 for HRM (Human Resources Management)</a></Link>.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/icons-implementation-service_HR.svg"
                      alt="icons-implementation-service_HR"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Employee Collaboration</h3>
                    <p>Create opportunities for real-time communication and engagement across your organization to foster innovation, growth, and scalability with <Link href="/products/dynamics-365-business-central/"><a>Business Central</a></Link>.</p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/Budgeting-Planning.svg"
                      alt="Budgeting-Planning"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Smart Business Intelligence</h3>
                    <p>Leverage the combined power of <Link href="/products/microsoft-power-bi/"><a>Power BI</a></Link> and <b>Dynamics 365</b> to achieve higher business intelligence (BI). Strengthen your workforce & start taking informed decisions.</p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/Time-Expense-Management.svg"
                      alt="Time-Expense-Management"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Get Accurate Analytics</h3>
                    <p>Smartly use past business data & gain accurate insights using built-in analytics capabilities in <Link href="/products/microsoft-dynamics-erp/"><a>cloud ERP solutions</a></Link> to achieve project success and maintain business continuity.</p>
                  </div>
                </div>

                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/control-icon-analysis.svg"
                      alt="control-icon-analysis"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Better Manage Time and Expenses</h3>
                    <p>Maximize the overall productivity of your organization by professionally managing your time, expenses, and resources.</p>
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
                  <h3>Uplift your professional services to Uplift your Business</h3>
                  <p>Help your business and employees help you make informed and productive decisions. Accelerate your business towards a productive path. Share your business requirements with our <Link href="/contact-us/"><a>Dynamics 365 consultants</a></Link> and find a suitable <b>cloud ERP solution</b>.</p>
                  <div className="text-center m-o-t m-o-t-hv">
                    <a
                      data-bs-toggle="modal"
                      href="#exampleModal"
                      className="btn-get-started scrollto"
                    >
                      <span>Get in Touch</span>
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
                      src="/img/proffesional service side.png"
                      className="fix-im"
                      alt="proffesional service side"
                    />
                    <div className="video-ytube video-ytubes">
                      <div className="popup-btn popup-btns">
                        <a
                          href="#javascript:void(0)"
                          onClick={() => setOpen(true)}
                        >
                          <img
                            src="/img/proffesional video-service.png"
                            alt="proffesional video-service"
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
                  <h2>Get long-term support and partnership with Dynamics Square</h2>
                  <p>Our expert team has over 11+ years of professionally implementing Dynamics 365 solutions and provides top-notch IT services tailored to your business needs.</p>
                  <div className="text-lg-start mm-t">
                    <a
                      data-bs-toggle="modal"
                      href="#exampleModal"
                      className="btn-get-started scrollto"
                    >
                      <span>Connect with our team to Learn how!</span>
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
              <div className="col-lg-9">
              <header className="section-header">
              <h2>Explore Other Industries & Discover More Dynamics 365 Solutions </h2>
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
                                <p>Boost growth and exceed customer expectations by successfully building an intelligent supply chain with <b>Dynamics 365</b> for the food, beverage, and processing industry.</p>
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
                                  <p>Automate your fundraising by bringing people and data close to your nonprofit mission-related daily operations and drive efficiency with <Link href="/industries/microsoft-cloud-for-nonprofit/"><a>Dynamics 365 for Non-Profits Hubs</a></Link>.</p>
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
                                  <p>Provide customers with more unified buying experiences by bringing g your back office, in-store, call center, and eCommerce experiences on an integrated e-commerce platform and grow at scale with <Link href="/products/microsoft-dynamics-365-commerce/"><a>Dynamics 365 Commerce</a></Link>.</p>
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
                                  <p>Transform your manufacturing and distribution. Build a more resilient and sustainable future by driving innovation to improve manufacturing processes with <Link href="/industries/microsoft-cloud-for-manufacturing/"><a>Microsoft Cloud for Manufacturing</a></Link>.</p>
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
                                  <p>Create a brand or company from your startup by scaling business operations with <b>Microsoft Dynamics 365</b>, <Link href="/products/microsoft-power-platform/"><a>Microsoft Power Platform</a></Link>, <b>Microsoft 365</b>, and <Link href="/products/microsoft-azure/"><a>Microsoft Azure</a></Link>.</p>
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
