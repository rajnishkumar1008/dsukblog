import Head from 'next/head'
import Link from 'next/link';

const PowerPlatform = () => {
  return (
    <>
      <Head>
        <title>Microsoft Power Platform: Create Apps Instantly With No Code</title>
        <meta
          name="description"
          content="Creating instant business and productivity apps is now easy with Microsoft Power Platform. Find out more by contacting the Dynamics Square team."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.ca/products/microsoft-power-platform/"
        />
       <meta name="robots" content="index,follow" />
      </Head>
      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-4 align-self-center">
              <h1>
                Power <br />
                Platform
              </h1>
              <p>Build solutions, avail automation, analyze and visualize data, and create virtual agents leveraging power applications on the Power Platform. It connects businesses and offers an end-to-end business solution.</p>
              <div>
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
            </div>
            <div className="col-lg-6 align-self-center">
              <img src="/img/power-platform.png" alt="power-platform" />
            </div>
          </div>
        </div>
      </section>

      <section className="new-bg">
        <div className="container">
          <div className='row justify-content-center'>
            <div className='col-lg-8'>
            <header className="section-header">
            <h2>What Is a Power Platform?</h2>
            <p>The Microsoft Power Platform is a group of five powerful applications to help you build a sustainable business by simplifying complex processes using different applications. <Link href="/products/microsoft-power-bi/"><a>Power BI</a></Link>, <b>Power Apps, Power Pages,</b> <Link href="/products/microsoft-power-automate/"><a>Power Automate</a></Link>, and <Link href="/products/microsoft-power-virtual-agents/"><a>Power Virtual Agents</a></Link> are all part of it. These applications let the user harness the full potential of processes and data to run the business efficiently.</p>
          </header>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-shape">
        <div className="container">
          <div className="row pad9x rever-1">
            <div className="col-lg-4 align-self-center">
              <div className="commen-lef-pic power-custom text-center ">
                <img
                  src="/img/Power-BI.png"
                  alt="Power-BI"
                />
              </div>
            </div>
            <div className="col-lg-8 align-self-center">
              <div className="commen-rit-info">
                <h3>Power BI</h3>
                <p>
                  <strong>The Business Intelligence Solution</strong>
                </p>
                <p>Power BI is a BI (business intelligence) solution that allows users to visualize the pile of data using data patterns, trends, and insights to help them make better use of data. It flawlessly fetches data from multiple sources to create interactive reports and dashboards. It is a cloud-based platform that provides a centralized view of your business KPIs (Key Performance Indicators), so you can track your progress and performance against your goals.</p>
                <div className="cltt-actt">
                  <a href="/products/microsoft-power-bi/">Find Out More</a>
                </div>
              </div>
            </div>
          </div>

          <div className="row pad9x">
            <div className="col-lg-8 align-self-center">
              <div className="commen-rit-info">
                <h3>Power Apps</h3>
                <p>
                  <strong>Create business apps with no codes</strong>
                </p>
                <p>
                If you want to build a complex business application but don't want to code for it, <Link href="/products/microsoft-power-apps/"><a>Microsoft Power Apps</a></Link> would be a life-saving solution for you. You can create applications without any coding knowledge in a fast and agile way. Also, you can easily develop applications from scratch using predefined templates or formats. 
                </p>
                <div className="cltt-actt">
                  <a href="/products/microsoft-power-apps/">Get Started</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 align-self-center ">
              <div className="commen-lef-pic power-custom text-center">
                <img
                  src="/img/Power-Apps.png"
                  alt="Power-Apps"
                />
              </div>
            </div>
          </div>

          <div className="row pad9x rever-1">
            <div className="col-lg-4 align-self-center">
              <div className="commen-lef-pic power-custom text-center">
                <img
                  src="/img/Power-Automate.png"
                  alt="Power-Automate"
                />
              </div>
            </div>
            <div className="col-lg-8 align-self-center">
              <div className="commen-rit-info">
                <h3>Power Automate</h3>
                <p>
                  <strong>Solution for defining workflow automations</strong>
                </p>
                <p>Power Automate provides you with an excellent way to automate workflows directly in your applications. It uses the advanced technology of a no-code method to connect more than a hundred powerful and popular applications altogether. You can connect to your data from any device or place and create automated workflows that enable collaboration and productivity for your business.</p>
                <div className="cltt-actt">
                  <a href="/products/microsoft-power-automate/">
                    Find Out More
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="row pad9x pad11x">
            <div className="col-lg-8 align-self-center">
              <div className="commen-rit-info">
                <h3>Power Virtual Agents</h3>
                <p>
                  <strong>Tool to create intelligent chatbots. No Codes Required</strong>
                </p>
                <p>Power Virtual Agents is a tool that helps you create personalized chatbots without using any code. You can create and keep virtual agents using a graphical interface without needing data analysts or developers.</p>
                <div className="cltt-actt">
                  <a href="/products/microsoft-power-virtual-agents/">
                    Find Out More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 align-self-center">
              <div className="commen-lef-pic power-custom text-center">
                <img
                  src="/img/Virtual-Agent.png"
                  alt="Virtual-Agent"
                />
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
                <h3>Talk to our experts</h3>
                <p>Want to know how the Power Platform can help your business grow? Schedule a free demo!</p>
                <div className="text-center m-o-t new-btn-nn">
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

  
      <section className="solution-faq faq">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 col-md-9">
            <header className="section-header">
            <h2>Want to know more about Power Platform?</h2>
            <p>Scroll Through Our FAQs Tailored for You!</p>
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
                    >What is the use of Microsoft Power Platform?</button>
                  </h3>
                  <div
                    id="faq-content-2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>Power Platform is a highly productive tool for companies that encourage digital skills throughout their organization to build solutions through intuitive low-code or no-code services.</p>
                      <p>By integrating Power Platform apps built by your team with <Link href="/products/microsoft-dynamics-365/"><a>Microsoft Dynamics 365</a></Link>, or <Link href="/products/microsoft-azure/"><a>Azure</a></Link>, organizations can break down traditional data silos and move toward digital success.</p>
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
                    >What differentiates Power Apps and Power Platforms?</button>
                  </h3>
                  <div
                    id="faq-content-3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>Power Apps is a platform for creating applications that is a part of <b>Microsoft Power Platform</b> and utilizes <b>Azure cloud services</b>. All <b>Dynamics 365 applications</b> — <Link href="/products/microsoft-dynamics-365-sales/"><a></a></Link>, <Link href="/products/microsoft-dynamics-365-customer-service/"><a>Customer Service</a></Link>, <Link href="/products/microsoft-dynamics-365-field-service/"><a>Field Service</a></Link>, <Link href="/products/microsoft-dynamics-365-marketing/"><a>Marketing</a></Link>, and <b>Talent Acquisition</b> — are built natively on the platform.</p>
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
                    >Does Power Platform belong to Office 365?</button>
                  </h3>
                  <div
                    id="faq-content-4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>No. Power Platform is more than just a collection of components. Hundreds of other business apps can be integrated with them, including Microsoft 365, Dynamics 365, Azure, and hundreds more.</p>
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
                    >Is Power Platform SaaS or PaaS?</button>
                  </h3>
                  <div
                    id="faq-content-5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>SaaS (Software as a Service) is what <b>Power BI</b> is. Android, Windows, and iOS mobile apps are available for Power BI. Additionally, Power BI, <b>Power Apps</b>, <b>Power Automate</b>, and <b>Power Virtual Agents</b> all use the Common Data Service (CDS), which stores and protects business data.</p>
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
                    >How secure is the Microsoft Power Platform?</button>
                  </h3>
                  <div
                    id="faq-content-6"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body"><p>As your business grows, <b>Microsoft Power Platform</b> provides robust security, management, and compliance. With Microsoft Power Platform, anyone can transform their business with minimal coding.</p></div>
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

export default PowerPlatform;
