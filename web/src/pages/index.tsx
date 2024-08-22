/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import { RocketIcon, BarChartIcon, UsersIcon, BuildingIcon,Badge } from "lucide-react"

import Link from "next/dist/client/link"
import Header from "@/components/header";
import Hero from "@/components/hero";
import Awards from "@/components/awards";
import Team from "@/components/team";
import FAQs from "@/components/faqs";
import Contact from "@/components/contact";

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-green-50">
      <Header/>
      <main className="flex-1">
       <Hero/>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-green-800">Our Impact</h2>
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="bg-green-100 border-green-200 transition-all hover:shadow-lg">
                <div className="flex flex-col items-center space-y-4 p-6">
                  <BuildingIcon className="h-12 w-12 text-green-600" />
                  <h3 className="text-2xl font-bold text-green-800">50+ Startups Funded</h3>
                  <p className="text-center text-green-700">
                    We've invested in and actively built over 50 innovative tech startups across AI, blockchain, cybersecurity, and more. Our hands-on approach has led to a portfolio success rate 3x the industry average.
                  </p>
                </div>
              </div>
              <div className="bg-green-100 border-green-200 transition-all hover:shadow-lg">
                <div className="flex flex-col items-center space-y-4 p-6">
                  <RocketIcon className="h-12 w-12 text-green-600" />
                  <h3 className="text-2xl font-bold text-green-800">$500M+ in Exits</h3>
                  <p className="text-center text-green-700">
                    Our strategic guidance and technical expertise have led to successful exits totaling over $500M. This includes 3 IPOs and 12 acquisitions by major tech companies in the last 5 years alone.
                  </p>
                </div>
              </div>
              <div className="bg-green-100 border-green-200 transition-all hover:shadow-lg">
                <div className="flex flex-col items-center space-y-4 p-6">
                  <UsersIcon className="h-12 w-12 text-green-600" />
                  <h3 className="text-2xl font-bold text-green-800">1000+ Jobs Created</h3>
                  <p className="text-center text-green-700">
                    Our portfolio companies have generated over 1000 high-quality tech jobs. We're not just building products; we're building teams and fostering the next generation of tech talent.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Awards/>

        <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-green-800">Portfolio Highlights</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                { name: "TechNova", description: "AI-powered business intelligence platform revolutionizing data analytics", impact: "Series B, $50M valuation", details: "Our technical team helped architect TechNova's scalable AI infrastructure, leading to a 10x improvement in processing speed." },
                { name: "QuantumLeap", description: "Quantum computing solutions for complex financial modeling", impact: "Acquired by Tech Giant for $100M", details: "We provided critical guidance on quantum algorithms, directly contributing to the breakthrough that led to the acquisition." },
                { name: "CyberShield", description: "Next-gen cybersecurity leveraging behavioral AI for enterprise protection", impact: "IPO, $1B market cap", details: "Our cybersecurity experts co-developed CyberShield's core technology, resulting in a product that now protects over 100 Fortune 500 companies." }
              ].map((project, index) => (
                <div key={index} className="bg-green-100 border-green-200 transition-all hover:shadow-lg">
                  <div className="p-6">
                    <img
                      src={`/placeholder.svg?height=200&width=400&text=${project.name}`}
                      alt={project.name}
                      className="w-full h-48 object-cover rounded-md mb-4"
                    />
                    <h3 className="text-xl font-bold mb-2 text-green-800">{project.name}</h3>
                    <p className="text-green-700 mb-4">{project.description}</p>
                    <Badge className="bg-green-200 text-green-800 mb-2">{project.impact}</Badge>
                    <p className="text-sm text-green-600 mt-2">{project.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Team/>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-green-800">Our Network</h2>
            <p className="text-center text-green-700 mb-8 max-w-2xl mx-auto">
              We've built strong relationships with leading tech companies, research institutions, and industry bodies to provide unparalleled support to our portfolio companies.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-center">
              {["TechGiants", "VCAlliance", "StartupHub", "InnovateNow", "TechIncubator", "AngelNetwork"].map((partner, index) => (
                <div key={index} className="flex items-center justify-center">
                  <img
                    src={`/placeholder.svg?height=80&width=160&text=${partner}`}
                    alt={partner}
                    className="max-h-12 max-w-[120px] opacity-60 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-green-800">Founder Testimonials</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                { name: "John Smith", role: "CEO, TechNova", text: "ST INNOVATIVES didn't just invest, they rolled up their sleeves and helped us build. Their technical expertise and network were game-changers for us. They helped us optimize our AI algorithms, resulting in a 40% improvement in accuracy." },
                { name: "Emily Wong", role: "Founder, QuantumLeap", text: "The hands-on approach of ST INNOVATIVES was crucial in our journey from seed to acquisition. They're truly builders at heart. Their quantum computing expertise helped us breakthrough a key technical challenge that ultimately led to our successful exit." },
                { name: "Michael Lee", role: "CTO, CyberShield", text: "ST INNOVATIVES' technical acumen is unparalleled. They didn't just provide capital, they provided invaluable insights that shaped our product strategy. Their cybersecurity partners helped us secure major enterprise clients, accelerating our path to IPO." }
              ].map((testimonial, index) => (
                <div key={index} className="bg-white border-green-200 transition-all hover:shadow-lg">
                  <div className="p-6">
                    <p className="text-green-700 mb-4">"{testimonial.text}"</p>
                    <div className="flex items-center space-x-4">
                      <img
                        src={`/placeholder.svg?height=40&width=40&text=${testimonial.name.split(' ').map(n => n[0]).join('')}`}
                        alt={testimonial.name}
                        className="rounded-full"
                        width={40}
                        height={40}
                      />
                      <div>
                        <p className="font-semibold text-green-800">{testimonial.name}</p>
                        <p className="text-sm text-green-600">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
       <FAQs/>
        <Contact/>
      </main>

      <footer className="w-full py-6 bg-green-800 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div className="space-y-3">
              <h4 className="text-sm font-medium">About Us</h4>
              <ul className="space-y-1">
                <li>
                  <Link className="text-sm text-green-200 hover:text-white transition-colors" href="#">
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link className="text-sm text-green-200 hover:text-white transition-colors" href="#">
                    Team
                  </Link>
                </li>
                <li>
                  <Link className="text-sm text-green-200 hover:text-white transition-colors" href="#">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Portfolio</h4>
              <ul className="space-y-1">
                <li>
                  <Link className="text-sm text-green-200 hover:text-white transition-colors" href="#">
                    Companies
                  </Link>
                </li>
                <li>
                  <Link className="text-sm text-green-200 hover:text-white transition-colors" href="#">
                    Sectors
                  </Link>
                </li>
                <li>
                  <Link className="text-sm text-green-200 hover:text-white transition-colors" href="#">
                    Case Studies
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Resources</h4>
              <ul className="space-y-1">
                <li>
                  <Link className="text-sm text-green-200 hover:text-white transition-colors" href="#">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link className="text-sm text-green-200 hover:text-white transition-colors" href="#">
                    Research
                  </Link>
                </li>
                <li>
                  <Link className="text-sm text-green-200 hover:text-white transition-colors" href="#">
                    Events
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Contact</h4>
              <ul className="space-y-1">
                <li>
                  <Link className="text-sm text-green-200 hover:text-white transition-colors" href="#">
                    Get in Touch
                  </Link>
                </li>
                <li>
                  <Link className="text-sm text-green-200 hover:text-white transition-colors" href="#">
                    Press Inquiries
                  </Link>
                </li>
                <li>
                  <Link className="text-sm text-green-200 hover:text-white transition-colors" href="#">
                    Office Locations
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-6 text-center text-sm text-green-200">
            © 2023 ST INNOVATIVES. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}