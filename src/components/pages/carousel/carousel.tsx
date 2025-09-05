import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const MyCarousel = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-20">
      <div className="flex items-center gap-12">
        <div className="w-1/2">
          <Carousel>
            <CarouselContent>
              <CarouselItem className="flex gap-4">
                <img
                  className="w-1/2 h-auto object-cover rounded-lg"
                  src="https://i.pinimg.com/736x/ff/67/75/ff6775d61e66bd5f6f3c389f4dda66eb.jpg"
                  alt="Image 1"
                />
                <img
                  className="w-1/2 h-auto object-cover rounded-lg"
                  src="https://i.pinimg.com/736x/9d/d1/68/9dd1688a1ac7ef8b8b6ddfff0abb407c.jpg"
                  alt="Image 2"
                />
              </CarouselItem>
                 <CarouselItem className="flex gap-4">
                <img
                  className="w-1/2 h-auto object-cover rounded-lg"
                  src="https://i.pinimg.com/736x/a8/55/e2/a855e21afe6f4eed503b979df0b03068.jpg"
                  alt="Image 1"
                />
                <img
                  className="w-1/2 h-auto object-cover rounded-lg"
                  src="https://i.pinimg.com/736x/4c/29/f9/4c29f9bac8cecc6d4805180a0a8f4a0c.jpg"
                  alt="Image 2"
                />
              </CarouselItem>
                 <CarouselItem className="flex gap-4">
                <img
                  className="w-1/2 h-auto object-cover rounded-lg"
                  src="https://i.pinimg.com/736x/8c/ca/a9/8ccaa9b3acdf893bda484cabfea7dea6.jpg"
                  alt="Image 1"
                />
                <img
                  className="w-1/2 h-auto object-cover rounded-lg"
                  src="https://i.pinimg.com/736x/cc/4e/62/cc4e62895545dd04898b11566940f139.jpg"
                  alt="Image 2"
                />
              </CarouselItem>
           
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <div className="w-1/2 p-6">
          <h2 className="text-3xl font-semibold mb-4">Ayollar Uchun</h2>
          <p className="text-lg leading-relaxed">
            Bu carouselda ikkita surat bor. Suratlar chiroyli ko'rinadi va ular haqidagi
            tavsif shu yerda ko'rsatiladi. Yozuv o'ng tomonda joylashgan.
          </p>
        </div>
      </div>

      <div className="flex items-center gap-12">
        <div className="w-1/2 p-6 order-1">
          <h2 className="text-3xl font-semibold mb-4">ERKAKlar uchun</h2>
          <p className="text-lg leading-relaxed">
            Bu yerda esa yozuv chapda, carousel esa o'ngda joylashgan. Bu shaklda sahifa yanada
            jonli va chiroyli ko'rinadi.
          </p>
        </div>

        <div className="w-1/2 order-2">
          <Carousel>
            <CarouselContent>
              <CarouselItem className="flex gap-4">
                <img
                  className="w-1/2 h-auto object-cover rounded-lg"
                  src="https://i.pinimg.com/736x/17/c2/91/17c291d86c1d7a38002aec8ab1adbe6c.jpg"
                  alt="Image 3"
                />
                <img
                  className="w-1/2 h-auto object-cover rounded-lg"
                  src="https://i.pinimg.com/736x/cd/5d/85/cd5d8542b69dd7bc1dc2349dd3539664.jpg"
                  alt="Image 4"
                />
              </CarouselItem>
                   <CarouselItem className="flex gap-4">
                <img
                  className="w-1/2 h-auto object-cover rounded-lg"
                  src="https://i.pinimg.com/1200x/db/f6/2d/dbf62d8b0c334d6e3186b411981e6b92.jpg"
                  alt="Image 3"
                />
                <img
                  className="w-1/2 h-auto object-cover rounded-lg"
                  src="https://i.pinimg.com/736x/3d/19/e3/3d19e35cb962c22bc7866ead2e8c843b.jpg"
                  alt="Image 4"
                />
              </CarouselItem>
                   <CarouselItem className="flex gap-4">
                <img
                  className="w-1/2 h-auto object-cover rounded-lg"
                  src="https://i.pinimg.com/736x/85/c7/8c/85c78c0f79377fd91d5bf3559988a73a.jpg"
                  alt="Image 3"
                />
                <img
                  className="w-1/2 h-auto object-cover rounded-lg"
                  src="https://i.pinimg.com/736x/c4/52/15/c452155424318a29a132e0aa003a317f.jpg"
                  alt="Image 4"
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default MyCarousel;
