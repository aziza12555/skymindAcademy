"use client";

import { Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const footerInfo = [
  {
    title: "Zarxal haqida",
    links: [
      { name: "Biz haqimizda", path: "/" },
      { name: "Bo‘sh ish o‘rinlari", path: "/careers" },
      { name: "Blog", path: "/blog" },
      { name: "Yangiliklar", path: "/news" },
      { name: "Ta’sir va tashabbuslar", path: "/impact" },
    ],
  },
  {
    title: "Sotuvchilar uchun",
    links: [
      { name: "Zarxal'da soting", path: "/sell" },
      { name: "Zarxal Amplified", path: "/amplified" },
      { name: "Hamkorlik dasturi", path: "/affiliates" },
      { name: "Zarxal Insider bo‘ling", path: "/insider" },
    ],
  },
  {
    title: "Yordam",
    links: [
      { name: "Yordam markazi", path: "/help" },
      { name: "Zarxal holati", path: "/status" },
    ],
  },
];

const interests = [
  { name: "Bo‘yin baland sport oyoq kiyimlari", path: "/search/knee-high-converse" },
  { name: "Yangi va ishlatilgan Jnco jinsilari", path: "/search/jnco-jeans" },
  { name: "Erkaklar uchun Louis Vuitton hamyonlari", path: "/search/lv-wallet-men" },
];

const Footer = () => {
  return (
    <footer className="bg-[#f5f5f5] text-gray-800 text-sm mt-24">
      <div className="max-w-7xl mx-auto px-4 py-12">

        {/* Yuqori qator: 3 ustun + logo */}
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

          {/* Logo + QR + Ijtimoiy tarmoqlar */}
          <div>
            <h4 className="font-semibold mb-4">Zarxal mobil ilovasi</h4>
            <div className="flex items-start gap-4">
              <img
                src="https://i.pinimg.com/1200x/ab/01/89/ab01895078f02efdf95f7b486f94d7cd.jpg"
                alt="Zarxal logotipi"
                className="w-20 h-20 object-contain rounded"
              />
              <p className="text-sm max-w-xs">
                Tez ro‘yxatdan o‘ting, buyurtmalaringizni kuzating va hech narsa o‘tkazib yubormang. iOS va Android uchun.
              </p>
            </div>
            <div className="flex gap-5 mt-6">
              <Twitter className="w-5 h-5 hover:text-[#1DA1F2] cursor-pointer" />
              <Instagram className="w-5 h-5 hover:text-[#E1306C] cursor-pointer" />
              <Facebook className="w-5 h-5 hover:text-[#1877F2] cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Qiziqarli bo‘lishi mumkin */}
        <div className="mt-10 border-t pt-6">
          <p className="font-semibold mb-2">Sizni qiziqtirishi mumkin</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-gray-600">
            {interests.map((item, idx) => (
              <Link key={idx} to={item.path} className="hover:underline">
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Pastki navigatsiya paneli */}
        <div className="mt-10 border-t pt-6 flex flex-col md:flex-row justify-between items-center text-gray-500 gap-4">
          {/* Davlat tanlash */}
          <div className="flex items-center gap-2">
            <span>O‘zbekiston</span>
            <select className="border px-2 py-1 rounded bg-white text-sm">
              <option>O‘zbekiston</option>
              <option>Amerika Qo‘shma Shtatlari</option>
              <option>Birlashgan Qirollik</option>
            </select>
          </div>

          {/* Havolalar */}
          <div className="flex flex-wrap justify-center md:justify-end gap-4 mt-2 md:mt-0">
            <Link to="/sitemap" className="hover:underline">
              Sayt xaritasi
            </Link>
            <Link to="/terms" className="hover:underline">
              Foydalanish shartlari
            </Link>
            <Link to="/privacy" className="hover:underline">
              Maxfiylik siyosati
            </Link>
            <Link to="/cookies" className="hover:underline">
              Cookies fayllar
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
