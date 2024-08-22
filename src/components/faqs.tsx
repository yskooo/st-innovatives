import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react'; // Importing ChevronDown from lucide-react

// Define types for the FAQ item
interface FAQItem {
  question: string;
  answer: string;
}

const FAQs: React.FC = () => {
  const faqs: FAQItem[] = [
    { question: "What makes ST INNOVATIVES different from other VC firms?", answer: "We're not just investors, we're builders. Our team of experienced technologists and entrepreneurs work alongside our portfolio companies, providing hands-on technical and strategic support." },
    { question: "What sectors do you invest in?", answer: "We focus on cutting-edge technology sectors including AI/ML, blockchain, cybersecurity, quantum computing, and enterprise SaaS. We're always excited by novel applications of technology that have the potential to disrupt industries." },
    { question: "What stage companies do you invest in?", answer: "We primarily invest in seed to Series A rounds, but we have the capacity to follow on in later rounds for our most promising portfolio companies." },
    { question: "How involved do you get with your portfolio companies?", answer: "Very involved. We see ourselves as extensions of our portfolio companies' teams. This can range from weekly strategy sessions to having our technical team embed with the company to solve critical challenges." },
    { question: "What's your typical investment size?", answer: "Our initial investments typically range from $500K to $5M, with capital reserved for follow-on rounds." }
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-green-800">FAQ</h2>
        <Accordion.Root type="single" collapsible className="w-full max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <Accordion.Item key={index} value={`item-${index}`}>
              <Accordion.Header>
                <Accordion.Trigger className="flex items-center justify-between w-full py-4 px-6 border-b border-green-200 bg-white text-green-800 text-left transition-colors hover:bg-green-50">
                  <span>{faq.question}</span>
                  <ChevronDown className="w-5 h-5 transition-transform transform rotate-0 data-state-open:rotate-180" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="text-green-700 p-4 border-b border-green-200">
                {faq.answer}
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
};

export default FAQs;
