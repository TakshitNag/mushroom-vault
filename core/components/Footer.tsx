import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-white mt-20">

      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-4 gap-8">

        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold mb-4">FunkeyMonk</h2>
          <p className="text-sm text-green-100">
            Fresh organic mushrooms delivered directly from farm to your kitchen.
            Healthy, natural and full of nutrients.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="font-semibold mb-4">Categories</h3>
          <ul className="space-y-2 text-sm">
            <li>Button Mushrooms</li>
            <li>Oyster Mushrooms</li>
            <li>Shiitake Mushrooms</li>
            <li>Medicinal Mushrooms</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-4">Contact</h3>
          <p className="text-sm text-green-100">
            📍 Haryana, India
          </p>
          <p className="text-sm text-green-100">
            📧 support@funkeymonk.com
          </p>
          <p className="text-sm text-green-100">
            📞 +91 9876543210
          </p>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-stone-700 text-center text-sm py-4 text-green-200">
        © {new Date().getFullYear()} FunkeyMonk. All rights reserved.
      </div>

    </footer>
  );
}