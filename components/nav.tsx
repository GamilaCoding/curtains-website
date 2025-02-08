import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Nav() {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/placeholder.svg" alt="Logo" width={40} height={40} className="w-10 h-10" />
          <span className="text-xl font-bold">ستاير</span>
        </Link>

        <div className="flex items-center gap-4">
          <Link href="/products">منتجاتنا</Link>
          <Link href="/about">عنا</Link>
          <Link href="/contact">تواصل معنا</Link>
          <Button variant="outline">عربي</Button>
          <Button>اتصل بنا</Button>
        </div>
      </div>
    </nav>
  )
}

