"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronRight, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

const slides = [
  {
    image:
      "https://sjc.microlink.io/dsIdGE-NM_ykUHzSLg02W-j_j5Q4a1tNQiNp0k_6Y2qV5BUI816csu728Pf0VKR17Hrwu4fXjqL3uiq7XRMFww.jpeg",
    title: "ستائر مخصصة لذوقك",
    subtitle: "اطلب ستائرك من الجوال وبيتك تجيك 🚚",
  },
  {
    image: "/placeholder.svg?height=1080&width=1920",
    title: "تصاميم عصرية وحديثة",
    subtitle: "نقدم أحدث موديلات الستائر العصرية",
  },
  {
    image: "/placeholder.svg?height=1080&width=1920",
    title: "خدمة متكاملة",
    subtitle: "من القياس للتركيب، نهتم بكل التفاصيل",
  },
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setIsAutoPlaying(false)
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setIsAutoPlaying(false)
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="relative h-screen overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <Image
            src={slides[currentSlide].image || "/placeholder.svg"}
            alt="Hero background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      </AnimatePresence>

      <div className="relative h-full flex items-center justify-center text-center text-white">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{slides[currentSlide].title}</h1>
            <p className="text-xl md:text-2xl mb-8">{slides[currentSlide].subtitle}</p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="text-lg">
                منتجاتنا
              </Button>
              <Button size="lg" variant="outline" className="text-lg">
                احصل على استشارة مجانية
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
            onClick={() => {
              setIsAutoPlaying(false)
              setCurrentSlide(index)
            }}
          />
        ))}
      </div>
    </div>
  )
}

