"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const images = [
  "/mushroom/istockphoto-1330220735-612x612.jpg",
  "/banner/boletus-edulis-mushroom-red-lingonberries-wooden-background-copy-space-top-view-banner-organic-forest-food-boletus-edulis-199091107.webp",
  "/banner/flat-horizontal-sale-banner-template-autumn_23-2149555189.avif",
];

export default function HeroBanner() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000); // 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-green-50 py-20">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 items-center gap-10">

        {/* LEFT TEXT */}
        <div>
          <h1 className="text-4xl font-bold mb-4">
            Fresh Organic Mushrooms
          </h1>

          <p className="text-gray-600 mb-6">
            Farm to Table in 24 Hours. 100% Natural and Packed with Nutrition.
          </p>

          <Link
            href="/products"
            className="bg-green-600 text-white px-6 py-3 rounded-lg"
          >
            Shop Now
          </Link>
        </div>

        {/* RIGHT IMAGE SLIDER */}
        <div className="w-full h-[350px]overflow-hidden rounded-xl">
          <img
            src={images[currentImage]}
            alt="Mushrooms"
            className="w-full h-full object-cover transition-all duration-700"
          />
        </div>
         <div className="flex justify-center mt-4 gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentImage === index
                    ? "bg-green-600"
                    : "bg-gray-300"
                }`}
              />
            ))}
          </div>

      </div>
    </section>
  );
}