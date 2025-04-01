import { Card } from "../components/ui/card";
import { Leaf, Users, Trophy, Target } from "lucide-react";

export function About() {
  const team = [
    {
      name: "Dr. Sarah Johnson",
      role: "Lead Soil Scientist",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    },
    {
      name: "Michael Chen",
      role: "Agricultural Expert",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Data Analyst",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
    },
  ];

  const values = [
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Sustainability",
      description: "Promoting environmentally conscious farming practices",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community",
      description: "Building a network of knowledgeable farmers",
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "Excellence",
      description: "Delivering accurate and reliable soil analysis",
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Innovation",
      description: "Continuously improving our technology",
    },
  ];

  return (
    <div className="container py-12 space-y-16">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">About Our Mission</h1>
        <p className="text-lg text-muted-foreground">
          We're dedicated to revolutionizing agriculture through precise soil analysis
          and data-driven recommendations. Our mission is to help farmers maximize
          their yields while maintaining sustainable practices.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-muted-foreground mb-4">
            Founded in 2023, our soil sampling system emerged from a simple idea:
            make professional soil analysis accessible to every farmer. What started
            as a small research project has grown into a comprehensive platform
            used by thousands of agricultural professionals worldwide.
          </p>
          <p className="text-muted-foreground">
            Today, we continue to innovate and improve our services, combining
            cutting-edge technology with agricultural expertise to provide the most
            accurate soil analysis possible.
          </p>
        </div>
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">Key Achievements</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-4">
              <div className="rounded-full bg-primary/10 p-2">
                <Trophy className="h-4 w-4 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Agricultural Innovation Award 2024</h4>
                <p className="text-sm text-muted-foreground">
                  Recognized for breakthrough soil analysis technology
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="rounded-full bg-primary/10 p-2">
                <Users className="h-4 w-4 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">10,000+ Farmers Served</h4>
                <p className="text-sm text-muted-foreground">
                  Helping farmers across 50+ countries
                </p>
              </div>
            </li>
          </ul>
        </Card>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-8 text-center">Our Values</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value) => (
            <Card key={value.title} className="p-6 text-center">
              <div className="mb-4 text-primary flex justify-center">
                {value.icon}
              </div>
              <h3 className="font-semibold mb-2">{value.title}</h3>
              <p className="text-sm text-muted-foreground">
                {value.description}
              </p>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-8 text-center">Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member) => (
            <Card key={member.name} className="overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}