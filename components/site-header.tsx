import Link from "next/link"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">Positionary</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center space-x-6 text-sm font-medium">
          <nav className="flex items-center space-x-6">
            <Link
              href="/platform"
              className="transition-colors hover:text-foreground/80"
            >
              Platform
            </Link>
            <Link
              href="/services"
              className="transition-colors hover:text-foreground/80"
            >
              Services
            </Link>
            <Link
              href="/resources"
              className="transition-colors hover:text-foreground/80"
            >
              Resources
            </Link>
            <Link
              href="/talent-network"
              className="transition-colors hover:text-foreground/80"
            >
              Talent Network
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/book-demo">Book a Demo</Link>
          </Button>
          <Button asChild>
            <Link href="/get-started">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

