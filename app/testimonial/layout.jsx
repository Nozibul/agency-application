export async function generateMetadata() {
  const res = await fetch(process.env.BASE_URL + "SiteMeta/testimonials");

  const jsonData = await res.json();

  return {
    title: jsonData[0].title,
    description: jsonData[0].description,
    keywords: jsonData[0].keywords,
    openGraph: {
      images: jsonData[0].image,
    },
  };
}

const TestimonialLayout = ({ children }) => {
  return <div>{children}</div>;
};

export default TestimonialLayout;
