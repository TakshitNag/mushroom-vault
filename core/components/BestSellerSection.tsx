import Link from "next/link";

const bestSellers = [
  {
    name: "Premium Button Mushrooms",
    price: 180,
    image: "/banner/boletus-edulis-mushroom-red-lingonberries-wooden-background-copy-space-top-view-banner-organic-forest-food-boletus-edulis-199091107.webp",
  },
  {
    name: "Organic Oyster Mushrooms",
    price: 200,
    image: "/mushroom/oyster-mushroom-with-small-fresh-leaves-photo.jpg",
  },
  {
    name: "Fresh Shiitake Mushrooms",
    price: 260,
    image: "/mushroom/beautiful-boletus-edulis-mushroom-banner-amazing-green-moss-old-magic-forest-mushrooms-background-white-sunny-day-196533074.webp",
  },
  {
    name: "Medicinal Reishi Mushrooms",
    price: 320,
    image: "/mushroom/shiitake-mushrooms-thumbnail.webp",
  },
];

export default function BestSellerSection() {
  return (
    <section className="bg-green-50">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-12">
          Best Sellers
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          {bestSellers.map((product, i) => (
            <div
              key={i}
              className="bg-white border rounded-xl overflow-hidden hover:shadow-lg transition"
            >

              {/* Image */}
              <div className="relative">

                <img
                  src={product.image}
                  className="h-48 w-full object-cover"
                />

                {/* Badge */}
                <span className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                  Best Seller
                </span>

              </div>

              {/* Content */}
              <div className="p-4">

                <h3 className="font-semibold mb-2">
                  {product.name}
                </h3>

                <p className="text-green-600 font-bold mb-3">
                  ₹{product.price}
                </p>

                <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
                  Add to Cart
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}