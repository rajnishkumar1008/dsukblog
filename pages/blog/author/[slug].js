import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import BlogSubscriberForm from "../../../components/BlogSubscriberForm";

export async function getServerSideProps(context) {
  let slug = context.query.slug;
  const authors = await fetch(`${process.env.BACKEND_URL}`+'/api/allauthor');
  const authorslist = await authors.json();

  const blgsbyauthors = await fetch(`${process.env.BACKEND_URL}`+'/api/blog/author/'+slug
  );
  const blgsbyauthorslist = await blgsbyauthors.json();
  const blogsauthorlength = blgsbyauthorslist.length;
  if(blogsauthorlength>=1)
  {
    return { props: { authorslist, blgsbyauthorslist } };
  }
  else
  {
    return{
      notFound:true,
     };
  }
  
}

function Authors({authorslist, blgsbyauthorslist }) {
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
                    <li className="breadcrumb-item">
                      <Link href="/blog/author">
                        <a>Author</a>
                      </Link>
                    </li>
                    <li className="breadcrumb-item active">{blgsbyauthorslist[0]['author']}</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3">
              <div className="auter-cate">
                <h3>Our Authors</h3>
                <ul>
                  {authorslist &&
                    authorslist.map((authorsitem, i) => (
                      <li>
                        <Link href={`/blog/author/${authorsitem.name}`}>
                          <a><img src={authorsitem.profile_photo_path} alt={authorsitem.name} /> <span>{authorsitem.name}</span></a>
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-9">
              {blgsbyauthorslist &&
                blgsbyauthorslist.map((item, i) => (
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
                      <Link href={`/blog/category/${item.category_slug}`}><a>
                            <i className="bi bi-app"></i> {item.category}
                          </a></Link>
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

export default Authors;
