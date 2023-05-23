import React from "react";
import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import parse from 'html-react-parser';
import {ShareSocial} from 'react-share-social';
import { FacebookShareButton, TwitterShareButton } from 'react-share';

function Post({ blogs,blogcat }) {
  const structuredData = JSON.stringify(blogs); // Convert the meta_image data to JSON string
  const shareUrl = `https://blognew.dynamicssquare.com/api/blog/category/microsoft-365`;
  const title = "hello";
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-24 py-24 mx-auto">
          {blogs &&
            blogs.map((item, i) => (
              <div key={i}>
             
                <Head>
                  <title>{item.meta_title}</title>
                  <meta name="description" content={item.meta_description} />
                  <meta name="viewport" content={item.meta_keyword} />
                  <link
                    rel="canonical"
                    href={`https://dynamicssquare.ca/blog/${item.title_slug}`}
                  />

                  <meta property="og:title" content={item.meta_title} />
                  <meta property="og:site_name" content="Dynamics Square" />
                  <meta property="og:url" content={`https://dynamicssquare.ca/blog/${item.title_slug}`} />
                  <meta property="og:description" content={item.meta_keyword} />
                  <meta property="og:type" content="website" />
                  <meta property="og:image" content={`${item.meta_image}`} />
                  <meta property="twitter:card" content="summary_large_image" />
                  <meta property="twitter:url" content="" />
                  <meta property="twitter:title" content={item.meta_title} />
                  <meta property="twitter:description" content={item.meta_keyword} />
                  <meta property="twitter:image" content={`${item.meta_image}`} />
                 
                  const structuredData = JSON.stringify(apiData);
    

          <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
          structuredData:item.additional_script
          })
            }}
          />

                </Head>

                <FacebookShareButton url={`https://blognew.dynamicssquare.com/api/blog/category/microsoft-365`} media={item.meta_image} quote={item.title}>
        Share on Facebook
      </FacebookShareButton>

      <TwitterShareButton url={`https://blognew.dynamicssquare.com/blog/${item.title_slug}`} media={item.meta_image} quote={item.title}>
        Share on Twitter
      </TwitterShareButton>

                <div className="blogs-inner-main">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="blogs-breadcromb">
                          <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                              <li className="breadcrumb-item">
                                <Link href="/">
                                  <a>Home</a>
                                </Link>
                              </li>
                              <li className="breadcrumb-item">
                                <Link href="/blog/">
                                  <a>Blog</a>
                                </Link>
                              </li>
                              <li className="breadcrumb-item active">
                                {item.title}
                              </li>
                            </ol>
                          </nav>
                        </div>
                      </div>
                    </div>

                    <div className="row g-5">
                      <div className="col-lg-8">
                        <div className="blogs-single-post-sec">
                          <div className="blogs-lates blogs-lates-top-head">
                            <h1>
                              <a href="">{item.title}</a>
                            </h1>
                            <div className="blogs-info-list">
                              <div className="left-list">
                                <span className="user">
                                  <a href="">
                                    <i class="bi bi-person-circle"></i> {item.author}</a>
                                </span>
                                <span className="date">
                                  <a href="">
                                    <i class="bi bi-calendar"></i> {item.publish_date}
                                  </a>
                                </span>
                                <span className="time">
                                  <a href="">
                                    <i class="bi bi-clock"></i> {item.read_time}
                                  </a>
                                </span>
                                <span className="cate">
                                  <a href="">
                                    <i class="bi bi-app"></i> {item.category}
                                  </a>
                                </span>
                              </div>

                              <div className="sociallist">
                                <a
                                  target="_blank"
                                  rel=""
                                  href="https://twitter.com/dsquare_ca"
                                  class="twitter"
                                  aria-label="visit twitter"
                                >
                                  <i class="bi bi-twitter"></i>
                                </a>
                                <a
                                  target="_blank"
                                  rel=""
                                  href="https://www.facebook.com/dynamicssquareca"
                                  class="facebook"
                                  aria-label="visit facebook"
                                >
                                  <i class="bi bi-facebook"></i>
                                </a>
                                <a
                                  target="_blank"
                                  rel=""
                                  href="https://www.linkedin.com/company/dynamics-square-canada/"
                                  class="linkedin"
                                  aria-label="visit linkedin"
                                >
                                  <i class="bi bi-linkedin"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="blogs-content">
                          {parse(
   item.description
  )}
                         

                            <div className="sociallist sociallist-bott">
                              <a
                                target="_blank"
                                rel=""
                                href="https://twitter.com/dsquare_ca"
                                class="twitter"
                                aria-label="visit twitter"
                              >
                                <i class="bi bi-twitter"></i>
                              </a>
                              <a
                                target="_blank"
                                rel=""
                                href="https://www.facebook.com/dynamicssquareca"
                                class="facebook"
                                aria-label="visit facebook"
                              >
                                <i class="bi bi-facebook"></i>
                              </a>
                              <a
                                target="_blank"
                                rel=""
                                href="https://www.linkedin.com/company/dynamics-square-canada/"
                                class="linkedin"
                                aria-label="visit linkedin"
                              >
                                <i class="bi bi-linkedin"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="prom-bann">
                          <img src="/img/blog-pic.jpg" alt="bg-pic" />
                        </div>
                      </div>
                    </div>

                    <div className="row pd-90">
                    
                    {blogcat &&

 blogcat.map((item1,i)=>(
  <div className="col-lg-6">
  <div className="blogs-lates blogs-lates-repet">
    <h3>
      <a href="/">
       {item1.title}
      </a>
    </h3>
    <div className="blogs-info-list">
    <span className="user">
                                  <a href="">
                                    <i class="bi bi-person-circle"></i> {item1.author}</a>
                                </span>
                                <span className="date">
                                  <a href="">
                                    <i class="bi bi-calendar"></i> {item1.publish_date}
                                  </a>
                                </span>
                                <span className="time">
                                  <a href="">
                                    <i class="bi bi-clock"></i> {item1.read_time}
                                  </a>
                                </span>
                                <span className="cate">
                                  <a href="">
                                    <i class="bi bi-app"></i> {item1.category}
                                  </a>
                                </span>
    </div>
    <div className="b-card-info">
      <p>
       {item1.short_description}
      </p>
      <div className="page-link-read">
        <a href={`/blog/${item1.title_slug}`}>
          Read More <span>{">"}</span>
        </a>
      </div>
    </div>
  </div>
</div>
 ))}


                     
      
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
              </div>
            ))}
        </div>
      </section>
    </div>
  );
}
export async function getServerSideProps(context) {
  let slug = context.query.slug;
  console.log(slug);
  const res = await fetch(
    "https://blognew.dynamicssquare.com/api/blog_details/" + slug
    
  );
  const res1=await fetch('https://blognew.dynamicssquare.com/api/blog/category/microsoft-365');
  const blogcat= await res1.json();
  const blogs = await res.json();
  return { props: { blogs,blogcat } };
}
export default Post;
