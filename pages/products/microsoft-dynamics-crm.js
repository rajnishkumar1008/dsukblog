import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";

const MicrosoftDynamicsCrm = () => {
  return (
    <>
      <Head>
        <title>Microsoft Dynamics CRM: ERP & CRM Business Modules</title>
        <meta
          name="description"
          content="Dynamics CRM is a suite of sales, marketing, and customer engagement modules for startups & mid-market-sized businesses. Contact Dynamics Square."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.ca/products/microsoft-dynamics-crm/"
        />
        <meta name="robots" content="index,follow" />
      </Head>
      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1">
              <h1>
                Microsoft <br /> Dynamics CRM
              </h1>

              <div className="col-lg-9 mobile-1">
                <p>Drive your customer relationships strong with an integrated, data-driven, and collaborative cloud software solution - Microsoft Dynamics CRM.</p>
              </div>
              <div>
                <div className="text-center text-lg-start">
                  <Link href="#exampleModal">
                    <a
                      data-bs-toggle="modal"
                      className="btn-get-started scrollto"
                    >
                      <span>Get Started</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <Image
                src="/img/CRM-header-banner.png"
                alt="Microsoft Dynamics CRM"
                width={1024} height={586}
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row justify-content-center">
                <div className="col-lg-8 col-md-8">
                  <header className="section-header">
                    <h2>What is Microsoft Dynamics CRM?</h2>
                    <p>Better customer services are at the core of any successful business and the main source of building strong relationships. Improve your customer engagement and services with Dynamics CRM (now, Dynamics 365 Customer Engagement) and understand your customers' journeys to provide them with what they want.</p>
                    <p><b>Reasons to Choose Dynamics CRM</b></p>
                    <p>Enable sales and marketing automation, use data visualization capabilities, and proactively engage and connect more with your customers with Dynamics CRM.</p>
                  </header>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="busine_service_bottom custom001">
        <div className="container">
          <div className="row ">
            <div className="col-lg-6 align-self-center">
              <img src="/img/CRM banner.png" alt="CRM banner" />
            </div>
            <div className="col-lg-5 align-self-center">
              <div className="side-heading">
                <h2>Here is why you should choose Dynamics CRM:</h2>
              </div>
              <div className="custom002">
                <ul>
                    <li>Leverage AI-driven CRM tools to understand customer journeys and deliver desired products and services.</li>
                    <li>Streamline your ECommerce operations using highly integrated built-in data-driven solutions in Dynamics CRM.</li>
                    <li>With Microsoft Teams, SharePoint, and Outlook integration in Dynamics CRM, you can better align your sales and marketing teams to improve team collaboration.</li>
                    <li>Bring transparency to your sales practices and enhance real-time sales efficiency to increase your growth.</li>
                    <li>Leverage actionable AI (Artificial Intelligence) insights to deliver personalized buying experiences by orchestrating customer journeys, and boosting your brand name.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="new-bg">
        <div className="container">
          <div className="row p-lg-6">
            <div className="col-lg-6 align-self-center">
              <div className="side-heding-new">
                <h3>Microsoft Dynamics CRM Features</h3>
                <p>
                 <b>Microsoft Dynamics CRM Features</b>
                </p>
                <p>Dynamics CRM is a collaborative, insight-based sales solution. With this customer relationship management software, you can simplify managing your sales by bringing different teams to a unified platform and accelerate your sales by using customer, sales, and marketing data and visual insights on Power BI Charts to discover targets and take the next best actions. </p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="finace-acc">
                <div className="accordion" id="accnew">
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin5"
                        aria-expanded="false"
                        aria-controls="fin5"
                      >
                        <div className="wr-ins">
                          <img
                            src="/img/Seamless-Sales-and-Marketing.svg"
                            alt="Sales & Marketing4"
                          />
                        </div>
                        <span>AI-based Marketing</span>
                      </button>
                    </h3>
                    <div
                      id="fin5"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        <p>Re-invent your marketing by replacing intuition with actionable AI-powered insights. Take prompt action and get seamlessly notified about dealing with risks. Improve your relationships with customers, read their demands, and orchestrate their journeys to engage more in one-on-one ways, at scale, to build meaningful relationships to grow your business.</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin6"
                        aria-expanded="false"
                        aria-controls="fin6"
                      >
                        <div className="wr-ins">
                          <img src="/img/Improved-Sales.svg" alt="sales" />
                        </div>
                        <span>CRM Automation</span>
                      </button>
                    </h3>
                    <div
                      id="fin6"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                       <p>Automate your repetitive, manual tasks to streamline your sales and marketing campaigns and improve productivity. Better organize your business processes and empower your teams to make complex tasks easy to carry out. Bring the power of three - operational, analytical, and collaborative - systems into one unified platform - Dynamics CRM to win customers and earn loyalty faster.</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin7"
                        aria-expanded="false"
                        aria-controls="fin7"
                      >
                        <div className="wr-ins">
                          <img
                            src="/img/Build-and-Retain-Customers.svg"
                            alt="Retain Customers"
                          />
                        </div>
                        <span>Customer Relationships</span>
                      </button>
                    </h3>
                    <div
                      id="fin7"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        <p>Change the whole perspective of doing business in this digital age by reading early what customers want. Build seamless buying and selling experiences through collaboration. Personalize customer experiences based on AI-driven actionable insights and the right data using <b>Dynamics CRM</b>. For designing customer-led experiences and engaging more with customers in real-time, implement <b>Dynamics 365</b> - an intelligent suite of cloud business apps.</p>
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
            <div className="col-lg-7">
              <div className="call-to-action-content">
                <h3>Want to deliver one-on-one experiences and win more customers?</h3>
                <p>Connect with our experts, share your CRM requirements, and get expert tips and guidance to level up your sales and marketing practices.</p>
                <div className="text-center m-o-t new-btn-nn">
                  <Link href="#exampleModal">
                    <a
                      data-bs-toggle="modal"
                      className="btn-get-started scrollto"
                    >
                      <span>Meet our Experts now!</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-shape">
        <div className="container">
         <div className="row justify-content-center">
          <div className="col-lg-8">
          <header className="section-header">
            <h2>Microsoft Dynamics CRM: Sales & Marketing Automation Solutions</h2>
          </header>
          </div>
         </div>
          <div className="row pad9x rever-1">
            <div className="col-lg-6 align-self-center">
              <div className="commen-lef-pic">
                <Image src="/img/Sales-banner.png" alt="dynamics-365-sales" width={771} height={478} />
              </div>
            </div>

            <div className="col-lg-6 align-self-center">
              <div className="commen-rit-info">
                <h3>Microsoft Dynamics for Sales</h3>
                <p>Bring utmost transparency, efficiency, and better sales practices based on true insights and customer data to accelerate your sales. Implement <b>Dynamics 365 for sales</b> and energize your sales teams to engage more with customers.</p>
                <div className="cltt-actt">
                  <Link href="/products/microsoft-dynamics-365-sales/">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="row pad9x">
            <div className="col-lg-5 align-self-center">
              <div className="commen-rit-info">
                <h3>Microsoft Dynamics for Customer Service</h3>
                <p>Understand your customers and deliver personalized experiences using real-time data visualization. Incorporate <b>modern customer service tool(s)</b> and proactively respond to the needs and issues of your customers.</p>
                <div className="cltt-actt">
                  <Link href="/products/microsoft-dynamics-365-customer-service/">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-6 align-self-center">
              <div className="commen-lef-pic">
                <Image
                  src="/img/Customer-Service.png"
                  alt="dynamics-for-customer-service"
                  width={774} height={523}
                />
              </div>
            </div>
          </div>

          <div className="row pad9x rever-1">
            <div className="col-lg-6 align-self-center">
              <div className="commen-lef-pic">
                <Image
                  src="/img/marketing-banner-crm.png"
                  alt="Project-Service-Automation"
                  width={865} height={593}
                />
              </div>
            </div>

            <div className="col-lg-6 align-self-center">
              <div className="commen-rit-info">
                <h3>Microsoft Dynamics for Marketing</h3>
                <p>Leverage AI-driven actionable insights to seamlessly plan and execute marketing campaigns. Introduce the power of Power BI and Excel with <b>Dynamics 365 for Marketing</b> and increase the productivity of your sales and marketing team.</p>
                <div className="cltt-actt">
                  <Link href="/products/microsoft-dynamics-365-marketing/">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="row pad9x">
            <div className="col-lg-5 align-self-center">
              <div className="commen-rit-info">
                <h3>Microsoft Dynamics for Project Operations</h3>
                <p>Make your organization future-ready and resilient by managing resources, projects, and finances effectively and intelligently. Utilize <b>Dynamics 365 for Project Operations</b> to close more deals, accelerate project delivery, and enable project automation to maximize results.</p>
                <div className="cltt-actt">
                  <Link href="/products/dynamics-365-project-operations/">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-6 align-self-center">
              <div className="commen-lef-pic">
                <Image
                  src="/img/project-operation-banner-crm.png"
                  alt="Project-Service-Automation"
                  width={736} height={551}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="solution-faq faq">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 col-md-9">
            <header className="section-header">
            <h2>
            Have you got questions about <br /> Microsoft Dynamics CRM??   
            </h2>
            <p>Click through our FAQs Tailored for You!</p>
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
                    >Where is the application of Dynamics CRM?</button>
                  </h3>
                  <div
                    id="faq-content-2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>Dynamics CRM is a powerful and highly unified application that helps organizations seamlessly and intelligently track and manage their marketing campaigns, sales targets, core retail sales, sales leads, lead scores, and more. Contact Dynamics Square experts for <b>implementation help</b>.</p>
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
                    >Is Dynamics 365 an ERP or CRM?</button>
                  </h3>
                  <div
                    id="faq-content-3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>Dynamics 365 is a suite of different operations-centric business apps such as Business Central, <b>Dynamics 365 Supply Chain Management</b>, <b>Dynamics 365 Finance</b>, and more. This suite has both CRM and ERP tools. Dynamics 365 Customer Engagement is a CRM suite that consists of Marketing, Sales, <b>Customer Service</b>, and <b>Field Service</b> modules. And for ERP modules, you can choose <b>Dynamics 365 Business Central</b>, Supply Chain Management, <b>Finance</b>, <b>Project Operations</b>, or Human Resources. Get in touch with us for more details on Microsoft's business apps.</p>
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
                    >Do I have to pay for Microsoft Dynamics CRM?</button>
                  </h3>
                  <div
                    id="faq-content-4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>The chosen applications' demo and their 30-day use are free. Thereafter you will have to pay a monthly subscription. Moreover, there are other cloud CRM modules such as Dynamics 365 Sales, Dynamics 365 Customer Service, and Dynamics 365 Field Service along with Dynamics 365 Project Service Automation. You can choose them if you are ready to upgrade your legacy ERP/CRM systems.</p>
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

export default MicrosoftDynamicsCrm;
