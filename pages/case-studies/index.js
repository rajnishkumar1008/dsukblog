import Head from 'next/head';
import Image from 'next/image';
import Script from 'next/script';
import Link from 'next/link';
const CaseStudyList = () => {
  return (
    <>
      <Head>
      <title>Microsoft Dynamics 365 Case Studies | Dynamics Square</title>
<meta name="description" content="Discover our client's case studies and see how we care about them from start to finish. We have worked with them to provide long lasting Dynamics 365 Support."/>
<link rel="canonical" href="https://www.dynamicssquare.ca/case-studies/" />
      </Head>
      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1 align-self-center">
              <h1>Case Studies</h1>
              <p>
                Check out some of our case studies to see how Dynamics 365 has
                made a difference for our clients.
              </p>
              {/* <div>
                <div className="text-center text-lg-start">
                  <a href="#" className="btn-get-started scrollto">
                    <span>Borwse List</span>
                  </a>
                </div>
              </div> */}
            </div>
            <div className="col-lg-6 align-self-center">
              <img
                src="/img/case-icons-list.png"
                alt="case-icons-list"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div
                className="nav flex-column nav-pills me-3 side-bar-common-tabs"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <button
                  className="nav-link active"
                  id="v-pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-profiless"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-profile"
                  aria-selected="true"
                >
                  All
                </button>
                {/* <button
                  className="nav-link"
                  id="v-pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-homes"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-home"
                  aria-selected="false"
                >
                  Upgrade
                </button>
                <button
                  className="nav-link"
                  id="v-pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-profiles"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-profile"
                  aria-selected="false"
                >
                  Implementation
                </button>
                <button
                  className="nav-link"
                  id="v-pills-messages-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-messagess"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-messages"
                  aria-selected="false"
                >
                  Support
                </button> */}
              </div>
            </div>
            <div className="col-lg-9">
              <div className="tab-content" id="v-pills-tabContent">
              <div
                  className="tab-pane fade show active"
                  id="v-pills-profiless"
                  role="tabpanel"
                  aria-labelledby="v-pills-home-tab"
                >
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="commen-box-2 commen-box-9">
                        <div className="icons icons-0102">
                          <img
                            src="/img/case-studies-4.jpg"
                            alt="cs-spectra-logo"
                          />
                        </div>
                        <div className="commen-boc-2-info">
                          <p>
                          Implemented Custom EFT Module to improvise Payment Methods
                          </p>
                        </div>
                        <div className="btn-003">
                          <a
                            href="/case-studies/dynamics-nav13-eft-implementation/"
                            className="btn btn md btn-danger"
                          >
                            Read Case Study
                          </a>
                        </div>
                      </div>
                    </div>
              
                    <div className="col-lg-6">
                      <div className="commen-box-2 commen-box-9">
                        <div className="icons icons-0102">
                          <img src="/img/case-studies-7.jpg" alt="cs-shimco-logo" />
                        </div>
                        <div className="commen-boc-2-info">
                          <p>
                          Implementation of Microsoft Dynamics Business Central Cloud
                          </p>
                        </div>
                        <div className="btn-003">
                          <a
                            href="/case-studies/nav13-to-d365-business-central-upgrade/"
                            className="btn btn md btn-danger"
                          >
                            Read Case Study
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-homes"
                  role="tabpanel"
                  aria-labelledby="v-pills-home-tab"
                >
                
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-profiles"
                  role="tabpanel"
                  aria-labelledby="v-pills-profile-tab"
                >
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="commen-box-2 commen-box-9">
                        <div className="icons icons-0102">
                          <img
                            src="/img/case-studies-4.jpg"
                            alt="Spectra-Aluminum-logo"
                          />
                        </div>
                        <div className="commen-boc-2-info">
                          <p>
                          Implemented Custom EFT Module to improvise Payment Methods
                          </p>
                        </div>
                        <div className="btn-003">
                          <a
                            href="/case-studies/dynamics-nav13-eft-implementation/"
                            className="btn btn md btn-danger"
                          >
                            Read Case Study
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-messagess"
                  role="tabpanel"
                  aria-labelledby="v-pills-messages-tab"
                >
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="commen-box-2 commen-box-9">
                        <div className="icons icons-0102">
                          <img src="/img/case-studies-7.jpg" alt="cs-shimco-logo" />
                        </div>
                        <div className="commen-boc-2-info">
                          <p>
                          Implementation of Microsoft Dynamics Business Central Cloud
                          </p>
                        </div>
                        <div className="btn-003">
                          <a
                            href="/case-studies/nav13-to-d365-business-central-upgrade/"
                            className="btn btn md btn-danger"
                          >
                            Read Case Study
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-settings"
                  role="tabpanel"
                  aria-labelledby="v-pills-settings-tab"
                >
                  4
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-settingss"
                  role="tabpanel"
                  aria-labelledby="v-pills-settings-tab"
                >
                  5
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default CaseStudyList;
