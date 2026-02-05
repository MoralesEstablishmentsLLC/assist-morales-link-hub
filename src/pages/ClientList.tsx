import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Building2, Globe, Users, X } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import TypeWriter from "@/components/TypeWriter";

const ClientList = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);
  const networkSection = useScrollAnimation();
  
  const clients = [
    {
      name: "Private Practice Therapy",
      industry: "Healthcare & Mental Health",
      description: "Experienced therapist providing comprehensive mental health services with multiple therapy approaches including CBT, attachment-based therapy, and family counseling",
      website: "calendar.moralesassist.com",
      services: ["Online Booking System", "Appointment Management", "Contact Forms"]
    },
    {
      name: "Confidential Investigations",
      industry: "Security & Investigation",
      description: "Professional private investigation services providing discreet and confidential solutions for personal and corporate clients",
      website: "Coming Soon",
      services: ["Secure Contact Forms", "Client Portal", "Privacy-Focused Design"]
    },
    {
      name: "FynCom",
      industry: "Telecommunications & Privacy",
      description: "Revolutionary platform that helps users earn money while blocking spam calls and messages, turning unwanted communications into revenue opportunities",
      website: "fyncom.com",
      services: ["Web Platform Development", "Payment Integration", "Spam Detection System"]
    },
    {
      name: "Bali Learning",
      industry: "Education & Tutoring",
      description: "Comprehensive tutoring services offering both in-person and online learning experiences, helping students achieve academic excellence through personalized instruction",
      website: "balilearning.com",
      services: ["Online Learning Platform", "Student Portal", "Scheduling System", "Progress Tracking"]
    },
    {
      name: "Mor Running",
      industry: "Sports & Retail",
      description: "Premium running shoe retailer specializing in high-performance footwear for competitive athletes, offering expert fitting and the latest technology in athletic footwear",
      website: "runningassist.com",
      services: ["E-commerce Platform", "Product Catalog", "Athlete Profiles", "Performance Tracking"]
    },
    {
      name: "Elli's Full 'O Bellies",
      industry: "Food & Restaurant",
      description: "Authentic Mexican food bringing traditional flavors and family recipes to the 559 area, serving up delicious homestyle dishes with fresh ingredients",
      website: "Coming Soon",
      services: ["Online Ordering", "Menu Display", "Location & Hours", "Catering Inquiries"]
    }
  ];

  const industries = [...new Set(clients.map(client => client.industry))];
  const filteredClients = selectedIndustry 
    ? clients.filter(client => client.industry === selectedIndustry)
    : clients;

  return (
    <div className="min-h-screen bg-background">
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12 text-center bg-primary p-8 rounded-lg text-primary-foreground">
          <h1 className="text-4xl font-bold text-blue-300 mb-4">
            {selectedIndustry ? `${selectedIndustry} Clients` : "Client Directory"}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {selectedIndustry 
              ? `Explore our clients in the ${selectedIndustry} industry.`
              : "Discover our network of diverse businesses and companies across various industries. Each client represents a successful partnership in digital transformation."
            }
          </p>
          
          {selectedIndustry && (
            <Button 
              variant="secondary" 
              size="sm" 
              className="mt-4"
              onClick={() => setSelectedIndustry(null)}
            >
              <X className="w-4 h-4 mr-2" />
              Show All Clients
            </Button>
          )}
          
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {industries.map((industry) => (
              <Badge 
                key={industry} 
                variant={selectedIndustry === industry ? "default" : "secondary"} 
                className="text-sm cursor-pointer hover:bg-accent transition-colors"
                onClick={() => setSelectedIndustry(industry === selectedIndustry ? null : industry)}
              >
                {industry}
              </Badge>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredClients.map((client, index) => {
            const ClientCard = () => {
              const cardAnimation = useScrollAnimation();
              
              return (
                <div
                  ref={cardAnimation.ref}
                  className={`transition-all duration-700 ${
                    cardAnimation.isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <Card className="shadow-card hover:shadow-elegant transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg text-foreground">{client.name}</CardTitle>
                    <Badge variant="outline" className="mt-2">
                      {client.industry}
                    </Badge>
                  </div>
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">{client.description}</p>
                
                <div className="flex items-center gap-2 text-sm">
                  <Globe className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">{client.website}</span>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-medium text-foreground">Services Provided:</p>
                  <div className="flex flex-wrap gap-1">
                    {client.services.map((service, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </div>

                {client.website !== "Coming Soon" ? (
                  <a 
                    href={`https://${client.website}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button variant="outline" size="sm" className="w-full">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visit Website
                    </Button>
                  </a>
                ) : (
                  <Button variant="outline" size="sm" className="w-full" disabled>
                    <Globe className="w-4 h-4 mr-2" />
                    Website Coming Soon
                  </Button>
                )}
              </CardContent>
            </Card>
          </div>
        );
      };
      
      return <ClientCard key={index} />;
    })}
  </div>

        <div className="mt-16 text-center">
          <Card className="shadow-card bg-gradient-primary text-white">
            <CardContent className="py-12">
              <div ref={networkSection.ref}>
                <Users className="w-12 h-12 mx-auto mb-4" />
                <h2 className="text-2xl font-bold mb-4">Join Our Network</h2>
                <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto min-h-[3.5rem]">
                  {networkSection.isVisible ? (
                    <TypeWriter 
                      text="Ready to transform your business digitally? Connect with our network of successful businesses and take your company to the next level."
                      speed={30}
                    />
                  ) : (
                    <span className="invisible">Ready to transform your business digitally? Connect with our network of successful businesses and take your company to the next level.</span>
                  )}
                </p>
              </div>
              <Link to="/request">
                <Button variant="secondary" size="lg">
                  Get Started Today
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default ClientList;