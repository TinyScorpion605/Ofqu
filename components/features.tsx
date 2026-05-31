"use client"

import { motion } from "framer-motion"
import { Bookmark, ListChecks, Bell, BarChart3 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    icon: Bookmark,
    title: "Save Jobs Instantly",
    description: "One click to save any job listing from any job board directly to your personal dashboard.",
  },
  {
    icon: ListChecks,
    title: "Track Every Application",
    description: "Never lose track of where you applied. See all your applications in one organized view.",
  },
  {
    icon: Bell,
    title: "Follow-Up Reminders",
    description: "Get notified when it&apos;s time to follow up. Never miss an opportunity to stand out.",
  },
  {
    icon: BarChart3,
    title: "Career Analytics",
    description: "Visualize your job search progress with insights on applications, responses, and interviews.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Everything you need to land your dream job
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            OfferQuest gives you the tools to stay organized and ahead of the competition.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature) => (
            <motion.div key={feature.title} variants={itemVariants}>
              <Card className="h-full bg-card border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
