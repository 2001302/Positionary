import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Heart, MessageCircle, Share2 } from 'lucide-react'

interface JobCardProps {
  title: string
  company: string
  location: string
  description: string
  logo: string
  companyInitials: string
}

export function JobCard({
  title,
  company,
  location,
  description,
  logo,
  companyInitials,
}: JobCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-4">
        <div className="flex items-start space-x-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src={logo} alt={company} />
            <AvatarFallback>{companyInitials}</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-1">
            <h3 className="font-semibold">{title}</h3>
            <p className="text-sm text-muted-foreground">
              {company} • {location}
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-sm text-muted-foreground">{description}</p>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex space-x-4">
            <Button variant="ghost" size="sm">
              <Heart className="mr-2 h-4 w-4" />
              Like
            </Button>
            <Button variant="ghost" size="sm">
              <MessageCircle className="mr-2 h-4 w-4" />
              Comment
            </Button>
            <Button variant="ghost" size="sm">
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
          </div>
          <Button size="sm">Apply Now</Button>
        </div>
      </CardContent>
    </Card>
  )
}

