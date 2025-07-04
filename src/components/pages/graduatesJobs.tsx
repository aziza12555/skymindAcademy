"use client";

import Marquee from "react-fast-marquee";
const brandsRow1 = [
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9YkQVvEpxKCvRK0F_Bvvo2VPDaldQvPaYBA&s",
  },
  {
    logo: "https://bankxizmatlari.uz/upload/iblock/c8b/yfeppobu1zsp8slqxqt9q78yhj9qqp0j/AgroBank_mini.png",
  },
  {
    logo: "https://play-lh.googleusercontent.com/H8bZL1-8zwqPaRJjNZQEo43Uq56pZWy5KbkhP2BJOYJlKA23hVyzag4Ll2e99-pMAw6e=w600-h300-pc0xffffff-pd",
  },
  { logo: "https://upload.wikimedia.org/wikipedia/commons/c/c6/Uzcard.jpg" },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN3KnTH-q93Qe_7vIqF1m24ERmQT7CNqdNFQ&s",
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbtKHddK41rXJZU4XsXxS63iABXAf86qBKNQ&s",
  },
  { logo: "https://upload.wikimedia.org/wikipedia/commons/c/c6/Uzcard.jpg" },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN3KnTH-q93Qe_7vIqF1m24ERmQT7CNqdNFQ&s",
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbtKHddK41rXJZU4XsXxS63iABXAf86qBKNQ&s",
  },
];
const brandsRow2 = [
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd0HKG8t9u3Juzy-yNXmOCaRPRTufcdXjNRg&s",
  },
  {
    logo: "https://marketing.uz/uz/uploads/articles/1225/article-original.png",
  },
  {
    logo: "https://aksent.uz/media/cache/8d/07/8d073fac805353f4982df07f9c367e30.jpg",
  },
  { logo: "https://upload.wikimedia.org/wikipedia/commons/c/c6/Uzcard.jpg" },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN3KnTH-q93Qe_7vIqF1m24ERmQT7CNqdNFQ&s",
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbtKHddK41rXJZU4XsXxS63iABXAf86qBKNQ&s",
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9YkQVvEpxKCvRK0F_Bvvo2VPDaldQvPaYBA&s",
  },
  {
    logo: "https://bankxizmatlari.uz/upload/iblock/c8b/yfeppobu1zsp8slqxqt9q78yhj9qqp0j/AgroBank_mini.png",
  },
  {
    logo: "https://play-lh.googleusercontent.com/H8bZL1-8zwqPaRJjNZQEo43Uq56pZWy5KbkhP2BJOYJlKA23hVyzag4Ll2e99-pMAw6e=w600-h300-pc0xffffff-pd",
  },
];
const brandsRow3 = [
  { logo: "https://upload.wikimedia.org/wikipedia/commons/c/c6/Uzcard.jpg" },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN3KnTH-q93Qe_7vIqF1m24ERmQT7CNqdNFQ&s",
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbtKHddK41rXJZU4XsXxS63iABXAf86qBKNQ&s",
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9YkQVvEpxKCvRK0F_Bvvo2VPDaldQvPaYBA&s",
  },
  {
    logo: "https://bankxizmatlari.uz/upload/iblock/c8b/yfeppobu1zsp8slqxqt9q78yhj9qqp0j/AgroBank_mini.png",
  },
  {
    logo: "https://play-lh.googleusercontent.com/H8bZL1-8zwqPaRJjNZQEo43Uq56pZWy5KbkhP2BJOYJlKA23hVyzag4Ll2e99-pMAw6e=w600-h300-pc0xffffff-pd",
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd0HKG8t9u3Juzy-yNXmOCaRPRTufcdXjNRg&s",
  },
  {
    logo: "https://marketing.uz/uz/uploads/articles/1225/article-original.png",
  },
  {
    logo: "https://aksent.uz/media/cache/8d/07/8d073fac805353f4982df07f9c367e30.jpg",
  },
];

const GraduatesJobs = () => {
  return (
    <section className="bg-background py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 dark:text-white">
          🎓 Bitiruvchilarimizning Ish Joylari
        </h2>

        {/* Row 1 */}
        <Marquee gradient={false} speed={40} pauseOnHover>
          <div className="flex gap-10">
            {brandsRow1
              .filter((brand) => !!brand.logo)
              .map((brand) => (
                <img
                  src={brand.logo}
                  alt=""
                  className="object-contain w-20 h-20 "
                />
              ))}
          </div>
        </Marquee>

        {/* Row 2 */}
        <Marquee
          gradient={false}
          speed={30}
          pauseOnHover
          direction="right"
          className="mt-8"
        >
          <div className="flex gap-10">
            {brandsRow2
              .filter((brand) => !!brand.logo)
              .map((brand) => (
                <img
                  src={brand.logo}
                  alt=""
                  className="object-contain w-20 h-20 "
                />
              ))}
          </div>
        </Marquee>

        {/* Row 3 */}
        <Marquee gradient={false} speed={35} pauseOnHover className="mt-8">
          <div className="flex gap-10">
            {brandsRow3
              .filter((brand) => !!brand.logo)
              .map((brand) => (
                <img
                  src={brand.logo}
                  alt=""
                  className="object-contain w-20 h-20 "
                />
              ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default GraduatesJobs;
