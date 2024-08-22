/* eslint-disable react/no-unescaped-entities */
export default function Hero() {

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-green-600 via-green-500 to-emerald-500">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center space-y-6 text-center text-white">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Invest. Build. Innovate.
              </h1>
              <p className="mx-auto max-w-[700px] text-lg md:text-xl">
                Venture capital firm of builders, turning groundbreaking ideas into successful tech startups. With over $500M under management, we're not just investors - we're your technical co-founders.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-6 py-3 bg-white text-green-600 font-semibold rounded-lg shadow-md hover:bg-green-100 transition-colors duration-300">
                Explore Our Portfolio
              </button>
              <button className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg shadow-md hover:bg-white hover:text-green-600 transition-colors duration-300">
                Pitch Your Startup
              </button>
            </div>
          </div>
        </div>
      </section>
  );
}
