import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import BlogSubscriberForm from "../../components/BlogSubscriberForm";
import styles from "../../styles/Home.module.css";
import Pagination from "../../components/Pagination";
import { paginate } from "../../helpers/paginate";
import { useState } from "react";
 
export async function getServerSideProps() {
  const res = await fetch(process.env.BACKEND_URL+"/api/allblog");
  const blogs = await res.json();

  const business = await fetch(process.env.BACKEND_URL+"/api/blog/category/business-central"
  );
  const businesscentral = await business.json();

  const categoryblog = await fetch(process.env.BACKEND_URL+"/api/blog/category"
  );
  const categoryblogs = await categoryblog.json();

  const blograndom = await fetch("https://blognew.dynamicssquare.com/api/random/allblog?page=1&per_page=2"
  );
  const blograndomblogs = await blograndom.json();

  // const blogauthor = await fetch(
  //   "https://blognew.dynamicssquare.com/api/blog/author/admin"
  // );
  // const blogauthorblogs = await blogauthor.json();

  return { props: { blogs, businesscentral, categoryblogs, blograndomblogs } };
}

function Blogshome({ blogs, businesscentral, categoryblogs, blograndomblogs }) {
  const [currentPage, setCurrentPage] = useState(1);
 const pageSize = 5;

 const onPageChange = (page) => {
   setCurrentPage(page);
 };
 const paginatedPosts = paginate(blograndomblogs, currentPage, pageSize);
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

      {blogs &&
        blogs.map((item, i) => (
          <div key={i}>
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
                         <Link href={`/blog/author/${item.author.split(" ").join("-")}`}><a>
                            <i className="bi bi-person-circle"></i>{" "}
                            {item.author}
                          </a></Link>
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
                        <Link href={`/blog/category/${item.category_slug}`}><a>
                            <i className="bi bi-app"></i> {item.category}
                          </a></Link>
                        </span>
                      </div>
                      <div className="b-card-info">
                        <p>{item.short_description.substring(0, 180)}...</p>
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
                              <Link href={`/blog/${businessitem.title_slug}`}>
                                <a>{businessitem.title}</a>
                              </Link>
                            </h3>
                            <span className="user">
                            <Link href={`/blog/author/${businessitem.author.split(" ").join("-")}`}><a>
                            <i className="bi bi-person-circle"></i>{" "}
                            {businessitem.author}
                          </a></Link>
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
                            <Link href={`/blog/category/${businessitem.category_slug}`}><a>
                            <i className="bi bi-app"></i> {businessitem.category}
                          </a></Link>
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
                        <span>Most Trending</span>
                      </div>
                      <h2>
                        <Link href={`/blog/${item.title_slug}`}>
                          <a>{item.title}</a>
                        </Link>
                      </h2>
                      <div className="blogs-info-list">
                        <span className="user">
                        <Link href={`/blog/author/${item.author.split(" ").join("-")}`}><a>
                            <i className="bi bi-person-circle"></i>{" "}
                            {item.author}
                          </a></Link>
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
                        <p>{item.short_description.substring(0, 180)}...</p>
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
                          Engaging stories and exclusive data, designed for our
                          best customers. We only send one issue each month, so
                          we try to make it useful.
                        </p>
                      </div>
                      <BlogSubscriberForm />
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
                        {categoryblogs &&
                          categoryblogs.map((cateitem, i) => (
                            <li key={i}>
                              <Link
                                href={`/blog/category/${cateitem.category_slug}`}
                              >
                                <a>{cateitem.category_name}</a>
                              </Link>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-9">
                    {paginatedPosts.map((randomitem, i) => (
                        <div className="blogs-lates blogs-lates-rept" key={i}>
                          <h3>
                          <Link href={`/blog/${randomitem.title_slug}`}>
                          <a>{randomitem.title}</a>
                        </Link>
                          </h3>
                          <div className="blogs-info-list">
                          <span className="user">
                          <a href="">
                            <i className="bi bi-person-circle"></i>{" "}
                            {randomitem.author}
                          </a>
                        </span>
                        <span className="date">
                          <a>
                            <i className="bi bi-calendar"></i>{" "}
                            {randomitem.publish_date}
                          </a>
                        </span>
                        <span className="time">
                          <a>
                            <i className="bi bi-clock"></i> {randomitem.read_time}
                          </a>
                        </span>
                        <span className="cate">
                          <Link href={`/blog/category/${randomitem.category_slug}`}><a>
                            <i className="bi bi-app"></i> {randomitem.category}
                          </a></Link>
                        </span>
                          </div>
                          <div className="b-card-info">
                            <p>{randomitem.short_description.substring(0, 180)}...</p>
                            <div className="page-link-read">
                             <Link href={`/blog/${randomitem.title_slug}`}><a>
                                Read More <span>{">"}</span>
                              </a></Link>
                            </div>
                          </div>
                        </div>
                      ))}
                         <Pagination
                          items={blograndomblogs.length}  
                           currentPage={currentPage}  
                          pageSize={pageSize}
                          onPageChange={onPageChange}
                          />
                    {/* <div className="pagination-main">
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
                    </div> */}
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
                          Engaging stories and exclusive data, designed for our
                          best customers. We only send one issue each month, so
                          we try to make it useful.
                        </p>
                      </div>
                      <BlogSubscriberForm />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Blogshome;
