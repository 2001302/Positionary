'use client'

import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search } from 'lucide-react'

export function SearchCard() {
  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardContent className="p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            className="pl-10" 
            type="search" 
            placeholder="Search for jobs..." 
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              // 검색 로직 구현
              console.log(e.target.value)
            }}
          />
        </div>
      </CardContent>
    </Card>
  )
}

