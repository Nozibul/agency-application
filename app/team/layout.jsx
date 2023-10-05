export async function generateMetadata() {
  const res = await fetch(process.env.BASE_URL + "SiteMeta/team");

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
const TeamLayout = ({ children }) => {
  return <div>{children}</div>;
};

export default TeamLayout;
