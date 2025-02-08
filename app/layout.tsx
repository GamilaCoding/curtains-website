import type { Metadata } from "next"
import { Cairo } from "next/font/google"
import "./globals.css"
import type React from "react" // Import React

const cairo = Cairo({ subsets: ["arabic"] })

export const metadata: Metadata = {
  title: "ستاير - موقع الستائر المتميز",
  description: "ستائر مخصصة لذوقك",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={cairo.className}>{children}</body>
    </html>
  )
}

