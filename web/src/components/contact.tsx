/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Rocket } from 'lucide-react'; // Importing Rocket icon from lucide-react

const Contact: React.FC = () => {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-green-600 text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6 text-center">
          <Rocket className="h-12 w-12 text-white" />
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Build With Us
          </h2>
          <p className="mx-auto max-w-2xl text-lg md:text-xl text-green-100 leading-relaxed">
            Whether you're a visionary founder, a fellow investor, or a potential partner, we're excited to build the future of tech with you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 hover:bg-green-100 transition-colors rounded-lg px-6 py-3 font-semibold">
              Pitch Your Startup
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 transition-colors rounded-lg px-6 py-3 font-semibold">
              Partner With Us
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 transition-colors rounded-lg px-6 py-3 font-semibold">
              Join Our Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
