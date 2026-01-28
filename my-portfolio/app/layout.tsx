import "./global.css"  // match the actual file name exactly
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Alexander Lin | Portfolio",
  description: "Georgia Tech Computer Science student (Intelligence & Systems Architecture), CEO of EchoFives LLC, Full-Stack Developer, U.S. Marine Corps Veteran",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
        {children}
      </body>
    </html>
  )
}
