import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";

async function getData() {
  const data = await fetch(process.env.BASE_URL + "BrandList");

  if (!data.ok) throw new Error("Brands List data calling failed");

  return data.json();
}

const Brands = async () => {
  const brandsData = await getData();

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="w-2/5 mx-auto rounded mb-20 text-2xl text-gray-50 bg-emerald-700 p-2 font-bold font-heading">
          Trusted by brands all over the world
        </h1>
        <div className="flex flex-wrap -mx-2">
          <Marquee>
            {brandsData?.length > 0
              ? brandsData.map((item) => (
                  <div
                    key={item.id}
                    className="mb-12 lg:mb-0 w-full md:w-1/2 lg:w-1/4 px-2"
                  >
                    <Link href="/">
                      <Image
                        className="mx-auto"
                        src={item.image}
                        alt={item.name}
                        width={400}
                        height={50}
                        priority={true}
                      />
                    </Link>
                  </div>
                ))
              : null}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Brands;
