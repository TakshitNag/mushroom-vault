import Link from "next/link";

const categories = [
  {
    name: "Button Mushrooms",
    image: "/mushroom/wild-mushrooms-agaricus-arvensis-21540698.webp",
    slug: "button",
  },
  {
    name: "Oyster Mushrooms",
    image: "/mushroom/oyster-mushroom-1296x728-header.webp",
    slug: "oyster",
  },
  {
    name: "Shiitake Mushrooms",
    image: "/mushroom/wild-mushrooms-agaricus-arvensis-21540698.webp",
    slug: "shiitake",
  },
  {
    name: "Medicinal Mushrooms",
    image: "/mushroom/istockphoto-1330220735-612x612.jpg",
    slug: "medicinal",
  },
];

export default function CategorySection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-10">
          Shop by Category
        </h2>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/category/${category.slug}`}
              className="group border rounded-lg overflow-hidden hover:shadow-lg transition"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition"
                />
              </div>

              <div className="p-3 text-center font-semibold">
                {category.name}
              </div>
            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}