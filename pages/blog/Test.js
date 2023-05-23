function Test({ blogs }) {
  const structuredData = JSON.stringify(blogs); // Convert the meta_image data to JSON string
  return (
    <div>
      <section className="text-gray-600 body-font">
       ASDASDASD
      </section>
    </div>
  );
}
export async function getServerSideProps(context) {
  let slug = context.query.slug;
  console.log(slug);
  const res = await fetch(
    "https://blognew.dynamicssquare.com/api/blog/category/microsoft-365"
  );
  const blogs = await res.json();
  return { props: { blogs } };
}
export default Test;
