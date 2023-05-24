import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import BlogSubscriberForm from "../../../components/BlogSubscriberForm";

export async function getServerSideProps(context) {
  let slug = context.query.slug;
  const res = await fetch(
    process.env.BACKEND_URL + "/api/blog/category/" + slug
  );
  const blogs = await res.json();

  const categoryblog = await fetch(
    "https://blognew.dynamicssquare.com/api/blog/category"
  );
  const categoryblogs = await categoryblog.json();

  return { props: { blogs, categoryblogs } };
}

function CategoryBlogs({ blogs, categoryblogs }) {
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

      <div className="blogs-extra-new">
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
                    <li className="breadcrumb-item active"></li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3">
              <div className="blogs-ex-side-cate">
                <h3>Explore by Topic</h3>
                <ul>
                  {categoryblogs &&
                    categoryblogs.map((cateitem, i) => (
                      <li>
                        <Link href={`/blog/category/${cateitem.category_slug}`}>
                          <a>{cateitem.category_name}</a>
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-9">
              {blogs &&
                blogs.map((item, i) => (
                  <div className="blogs-lates blogs-lates-rept">
                    <h3>
                      <Link href={`/blog/${item.title_slug}`}>
                        <a>{item.title}</a>
                      </Link>
                    </h3>
                    <div className="blogs-info-list">
                      <span className="user">
                        <a href="">
                          <i className="bi bi-person-circle"></i>
                          {item.author}
                        </a>
                      </span>
                      <span className="date">
                        <a>
                          <i className="bi bi-calendar"></i>
                          {item.publish_date}
                        </a>
                      </span>
                      <span className="time">
                        <a>
                          <i className="bi bi-clock"></i>
                          {item.read_time}
                        </a>
                      </span>
                      <span className="cate">
                        <a href="">
                          <i className="bi bi-app"></i>
                          {item.category}
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
                ))}

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
                    Engaging stories and exclusive data, designed for our best
                    customers. We only send one issue each month, so we try to
                    make it useful.
                  </p>
                </div>
                <BlogSubscriberForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryBlogs;
