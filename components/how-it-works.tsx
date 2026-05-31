"use client"

import { motion } from "framer-motion"
import { Download, MousePointer, BarChart3 } from "lucide-react"

const steps = [
  {
    icon: Download,
    number: "01",
    title: "Install Extension",
    description: "Add OfferQuest to Chrome in seconds. It&apos;s free and lightweight.",
  },
  {
    icon: MousePointer,
    number: "02",
    title: "Save Jobs as You Browse",
    description: "Click once to save any job listing. Works on LinkedIn, Indeed, and more.",
  },
  {
    icon: BarChart3,
    number: "03",
    title: "Track and Follow Up",
    description: "Manage your applications, get reminders, and land more interviews.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary">How It Works</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Get started in three simple steps
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              <div className="text-center">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-primary flex items-center justify-center mb-6">
                  <step.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <span className="text-xs font-mono text-primary">{step.number}</span>
                <h3 className="mt-2 text-xl font-semibold text-foreground">{step.title}</h3>
                <p className="mt-3 text-muted-foreground">{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] border-t-2 border-dashed border-border" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
