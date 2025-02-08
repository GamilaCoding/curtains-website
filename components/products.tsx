import Image from "next/image"
import { Button } from "@/components/ui/button"

const products = [
  {
    title: "ستائر كلاسيكية",
    image: "/placeholder.svg?height=400&width=300",
    description: "تصاميم كلاسيكية فاخرة تضيف لمسة أناقة لمنزلك",
  },
  {
    title: "ستائر مودرن",
    image: "/placeholder.svg?height=400&width=300",
    description: "تصاميم عصرية تناسب الديكورات الحديثة",
  },
  {
    title: "ستائر رول",
    image: "/placeholder.svg?height=400&width=300",
    description: "حلول عملية وأنيقة للتحكم في الإضاءة",
  },
  {
    title: "ستائر شرائح",
    image: "/placeholder.svg?height=400&width=300",
    description: "تصاميم مبتكرة تجمع بين الجمال والوظيفة",
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

