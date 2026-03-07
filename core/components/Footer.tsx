import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-stone-100 mt-20">

      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-10">

        {/* NEED HELP */}
        <div>
          <h3 className="font-bold text-green-700 mb-4">NEED HELP</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><Link href="/contact">Contact Us</Link></li>
            <li><Link href="/track-order">Track Order</Link></li>
            <li><Link href="/returns">Returns & Refunds</Link></li>
            <li><Link href="/faq">FAQs</Link></li>
            <li><Link href="/account">My Account</Link></li>
          </ul>

          <div className="mt-4 text-sm text-gray-600">
            <p>🚚 Fast Delivery</p>
            <p>🍄 Fresh Farm Mushrooms</p>
          </div>
        </div>

        {/* COMPANY */}
        <div>
          <h3 className="font-bold text-green-700 mb-4">COMPANY</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/careers">Careers</Link></li>
            <li><Link href="/blogs">Blogs</Link></li>
            <li><Link href="/community">Community</Link></li>
          </ul>
        </div>

        {/* MORE INFO */}
        <div>
          <h3 className="font-bold text-green-700 mb-4">MORE INFO</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><Link href="/terms">Terms & Conditions</Link></li>
            <li><Link href="/privacy">Privacy Policy</Link></li>
            <li><Link href="/shipping">Shipping Policy</Link></li>
            <li><Link href="/sitemap">Sitemap</Link></li>
          </ul>
        </div>

        {/* CATEGORIES */}
        <div>
          <h3 className="font-bold text-green-700 mb-4">SHOP MUSHROOMS</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>Button Mushrooms</li>
            <li>Oyster Mushrooms</li>
            <li>Shiitake Mushrooms</li>
            <li>Medicinal Mushrooms</li>
          </ul>
        </div>

      </div>

      {/* SOCIAL SECTION */}

      <div className="border-t border-gray-300 py-6">

        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Mushroom Store. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">

            <div className="w-9 h-9 rounded-full bg-blue-500 text-white flex items-center justify-center">
              f
            </div>

            <div className="w-9 h-9 rounded-full bg-pink-500 text-white flex items-center justify-center">
              ig
            </div>

            <div className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center">
              x
            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}