"use client"
import { useRouter } from "next/navigation"
import type React from "react"

import { Trophy, ChevronRight, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function Component() {
  const router = useRouter()

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const year = event.target.value
    router.push(`/${year}`)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#003A79] text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <Trophy className="text-[#003A79] h-6 w-6" />
              </div>
              <div>
                <h1 className="text-xl font-bold">University of Toronto</h1>
                <p className="text-blue-200 text-sm">Statistics Competition 2024</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <select
                className="bg-white text-[#003A79] px-3 py-1 rounded text-sm"
                value="2024"
                onChange={handleYearChange}
              >
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
              </select>
            </div>
          </div>
        </div>
      </header>

      {/* Coming Soon Section */}
      <section className="bg-gradient-to-br from-[#003A79] to-[#0060AC] text-white py-20 min-h-[80vh] flex items-center">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <Clock className="h-24 w-24 text-yellow-400 animate-pulse" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">2024 Results</h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            More information about the 2024 Statistics Competition coming soon.
          </p>
          <div className="max-w-2xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">Information Coming Soon</h3>
                <p className="text-blue-100 mb-6">
                  We're working on compiling the complete results and highlights from the 2024 competition. Check back
                  soon for detailed information about winners, participants, and event highlights.
                </p>
                <Button className="bg-white text-[#003A79] hover:bg-blue-50" onClick={() => router.push("/2025")}>
                  View 2025 Challenge
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#003A79] text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">UofT Statistics Competition 2024</h3>
          <p className="text-blue-200 mb-6">More information coming soon.</p>
          <Separator className="my-8 bg-blue-800" />
          <p className="text-blue-200">&copy; 2024 University of Toronto. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
