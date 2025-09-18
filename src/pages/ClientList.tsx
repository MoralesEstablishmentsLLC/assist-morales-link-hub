import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Building2, Globe, Users, X } from "lucide-react";

const ClientList = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);
  
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
    }
  ];

  const industries = [...new Set(clients.map(client => client.industry))];
  const filteredClients = selectedIndustry 
    ? clients.filter(client => client.industry === selectedIndustry)
    : clients;

  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12 text-center bg-slate-800 p-8 rounded-lg">
          <h1 className="text-4xl font-bold text-blue-400 mb-4">
            {selectedIndustry ? `${selectedIndustry} Clients` : "Client Directory"}
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            {selectedIndustry 
              ? `Explore our clients in the ${selectedIndustry} industry.`
              : "Discover our network of diverse businesses and companies across various industries. Each client represents a successful partnership in digital transformation."
            }
          </p>
          
          {selectedIndustry && (
            <Button 
              variant="outline" 
              size="sm" 
              className="mt-4 border-slate-600 text-slate-300 hover:bg-slate-700"
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
                variant={selectedIndustry === industry ? "default" : "outline"} 
                className={`text-sm cursor-pointer transition-colors ${
                  selectedIndustry === industry 
                    ? "bg-blue-600 text-white hover:bg-blue-700" 
                    : "border-slate-600 text-slate-300 hover:bg-slate-700"
                }`}
                onClick={() => setSelectedIndustry(industry === selectedIndustry ? null : industry)}
              >
                {industry}
              </Badge>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredClients.map((client, index) => (
            <Card key={index} className="shadow-card hover:shadow-elegant transition-shadow duration-300 bg-slate-800 border-slate-700">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg text-blue-400">{client.name}</CardTitle>
                    <Badge variant="outline" className="mt-2 border-slate-600 text-slate-300">
                      {client.industry}
                    </Badge>
                  </div>
                  <Building2 className="w-6 h-6 text-blue-400" />
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-400 text-sm">{client.description}</p>
                
                <div className="flex items-center gap-2 text-sm">
                  <Globe className="w-4 h-4 text-blue-400" />
                  <span className="text-slate-400">{client.website}</span>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-medium text-blue-400">Services Provided:</p>
                  <div className="flex flex-wrap gap-1">
                    {client.services.map((service, i) => (
                      <Badge key={i} variant="outline" className="text-xs border-slate-600 text-slate-300">
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
                    <Button variant="outline" size="sm" className="w-full border-slate-600 text-slate-300 hover:bg-slate-700">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visit Website
                    </Button>
                  </a>
                ) : (
                  <Button variant="outline" size="sm" className="w-full border-slate-600 text-slate-500" disabled>
                    <Globe className="w-4 h-4 mr-2" />
                    Website Coming Soon
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="shadow-card bg-slate-800 border-slate-700">
            <CardContent className="py-12">
              <Users className="w-12 h-12 mx-auto mb-4 text-blue-400" />
              <h2 className="text-2xl font-bold mb-4 text-blue-400">Join Our Network</h2>
              <p className="text-lg text-slate-300 mb-6 max-w-2xl mx-auto">
                Ready to transform your business digitally? Connect with our network of successful 
                businesses and take your company to the next level.
              </p>
              <Link to="/request">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white" size="lg">
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