import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

export async function getServerSideProps() {
  const res = await fetch(process.env.BACKEND_URL + "/api/allblog");
  const blogs = await res.json();

  const business = await fetch(
    "https://blognew.dynamicssquare.com/api/blog/category/business-central"
  );
  const businesscentral = await business.json();

  return { props: { blogs, businesscentral } };
}

function Blogshome({ blogs, businesscentral }) {
  return (
    <div>
      <Head>
        <title>Blog System</title>
        <meta
          name="description"
          content="All Modern Stylish Product Men|Female"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="text-gray-600 body-font">    
          {blogs &&
            blogs.map((item, i) => (
              <div className="flex flex-wrap -m-4" key={i}>
                <div className="blogs-main">
                  <div className="container">
                    <div className="row g-5">
                      <div className="col-lg-6">
                        <div className="blogs-lates">
                          <div className="blog-sian">
                            <span>Latest</span>
                          </div>
                          <h1>
                            <Link href={`/blog/${item.title_slug}`}>
                              <a>{item.title}</a>
                            </Link>
                          </h1>
                          <div className="blogs-info-list">
                            <span className="user">
                              <a href="">
                                <i className="bi bi-person-circle"></i>{" "}
                                {item.author}
                              </a>
                            </span>
                            <span className="date">
                              <a href="">
                                <i className="bi bi-calendar"></i>{" "}
                                {item.publish_date}
                              </a>
                            </span>
                            <span className="time">
                              <a href="">
                                <i className="bi bi-clock"></i> {item.read_time}
                              </a>
                            </span>
                            <span className="cate">
                              <a href="">
                                <i className="bi bi-app"></i> {item.category}
                              </a>
                            </span>
                          </div>
                          <div className="b-card-info">
                            <p>{item.short_description}</p>
                            <div className="page-link-read">
                              <Link href={`/blog/${item.title_slug}`}>
                                <a>
                                  Read More <span>{">"}</span>
                                </a>
                              </Link>
                            </div>
                          </div>
                        </div>

                        <div className="prom-bann">
                          <Link href={`/blog/${item.title_slug}`}>
                            <a>
                              <img src={item.image} alt={item.title} />
                            </a>
                          </Link>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="blogs-side">
                          <div className="blog-side-head">
                            <div className="left">
                              <img
                                src="/img/business-center-logo.svg"
                                alt="bg-pic"
                              />
                            </div>
                            <div className="right">
                              Dynamics 365 <br />
                              <span>Business Central</span>
                            </div>
                          </div>

                          {businesscentral &&
                            businesscentral.map((businessitem, i) => (
                              <div
                                className="blogs-info-list blogs-info-list-side"
                                key={i}
                              >
                                <h3>
                                  <Link
                                    href={`/blog/${businessitem.title_slug}`}
                                  >
                                    <a>{businessitem.title}</a>
                                  </Link>
                                </h3>
                                <span className="user">
                                  <a href="">
                                    <i className="bi bi-person-circle"></i>{" "}
                                    {businessitem.author}
                                  </a>
                                </span>
                                <span className="date">
                                  <a>
                                    <i className="bi bi-calendar"></i>{" "}
                                    {businessitem.publish_date}
                                  </a>
                                </span>
                                <span className="time">
                                  <a>
                                    <i className="bi bi-clock"></i>{" "}
                                    {businessitem.read_time}
                                  </a>
                                </span>
                                <span className="cate">
                                  <a href="">
                                    <i className="bi bi-app"></i>{" "}
                                    {businessitem.category}
                                  </a>
                                </span>
                              </div>
                            ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mid-sec">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-6 align-self-center">
                        <div className="blogs-lates">
                          <div className="blog-sian">
                            <span>Latest</span>
                          </div>
                          <h2>
                          <Link href={`/blog/${item.title_slug}`}>
                              <a>{item.title}</a>
                            </Link>
                          </h2>
                          <div className="blogs-info-list">
                          <span className="user">
                              <a href="">
                                <i className="bi bi-person-circle"></i>{" "}
                                {item.author}
                              </a>
                            </span>
                            <span className="date">
                              <a>
                                <i className="bi bi-calendar"></i>{" "}
                                {item.publish_date}
                              </a>
                            </span>
                            <span className="time">
                              <a>
                                <i className="bi bi-clock"></i> {item.read_time}
                              </a>
                            </span>
                            <span className="cate">
                              <a href="">
                                <i className="bi bi-app"></i> {item.category}
                              </a>
                            </span>
                          </div>
                          <div className="b-card-info">
                            <p>{item.short_description}</p>
                            <div className="page-link-read">
                              <Link href={`/blog/${item.title_slug}`}>
                                <a>
                                  Read More <span>{">"}</span>
                                </a>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 ">
                        <div className="form-subscriber-card">
                          <div className="sub-head">
                            <h3>Join our newsletter</h3>
                            <p>
                              Engaging stories and exclusive data, designed for
                              our best customers. We only send one issue each
                              month, so we try to make it useful.
                            </p>
                          </div>
                          <form className="sbb-form">
                            <div className="mb-3">
                              <input
                                type="email"
                                className="form-control"
                                placeholder="* Work Email"
                                name="email"
                                required
                              />
                            </div>
                            <button
                              type="submit"
                              className="btn btn-primary fomr-submit"
                            >
                              Subscribe
                            </button>
                            <div className="" role="status">
                              <span className="visually-hidden">
                                Loading...
                              </span>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="blogs-extra-new">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-3">
                        <div className="blogs-ex-side-cate">
                          <h3>Explore by Topic</h3>
                          <ul>
                            <li>
                              <a href="#">Business Central</a>
                            </li>
                            <li>
                              <a href="#">Power BI</a>
                            </li>
                            <li>
                              <a href="#">Dynamics NAV</a>
                            </li>
                            <li>
                              <a href="#">Dynamics AX</a>
                            </li>
                            <li>
                              <a href="#">Dynamics GP</a>
                            </li>
                            <li>
                              <a href="#">Updates</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-9">
                        <div className="blogs-lates blogs-lates-rept">
                          <h3>
                            <a href="/">
                              Everything You Need to Know about Power Apps
                              Pricing & Licensing
                            </a>
                          </h3>
                          <div className="blogs-info-list">
                            <span className="user">
                              <a href="/">
                                <i className="bi bi-person-circle"></i> Alice
                                Jackson
                              </a>
                            </span>
                            <span className="date">
                              <a href="/">
                                <i className="bi bi-calendar"></i> March 1, 2023
                              </a>
                            </span>
                            <span className="time">
                              <a href="/">
                                <i className="bi bi-clock"></i> 9mins read
                              </a>
                            </span>
                            <span className="cate">
                              <a href="/">
                                <i className="bi bi-app"></i> Business Central
                              </a>
                            </span>
                          </div>
                          <div className="b-card-info">
                            <p>
                              A complete solution to manage your end-to-end
                              finances, automate operations, iron out accounting
                              complexities...
                            </p>
                            <div className="page-link-read">
                              <a href="/">
                                Read More <span>{">"}</span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="blogs-lates blogs-lates-rept">
                          <h3>
                            <a href="/">
                              Everything You Need to Know about Power Apps
                              Pricing & Licensing
                            </a>
                          </h3>
                          <div className="blogs-info-list">
                            <span className="user">
                              <a href="/">
                                <i className="bi bi-person-circle"></i> Alice
                                Jackson
                              </a>
                            </span>
                            <span className="date">
                              <a href="/">
                                <i className="bi bi-calendar"></i> March 1, 2023
                              </a>
                            </span>
                            <span className="time">
                              <a href="/">
                                <i className="bi bi-clock"></i> 9mins read
                              </a>
                            </span>
                            <span className="cate">
                              <a href="/">
                                <i className="bi bi-app"></i> Business Central
                              </a>
                            </span>
                          </div>
                          <div className="b-card-info">
                            <p>
                              A complete solution to manage your end-to-end
                              finances, automate operations, iron out accounting
                              complexities...
                            </p>
                            <div className="page-link-read">
                              <a href="/">
                                Read More <span>{">"}</span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="blogs-lates blogs-lates-rept">
                          <h3>
                            <a href="/">
                              Everything You Need to Know about Power Apps
                              Pricing & Licensing
                            </a>
                          </h3>
                          <div className="blogs-info-list">
                            <span className="user">
                              <a href="/">
                                <i className="bi bi-person-circle"></i> Alice
                                Jackson
                              </a>
                            </span>
                            <span className="date">
                              <a href="/">
                                <i className="bi bi-calendar"></i> March 1, 2023
                              </a>
                            </span>
                            <span className="time">
                              <a href="/">
                                <i className="bi bi-clock"></i> 9mins read
                              </a>
                            </span>
                            <span className="cate">
                              <a href="/">
                                <i className="bi bi-app"></i> Business Central
                              </a>
                            </span>
                          </div>
                          <div className="b-card-info">
                            <p>
                              A complete solution to manage your end-to-end
                              finances, automate operations, iron out accounting
                              complexities...
                            </p>
                            <div className="page-link-read">
                              <a href="/">
                                Read More <span>{">"}</span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="blogs-lates blogs-lates-rept">
                          <h3>
                            <a href="/">
                              Everything You Need to Know about Power Apps
                              Pricing & Licensing
                            </a>
                          </h3>
                          <div className="blogs-info-list">
                            <span className="user">
                              <a href="/">
                                <i className="bi bi-person-circle"></i> Alice
                                Jackson
                              </a>
                            </span>
                            <span className="date">
                              <a href="/">
                                <i className="bi bi-calendar"></i> March 1, 2023
                              </a>
                            </span>
                            <span className="time">
                              <a href="/">
                                <i className="bi bi-clock"></i> 9mins read
                              </a>
                            </span>
                            <span className="cate">
                              <a href="/">
                                <i className="bi bi-app"></i> Business Central
                              </a>
                            </span>
                          </div>
                          <div className="b-card-info">
                            <p>
                              A complete solution to manage your end-to-end
                              finances, automate operations, iron out accounting
                              complexities...
                            </p>
                            <div className="page-link-read">
                              <a href="/">
                                Read More <span>{">"}</span>
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="pagination-main">
                          <nav aria-label="Page navigation example">
                            <ul className="pagination">
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  {"<"}
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  1
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  2
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  3
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  ...
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  {">"}
                                </a>
                              </li>
                            </ul>
                          </nav>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bootom-blogs-sub">
                  <div className="container">
                    <div className="row justify-content-center row-bg">
                      <div className="col-lg-6">
                        <div className="form-subscriber-card">
                          <div className="sub-head">
                            <h3>Join our newsletter</h3>
                            <p>
                              Engaging stories and exclusive data, designed for
                              our best customers. We only send one issue each
                              month, so we try to make it useful.
                            </p>
                          </div>
                          <form className="sbb-form">
                            <div className="mb-3">
                              <input
                                type="email"
                                className="form-control"
                                placeholder="* Work Email"
                                name="email"
                                required
                              />
                            </div>
                            <button
                              type="submit"
                              className="btn btn-primary fomr-submit"
                            >
                              Subscribe
                            </button>
                            <div className="" role="status">
                              <span className="visually-hidden">
                                Loading...
                              </span>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="xl:w-1/3 md:w-1/2 p-4">
                  <div className="border border-gray-200 p-6 rounded-lg">
                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                      <img src={item.image} />
                    </div>
                    <Link href={`/blog/${item.title_slug}`}>
                      <a>
                        <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                          {item.title}
                        </h2>
                      </a>
                    </Link>
                    <p className="leading-relaxed text-base">{item.category}</p>
                  </div>
                </div>
              </div>
            ))}
  
      </section>
    </div>
  );
}

export default Blogshome;
