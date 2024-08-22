import { Badge, BarChartIcon } from "lucide-react";

const awards = [
  { 
    name: "Champion", 
    org: "Development Academy of the Philippines (DAP)", 
    year: "2023", 
    description: "🏆 Champion at the START Hackathon 2023."
  },
  { 
    name: "Winner", 
    org: "Asian Development Bank (ADB) and Eskwelab", 
    year: "2023", 
    description: "🏆 Winner at the Sole Searchers Hackathon 2023."
  },
  { 
    name: "Top 10 Finalist", 
    org: "Department of Health (DOH)", 
    year: "2024", 
    description: "🏆 Top 10 Finalist at the Hack4Health 2024."
  },
  { 
    name: "Top 10 Finalist", 
    org: "TechUp Inter-University Innovation Challenge", 
    year: "2024", 
    description: "🏆 Top 10 Finalist at the TechUp Inter-University Innovation Challenge 2024."
  }
];

export default function Awards() {
  return (
    <section id="awards" className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-green-800">
          Awards & Recognition
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {awards.map((award, index) => (
            <div key={index} className="bg-white border border-green-200 transition-all hover:shadow-lg">
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
  );
}
