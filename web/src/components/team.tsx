import React from 'react';

// Define types for the props
type BadgeProps = {
  className: string;
  children: React.ReactNode;
};

type TeamMemberProps = {
  name: string;
  role: string;
  expertise: string;
  bio: string;
};

// Badge component
const Badge: React.FC<BadgeProps> = ({ className, children }) => (
  <span className={`px-3 py-1 text-xs font-medium rounded-full ${className}`}>{children}</span>
);

// Team component
const Team: React.FC = () => {
  const members: TeamMemberProps[] = [
    { name: "John Paul Curada", role: "Machine Learning Engineer", expertise: "Data", bio: "Former CTO of a unicorn AI startup, Alex brings deep technical expertise and a proven track record of scaling AI companies." },
    { name: "Eujin Rod Sagun", role: "Project Manager", expertise: "Pitch Deck", bio: "With 15 years in investment banking and 5 years as a blockchain entrepreneur, Sophia leads our fintech and crypto investments." },
    { name: "Gabriel Rodenas", role: "Business Developer", expertise: "Business", bio: "Ex-Google cloud architect, Marcus helps our portfolio companies build scalable, efficient infrastructure and adopt best DevOps practices." },
    { name: "Henry James Carlos", role: "UI/UX Designer", expertise: "Design", bio: "Previously led product at a $5B e-commerce company, Olivia advises our startups on user-centric design and growth strategies." },
    { name: "Harold Martin Patacsil", role: "Software Engineer", expertise: "Development", bio: "Previously led product at a $5B e-commerce company, Olivia advises our startups on user-centric design and growth strategies." }
  ];

  return (
    <section id="team" className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-green-800">Meet Our Team</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((member, index) => (
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
  );
};

export default Team;
