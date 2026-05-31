"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Bookmark, Send, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Stop Losing Track of Your Job Applications
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
              The Chrome extension that helps job seekers save applications, track interviews, manage follow-ups, and stay organized from their browser.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="/waitlist">
                  Join the Waitlist
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#how-it-works">See How It Works</a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-card rounded-2xl border border-border shadow-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-foreground">Your Job Dashboard</h3>
                <span className="text-xs text-muted-foreground">Last updated: Today</span>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                <StatCard icon={Bookmark} label="Saved Jobs" value={24} color="primary" />
                <StatCard icon={Send} label="Applied" value={18} color="accent" />
                <StatCard icon={Calendar} label="Interviews" value={5} color="chart-2" />
              </div>

              <div className="space-y-3">
                <JobRow company="Vercel" role="Frontend Engineer" status="Interview" />
                <JobRow company="Linear" role="Product Designer" status="Applied" />
                <JobRow company="Notion" role="Full Stack Dev" status="Saved" />
              </div>
            </div>

            <motion.div
              className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground rounded-lg px-4 py-2 text-sm font-medium shadow-lg"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              Follow-up reminder in 2 days
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function StatCard({ 
  icon: Icon, 
  label, 
  value, 
  color 
}: { 
  icon: React.ElementType
  label: string
  value: number
  color: string 
}) {
  return (
    <div className="bg-secondary rounded-xl p-4 text-center">
      <div className={`w-10 h-10 mx-auto rounded-lg bg-${color} flex items-center justify-center mb-2`} style={{ backgroundColor: `var(--${color})` }}>
        <Icon className="w-5 h-5 text-primary-foreground" />
      </div>
      <div className="text-2xl font-bold text-foreground">{value}</div>
      <div className="text-xs text-muted-foreground">{label}</div>
    </div>
  )
}

function JobRow({ company, role, status }: { company: string; role: string; status: string }) {
  const statusColors: Record<string, string> = {
    Interview: "bg-green-100 text-green-700",
    Applied: "bg-blue-100 text-blue-700",
    Saved: "bg-gray-100 text-gray-700",
  }

  return (
    <div className="flex items-center justify-between p-3 bg-secondary rounded-lg">
      <div>
        <div className="font-medium text-foreground text-sm">{company}</div>
        <div className="text-xs text-muted-foreground">{role}</div>
      </div>
      <span className={`text-xs px-2 py-1 rounded-full ${statusColors[status]}`}>
        {status}
      </span>
    </div>
  )
}
