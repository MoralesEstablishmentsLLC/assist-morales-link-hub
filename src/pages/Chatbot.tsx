import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Send, Bot, User } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I'm here to help you understand our services and provide quote estimates for your website project. What would you like to know?",
      sender: "bot",
      timestamp: new Date(),
    }
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    // Website services and features
    if (message.includes('service') || message.includes('what do you do')) {
      return "We offer comprehensive digital solutions including: Web Development, E-commerce Solutions, Digital Marketing, SEO Optimization, Branding & Design, Business Consulting, Mobile App Development, and Database Management. What type of project are you interested in?";
    }
    
    // Quote estimation logic
    if (message.includes('cost') || message.includes('price') || message.includes('quote') || message.includes('budget')) {
      return "I'd be happy to help estimate costs! Here are our typical ranges:\n\n• Basic Website (5-10 pages): $2,000 - $5,000\n• E-commerce Store: $5,000 - $15,000\n• Custom Web App: $10,000 - $30,000\n• Business Consultation: $150/hour\n\nCosts vary based on complexity, features, and timeline. What type of website are you considering?";
    }
    
    // Website types
    if (message.includes('e-commerce') || message.includes('store') || message.includes('shop')) {
      return "E-commerce solutions typically include: product catalog, shopping cart, payment processing, inventory management, and order tracking. Basic e-commerce sites start around $5,000, while advanced stores with custom features can range $10,000-$20,000. Do you need any specific e-commerce features?";
    }
    
    if (message.includes('basic') || message.includes('simple') || message.includes('small business')) {
      return "A basic business website typically includes: 5-10 pages, contact forms, mobile responsive design, basic SEO, and content management. These usually range from $2,000-$5,000 depending on design complexity and features. Would you like to know about specific features?";
    }
    
    // Timeline questions
    if (message.includes('time') || message.includes('long') || message.includes('timeline')) {
      return "Typical project timelines:\n\n• Basic Website: 2-4 weeks\n• E-commerce Store: 4-8 weeks\n• Custom Web App: 8-16 weeks\n• Website Redesign: 3-6 weeks\n\nTimelines can be shorter for urgent projects. What's your preferred timeline?";
    }
    
    // Process questions
    if (message.includes('process') || message.includes('how') || message.includes('work')) {
      return "Our process is simple:\n\n1. Submit a request through our form\n2. We review within 24 hours\n3. Schedule a free consultation call\n4. Receive a custom proposal\n5. Project kickoff and development\n\nWould you like to start with a request form or learn more about any specific step?";
    }
    
    // Feature-specific questions
    if (message.includes('seo') || message.includes('search')) {
      return "SEO optimization includes: keyword research, on-page optimization, meta tags, site speed optimization, and search engine submission. Basic SEO is included in all our websites, with advanced SEO packages starting at $500/month. Are you looking to rank for specific keywords?";
    }
    
    if (message.includes('mobile') || message.includes('responsive')) {
      return "All our websites are mobile-responsive by default! We ensure your site looks great on phones, tablets, and desktops. Mobile optimization is crucial since over 60% of web traffic comes from mobile devices. Would you like to see examples of our mobile designs?";
    }
    
    // Maintenance and support
    if (message.includes('maintenance') || message.includes('support') || message.includes('update')) {
      return "We offer ongoing support packages:\n\n• Basic: $99/month (updates, backups, monitoring)\n• Standard: $199/month (includes content updates)\n• Premium: $399/month (includes SEO and marketing)\n\nAll packages include 24/7 monitoring and security updates. What level of support would you need?";
    }
    
    // Getting started
    if (message.includes('start') || message.includes('begin') || message.includes('next')) {
      return "Ready to get started? Here's what I recommend:\n\n1. Fill out our request form with your project details\n2. Schedule a free consultation to discuss your needs\n3. We'll provide a detailed quote within 48 hours\n\nWould you like me to guide you to the request form, or do you have more questions first?";
    }
    
    // Default response
    return "I'm here to help with information about our services, pricing, and how to get started with your website project. Feel free to ask about:\n\n• Service types and pricing\n• Project timelines\n• Our development process\n• Specific features you need\n\nWhat would you like to know more about?";
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText("");
    setIsTyping(true);

    // Simulate bot thinking time
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateBotResponse(inputText),
        sender: 'bot',
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // 1-2 second delay
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Support Assistant</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get instant answers about our services, pricing, and how we can help with your website project.
          </p>
        </div>

        <Card className="shadow-card h-[600px] flex flex-col">
          <CardHeader className="border-b">
            <CardTitle className="text-primary flex items-center gap-2">
              <Bot className="w-6 h-6" />
              Chat Assistant
            </CardTitle>
          </CardHeader>
          
          <CardContent className="flex-1 flex flex-col p-0">
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                >
                  <Avatar className="w-8 h-8">
                    <AvatarFallback className={message.sender === 'bot' ? 'bg-primary text-primary-foreground' : 'bg-accent'}>
                      {message.sender === 'bot' ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className={`max-w-[80%] ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
                    <div
                      className={`inline-block p-3 rounded-lg whitespace-pre-line ${
                        message.sender === 'user'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-accent text-accent-foreground'
                      }`}
                    >
                      {message.text}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {message.timestamp.toLocaleTimeString()}
                    </div>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex gap-3">
                  <Avatar className="w-8 h-8">
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      <Bot className="w-4 h-4" />
                    </AvatarFallback>
                  </Avatar>
                  <div className="bg-accent text-accent-foreground p-3 rounded-lg">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-current rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>
            
            <div className="border-t p-4">
              <div className="flex gap-2">
                <Input
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me about our services, pricing, or how to get started..."
                  className="flex-1"
                  disabled={isTyping}
                />
                <Button 
                  onClick={handleSendMessage} 
                  disabled={!inputText.trim() || isTyping}
                  className="bg-gradient-primary hover:opacity-90"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Chatbot;