import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Mail, Phone, MapPin, Globe } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
const Resume = () => {
  const { ref: contactRef, isVisible: contactVisible } = useScrollAnimation();
  const { ref: summaryRef, isVisible: summaryVisible } = useScrollAnimation();
  const { ref: experienceRef, isVisible: experienceVisible } = useScrollAnimation();
  const { ref: skillsRef, isVisible: skillsVisible } = useScrollAnimation();

  return <div className="min-h-screen bg-black text-white">
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 text-blue-400">Personal Resume</h1>
          <div className="flex flex-wrap gap-4 items-center">
            
          </div>
        </div>

        <div className="grid gap-8">
          {/* Contact Information */}
          <Card 
            ref={contactRef}
            className={`shadow-card bg-gray-900 border-gray-800 transition-all duration-700 ${
              contactVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <CardHeader>
              <CardTitle className="text-blue-400">Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span className="text-white">jalen@moralesassist.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-blue-400" />
                  <span className="text-white">+1 (559) 722-6123
                </span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span className="text-white">Digital Services Worldwide</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-blue-400" />
                  <span className="text-white">www.linkedin.com/in/jalenjm05</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Professional Summary */}
          <Card 
            ref={summaryRef}
            className={`shadow-card bg-gray-900 border-gray-800 transition-all duration-700 delay-200 ${
              summaryVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <CardHeader>
              <CardTitle className="text-blue-400">Professional Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 leading-relaxed">
                Experienced digital services professional specializing in helping small businesses and companies 
                establish and enhance their digital presence. With expertise in web development, digital strategy, 
                and business connections, I provide comprehensive solutions that drive growth and success in the digital world.
              </p>
            </CardContent>
          </Card>

          {/* Experience */}
          <Card 
            ref={experienceRef}
            className={`shadow-card bg-gray-900 border-gray-800 transition-all duration-700 delay-400 ${
              experienceVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <CardHeader>
              <CardTitle className="text-blue-400">Experience</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white">Founder and Developer</h3>
                <p className="text-blue-400 font-medium">Experienced Coding Knowledge</p>
                <ul className="mt-2 space-y-1 text-gray-300">
                  <li>• Provide comprehensive digital solutions for small businesses and companies</li>
                  <li>• Develop custom websites and digital platforms</li>
                  <li>• Build strategic business connections across diverse industries</li>
                  <li>• Offer consultation on digital transformation and online presence</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white">Bioengineering</h3>
                <p className="text-blue-400 font-medium">UC Merced</p>
                <ul className="mt-2 space-y-1 text-gray-300">
                  <li>• Lab Experience in all sciences</li>
                  <li>• Implemented modern web technologies and best practices</li>
                  <li>• Provided ongoing maintenance and support services</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Skills */}
          <Card 
            ref={skillsRef}
            className={`shadow-card bg-gray-900 border-gray-800 transition-all duration-700 delay-600 ${
              skillsVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <CardHeader>
              <CardTitle className="text-blue-400">Core Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-semibold text-white mb-2">Technical</h4>
                  <ul className="space-y-1 text-gray-300">
                    <li>• Web Development</li>
                    <li>• Python, React, Java</li>
                    <li>• UI/UX Design</li>
                    <li>• SEO Optimization</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Business</h4>
                  <ul className="space-y-1 text-gray-300">
                    <li>• Client Relations</li>
                    <li>• Project Management</li>
                    <li>• Business Development</li>
                    <li>• Strategic Planning</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Industries</h4>
                  <ul className="space-y-1 text-gray-300">
                    <li>• Small Business</li>
                    <li>• E-commerce</li>
                    <li>• Professional Services</li>
                    <li>• Technology</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Athletics */}
          <Card 
            className="shadow-card bg-gray-900 border-gray-800 transition-all duration-700 delay-700 opacity-100 translate-y-0"
          >
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-blue-400">Track & Field Athletics</CardTitle>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
                  onClick={() => window.open('https://www.athletic.net/athlete/27400231/track-and-field', '_blank')}
                >
                  View Full Profile
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">UC Merced Bobcats</h3>
                <p className="text-blue-400 font-medium mb-4">Collegiate Track & Field Athlete</p>
                
                <h4 className="font-semibold text-white mb-3">School Records</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-black/30 p-4 rounded-lg border border-blue-500/50">
                    <p className="text-gray-400 text-sm mb-1">800 Meters</p>
                    <p className="text-2xl font-bold text-blue-400">1:53.26</p>
                    <p className="text-yellow-400 text-sm mt-1 font-semibold">🏆 School Record</p>
                  </div>
                  <div className="bg-black/30 p-4 rounded-lg border border-blue-500/50">
                    <p className="text-gray-400 text-sm mb-1">4x400 Relay</p>
                    <p className="text-2xl font-bold text-blue-400">3:23.72</p>
                    <p className="text-yellow-400 text-sm mt-1 font-semibold">🏆 School Record</p>
                  </div>
                  <div className="bg-black/30 p-4 rounded-lg border border-blue-500/50">
                    <p className="text-gray-400 text-sm mb-1">4x800 Relay</p>
                    <p className="text-2xl font-bold text-blue-400">7:36.82</p>
                    <p className="text-yellow-400 text-sm mt-1 font-semibold">🏆 School Record</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>;
};
export default Resume;