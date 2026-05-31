"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Briefcase, ArrowRight, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function WaitlistPage() {
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

      <main className="flex-1 flex items-center justify-center px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-xl w-full text-center"
        >
          <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-8">
            <Briefcase className="w-8 h-8 text-primary" />
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Join the OfferQuest Waitlist
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Be among the first to experience a better way to track your job applications. Get early access and exclusive perks when we launch.
          </p>

          <div className="mt-8 space-y-4">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <a
                href="https://tally.so/r/44zNNr"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sign Up for Early Access
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>

            <div className="pt-4">
              <Link
                href="/"
                className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to Home
              </Link>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  )
}
