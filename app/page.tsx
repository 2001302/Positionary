import { SearchCard } from "@/components/search-card"

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center">
      <main className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="max-w-3xl mx-auto text-center mb-8">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-4">
            Find Your Dream Job
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Discover opportunities from multiple job platforms and company websites, all in one place.
          </p>
          <SearchCard />
        </section>
      </main>
    </div>
  )
}

