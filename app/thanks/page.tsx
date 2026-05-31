"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Briefcase, CheckCircle2, Gift, Zap, Star, Users, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

const benefits = [
  {
    icon: Zap,
    title: "Early Access",
    description: "Be first to use OfferQuest before the public launch.",
  },
  {
    icon: Gift,
    title: "Exclusive Perks",
    description: "Get lifetime discounts and premium features for free.",
  },
  {
    icon: Star,
    title: "Shape the Product",
    description: "Your feedback directly influences what we build.",
  },
  {
    icon: Users,
    title: "Join the Community",
    description: "Connect with other ambitious job seekers.",
  },
]

export default function ThanksPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Briefcase className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-semibold text-lg text-foreground">OfferQuest</span>
          </Link>
        </div>
      </header>

      <main className="flex-1 px-4 py-20">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-20 h-20 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-6"
            >
              <CheckCircle2 className="w-10 h-10 text-green-600" />
            </motion.div>

            <h1 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
              {"You're"} on the list!
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Thanks for joining the OfferQuest waitlist. {"We'll"} be in touch soon with updates and early access information.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-card rounded-2xl border border-border p-6 sm:p-8"
          >
            <h2 className="text-xl font-semibold text-foreground mb-6 text-center">
              Why join early?
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.3 }}
                  className="flex items-start gap-3 p-4 bg-secondary rounded-xl"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground text-sm">{benefit.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-8 text-center"
          >
            <Button asChild variant="outline">
              <Link href="/">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to Home
              </Link>
            </Button>
          </motion.div>
        </div>
      </main>
    </div>
  )
}
