import Head from 'next/head'
import Link from "next/link";
import Image from "next/image";

const Marketing = () => {
  return (
    <>
      <Head>
        <title>Microsoft Dynamics 365 Marketing: AI-Powered Marketing Tool</title>
        <meta
          name="description"
          content="Design, predict, & deliver the right content for personalized journeys with AI-driven insights using Dynamics 365 for Marketing. Contact Dynamics Square team."
        />
           <meta name="robots" content="index,follow" />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.ca/products/microsoft-dynamics-365-marketing/"
        />
        
      </Head>
      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 mobile-1 align-self-center">
              <h1>
              Microsoft Dynamics 365 Marketing
              </h1>
              <p>Blend sales and marketing to deliver personalized and seamless customer experiences at every interaction.</p>
              <div>
                <div className="text-center text-lg-start align-self-center">
                  <a
                    data-bs-toggle="modal"
                    href="#exampleModal"
                    className="btn-get-started scrollto"
                  >
                    <span>Get a Call Back</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-6 align-self-center">
              <Image
                src="/img/marketing-banners.png"
                alt="Dynamics 365 Marketing"
                width={808} height={508}
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
                      <h2>What is Microsoft Dynamics 365 Marketing?</h2>
                      <p>Modern decision-making requires modern solutions. In a nutshell, Dynamics 365 for Marketing integrates two crucial components of an organization - Sales and Marketing. Using this <b>customer relationship management (CRM) app</b>, you can offer personalized buying experiences across all touchpoints for your customers and partners. Start attracting <b>customers today with Microsoft Dynamics 365 Marketing</b>.</p></header>
                </div>
          </div>
          <div className="row justify-content-center">
                  <div className="col-lg-8 col-md-8">
                      <header className="section-header">
                      <h2>Meet Expectations and Increase Loyalty</h2>
                      </header>
                </div>
          </div>
          <div className="row p-lg-6">
            <div className="col-lg-6">
              <div className="finace-acc">
                <div className="accordion" id="accnew">
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingTwo">
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
                            src="/img/icons_centeralised-source.svg"
                            alt="icons_centeralised-source"
                            width="48"
                            height="48"
                          />
                        </div>
                        <span>Seamless Buying Experiences</span>
                      </button>
                    </h3>
                    <div
                      id="fin1"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                       <p>Integrate different Microsoft apps like Teams, <Link href="/products/microsoft-power-bi/"><a>Power BI</a></Link>, Outlook, Excel, and <Link href="/products/microsoft-dynamics-365-ai/"><a>Artificial Intelligence</a></Link> to understand more about your employees, customers, and partners while delivering out-of-the-box experiences.</p>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingTwo">
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
                            src="/img/icons_Personalized-Communication-.svg"
                            alt="icons_Personalized-Communication"
                            width="48"
                            height="48"
                          />
                        </div>
                        <span>Create Personalized Communication</span>
                      </button>
                    </h3>
                    <div
                      id="fin2"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        <p>Driven by rich personalization tools, your sales and marketing teams can easily create content that resonates with the audience. With the <b>power of Dynamics 365 marketing</b>, you can get a 360-degree view of your customer's journey to improve your marketing.</p>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingTwo">
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
                            src="/img/icons_Journey-Mapping.svg"
                            alt="icons_Journey-Mapping"
                            width="48"
                            height="48"
                          />
                        </div>
                        <span>Map Customer Journey</span>
                      </button>
                    </h3>
                    <div
                      id="fin3"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                       <p>Insights from Dynamics 365 Marketing helps your team to see business from customers' perspectives, which allows you to live up to their expectations, earn loyalty and increase profits.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="finace-acc">
                <hr className="mob-disp" />
                <div className="accordion" id="accnewds">
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fi1"
                        aria-expanded="false"
                        aria-controls="fi1"
                      >
                        <div className="wr-in">
                          <img
                            src="/img/icons_Email-Templates-.svg"
                            alt="icons_Email-Templates"
                            width="48"
                            height="48"
                          />
                        </div>
                        <span>Engage More Customers</span>
                      </button>
                    </h3>
                    <div
                      id="fi1"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnewds"
                    >
                      <div className="accordion-body">
                       <p>By using real-time customer data, you can simplify your customer journey management; designing customer-led experiences such as <b>buyer personas, customer touchpoints, and emotions</b> to engage more customers.</p>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fi2"
                        aria-expanded="false"
                        aria-controls="fi2"
                      >
                        <div className="wr-in">
                          <img
                            src="/img/icons_Customer-Feedback-.svg"
                            alt="icons_Customer-Feedback"
                            width="48"
                            height="48"
                          />
                        </div>
                        <span>Lead Score Automation</span>
                      </button>
                    </h3>
                    <div
                      id="fi2"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnewds"
                    >
                      <div className="accordion-body">
                       <p>Automate your lead scoring and convert leads into potential customers at speed with several marketing campaign options built into Dynamics 365 Marketing and bring more customers on board.</p>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fi3"
                        aria-expanded="false"
                        aria-controls="fi3"
                      >
                        <div className="wr-in">
                          <img
                            src="/img/icons_Automated-Lead-Scoring.svg"
                            alt="icons_Automated-Lead-Scoring"
                            width="48"
                            height="48"
                          />
                        </div>
                        <span>Generate More Loyalty</span>
                      </button>
                    </h3>
                    <div
                      id="fi3"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnewds"
                    >
                      <div className="accordion-body">
                        <p>Earn loyalty to your customers by delivering products and services based on their interactions. By using the built-in event triggering tool in <b>Dynamics 365 for Marketing</b>, you can turn your customer interactions into loyal customers.</p>
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
            <div className="col-lg-6 align-self-center">
              <div className="side-heading-custom-02">
                <h2>
                What This Marketing <br />
                Module Has For You? 
                </h2>
              </div>
              <div className="custom-p-001">
                <p>Dynamics 365 Marketing is a comprehensive marketing solution. Here are the components making Dynamics 365 Marketing a right fit for your business.</p>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="finace-acc finace-acc-market">
                <div className="accordion" id="accnewss">
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fins1"
                        aria-expanded="false"
                        aria-controls="fins1"
                      >
                        <div className="wr-in">
                          <img src="/img/Group11.png" alt="Group11" width="90" height="90" />
                        </div>
                        <span>Core Marketing</span>
                      </button>
                    </h3>
                    <div
                      id="fins1"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnewss"
                    >
                      <div className="accordion-body">
                       <p>Using a variety of built-in components, you can seamlessly create and streamline your marketing campaigns, from marketing forms, segmentation, and customer journey tracking to email management, lead management, and marketing analytics.</p>
                      </div>
                    </div>
                  </div>
                  <hr className="cls" />
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fins2"
                        aria-expanded="false"
                        aria-controls="fins2"
                      >
                        <div className="wr-in">
                          <img src="/img/Group12.png" alt="Group12" width="90" height="90" />
                        </div>
                        <span>Event Management</span>
                      </button>
                    </h3>
                    <div
                      id="fins2"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnewss"
                    >
                      <div className="accordion-body">
                       <p>The most distinctive and popular feature of Dynamics 365 for Marketing is to not only visualize events, but also keep track of all marketing and sales related activities for better decision-making and experiences.</p>
                      </div>
                    </div>
                  </div>
                  <hr className="cls" />
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fins3"
                        aria-expanded="false"
                        aria-controls="fins3"
                      >
                        <div className="wr-in">
                          <img src="/img/Group13.png" alt="Group13" width="90" height="90" />
                        </div>
                        <span>Forms Pro</span>
                      </button>
                    </h3>
                    <div
                      id="fins3"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnewss"
                    >
                      <div className="accordion-body">
                       <p>Design online forms for purposes other than direct marketing, such as surveys, and others.</p>
                    </div>
                  </div>
                  <hr className="cls" />
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fins4"
                        aria-expanded="false"
                        aria-controls="fins4"
                      >
                        <div className="wr-in">
                          <img src="/img/Group14.png" alt="Group14" width="90" height="90" />
                        </div>
                        <span>Add-Ons</span>
                      </button>
                    </h3>
                    <div
                      id="fins4"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnewss"
                    >
                      <div className="accordion-body">
                       <p>Dynamics 365 Marketing comes with useful add-ons like Dynamic 365 portals to interact and quickly set up communication with clients, customers, and partners. With Dynamics 365 Connector for LinkedIn, you can create Lead Generation Forms to get leads from LinkedIn.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

   
      <section id="pricing" className="pricing">
        <div className="container">
          <header className="section-header">
            <h2>Dynamics 365 Marketing Pricing</h2>
            <p>Explore the most affordable subscription-based pricing</p>
          </header>
          <div className="row gy-4 p-9 justify-content-center">
            <div className="col-lg-5 col-md-5">
              <div className="box box-22">
                <h3>
                Dynamics 365 Marketing
                </h3>
                <p><b>For organizations without any other Dynamics 365 application</b></p>
                <div className="price">
                  $1,500<span>Per Tenant/Month</span>
                </div>
                <ul>
                  <li className="text-center">
                  Includes 10,000 contacts, 100,000 interactions, 1,000 SMS Messages<sup>2</sup>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-5 col-md-5">
              <div className="box box-22">
                <h3>
                Dynamics 365 Marketing Attach
                </h3>
                <p><b>For organizations with a qualifying Dynamics 365 application<sup>3</sup></b></p>
                <div className="price">
                  $750<span>Per Tenant/Month</span>
                </div>
                <ul>
                  <li className="text-center">
                  Includes 10,000 contacts, 100,000 interactions, 1,000 SMS Messages
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

      <section className="Solution-business-why">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 m--t align-self-center">
            <div className="wy-sultion-left-head">
              <h2>
              Make Marketing Work For You With Dynamics 365 for Marketing 
              </h2>
              <h3>Get rid of repetitive & redundant tasks and improve customer experiences.</h3>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="row gx-4">
                <div className="col-lg-6">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                      Tailored Customer <br />
                      Journey
                      </h3>
                      <div className="overlay">
                        <p>Improve your offer by using past interactions with your potential customers.</p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                      Complete  <br />
                      Customer View  
                      </h3>
                      <div className="overlay">
                        <p>This app provides marketers and salespeople with a complete view of the customer throughout the entire marketing and sales cycle.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 top-m">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                      High Lead
                        <br />
                        Generation
                      </h3>
                      <div className="overlay">
                        <p>Get more done with less effort by integrating email, social media, landing pages, web, phone calls, and personal events.</p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                      Profitability
                        <br />
                        & ROI 
                      </h3>
                      <div className="overlay">
                        <p>This marketing tool maximizes the use of resources by integrating all functions into one location.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      <section className="busine_service_bottom custom07">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="busine_service_bottom-left custom012">
                <Image
                  src="/img/microosoft-partner.png"
                  alt="Microosoft Partner"
                  width={625}
                  height={651}
                />
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="side-heading-custom-01">
                <h3>Why Choose Dynamics Square for Dynamics 365 Implementation?</h3>
              </div>
              <div className="custom-p-001">
                <p>We have been implementing innovative <b>ERP and CRM (Customer Relationship Management) solutions based on Microsoft technology since 2011</b>. And, because of our real-world industry ability and a better understanding of Microsoft's innovative technologies, we provide services and solutions that are targeted to your company's needs and the demands of today's world. We empower you to become more resilient, sustainable, and future-proof.</p>
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
            Curious to Explore more about Dynamics 365 Marketing?
            </h2>
            <p>Scroll Down to Find the Best Answers Tailored for You!</p>
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
                    >Is Dynamics 365 a CRM or ERP application?</button>
                  </h3>
                  <div
                    id="faq-content-1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                     <p><Link href="/products/microsoft-dynamics-365/"><a>Microsoft Dynamics 365</a></Link> is a suite of cloud-based next-gen business apps that include various CRM, ERP modules and different productivity tools or add-ons.</p>
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
                    >Dynamics 365 marketing includes which three abilities?</button>
                  </h3>
                  <div
                    id="faq-content-2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body"><p>Dynamics 365 allows you to manage emails and all customer journeys. You can also plan and manage several events and marketing campaigns. Moreover, “Customer Voice” can be used to create surveys, personalize every interaction, capturing the right data in the right place and time within Dynamics 365 Marketing, and produce actionable insights.</p></div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-3"
                    >Which CRM is the best: Dynamics 365 or Salesforce?</button>
                  </h3>
                  <div
                    id="faq-content-3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>Compared to other CRMs like Salesforce, and SAP's Sales Cloud, Microsoft Dynamics 365 has an easy-to-use UI (User Interface) and customization when it comes to reporting. While Salesforce and Sales Cloud are fully cloud-based, if you want or need an on-premises deployment, Microsoft Dynamics 365 is your only choice.  </p>
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
                    How much does a CRM automation tool like Dynamics 365 Marketing or Sales cost?  
                    </button>
                  </h3>
                  <div
                    id="faq-content-4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                     <p>Integrating a CRM system like Dynamics 365 Marketing or Dynamics 365 Sales costs between $5,000 and $20,000, depending on whether it is a legacy system or a Web service/cloud service. The budget should be higher if you are integrating legacy systems, and lower if you are integrating Web services.</p>
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

export default Marketing;
