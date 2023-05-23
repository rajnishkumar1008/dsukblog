import Head from 'next/head'
import Image from 'next/image'
import Spline from '@splinetool/react-spline';
import Script from 'next/script'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination,Autoplay,FreeMode } from "swiper";
import Link from 'next/link';


export default function Home() {
  // const addJsonLd = () => {
  //   return {
  //     _html: `
  //           @context": "http://schema.org",
  //           "@type": "Person",
  //           address: {
  //             "@type": "PostalAddress",
  //             addressLocality: "Seattle",
  //             addressRegion: "WA",
  //             postalCode: "98052",
  //             streetAddress: "N. Whitworth"
  //           },
  //           colleague: [
  //             "http://www.dynamicssquare.ca/",
  //             "http://www.dynamicssquare.ca/"
  //           ],
  //           email: "mailto:jane-doe@xyz.edu",
  //           image: "janedoe.jpg",
  //           jobTitle: "Professor",
  //           name: "Jane Doe",
  //           telephone: "(425) 123-4567",
  //           url: "http://www.dynamicssquare.ca/"
  //     `
  //   }
  // }
  return (
   <>
   <Head>
   <title>
   Microsoft Gold Partner Canada | Dynamics Square 
        </title>
        <meta
          name="description"
          content="We simplify your business processes by implementing innovative Microsoft cloud solutions to make your business thrive. Book a free consultation today."
        />
        <link rel="canonical" href="https://www.dynamicssquare.ca/" />

        <meta property="og:title" content="Microsoft Gold Partner Canada | Dynamics Square" />
<meta property="og:site_name" content="Dynamics Square" />
<meta property="og:url" content="https://www.dynamicssquare.ca/" />
<meta property="og:description" content="We simplify your business processes by implementing innovative Microsoft cloud solutions to make your business thrive. Book a free consultation today." />
<meta property="og:type" content="website" />
<meta property="og:image" content="https://www.dynamicssquare.ca/img/banner-head-image.png" />
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="https://www.dynamicssquare.ca/" />
<meta property="twitter:title" content="Microsoft Gold Partner Canada | Dynamics Square" />
<meta property="twitter:description" content="We simplify your business processes by implementing innovative Microsoft cloud solutions to make your business thrive. Book a free consultation today." />
<meta property="twitter:image" content="https://www.dynamicssquare.ca/img/banner-head-image.png" />

 <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "@id": "https://www.dynamicssquare.ca/#organization",
                "name": "Dynamics Square",
                "url": "https://www.dynamicssquare.ca/",
                "sameAs": [
                    "https://www.facebook.com/dynamicssquareca",
                    "https://twitter.com/dsquare_ca",
                    "https://www.linkedin.com/company/dynamics-square-canada/",
                    "https://www.youtube.com/c/DynamicsSquare"
                ],
                "logo": {
                    "@type": "ImageObject",
                    "@id": "https://www.dynamicssquare.ca/#logo",
                    "inLanguage": "en-US",
                    "url": "https://www.dynamicssquare.ca/img/dynamicssqure-logo.svg",
                    "contentUrl": "https://www.dynamicssquare.ca/img/dynamicssqure-logo.svg",
                    "width": "1024",
                    "height": "1024",
                    "caption": "Dynamics Square"
                },
                "image": { "@id": "https://www.dynamicssquare.ca/#logo" }
            },
            {
                "@type": "WebSite",
                "@id": "https://www.dynamicssquare.ca/#website",
                "url": "https://www.dynamicssquare.ca/",
                "name": "Dynamics Square Canada | Microsoft Dynamics 365 and Cloud consultancy providing experts.",
                "description": "We simplify your complex business processes and challenges by implementing cloud-based ERP, CRM and other Microsoft cloud solutions.",
                "publisher": { "@id": "https://www.dynamicssquare.ca/#organization" },
                "potentialAction": [{ "@type": "SearchAction", "target": { "@type": "EntryPoint", "urlTemplate": "https://www.dynamicssquare.ca/?s={search_term_string}" }, "query-input": "required name=search_term_string" }],
                "inLanguage": "en-US"
            },
            {
                "@type": "ImageObject",
                "@id": "hhttps://www.dynamicssquare.ca/#primaryimage",
                "inLanguage": "en-US",
                "url": "https://www.dynamicssquare.ca/img/banner-head-image.png",
                "contentUrl": "https://www.dynamicssquare.ca/img/banner-head-image.png",
                "width": 1561,
                "height": 667,
                "caption": "dynamicssquare"
            },
            {
                "@type": "WebPage",
                "@id": "https://www.dynamicssquare.ca/#webpage",
                "url": "https://www.dynamicssquare.ca/",
                "name": "Dedicated CRM and ERP Consultants for Canada Region | Dynamics Square",
                "isPartOf": { "@id": "https://www.dynamicssquare.ca/#website" },
                "about": { "@id": "https://www.dynamicssquare.ca/#organization" },
                "primaryImageOfPage": { "@id": "https://www.dynamicssquare.ca/#primaryimage" },
                "datePublished": "2022-08-31T06:09:16+00:00",
                "dateModified": "2022-11-07T09:15:37+00:00",
                "description": "We are CRM and ERP consultants in Canada who help your business thrive by implementing the best CRM, ERP, and Microsoft cloud solutions for your specific needs.",
                "breadcrumb": { "@id": "https://www.dynamicssquare.ca/#breadcrumb" },
                "inLanguage": "en-US",
                "potentialAction": [{ "@type": "ReadAction", "target": ["https://www.dynamicssquare.ca/"] }]
            },
            { "@type": "BreadcrumbList", "@id": "https://www.dynamicssquare.ca/#breadcrumb", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home" }] }
        ]
      })
           }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context" : "http://schema.org",
          "@type" : "Organization",
          "name" : "Dynamics Square Canada Ltd.",
          "description" : "Helping your business to grow at scale by providing unbiased advice to select the right ERP and CRM solutions.",
          "image" : "https://www.dynamicssquare.ca/img/dynamicssqure-logo.svg",
          "alternateName" : "Dynamics Square Software company in Ontario, Canada",
          "telephone" : "+12898072802, +17786523656",
          "email" : "info@dynamicssquare.com",
          "address" : {
          "@type" : "PostalAddress",
          "streetAddress" : "800 Steeles Ave W",
          "addressLocality" : "800 Steeles Ave W, #B10155 Thornhill, Ontario L4J 7L23E2",
          "addressRegion" : "Ontario",
          "addressCountry" : "Canada",
          "postalCode" : "L4J 7L23E2"
          },
            "brand":{
            "@type":"Brand",
            "name":"Dynamics Square Canada Ltd.",
            "logo": "https://www.dynamicssquare.ca/img/dynamicssqure-logo.svg"
           },
          "aggregateRating": 
              {
                "@type": "AggregateRating",
              "ratingValue": "4.2",
              "reviewCount": "18"
            },
          "url" : "https://www.dynamicssquare.ca/",
          "sameAs" : [
          "https://www.facebook.com/dynamicssquareca",
          "https://twitter.com/dsquare_ca",
          "https://www.linkedin.com/company/dynamics-square-canada/",
          "https://www.youtube.com/c/DynamicsSquare"
          ]
          })
           }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "Headline": "Assisting you in successfully leveraging the power of CRM, ERP, and cloud technology.",
          "description": "You have a goal, a vision or an issue to address. We have 140+ Microsoft certified consultants, creative thinkers, and developers proactively ready to support in your digital transformation journey. Our mission is to alleviate your problems and make your vision a reality.",
          "Keywords" :["erp consultants canada","crm consultancy","d365 business central","crm expert online","d365 for finance","dynamics crm implementation","d365 field service","crm implementation services"]
      })
           }}
      />
       <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context" : "https://schema.org",
          "@type" : "WebSite",
          "name" : "Dynamics Square Canada Ltd.",
          "alternateName" : "Dynamics Square Software company in Ontario, Canada",
          "url" : "https://www.dynamicssquare.ca/"
          })
           }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context" : "http://schema.org",
          "@type" : "localBusiness",
          "name" : "Dynamics Square Canada Ltd.",
          "description" : "Helping your business to grow at scale by providing unbiased advice to select the right ERP and CRM solutions.",
          "image" : "https://www.dynamicssquare.ca/img/dynamicssqure-logo.svg",
          "alternateName" : "Dynamics Square Software company in Ontario, Canada",
          "telephone" : "+12898072802, +17786523656",
          "email" : "info@dynamicssquare.com",
          "priceRange": "$$$-$$$",
          "address" : {
          "@type" : "PostalAddress",
          "streetAddress" : "800 Steeles Ave W",
          "addressLocality" : "800 Steeles Ave W, #B10155 Thornhill, Ontario L4J 7L23E2",
          "addressRegion" : "Ontario",
          "addressCountry" : "Canada",
          "postalCode" : "L4J 7L23E2"
          },
           "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 54.63996281303019, 
                  "longitude": -103.34901546818584
                },
                
            "brand":{
            "@type":"Brand",
            "name":"Dynamics Square Canada Ltd.",
            "logo": "https://www.dynamicssquare.ca/img/dynamicssqure-logo.svg"
           },
          "aggregateRating": 
              {
                "@type": "AggregateRating",
                "ratingValue": "4.2",
              "reviewCount": "18"
            },
              
              "openingHoursSpecification": [
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": [
                      "Monday",
                      "Tuesday",
                      "Wednessday",
                      "Thursday",
                      "Friday"
                    ],
                    "opens": "08:00",
                    "closes": "5:00"
                  },
                   {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": "Saturday - closed"
                    
                
                  },
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": "Sunday - Closed"
                  
                  }
                  ],
              
                
          "url" : "https://www.dynamicssquare.ca/",
          "sameAs" : [
          "https://www.facebook.com/dynamicssquareca",
          "https://twitter.com/dsquare_ca",
          "https://www.linkedin.com/company/dynamics-square-canada/",
          "https://www.youtube.com/c/DynamicsSquare"
          ]
          })
           }}
      />
      </Head>
    
   <section id="hero" className="hero hero-1">

        <div className="container">
          <div className="row">
            <div className="col-lg-5  align-self-center">
              <h1>
              Canada's Leading <br /> Microsoft Dynamics <br />Partner
              </h1>
              <p>We simplify your business and bring scalable growth through innovative Microsoft Cloud solutions. Get your business problems solved today.</p>
              <div>
                <div className="text-center text-lg-start btn-welcome">
                  <a
                    data-bs-toggle="modal"
                    href="#exampleModal"
                    className="btn-get-started scrollto"
                  >
                    <span>Talk to Expert</span>
                  </a>
                </div>
                
                <div className="bnner_inline_images">
                  <ul>
                    <li>
                      <img
                        src="/img/Microsoft Partner black.png"
                        alt="Microsoft Partner black.png"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="col-lg-7 hero-img hero-img-home"
              data-aos="zoom-out"
              data-aos-delay="200"
            >
              <Image
                    src="/img/banner-head-image.png"
                    alt="business-center-logo"
                    className="icon"
                    width={746}
                    height={517}
                  />
              {/* <Spline className='nn' scene="https://prod.spline.design/mMw4apDfV4WLm7kV/scene.splinecode" />  */}
              {/* <div className="banner-service-wraper">
                <ul className="list-n fist-m">
                  <li>
                    <div className="list-n-wrp">
                      <a href="/products/dynamics-365-business-central/">
                        <img
                          src="/img/business-center-logo.svg"
                          alt="business-center-logo"
                        />
                        <span>
                          Business <br />
                          Central
                        </span>
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="list-n-wrp">
                      <a href="/products/microsoft-azure/">
                        <img
                          src="/img/azur-icons.svg"
                          alt="azur-icons"
                        />
                        <span>Azure</span>
                      </a>
                    </div>
                  </li>
                </ul>
                <ul className="list-n fist-m-2">
                  <li>
                    <div className="list-n-wrp">
                      <a href="/products/microsoft-power-apps/">
                        <img
                          src="/img/Powerapps_power-apps.svg"
                          alt="Powerapps_power-apps"
                        />
                        <span>
                          Power
                          <br /> Apps
                        </span>
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="list-n-wrp">
                      <a href="/products/microsoft-dynamics-365-finance/">
                        <img
                          src="/img/finace-icons.svg"
                          alt="finace-icons"
                        />
                        <span>Finance</span>
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="list-n-wrp">
                      <a href="/products/microsoft-dynamics-365-customer-service/">
                        <img
                          src="/img/customer-service-icons.svg"
                          alt="customer-service-icons"
                        />
                        <span>
                          Customer
                          <br /> Service
                        </span>
                      </a>
                    </div>
                  </li>
                </ul>
                <ul className="list-n  fist-m-3">
                  <li>
                    <div className="list-n-wrp">
                      <a href="/products/dynamics-365-supply-chain-management/">
                        <img
                          src="/img/supplychain-logo.svg"
                          alt="supplychain-logo"
                        />
                        <span>
                          Supply
                          <br />
                          Chain
                        </span>
                      </a>
                    </div>
                  </li>
                  <li className="list-n-wrp-size">
                    <div className="list-n-wrp">
                      <a href="/products/microsoft-dynamics-365/">
                        <img
                          src="/img/ds-365.png"
                          alt="Microsoft Dynamics 365 Partner"
                        />
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="list-n-wrp">
                      <a href="/products/microsoft-dynamics-365-field-service/">
                        <img
                          src="/img/feald-service-logo.svg"
                          alt="feald-service-logo"
                        />
                        <span>
                          Field <br /> Service
                        </span>
                      </a>
                    </div>
                  </li>
                </ul>
                <ul className="list-n  fist-m-2">
                  <li>
                    <div className="list-n-wrp">
                      <a href="/products/microsoft-power-bi/">
                        <img
                          src="/img/powerbilogo.png"
                          alt="powerbilogo"
                        />
                        <span>Power BI</span>
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="list-n-wrp">
                      <a href="/products/microsoft-dynamics-365-marketing/">
                        <img src="/img/marketing.svg" alt="marketing" />
                        <span>Marketing</span>
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="list-n-wrp">
                      <a href="/products/microsoft-dynamics-365-sales/">
                        <img
                          src="/img/Sales_scalable.svg"
                          alt="Sales_scalable"
                        />
                        <span>Sales</span>
                      </a>
                    </div>
                  </li>
                </ul>
                <ul className="list-n fist-m">
                  <li>
                    <div className="list-n-wrp">
                      <a href="/products/dynamics-365-human-resources/">
                        <img
                          src="/img/human-resource.svg"
                          alt="human-resource"
                        />
                        <span>
                          Human <br /> Resources
                        </span>
                      </a>
                    </div>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="services">
        <div className="container" data-aos="fade-up">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-8">
              <header className="section-header">
                <h2>Your Trusted & Dedicated Microsoft Dynamics Partner in Growth</h2>
                <p>Explore business apps to digitally transform your business processes.</p>
              </header>
            </div>
          </div>

          <div className="row gy-2">
            <div className="col-lg-4 col-md-6">
              <div className="service-box  service-box-blue">
                <div className="top">
                  <img
                    src="/img/business-center-logo.svg"
                    alt="business-center-logo"
                    className="icon"
                  />
                  <h3>
                    Dynamics 365 <br /> Business Central
                  </h3>
                </div>
                <p>Connect and automate your finance and supply chain, drive customer engagement, unlock productivity and boost your sales with Dynamics 365 Business Central's strong abilities of analytics, reporting, and visualizations.</p>
                <Link  href="/products/dynamics-365-business-central/">
                <a
                 
                  className="read-more"
                >
                  <span>Learn More...</span>
                </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-box service-box-blue">
                <div className="top">
                  <img
                    src="/img/finace-icons.svg"
                    alt="finace-icons"
                    className="icon"
                  />
                  <h3>
                    Dynamics 365 <br />
                    Finance
                  </h3>
                </div>
                <p>Automate all your financial practices and proactively minimize your investment costs and financial complexity with built-in AI-driven analytics, insights, and reporting capabilities using enterprise-grade Dynamics 365 Finance solution.</p>
               <Link href="/products/microsoft-dynamics-365-finance/">
               <a
                 
                  className="read-more"
                >
                  <span>Learn More...</span>
                </a>
               </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-box service-box-blue">
                <div className="top">
                  <img
                    src="/img/supplychain-logo.svg"
                    alt="supplychain-logo"
                    className="icon"
                  />
                  <h3>
                    Dynamics 365 <br />
                    Supply Chain
                  </h3>
                </div>
                <p>
                Smoothen process flow, get real-time data storage & transfer mechanisms across your organization. Increase operational efficiency by automating your entire supply chain practices with D365 Supply Chain.
                </p>
                <Link href="/products/dynamics-365-supply-chain-management/">
                <a
                  
                  className="read-more"
                >
                  <span>Learn More...</span>
                </a>
                </Link>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="service-box service-box-blue">
                <div className="top">
                  <img
                    src="/img/Sales_scalable.svg"
                    alt="Sales_scalable"
                    className="icon"
                  />
                  <h3>
                    Dynamics 365 <br />
                    Sales
                  </h3>
                </div>
                <p>
                Sales are not easy to manage. With D365 Sales' omnichannel facility, you can seamlessly drive innovation, maximize profit, predict, and manage your sales pipeline with real-time AI-driven insights, and close deals with lightning speed.
                </p>
                <Link href="/products/microsoft-dynamics-365-sales/">
                <a className="read-more"
                >
                  <span>Learn More...</span>
                </a>
                </Link>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div className="service-box service-box-blue">
                <div className="top">
                  <img
                    src="/img/powerbilogo.png"
                    alt="Powerapps_power-apps"
                    className="icon"
                  />
                  <h3>
                    Microsoft <br />
                    Power BI
                  </h3>
                </div>
                <p>Visual insights are the key to growth in today's business world. Streamline all your business processes and continuously monitor them with Power BI's real-time visual insights and key analytics to take decisions in advance.</p>
               <Link href="/products/microsoft-power-bi/" >
               <a className="read-more">
                  <span>Learn More...</span>
                </a>
               </Link>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <div className="service-box service-box-blue">
                <div className="top">
                  <img
                    src="/img/Azure-IoT.svg"
                    alt="Azure-IoT"
                    className="icon"
                  />
                  <h3>
                    Internet Of <br />
                    Things
                  </h3>
                </div>
                <p>IoT (internet of things) and IIoT (Industrial Internet of Things) are revolutionizing industries and businesses in every sector. Connect all your devices using Azure IoT for smoother data trade and ensure better productivity.</p>
               <Link  href="/products/azure-iot-internet-of-things/">
               <a className="read-more">
                  <span>Learn More...</span>
                </a>
               </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="services" className="services bg-shape">
        <div className="container" data-aos="fade-up">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-8">
              <header className="section-header">
                <h2>Microsoft Cloud for Industries</h2>
                <p>Take your business to new heights and become an industry leader by implementing powerful Microsoft Business Apps.</p>
              </header>
            </div>
          </div>
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6">
              <div className="figer-box">
                <div className="top">
                  <img
                    src="/img/StartUp-icons.png"
                    width="50"
                    height="50"
                    className="boxshadow"
                    alt="StartUp-icons"
                  />
                  <h3>Startups</h3>
                </div>
                <div className="over-layer-cont">
                  <h3>Startups</h3>
                  <p>Bring people closer, ideate, develop, scale, build quickly, and speed up the overall process to grow your startup without limits with Microsoft Cloud solutions.</p>
                  <Link href="/industries/startups/">
                  <a className="boxshadow kallyas-button kallyas-button-nn">
                    Learn More
                  </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="figer-box">
                <div className="top">
                  <img
                    src="/img/Not for Profit--icons.png"
                    width="50"
                    height="50"
                    className="boxshadow"
                    alt="Not for Profit"
                  />
                  <h3>Not for Profit</h3>
                </div>
                <div className="over-layer-cont">
                  <h3>Not for Profit</h3>
                  <p>Implement an efficient and highly configured AI-driven & cloud-based Dynamics 365 solution to support your non-profit goals across your non-profit hub.</p>
                  <Link href="/industries/microsoft-cloud-for-nonprofit/">
                  <a className="boxshadow kallyas-button kallyas-button-nn">Learn More</a></Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="figer-box">
                <div className="top">
                  <img
                    src="/img/E-Commerce-icons.png"
                    width="50"
                    height="50"
                    className="boxshadow"
                    alt="StartUp-icons"
                  />
                  <h3>E-Commerce</h3>
                </div>
                <div className="over-layer-cont">
                  <h3>E-Commerce</h3>
                  <p>Ensure resilience, meet demands, provide customer fulfilment, and secure transactions for seamless growth with efficient Microsoft Cloud for e-Commerce.</p>
                  <Link href="/industries/ecommerce/"><a className="boxshadow kallyas-button kallyas-button-nn">Learn More</a></Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="figer-box">
                <div className="top">
                  <img
                    src="/img/Manufacturing & Distribution-icons.png"
                    width="50"
                    height="50"
                    className="boxshadow"
                    alt="StartUp-icons"
                  />
                  <h3>Manufacturing & Distribution</h3>
                </div>
                <div className="over-layer-cont">
                  <h3>Manufacturing & Distribution</h3>
                  <p>Take your planning, sourcing, production, distribution, sales, service, and overall manufacturing to a whole new level with Microsoft Cloud for manufacturing.</p>
                  <Link href="/industries/microsoft-cloud-for-manufacturing/">
                  <a
                  
                    className="boxshadow kallyas-button kallyas-button-nn"
                  >
                    Learn More
                  </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="figer-box">
                <div className="top">
                  <img
                    src="/img/Professional Services-icons.png"
                    width="50"
                    height="50"
                    className="boxshadow"
                    alt="StartUp-icons"
                  />
                  <h3>Professional Services</h3>
                </div>
                <div className="over-layer-cont">
                  <h3>Professional Services</h3>
                  <p>To cope with evolution, businesses need innovation and tailored solutions at the core to help them maximize outcomes. Let's configure specific solutions for your niche with full professionalism.</p>
                  <Link   href="/industries/professional-services/">
                  <a className="boxshadow kallyas-button kallyas-button-nn">
                    Learn More
                  </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="figer-box">
                <div className="top">
                  <img
                    src="/img/Food & Beverages-icons.png"
                    width="50"
                    height="50"
                    className="boxshadow"
                    alt="StartUp-icons"
                  />
                  <h3>Food & Beverages</h3>
                </div>
                <div className="over-layer-cont">
                  <h3>Food & Beverages</h3>
                  <p>Centrally manage product information, introduce new food products and services quickly, and improve safety, quality, and productivity with D365 for the F&B industry.</p>
                  <Link   href="/industries/food-and-beverages/">
                  <a className="boxshadow kallyas-button kallyas-button-nn">
                    Learn More
                  </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="Health-Check">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-8">
              <header className="section-header">
                <h2>Microsoft Dynamics Efficiency Audit</h2>
                <p>Discover solutions that fit you and upgrade your business capabilities to drive continuous growth with our free Dynamics 365 system health check.</p>
              </header>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 aos-init align-self-center">
              <Image
                src="/img/system-health-check.png" 
                className="system-health-check"
                alt="Dynamics 365 System Health Check"
                width={553}
                height={531}
              />
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0 content align-self-center">
              <div className="content-icons-modil-1">
                <div className="content-inner-moil-1 content-inner-moil-3">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-check2"></i>
                    </div>
                  </div>
                  <div className="cintent-right cintent-right-001">
                    <p>
                    Evaluating your current business needs and future considerations, we drive a system check to analyze your concurrent system upgrading needs while supporting your future potential.
                    </p>
                  </div>
                </div>
                <div className="content-inner-moil-1 content-inner-moil-3">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-check2"></i>
                    </div>
                  </div>
                  <div className="cintent-right cintent-right-001">
                    <p>
                    Our team of experienced Dynamics 365 consultants can diagnose your system to identify if it needs an upgrade and suggest the best fit suited to your customized business needs. 
                    </p>
                  </div>
                </div>
                <div className="content-inner-moil-1 content-inner-moil-3">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-check2"></i>
                    </div>
                  </div>
                  <div className="cintent-right cintent-right-001">
                    <p>
                    Post system analysis, the decision remains whether to go ahead with the new system configurations or stay with the existing one. Not the other way around. Also, you are free to schedule a Microsoft Dynamics 365 Demo to upgrade your legacy system's capabilities. 
                    </p>
                  </div>
                </div>
              </div>
              <br />
              <Link href="/free-dynamics-365-system-health-check/">
              <a
                className="read-more"
                data-aos="fade-left"
                data-aos-delay="500"
              >
               Get Free System Health Check Now!
                <i className="bi bi-long-arrow-right"></i>
              </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* <section id="counts" className="counts counts-bg">
        <div className="container" data-aos="fade-up">
          <div className="row gy-4">
            <div className="col-lg-3 col-md-6">
              <div className="count-box">
                <div className="count-box-image">
                  <img
                    src="/img/Icon awesome-user-check.png"
                    alt="awesome-user-check"
                    width="48"
                    height="48"
                  />
                </div>
                <div className="count-box-info">
                  <span>
                    <AnimatedNumber
                      component="text"
                      value={135}
                      style={{
                        transition: "0.8s ease-out",
                        transitionProperty: "background-color, color, opacity",
                      }}
                      duration={300}
                    />
                  </span>
                  <span className="inner">+</span>
                  <p>Microsoft Consultants</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="count-box">
                <div className="count-box-image">
                  <img
                    src="/img/Icon awesome-award.png"
                    alt="Icon awesome-award"
                    width="48"
                    height="48"
                  />
                </div>
                <div className="count-box-info">
                  <span>
                    <AnimatedNumber
                      component="text"
                      value={11}
                      style={{
                        transition: "0.8s ease-out",
                        transitionProperty: "background-color, color, opacity",
                      }}
                      duration={300}
                    />
                  </span>
                  <span className="inner">+</span>
                  <p>Years of Expertise</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="count-box">
                <div className="count-box-image">
                  <img
                    src="/img/Icon awesome-globe-asia.png"
                    alt="Icon awesome-globe-asia"
                    width="48"
                    height="48"
                  />
                </div>
                <div className="count-box-info">
                  <span>
                    <AnimatedNumber
                      component="text"
                      value={6}
                      style={{
                        transition: "0.8s ease-out",
                        transitionProperty: "background-color, color, opacity",
                      }}
                      duration={300}
                    />
                  </span>
                  <span className="inner">+</span>
                  <p>Global Presence</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="count-box">
                <div className="count-box-image">
                  <img
                    src="/img/Icon ionic-md-thumbs-up.png"
                    alt="awesome-user-check"
                    width="48"
                    height="48"
                  />
                </div>
                <div className="count-box-info">
                  <span>
                    <AnimatedNumber
                      component="text"
                      value={99}
                      style={{
                        transition: "0.8s ease-out",
                        transitionProperty: "background-color, color, opacity",
                      }}
                      duration={300}
                    />
                  </span>
                  <span className="inner">%</span>
                  <p>Customer Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section id="testimonials" className="testimonials">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="sec-title">
                <h2>
                  What our clients have <br /> to say about us
                </h2>
              </div>
              <div className="testimonials-slider swiper">
                <div className="swiper-wrapper">
                  <Swiper
                    autoplay={{
                      delay: 10000,
                      disableOnInteraction: false,
                    }}
                    slidesPerView={1}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[Autoplay, FreeMode, Pagination]}
                    className="mySwiper test-client-page"
                  >
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <div className="testimonial-item">
                          <div className="profile">
                            
                            <div className="imginner">
                              
                            </div>
                            <p>
                              We selected them because their communication is
                              excellent, their response times are outstanding,
                              and their ability to solve our problems through
                              various development projects has helped us
                              leverage our ERP in a way that would have taken us
                              much longer and with much greater expense. In my
                              opinion I would rank them as a 5 out of 5.
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      {" "}
                      <div className="swiper-slide">
                        <div className="testimonial-item">
                          <div className="profile">
                            
                            <div className="imginner">
                              
                            </div>
                            <p>
                              The team at Dynamics Square are very dedicated,
                              flexible, and attentive and will take care of all
                              your IT needs in a very efficient and timely
                              manner. Highly recommended!
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="swiper-slide">
                        <div className="testimonial-item">
                          <div className="profile">
                            
                            <div className="imginner">
                              
                            </div>
                            <p>
                              We probed three MS Dynamic Partners, and one of
                              the key factors in making our decision to go ahead
                              with Dynamics Square was the outstanding customer
                              service experience.
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
               
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="testimonials-bg">
                <div className="testimonials-rigt-iner">
                  <Image
                    src="/img/testmonial-side-pic.png"
                    className="testmonial-side-pic"
                    alt="testmonial-side-pic"
                    width={802}
                    height={764}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> 

      {/* <section id="clients" className="clients">
        <div className="container" data-aos="fade-up">
          <div className="clients-slider swiper">
            <div className="swiper-wrapper align-items-center">
              <Swiper
                autoplay={{
                  delay: 10000,
                  disableOnInteraction: true,
                }}
                slidesPerView={2}
                spaceBetween={10}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 5,
                    spaceBetween: 50,
                  },
                }}
                modules={[Autoplay]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="swiper-slide">
                    <img
                      src="/img/clients/JVEquip_logo.png"
                      className="img-fluid"
                      alt="JVEquip_logo"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="swiper-slide">
                    <img
                      src="/img/clients/Spectra-Aluminum-logo-new.png"
                      className="img-fluid"
                      alt="Spectra-Aluminum-logo"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <img
                      src="/img/clients/MexiLand_logos.png"
                      className="img-fluid"
                      alt="MexiLand_logos"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="swiper-slide">
                    <img
                      src="/img/clients/VidPro_logo.png"
                      className="img-fluid"
                      alt="VidPro_logo"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <img
                      src="/img/clients/PLASP-LOGO.png"
                      className="img-fluid"
                      alt="PLASP-LOGO"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <img
                      src="/img/clients/SOS-MANUFACTURING-LOGO.png"
                      className="img-fluid"
                      alt="SOS-MANUFACTURING-LOGO"
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section> */}

      <section id="casestudys" className="casestudys ">
        <div className="container" data-aos="fade-up">
          <div className="row  gy-4">
            <div className="col-lg-5 align-self-center">
              <Image
                src="/img/case-study-side-banner.png"
                alt="case-study-side-banner"
                width={640}
                height={592}
              />
            </div>
            <div className="col-lg-1 align-self-center"></div>
            <div className="col-lg-6 align-self-center">
              <div className="sec-title">
                <h2>Glimpse Of What We Delivered</h2>
                <p>Dynamics 365 Case Stories</p>
              </div>
              <Swiper
                autoplay={{
                  delay: 10000,
                  disableOnInteraction: false,
                }}
                slidesPerView={1}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper casestudys-sled-1"
              >
                <SwiperSlide>
                  <div className="casestudys-slider-item">
                    <div className="profile mt-auto">
                      
                      <p>
                        Streamline Manufacturing & Accounting with D365 Business
                        Central On-Premise
                      </p>
                      {/* <div className="case-button">
                        <a
                          href="/case-studies/dmic/"
                          className="btn btn-md btn-custom-1"
                        >
                          Read More
                        </a>
                      </div> */}
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="casestudys-slider-item">
                    <div className="profile mt-auto">
                      
                      <p>
                        Implemented Custom EFT Module to improvise Payment
                        Methods
                      </p>
                     
                      {/* <div className="case-button">
                        <a
                          href="/case-studies/spectra/"
                          className="btn btn-md btn-custom-1"
                        >
                          Read More
                        </a>
                      </div> */}
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="casestudys-slider-item">
                    <div className="profile mt-auto">
                      
                      <p>
                        Implementation of Microsoft Dynamics Business Central
                        Cloud
                      </p>
                     
                      {/* <div className="case-button">
                        <a
                          href="/case-studies/shimco/"
                          className="btn btn-md btn-custom-1"
                        >
                          Read More
                        </a>
                      </div> */}
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section> 
   </>
  )
}
