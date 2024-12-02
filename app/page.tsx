import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { JobCard } from "@/components/job-card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container py-6">
        {/* Hero Section */}
        <section className="py-12 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Find Your Dream Job
          </h1>
          <p className="mx-auto mt-4 max-w-[700px] text-lg text-muted-foreground">
            Discover opportunities from multiple job platforms and company websites, all in one place.
          </p>
          <Button className="mt-6" size="lg">
            Start Your Search
          </Button>
        </section>

        {/* Filters Section */}
        <div className="mb-8 flex items-center justify-between">
          <div className="space-x-4">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Industry" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="tech">Technology</SelectItem>
                <SelectItem value="finance">Finance</SelectItem>
                <SelectItem value="healthcare">Healthcare</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Experience Level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="entry">Entry Level</SelectItem>
                <SelectItem value="mid">Mid Level</SelectItem>
                <SelectItem value="senior">Senior Level</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Job Listings Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <JobCard
            title="Senior Software Engineer"
            company="TechCorp"
            location="San Francisco, CA"
            description="We're looking for a senior software engineer to join our team and help build the next generation of our platform."
            logo="/placeholder.svg"
            companyInitials="TC"
          />
          <JobCard
            title="Product Manager"
            company="InnovateCo"
            location="New York, NY"
            description="Join our product team to help define and execute our product strategy and roadmap."
            logo="/placeholder.svg"
            companyInitials="IC"
          />
          <JobCard
            title="UX Designer"
            company="DesignHub"
            location="Remote"
            description="We're seeking a talented UX designer to create beautiful and intuitive user experiences."
            logo="/placeholder.svg"
            companyInitials="DH"
          />
        </div>

        {/* Pagination */}
        <div className="mt-8 flex justify-center space-x-2">
          {[1, 2, 3, 4, 5].map((page) => (
            <Button
              key={page}
              variant={page === 1 ? "default" : "outline"}
              size="sm"
              className="w-8"
            >
              {page}
            </Button>
          ))}
        </div>
      </main>
    </div>
  )
}

