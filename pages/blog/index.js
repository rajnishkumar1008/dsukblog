import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'


export async function getServerSideProps(){
  const res=await fetch(process.env.BACKEND_URL+'/api/allblog')
  const blogs = await res.json()
  return { props: { blogs }}
}

 function Blogshome({blogs}) {
  return (
    <div>
    <Head>
    <title>Blog System</title>
    <meta name="description" content="All Modern Stylish Product Men|Female" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
   

 <section className="text-gray-600 body-font">
<div className="container px-24 py-24 mx-auto">
<div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
  <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Welcome to Our Blog</h1>
  <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">All latest blogs are below</p>
</div>
{blogs && 
  blogs.map((item,i)=>(
<div className="flex flex-wrap -m-4" key={i}>
  <div className="xl:w-1/3 md:w-1/2 p-4">
    <div className="border border-gray-200 p-6 rounded-lg">
      <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
        <img src={item.image} />
      </div>
      <Link href={`/blog/${item.title_slug}`}><a><h2 className="text-lg text-gray-900 font-medium title-font mb-2">{item.title}</h2></a></Link>
      <p className="leading-relaxed text-base">{item.category}</p>
    </div>
  </div>
  
</div>

  ))}
</div>
</section>
</div>
  )
}

export default Blogshome
