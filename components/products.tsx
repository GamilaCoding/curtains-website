import Image from "next/image"
import { Button } from "@/components/ui/button"

const products = [
  {
    title: "ستائر كلاسيكية",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-fotoaibe-817785.jpg-GBjiXeZMZI5e7RDlagJpHN0GnjakKn.jpeg",
    description: "تصاميم كلاسيكية فاخرة تضيف لمسة أناقة لمنزلك",
  },
  {
    title: "ستائر مودرن",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-julieaagaard-2766345.jpg-GXWlFZQCcgtnvzM5kQWnfJaSURswxS.jpeg",
    description: "تصاميم عصرية تناسب الديكورات الحديثة",
  },
  {
    title: "ستائر شيفون",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-pixabay-462197.jpg-UIEgFCe8g9dwPWJOkpybqWpt4Cj3cS.jpeg",
    description: "ستائر ناعمة تضيف لمسة من الأناقة والجمال",
  },
  {
    title: "ستائر شرائح",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-alex-qian-1180283-2343468.jpg-EcBq5Mj3EqYcZcaMTxa4Ps436E6G4H.jpeg",
    description: "ستائر فخمة بتصميم عصري لمظهر راقي ومميز",
  },
]

export function Products() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">منتجاتنا</h2>
          <p className="text-gray-600">مجموعة متنوعة من الستائر تناسب جميع الأذواق</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div key={index} className="group">
              <div className="relative aspect-[3/4] mb-4 overflow-hidden rounded-lg">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <Button variant="outline" className="w-full">
                المزيد من التفاصيل
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
