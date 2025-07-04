"use client";

import { Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import { Textarea } from "../ui/textarea";
import { useState } from "react";

const navLinks = [
  { name: "home", path: "/" },
  { name: "about", path: "/about" },
  { name: "blog", path: "/blog" },
  { name: "contact", path: "/contact" },
];

const Footer = () => {
  const [message, setMessage] = useState("");

  const scrollToRegister = () => {
    const section = document.getElementById("register");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSendMessage = () => {
    if (message.trim() === "") return;

    const existingMessages = JSON.parse(
      localStorage.getItem("admin_messages") || "[]"
    );
    const newMessages = [...existingMessages, message.trim()];
    localStorage.setItem("admin_messages", JSON.stringify(newMessages));
    setMessage(""); // clear textarea
    alert("Xabaringiz yuborildi ✅");
  };

  return (
    <footer className="bg-background mt-11 text-black">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h2 className="text-2xl font-bold mb-4">𝙎𝙠𝙮𝙢𝙞𝙣𝙙 𝘼𝙘𝙖𝙙𝙚𝙢𝙮</h2>
            <p className="text-sm">
              Uzoq-uzoqlarda, so‘zlar tog‘lari ortida, Vokaliya va Konsonantiya
              davlatlaridan uzoqda, ko‘r matnlar yashaydi.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Tezkor havolalar</h3>
            <ul className="space-y-2">
              {navLinks.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="hover:bg-blue-400/20 py-1 px-3 inline-block rounded-md transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Aloqa</h3>
            <ul className="space-y-4 text-sm">
              <li>198 G‘arbiy 21-ko‘cha, 721-ofis, Nyu-York NY 10016</li>
              <li>+ 1235 2355 98</li>
              <li>info@saytingiz.com</li>
              <li>email@email.com</li>
            </ul>
          </div>

          <div className="flex flex-col items-start gap-4">
            <h3 className="text-xl font-semibold mb-1">Ijtimoiy tarmoqlar</h3>
            <div className="flex gap-4">
              {[
                { icon: <Twitter />, name: "Twitter" },
                { icon: <Facebook />, name: "Facebook" },
                { icon: <Instagram />, name: "Instagram" },
              ].map((social, index) => (
                <div key={index} className="relative group w-10 h-10">
                  <span className="absolute inset-0 flex items-center justify-center text-xl group-hover:opacity-0 transition-opacity duration-300">
                    {social.icon}
                  </span>
                  <span className="absolute inset-0 flex items-center justify-center text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {social.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Message Box */}
            <Textarea
              placeholder="Xabaringizni shu yerga yozing..."
              className="w-full max-w-[220px] h-36 resize-none"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              onClick={handleSendMessage}
              className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Jo‘natish
            </button>
          </div>
        </div>

        <div className="w-full">
          <h3 className="text-center text-xl font-semibold mb-4">
            📍 Bizning joylashuv - 𝙎𝙠𝙮𝙢𝙞𝙣𝙙 𝘼𝙘𝙖𝙙𝙚𝙢𝙮
          </h3>
          <div className="w-full h-[500px] rounded-xl overflow-hidden shadow-lg mb-6">
            <iframe
              src="https://yandex.uz/map-widget/v1/?um=constructor%3A13f2dbd620750d70bbdf1a54a6bb74813d211b75ec1fa35d9cbd9e76fdbd0f5d&amp;source=constructor"
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
              style={{ border: 0 }}
            ></iframe>
          </div>

          <div className="text-center mt-4">
            <button
              onClick={scrollToRegister}
              className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 transition-all"
            >
              🚀 Ro‘yxatdan o‘tish
            </button>
          </div>
        </div>

        <div className="border-t border-gray-300 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} 𝙎𝙠𝙮𝙢𝙞𝙣𝙙 𝘼𝙘𝙖𝙙𝙚𝙢𝙮. Barcha huquqlar
          himoyalangan.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
