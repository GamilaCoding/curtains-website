import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">عن الشركة</h3>
            <p className="text-sm">
              نحن شركة متخصصة في تصميم وتركيب الستائر بجميع أنواعها، نقدم خدمات متكاملة من القياس للتركيب.
            </p>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  عن الشركة
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors">
                  منتجاتنا
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white transition-colors">
                  معرض الأعمال
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  اتصل بنا
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">تواصل معنا</h3>
            <ul className="space-y-2 text-sm">
              <li>الرياض، المملكة العربية السعودية</li>
              <li>هاتف: 966500000000+</li>
              <li>البريد الإلكتروني: info@example.com</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">تابعنا</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>جميع الحقوق محفوظة © {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  )
}

