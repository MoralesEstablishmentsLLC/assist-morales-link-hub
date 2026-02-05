import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Globe, GraduationCap, Briefcase, Trophy, Award, Code, Heart } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Resume = () => {
  const { ref: contactRef, isVisible: contactVisible } = useScrollAnimation();
  const { ref: educationRef, isVisible: educationVisible } = useScrollAnimation();
  const { ref: athleticsRef, isVisible: athleticsVisible } = useScrollAnimation();
  const { ref: experienceRef, isVisible: experienceVisible } = useScrollAnimation();
  const { ref: skillsRef, isVisible: skillsVisible } = useScrollAnimation();
  const { ref: honorsRef, isVisible: honorsVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-black text-white">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-2 text-blue-400">Jalen Morales</h1>
          <p className="text-gray-400">Madera, CA</p>
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            <Badge variant="outline" className="border-blue-400 text-blue-400">
              Basic Life Support Certified
            </Badge>
            <Badge variant="outline" className="border-blue-400 text-blue-400">
              Licensed Driver
            </Badge>
          </div>
        </div>

        <div className="grid gap-8">
          {/* Contact Information */}
          <Card
            ref={contactRef}
            className={`shadow-card bg-gray-900 border-gray-800 transition-all duration-700 ${
              contactVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <CardHeader>
              <CardTitle className="text-blue-400 flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span className="text-white">jalen@moralesassist.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-blue-400" />
                  <span className="text-white">559-722-6123</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span className="text-white">Madera, CA</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-blue-400" />
                  <a href="https://home.moralesassist.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                    home.moralesassist.com
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Education */}
          <Card
            ref={educationRef}
            className={`shadow-card bg-gray-900 border-gray-800 transition-all duration-700 delay-100 ${
              educationVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <CardHeader>
              <CardTitle className="text-blue-400 flex items-center gap-2">
                <GraduationCap className="w-5 h-5" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white">University of California, Merced</h3>
                <p className="text-blue-400 font-medium">B.S. Bioengineering (Expected May 2028)</p>
                <ul className="mt-2 space-y-1 text-gray-300">
                  <li>• NCAA Division 2 Cross Country and Track & Field Athlete</li>
                  <li>• School Record Holder (x3)</li>
                  <li>• Labs Completed: Molecular Biology, Physics, Chemistry</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white">Clovis High School</h3>
                <p className="text-blue-400 font-medium">2020-2024 – Clovis, CA</p>
                <ul className="mt-2 space-y-1 text-gray-300">
                  <li>• 3.8 GPA</li>
                  <li>• Completed 7 college-level courses including up to Calculus 2</li>
                  <li>• Ranked 7th all-time in Clovis for 800m</li>
                  <li>• Varsity Cross Country and Track Team Captain</li>
                  <li>• Top Violinist in high ranked Orchestra</li>
                  <li>• Developed first website (2022)</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Athletics & Leadership */}
          <Card
            ref={athleticsRef}
            className={`shadow-card bg-gray-900 border-gray-800 transition-all duration-700 delay-200 ${
              athleticsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-blue-400 flex items-center gap-2">
                  <Trophy className="w-5 h-5" />
                  Athletics & Leadership
                </CardTitle>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
                  onClick={() => window.open("https://www.athletic.net/athlete/27400231/track-and-field", "_blank")}
                >
                  View Athletic Profile
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white">UC Merced Men's Cross Country and Track & Field Team</h3>
                <p className="text-blue-400 font-medium mb-2">Student-Athlete since 4th Grade</p>
                <ul className="space-y-1 text-gray-300">
                  <li>• Competed as a collegiate athlete running 70+ miles per week while maintaining high academic standing</li>
                  <li>• Currently holds school records in the 800m, 4x400m, and 4x800m events during first college season</li>
                  <li>• Developed leadership, discipline, and teamwork skills through competitive athletics</li>
                </ul>
              </div>

              <div>
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

          {/* Professional Experience */}
          <Card
            ref={experienceRef}
            className={`shadow-card bg-gray-900 border-gray-800 transition-all duration-700 delay-300 ${
              experienceVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <CardHeader>
              <CardTitle className="text-blue-400 flex items-center gap-2">
                <Briefcase className="w-5 h-5" />
                Professional Experience
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <h3 className="text-lg font-semibold text-white">Robocash Inc. (FynCom / KarmaCall)</h3>
                  <span className="text-gray-400 text-sm">July 2025 – Present</span>
                </div>
                <p className="text-blue-400 font-medium">Intern (Patented Technology)</p>
                <ul className="mt-2 space-y-1 text-gray-300">
                  <li>• Led marketing initiatives and collaborate with Engineers to enhance app qualities</li>
                  <li>• Involved in the integration of AI technologies into marketing strategies, improving campaign efficiency and engagement</li>
                  <li>• Developed content and managed digital outreach to drive user growth</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <h3 className="text-lg font-semibold text-white">Amazon</h3>
                  <span className="text-gray-400 text-sm">May 2025 – September 2025</span>
                </div>
                <p className="text-blue-400 font-medium">Seasonal Helper (Summer)</p>
                <ul className="mt-2 space-y-1 text-gray-300">
                  <li>• Supported daily operations in a fast-paced environment, consistently exceeding productivity targets (500+ packages)</li>
                  <li>• Assisted team members with order fulfillment, ensuring accurate and timely delivery of over 250+ stops</li>
                  <li>• Maintained high standards of workplace safety (Driving assessment)</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <h3 className="text-lg font-semibold text-white">Bali Tutoring</h3>
                  <span className="text-gray-400 text-sm">November 2024 – Present</span>
                </div>
                <p className="text-blue-400 font-medium">Remote and In-Person Tutor – Merced, CA</p>
                <ul className="mt-2 space-y-1 text-gray-300">
                  <li>• Provided personalized tutoring across multiple subjects to diverse students, K-10</li>
                  <li>• Designed lesson plans and educational materials to accommodate individual learning styles</li>
                  <li>• Improved student performance and confidence through targeted instruction and mentoring</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Skills */}
          <Card
            ref={skillsRef}
            className={`shadow-card bg-gray-900 border-gray-800 transition-all duration-700 delay-400 ${
              skillsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <CardHeader>
              <CardTitle className="text-blue-400 flex items-center gap-2">
                <Code className="w-5 h-5" />
                Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-white mb-3">Technical</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-blue-600/20 text-blue-400 border-blue-500/30">Python</Badge>
                    <Badge className="bg-blue-600/20 text-blue-400 border-blue-500/30">JavaScript</Badge>
                    <Badge className="bg-blue-600/20 text-blue-400 border-blue-500/30">C++</Badge>
                    <Badge className="bg-blue-600/20 text-blue-400 border-blue-500/30">SQL</Badge>
                    <Badge className="bg-blue-600/20 text-blue-400 border-blue-500/30">Software Engineering</Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-3">Communication</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-green-600/20 text-green-400 border-green-500/30">Public Speaking</Badge>
                    <Badge className="bg-green-600/20 text-green-400 border-green-500/30">Group Instruction</Badge>
                    <Badge className="bg-green-600/20 text-green-400 border-green-500/30">Digital Content Creation</Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-3">Leadership</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-purple-600/20 text-purple-400 border-purple-500/30">Team Coordination</Badge>
                    <Badge className="bg-purple-600/20 text-purple-400 border-purple-500/30">Mentoring</Badge>
                    <Badge className="bg-purple-600/20 text-purple-400 border-purple-500/30">Project Management</Badge>
                    <Badge className="bg-purple-600/20 text-purple-400 border-purple-500/30">Time Management</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Honors & Awards */}
          <Card
            ref={honorsRef}
            className={`shadow-card bg-gray-900 border-gray-800 transition-all duration-700 delay-500 ${
              honorsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <CardHeader>
              <CardTitle className="text-blue-400 flex items-center gap-2">
                <Award className="w-5 h-5" />
                Honors & Awards
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <h4 className="font-semibold text-white">Collegiate</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <Trophy className="w-4 h-4 text-yellow-400 mt-1 flex-shrink-0" />
                      <span>UC Merced Track & Field School Records (800m, 4x400m, 4x800m)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Trophy className="w-4 h-4 text-yellow-400 mt-1 flex-shrink-0" />
                      <span>NAIA Nationals Qualifier in the 4x800</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-white">High School (Clovis - Division 1)</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <Award className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                      <span>7th all-time 800m ranking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Award className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                      <span>2X State Qualifier</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Award className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                      <span>Track League Champion (2021)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Award className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                      <span>2023 Most Improved XC</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Award className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                      <span>2024 Most Outstanding Runner</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Award className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                      <span>AP Scholar of Honor</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* References */}
          <div className="text-center text-gray-400 py-4">
            <p>References available upon request.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Resume;
