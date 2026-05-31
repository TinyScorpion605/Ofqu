import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Problem } from "@/components/problem"
import { HowItWorks } from "@/components/how-it-works"
import { WaitlistCta } from "@/components/waitlist-cta"
import { Faq } from "@/components/faq"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <Problem />
        <HowItWorks />
        <WaitlistCta />
        <Faq />
      </main>
      <Footer />
    </div>
  )
}
