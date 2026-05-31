"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Is OfferQuest free?",
    answer: "OfferQuest will offer a generous free tier with all the essential features you need to track your job applications. We&apos;ll also have a premium tier with advanced analytics and unlimited storage.",
  },
  {
    question: "Which job boards does it support?",
    answer: "OfferQuest works with all major job boards including LinkedIn, Indeed, Glassdoor, AngelList, and company career pages. If it&apos;s a job listing on the web, you can save it.",
  },
  {
    question: "When will OfferQuest launch?",
    answer: "We&apos;re currently in private beta and plan to launch publicly in early 2025. Join the waitlist to get early access and be among the first to try it.",
  },
  {
    question: "Can I sync across multiple devices?",
    answer: "Yes! Your data syncs securely across all your devices. Start on your laptop and check your applications from your phone or tablet.",
  },
]

export function Faq() {
  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-medium text-primary">FAQ</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Frequently asked questions
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-foreground">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
