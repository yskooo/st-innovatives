/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
// import { button } from "@radix-ui/button"
// import { div, div } from ""
import { RocketIcon, CodeIcon, BarChartIcon, UsersIcon, BuildingIcon, ShipIcon, GlobeIcon, DollarSignIcon, BriefcaseIcon, LightbulbIcon, Badge } from "lucide-react"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@radix-ui/react-accordion"
import Link from "next/dist/client/link"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-green-50">

      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white sticky top-0 z-50">
        <Link className="flex items-center justify-center" href="#">
          <RocketIcon className="h-6 w-6 text-green-600" />
          <span className="font-bold ml-2 text-xl text-green-800">ST INNOVATIVES</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium text-black transition-colors" href="#about">
            About
          </Link>
          <Link className="text-sm font-medium text-black transition-colors" href="#portfolio">
            Ventures
          </Link>
          <Link className="text-sm font-medium text-black transition-colors" href="#achievements">
            Awards
          </Link>
          <Link className="text-sm font-medium text-black transition-colors" href="#team">
            Our Team
          </Link>
          <Link className="text-sm font-medium text-black transition-colors" href="#contact">
            Contact
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-green-600 via-green-500 to-emerald-500">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center text-white">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Invest. Build. Innovate.
                </h1>
                <p className="mx-auto max-w-[700px] text-lg md:text-xl">
                  venture capital firm of builders, turning groundbreaking ideas into successful tech startups. With over $500M under management, we're not just investors - we're your technical co-founders.
                </p>
              </div>
              <div className="space-x-4">
                <button className="bg-white text-green-600 hover:bg-green-100 transition-colors">
                  Explore Our Portfolio
                </button>
                <button className="border-white text-white hover:bg-white text-black transition-colors">
                  Pitch Your Startup
                </button>
              </div>
            </div>
          </div>
        </section>
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
        <section id="achievements" className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-green-800">Awards & Recognition</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                { name: "VC Firm of the Year", org: "TechCrunch", year: "2023", description: "Recognized for our innovative approach to venture capital and hands-on building." },
                { name: "Best Early-Stage Investor", org: "Crunchbase", year: "2022", description: "Awarded for our successful track record in identifying and nurturing high-potential startups." },
                { name: "Top 10 Most Active VCs", org: "PitchBook", year: "2023", description: "Ranked among the most active venture capital firms globally, with over 30 new investments in the past year." },
                { name: "Founder-Friendly Investor Award", org: "Inc. Magazine", year: "2022", description: "Voted by founders as one of the most supportive and value-adding investors in the tech ecosystem." },
                { name: "Best Tech Accelerator", org: "Web Summit", year: "2023", description: "Our in-house accelerator program was recognized for its exceptional support and resources provided to early-stage startups." },
                { name: "Innovation in VC Award", org: "NVCA", year: "2022", description: "Honored for our unique model of combining venture capital with hands-on technical expertise." }
              ].map((award, index) => (
                <div key={index} className="bg-white border-green-200 transition-all hover:shadow-lg">
                  <div className="p-6">
                    <BarChartIcon className="h-8 w-8 text-green-600 mb-2" />
                    <h3 className="text-xl font-bold mb-2 text-green-800">{award.name}</h3>
                    <p className="text-green-700 mb-1">{award.org}</p>
                    <Badge className="bg-green-200 text-green-800 mb-2">{award.year}</Badge>
                    <p className="text-sm text-green-600">{award.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
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
        <section id="team" className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-green-800">Meet ST VENTURES Team</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { name: "Alex Chen", role: "Founding Partner", expertise: "AI & Machine Learning", bio: "Former CTO of a unicorn AI startup, Alex brings deep technical expertise and a proven track record of scaling AI companies." },
                { name: "Sophia Lee", role: "Managing Partner", expertise: "FinTech & Blockchain", bio: "With 15 years in investment banking and 5 years as a blockchain entrepreneur, Sophia leads our fintech and crypto investments." },
                { name: "Marcus Wong", role: "Partner, Technical Lead", expertise: "Cloud & DevOps", bio: "Ex-Google cloud architect, Marcus helps our portfolio companies build scalable, efficient infrastructure and adopt best DevOps practices." },
                { name: "Olivia Tan", role: "Partner, Product Strategy", expertise: "UX & Growth", bio: "Previously led product at a $5B e-commerce company, Olivia advises our startups on user-centric design and growth strategies." }
              ].map((member, index) => (
                <div key={index} className="bg-white border-green-200 transition-all hover:shadow-lg">
                  <div className="flex flex-col items-center space-y-4 p-6">
                    <img
                      src={`/placeholder.svg?height=100&width=100&text=${member.name.split(' ').map(n => n[0]).join('')}`}
                      alt={member.name}
                      className="rounded-full"
                      width={100}
                      height={100}
                    />
                    <h3 className="text-xl font-bold text-green-800">{member.name}</h3>
                    <p className="text-sm text-center text-green-700">{member.role}</p>
                    <Badge className="bg-green-100 text-green-800">{member.expertise}</Badge>
                    <p className="text-sm text-center text-green-600">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
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
                { name: "John Smith", role: "CEO, TechNova", text: "ST VENTURES didn't just invest, they rolled up their sleeves and helped us build. Their technical expertise and network were game-changers for us. They helped us optimize our AI algorithms, resulting in a 40% improvement in accuracy." },
                { name: "Emily Wong", role: "Founder, QuantumLeap", text: "The hands-on approach of ST VENTURES was crucial in our journey from seed to acquisition. They're truly builders at heart. Their quantum computing expertise helped us breakthrough a key technical challenge that ultimately led to our successful exit." },
                { name: "Michael Lee", role: "CTO, CyberShield", text: "ST VENTURES' technical acumen is unparalleled. They didn't just provide capital, they provided invaluable insights that shaped our product strategy. Their cybersecurity partners helped us secure major enterprise clients, accelerating our path to IPO." }
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-green-800">FAQ</h2>
            <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
              {[
                { question: "What makes ST VENTURES different from other VC firms?", answer: "We're not just investors, we're builders. Our team of experienced technologists and entrepreneurs work alongside our portfolio companies, providing hands-on technical and strategic support." },
                { question: "What sectors do you invest in?", answer: "We focus on cutting-edge technology sectors including AI/ML, blockchain, cybersecurity, quantum computing, and enterprise SaaS. We're always excited by novel applications of technology that have the potential to disrupt industries." },
                { question: "What stage companies do you invest in?", answer: "We primarily invest in seed to Series A rounds, but we have the capacity to follow on in later rounds for our most promising portfolio companies." },
                { question: "How involved do you get with your portfolio companies?", answer: "Very involved. We see ourselves as extensions of our portfolio companies' teams. This can range from weekly strategy sessions to having our technical team embed with the company to solve critical challenges." },
                { question: "What's your typical investment size?", answer: "Our initial investments typically range from $500K to $5M, with capital reserved for follow-on rounds." }
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-green-800 text-black transition-colors">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-green-700">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-green-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <RocketIcon className="h-12 w-12" />
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Build With Us</h2>
              <p className="mx-auto max-w-[700px] text-lg md:text-xl text-green-100">
                Whether youre a visionary founder, a fellow investor, or a potential partner, we're excited to build the future of tech with you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-green-600 hover:bg-green-100 transition-colors">
                  Pitch Your Startup
                </button>
                <button className="border-white text-white hover:bg-white text-black transition-colors">
                  Partner With Us
                </button>
                <button className="border-white text-white hover:bg-white text-black transition-colors">
                  Join Our Team
                </button>
              </div>
            </div>
          </div>
        </section>
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
            © 2023 ST VENTURES. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}