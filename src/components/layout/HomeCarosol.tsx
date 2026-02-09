"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import banner1 from "../../../public/banner1.jpg"
import banner2 from "../../../public/banner2.jpg"
import banner3 from "../../../public/banner3.webp"

const banners = [banner1, banner2, banner3]

export function HomeCarouselSpacing() {
  return (
    <Carousel
      opts={{ align: "start", loop: true }}
      plugins={[Autoplay({ delay: 2000 })]}
      className="w-full max-w-full "
    >
      <CarouselContent>
        {banners.map((banner, index) => (
          <CarouselItem
            key={index}
            className="basis-full sm:basis-1/1 lg:basis-1/1"
          >
            <Card>
              <CardContent className="px-10 py-5">
                <div className="relative aspect-[16/6] w-full h-full">
                  <Image
                    src={banner}
                    alt={`Banner ${index + 1}`}
                    fill
                    className="object-cover rounded-md"
                    priority={index === 0}
                  />
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
