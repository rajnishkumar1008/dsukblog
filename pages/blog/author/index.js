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
  const authors = await fetch(
    "https://blognew.dynamicssquare.com/api/allauthor"
  );
  const authorslist = await authors.json();

  const blgsbyauthors = await fetch(
    "https://blognew.dynamicssquare.com/api/blog/author/"+slug
  );
  const blgsbyauthorslist = await blgsbyauthors.json();

  return { props: { blogs, authorslist, blgsbyauthorslist } };
}

function AuthorsList({ blogs, authorslist, blgsbyauthorslist }) {
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
                    <li className="breadcrumb-item active">Author</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
          <div className="row author-dc">
        
         <div className="author-title">
         <h1>Our Authors</h1>
         </div>
                {authorslist &&
                    authorslist.map((authorsitem, i) => (
                <div className="col-lg-3">
                      <div className="author-list-card">
                        <Link href={`/blog/author/${authorsitem.name.split(" ").join("-")}`}>
                          <a><img src={authorsitem.profile_photo_path} alt={authorsitem.name} /> <span>{authorsitem.name}</span></a>
                        </Link>
                      </div>
                   
                </div>
                ))}
         

            
          </div>
        </div>
      </div>

    </div>
  );
}

export default AuthorsList;
