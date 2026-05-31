"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WaitlistCta() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative bg-primary rounded-3xl p-8 sm:p-12 text-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:24px_24px]" />
          
          <div className="relative z-10">
            <div className="w-12 h-12 mx-auto rounded-xl bg-primary-foreground/20 flex items-center justify-center mb-6">
              <Sparkles className="w-6 h-6 text-primary-foreground" />
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-bold text-primary-foreground text-balance">
              Be the first to try OfferQuest
            </h2>
            <p className="mt-4 text-primary-foreground/80 max-w-xl mx-auto">
              Join the waitlist today and get early access when we launch. Plus, enjoy exclusive perks for early supporters.
            </p>
            
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="mt-8"
            >
              <Link href="/waitlist">
                Join the Waitlist
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
