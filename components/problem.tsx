"use client"

import { motion } from "framer-motion"
import { FolderX, Clock, Table, HelpCircle } from "lucide-react"

const problems = [
  {
    icon: FolderX,
    title: "Lost Applications",
    description: "Applied somewhere but can&apos;t remember where? You&apos;re not alone.",
  },
  {
    icon: Clock,
    title: "Missed Follow-Ups",
    description: "Forgot to follow up after an interview? That opportunity is gone.",
  },
  {
    icon: Table,
    title: "Spreadsheet Overload",
    description: "Juggling tabs, sheets, and notes just to track a few applications.",
  },
  {
    icon: HelpCircle,
    title: "Interview Confusion",
    description: "Which company is that interview with again? When was it scheduled?",
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
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
}

export function Problem() {
  return (
    <section id="problem" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-medium text-primary">The Problem</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-foreground text-balance">
              Job searching is chaos without the right system
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Most job seekers rely on memory, scattered notes, or messy spreadsheets. It doesn&apos;t have to be this way.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {problems.map((problem) => (
              <motion.div
                key={problem.title}
                variants={itemVariants}
                className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border"
              >
                <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center shrink-0">
                  <problem.icon className="w-5 h-5 text-destructive" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{problem.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{problem.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
