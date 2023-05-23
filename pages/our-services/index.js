import Head from 'next/head'
import Link from 'next/link';

const Inedex = () => {
    return (
        <>
        <Head>
        <title>Microsoft Dynamics 365 Services in Canada: Dynamics Square</title>
        <meta name="description"
          content="Take your business practices to a next level with Dynamics 365 and build a more sustainable & resilient future. Contact us for agile IT solutions & services." />
          <meta name="robots" content="index,follow" />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.ca/our-services/"
        />
        </Head>
        <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1 align-self-center">
              <h1>
              Our Dynamics 365 Services 
              </h1>
              <p>Unify your data and business processes at scale with <b>Dynamics Square's</b> years of proven expertise and transform the way you do business in the digital age.</p>
              <div className="text-center text-lg-start">
                <a
                  data-bs-toggle="modal"
                  href="#exampleModal"
                  className="btn-get-started scrollto"
                >
                  <span>Get In Touch Now!</span>
                </a>
              </div>
            </div>

            <div className="col-lg-6 align-self-center">
              <img
                src="/img/dynamics-365-hero-image.svg"
                alt="dynamics-365-hero-image.svg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="busine_service_bottom custom05">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="side-heading-custom-01">
                <h2>Microsoft Business Solutions in the Dynamics Square way!</h2>
              </div>
              <div className="custom-p-001">
                <p className="ne4">
                Stay aware of your competition with our top-notch Microsoft cloud, <Link href="/products/microsoft-azure/"><a>Microsoft Azure</a></Link>, <Link href="/products/microsoft-dynamics-365-ai/"><a>AI (Artificial Intelligence)</a></Link>, <b>Power Apps</b>, Dataverse, <b>Dynamics 365, Power BI,</b> AR (Augmented Reality), VR (Virtual Reality), and MR (<b>Mixed Reality</b>) solutions.  
                 </p>
                 <p>We strive to provide the best Dynamics 365 and <b>Microsoft support and services</b> you have ever had. Our team takes your business seriously and as ours. It has been 11+ years since the beginning of the journey to provide smart business solutions to all business-sizes.</p>
                 <p>Get everything that your business needs, from Enterprise resource planning (ERP), customer relationship management (CRM), and Business Intelligence (BI) apps, such as <Link href="/products/microsoft-power-bi/"><a>Power BI</a></Link> to  <Link href="/products/microsoft-dynamics-365/"><a>Microsoft Dynamics 365</a></Link> add-ons like AI-powered bots and other business applications plus integrations.</p>
                 <p>Maximize the efficiency and productivity of your team beyond Microsoft's latest tech stack with <Link href="/"><a>Dynamics Square</a></Link>. Discover resources and business tips to support your vision to increase ROIs.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="busine_service_bottom-left custom012">
                <img
                  src="/img/microosoft-partner.png"
                  alt="microosoft-partner.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="call-to-action-center hero-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="call-to-action-content">
                <h3>Explore our solutions & receive support right away.</h3>
                <p>Get the most out of your budget on every Microsoft business solution with us.</p>
                <div className="text-center m-o-t new-btn-nn">
                  <a
                    data-bs-toggle="modal"
                    href="#exampleModal"
                    className="btn-get-started scrollto"
                  >
                    <span>Chat with us</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className='row justify-content-center'>
            <div className='col-lg-9'>
            <header className="section-header">
            <h2>
            Dynamics 365 Services We Offer
            </h2>
            <p>Offer flexibility, power, and style to empower your teams by implementing, extending, or upgrading your existing business management technology. </p>
          </header>
            </div>
          </div>
          <div className="row p-2">
            <div className="col-lg-4 col-md-6">
              <div className="location-list-wrper">
                <h3>Implementation Service</h3>
                <p>Adopt the standard and latest business solutions. Implement Microsoft's sophisticated technology to derive high business values and open new growth opportunities.</p>
                <br />
                <div className="text-lg-center">
                  <a
                    href="/our-services/dynamics-365-implementation-services"
                    className="btn-get-started btn-sm scrollto"
                  >
                    <span>View More</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="location-list-wrper">
                <h3>Upgrade Service</h3>
                <p>Power up your legacy system capabilities, or upgrade the older version of your Dynamics NAV, GP, or AX to automate process flows, with our requirement-specific Dynamics 365 upgrade services.</p>
                <br />
                <div className="text-lg-center">
                  <a
                    href="/our-services/dynamics-365-upgrade-services/"
                    className="btn-get-started btn-sm scrollto"
                  >
                    <span>View More</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="location-list-wrper">
                <h3>Support Service</h3>
                <p>Keep business continuity by monitoring your system, and processes and ensure sustainability to attain long-term success using our personalized support services.</p>
                <br />
                <div className="text-lg-center">
                  <a
                    href="/our-services/dynamics-365-support-services"
                    className="btn-get-started btn-sm scrollto"
                  >
                    <span>View More</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </>
    );
}

export default Inedex;
