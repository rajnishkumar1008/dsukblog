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
        <title>Microsoft Dynamics 365 for Startups: Ultimate Tool for Startups</title>
        <meta
          name="description"
          content="Microsoft's Dynamics 365 for startups is an unmatched tool to quickly market your startups & mid-market-sized businesses. Contact Dynamics Square for more."
        />
        <meta name="robots" content="index,follow" />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.ca/industries/startups/"
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
                <h1>Dynamics 365 for Startups & Mid-Market Sized Businesses</h1>
                <p>Dynamics 365 for Startups brings Microsoft's ecosystem to startup founders and business decision-makers to employ low-cost yet highly innovative tools that increase productivity and ease developers' workloads. </p>
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
                  src="/img/industry-startup-banner.png"
                  alt="Dynamics 365 For Startups"
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
              <h2>Microsoft's Dynamics 365 for Startups - Cultivate a Culture of Innovation</h2>
              <p>Bring people, knowledge, and problem-solving ability together to solve tomorrow's challenges today!</p>
              <p>Startups and mid-market-sized businesses are the hubs of innovation. They work on tight budgets and have complexities to manage. <b>Dynamics 365 for Startups</b> is not merely an idea but a flexible, easy-to-use, customizable, and low-cost yet highly productive business management platform that helps startups and mid-sized businesses (SMEs/SMBs) streamline operations, <Link href="/products/dynamics-365-customer-engagement/"><a>enhance customer engagement</a></Link>, save development time and cost & drive growth at scale. </p>
              <div className="text-center">
                  <a
                    data-bs-toggle="modal"
                    href="#exampleModal"
                    className="btn-get-started scrollto"
                  >
                    <span>Get Started with Your Transformation Journey! </span>
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
                <h2>Why should I choose Dynamics 365 for my Startup or for my new business?</h2>
                <p><b>Microsoft Dynamics 365 for Startups</b> is a platform that grows with you. With $150,000 free Azure credits, you can build solutions, productivity & dev tools at your own pace. Also, you get free access to various development and productivity tools, including GitHub and Microsoft 365.</p>
              </div>
              <div className="col-lg-6 align-self-center">
                <div className="content-icons-modil-1">
                  <p><b>Access startup-friendly offers & start building</b></p><br />
                  <div className="content-inner-moil-1">
                    <div className="icons-left">
                      <div className="ext-bord">
                        <i className="bi bi-check2"></i>
                      </div>
                    </div>
                    <div className="cintent-right">
                      <p><b>Ideate</b></p>
                      <p>Get 1k in Azure credits to refine your startup idea, prototype your product, and increase the credits up to 150k as your usage and business grows to a brand or company.</p>
                    </div>
                  </div>

                  <div className="content-inner-moil-1">
                    <div className="icons-left">
                      <div className="ext-bord">
                        <i className="bi bi-check2"></i>
                      </div>
                    </div>
                    <div className="cintent-right">
                      <p><b>Develop</b></p>
                      <p>Since you know your idea has the potential to generate value, jump in to develop a minimum viable product (MVP) using $5k Azure credits, and increase this credit to $150k as your company grows.</p>
                    </div>
                  </div>

                  <div className="content-inner-moil-1">
                    <div className="icons-left">
                      <div className="ext-bord">
                        <i className="bi bi-check2"></i>
                      </div>
                    </div>
                    <div className="cintent-right">
                      <p><b>Grow</b></p>
                      <p>When you have launched your MVP, it is now time to focus on shipping features and start winning customers. Accelerate your company's growth with free $25k Azure credits and raise credits to $150k as your business grows.</p>
                    </div>
                  </div>

                  <div className="content-inner-moil-1">
                    <div className="icons-left">
                      <div className="ext-bord">
                        <i className="bi bi-check2"></i>
                      </div>
                    </div>
                    <div className="cintent-right">
                      <p><b>Scale</b></p>
                      <p>Once you have set up a market fit for your product and you are ready to focus on scaling your company, get the advantage of $150k Azure credits.</p>
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
                  <h3>Run your Startup Business more efficiently with Microsoft Dynamics 365 for Startups</h3>
                  <p>Speed up your development process and accelerate your business with expert guidance</p>
                  <div className="m-o-t m-o-t-inde">
                    <a
                      data-bs-toggle="modal"
                      href="#exampleModal"
                      className="btn-get-started scrollto"
                    >
                      <span>Meet Your Expert</span>
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
              <div className="col-lg-9 col-md-9">
              <header className="section-header">
              <h2>Build More & Achieve More with Dynamics 365 for Startups</h2>
              <p>Get the ultimate business management tool that facilitates the success of your every project and inspires you to accomplish more. </p>
            </header>
              </div>
            </div>
            <div className="row g-xxl-0">
              <div className="col-lg-6">
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/icons-_seamless customisation.svg"
                      alt="icons-_seamless customisation"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Tailored Customization</h3>
                    <p>Simplify your operations and solve startup challenges with an easy-to-customize business management tool that quickly adapts to your needs.</p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/icons-_centralised data.svg"
                      alt="centralised data"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Highly Innovative</h3>
                    <p>Pull all your resources and processes together and proactively connect them with your development and sales team to drive collaboration, innovation, and efficiency.</p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/icons-_manage customer.svg"
                      alt="icons-_manage customer"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Understands People</h3>
                    <p>Understand your customer, open doors for engagement, and deliver an omnichannel experience by providing personalized solutions every step of their journey.</p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/icons-_decison making.svg"
                      alt="icons-_decison making"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Robust Analytics</h3>
                    <p>Make use of real-time key analytics, customer data, and insights for better financial visibility with <b>Dynamics 365 Startups.</b></p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/icons-_connect collobrate.svg"
                      alt="icons-_connect collobrate"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Process Automation</h3>
                    <p>Enable data and process automation using <Link href="/products/microsoft-dynamics-365-ai/"><a>built-in AI (Artificial Intelligence)</a></Link> practices and in-cloud environments. </p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/icons-_drive automation.svg"
                      alt="icons-_drive automation"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Enterprise Maneuverability</h3>
                    <p>Leverage higher enterprise mobility by centralizing data, processes, and people on a single platform - <b>Dynamics 365 for Startups.</b></p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/icons-_enterprise mobility.svg"
                      alt="icons-_enterprise mobility"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Strategic Decision-making</h3>
                    <p>Built-in real-time analytics, monitoring key metrics & customer data, and customer-journey orchestrating features empower teams to make informed decisions to defeat challenges.</p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/icons-_Predict Opportunity.svg"
                      alt="icons-_Predict Opportunity"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Forecasting & Optimization</h3>
                    <p>Optimize your operations, forecast sales, and start making an impact by connecting all your employees, data, and AI-driven insights.</p>
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
                  <h3>Tell Us About Your Start-Up! Both Dynamics Square and Microsoft are ready to help you develop at your own pace.</h3>
                  <p>Our experts offer strategic help to startup founders who want to achieve more. See how we can help you minimize your inputs and maximize your outputs while boosting process flow automation.</p>
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
        <section className="busine_service_bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="busine_service_bottom-left">
                  <div className="busine_service_bottom-right">
                    <img
                      src="/img/startup-side.png"
                      className="fix-im"
                      alt="bisin_leftimg"
                    />
                    <div className="video-ytube video-ytubes">
                      <div className="popup-btn popup-btns">
                        <a
                          href="#javascript:void(0)"
                          onClick={() => setOpen(true)}
                        >
                          <img
                            src="/img/videoForstartups.png"
                            alt="videoForstartups"
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
                  <h2>
                    How Dynamics 365
                    <br />
                    Can Enable Transformation
                    <br />
                    in Your Startup?
                  </h2>
                  <p>
                  Enable maximum resource utilization and boost your process flow with simplified and highly configured Microsoft Dynamics 365 startup solutions.
                  </p>
                  <div className="text-lg-start">
                    <a
                      data-bs-toggle="modal"
                      href="#exampleModal"
                      className="btn-get-started scrollto"
                    >
                      <span>Request a Demo</span>
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
                                <p>Employ an intelligent and <Link href="/products/dynamics-365-supply-chain-management/"><a>adaptive supply chain</a></Link> to help drive growth and fulfill customer expectations with <Link href="/industries/food-and-beverages/"><a>Dynamics 365 for the food & beverage industry</a></Link>. </p>
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
                                  <p>Bring automation into your daily operations, help the needy, and drive efficiency in your non-profit mission with <Link href="/industries/microsoft-cloud-for-nonprofit/"><a>Dynamics 365 for Non-Profits</a></Link> Hubs.</p>
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
                                  <p>Unify your back office, in-store, call center, and e-commerce experiences and deliver more unified commerce to your customers at scale with <Link href="/products/microsoft-dynamics-365-commerce/"><a>Dynamics 365 Commerce</a></Link>.</p>
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
                                  <p>Bring data, people, and processes on a chosen unified business management platform in Dynamics 365 to deliver world-class professional services.</p>
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
                                  <p>Build more resilient and sustainable growth in manufacturing by driving innovation, optimizing manufacturing processes, & strengthening customer relationships.</p>
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

