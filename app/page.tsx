
import Header from "./(landing)/_components/Header";
import Hero from "./(landing)/_components/Hero";
import Features from "./(landing)/_components/Features"
import CTABanner from "./(landing)/_components/CTABanner";
import Footer from "./(landing)/_components/Footer";
import HowItWorks from "./(landing)/_components/HowItWorks";
import Contact from "./(landing)/_components/Contact"

export default function RootPage() {
  return (
    <main>
      <Header/>
      <Hero/>
      <Features/>
      <CTABanner/>
      <HowItWorks/>
      <Contact/>
      <Footer/>
    </main>
  )

  
}