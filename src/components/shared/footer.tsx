"use client";

import { Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const footerInfo = [
  {
    title: "Depop",
    links: [
      { name: "About Us", path: "/" },
      { name: "Careers", path: "/careers" },
      { name: "Blog", path: "/blog" },
      { name: "News", path: "/news" },
      { name: "Impact", path: "/impact" },
    ],
  },
  {
    title: "Sell",
    links: [
      { name: "Sell on Depop", path: "/sell" },
      { name: "Depop Amplified", path: "/amplified" },
      { name: "Depop Affiliates", path: "/affiliates" },
      { name: "Become a Depop Insider", path: "/insider" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "Help Center", path: "/help" },
      { name: "Depop Status", path: "/status" },
    ],
  },
];

const interests = [
  { name: "Knee high-converse", path: "/search/knee-high-converse" },
  { name: "New and Secondhand Jnco Jeans for Sale", path: "/search/jnco-jeans" },
  { name: "Shop for Louis Vuitton Wallet for Men", path: "/search/lv-wallet-men" },
];

const Footer = () => {
  return (
    <footer className="bg-[#f5f5f5] text-gray-800 text-sm mt-24">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Top Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {footerInfo.map((section, idx) => (
            <div key={idx}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path} className="hover:underline">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* QR code and social */}
          <div>
            <h4 className="font-semibold mb-4">Download the Depop app</h4>
            <div className="flex items-start gap-4">
              <img
                src="https://assets.depop.com/web/assets/get-the-app-qr-code.svg"
                alt="QR Code"
                className="w-20 h-20 object-contain"
              />
              <p className="text-sm max-w-xs">
                List faster, track your orders, and never miss a beat. On iOS and Android.
              </p>
            </div>
            {/* Social icons */}
            <div className="flex gap-5 mt-6">
              <Twitter className="w-5 h-5 hover:text-[#1DA1F2] cursor-pointer" />
              <Instagram className="w-5 h-5 hover:text-[#E1306C] cursor-pointer" />
              <Facebook className="w-5 h-5 hover:text-[#1877F2] cursor-pointer" />
              {/* TikTok ikonkasi kerak bo‘lsa, alohida kutubxonadan foydalaning */}
            </div>
          </div>
        </div>

        {/* Also of interest */}
        <div className="mt-10 border-t pt-6">
          <p className="font-semibold mb-2">Also of Interest</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-gray-600">
            {interests.map((item, idx) => (
              <Link key={idx} to={item.path} className="hover:underline">
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t pt-6 flex flex-col md:flex-row justify-between items-center text-gray-500 gap-4">
          {/* Country Selector */}
          <div className="flex items-center gap-2">
            <span>United States</span>
            <select className="border px-2 py-1 rounded bg-white text-sm">
              <option>United States</option>
              <option>Uzbekistan</option>
              <option>United Kingdom</option>
            </select>
          </div>

          {/* Footer Links */}
          <div className="flex flex-wrap justify-center md:justify-end gap-4 mt-2 md:mt-0">
            <Link to="/sitemap" className="hover:underline">
              Sitemaps
            </Link>
            <Link to="/terms" className="hover:underline">
              Terms and Conditions
            </Link>
            <Link to="/privacy" className="hover:underline">
              Privacy
            </Link>
            <Link to="/cookies" className="hover:underline">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
