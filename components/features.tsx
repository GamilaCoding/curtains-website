import { Shield, Truck, HeartHandshake, Sparkles } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "ضمان الجودة",
    description: "نستخدم أفضل الخامات ونقدم ضمان على جميع منتجاتنا",
  },
  {
    icon: Truck,
    title: "توصيل سريع",
    description: "خدمة توصيل وتركيب في جميع أنحاء المملكة",
  },
  {
    icon: HeartHandshake,
    title: "خدمة متكاملة",
    description: "من القياس للتركيب، نهتم بكل التفاصيل",
  },
  {
    icon: Sparkles,
    title: "تصاميم عصرية",
    description: "نواكب أحدث صيحات الموضة في عالم الستائر",
  },
]

export function Features() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">لماذا تختارنا؟</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

