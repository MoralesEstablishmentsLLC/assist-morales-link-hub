import TypeWriter from "@/components/TypeWriter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Send, Bot, User } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  isTyping?: boolean;
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
  const [userMessageCount, setUserMessageCount] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const MESSAGE_LIMIT = 15;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    // About Morales Assist
    if (message.includes('about') || message.includes('who are you') || message.includes('company')) {
      return "Morales Assist empowers small businesses and companies to thrive in the digital world through innovative web solutions and strategic business connections. We specialize in helping businesses transform their digital presence and connect with new opportunities.";
    }
    
    // Main services
    if (message.includes('service') || message.includes('what do you do') || message.includes('offer')) {
      return "We offer three core services:\n\n🌐 **Web Development**: Custom websites with modern, responsive designs that work perfectly on all devices\n\n👥 **Business Connections**: Access to our extensive network of diverse businesses and strategic partnerships\n\n⚡ **Digital Strategy**: Strategic consultation and planning to optimize your digital presence\n\nWe also provide: SEO optimization, e-commerce solutions, mobile app development, branding & design, and ongoing support. What specific service interests you most?";
    }
    
    // Cost and pricing - detailed breakdown
    if (message.includes('cost') || message.includes('price') || message.includes('quote') || message.includes('budget') || message.includes('how much')) {
      return "Here's our comprehensive pricing guide:\n\n💼 **Web Development**:\n• Basic Business Website (5-10 pages): $2,000 - $5,000\n• Advanced Business Site: $5,000 - $10,000\n• E-commerce Store: $5,000 - $15,000\n• Custom Web Application: $10,000 - $30,000\n\n📈 **Digital Strategy & Consulting**: $150/hour\n\n🔧 **Ongoing Support**:\n• Basic Plan: $99/month\n• Standard Plan: $199/month\n• Premium Plan: $399/month\n\nPricing varies based on complexity, features, timeline, and specific requirements. Would you like a detailed estimate for your project?";
    }
    
    // Web development specific
    if (message.includes('website') || message.includes('web development') || message.includes('web design')) {
      return "Our web development service includes:\n\n✅ **Included in every website**:\n• Mobile-responsive design\n• Fast loading speeds\n• Basic SEO optimization\n• Contact forms\n• Content management system\n• Security features\n• 30 days of free support\n\n🎨 **Design Features**:\n• Custom branding integration\n• Professional layouts\n• User-friendly navigation\n• Modern, clean aesthetics\n\nWhat type of website are you looking to build?";
    }
    
    // E-commerce specific
    if (message.includes('e-commerce') || message.includes('store') || message.includes('shop') || message.includes('sell online')) {
      return "Our e-commerce solutions include:\n\n🛒 **Core Features**:\n• Product catalog management\n• Shopping cart & checkout\n• Payment processing (Stripe, PayPal)\n• Inventory management\n• Order tracking\n• Customer accounts\n\n📊 **Advanced Features**:\n• Analytics & reporting\n• Multi-currency support\n• Discount codes & promotions\n• Email marketing integration\n• Mobile optimization\n\n💰 **Pricing**: $5,000 - $15,000 depending on complexity\n⏱️ **Timeline**: 4-8 weeks\n\nDo you need any specific e-commerce features?";
    }
    
    // Business connections
    if (message.includes('connection') || message.includes('network') || message.includes('partnership') || message.includes('clients')) {
      return "Our Business Connections service provides:\n\n🤝 **What You Get**:\n• Access to our network of 50+ successful businesses\n• Strategic partnership opportunities\n• Cross-industry collaboration potential\n• Referral opportunities\n• Business growth insights\n\n🏢 **Industries We Serve**:\n• Technology & Software\n• Healthcare & Wellness\n• Professional Services\n• E-commerce & Retail\n• Education & Training\n• And many more!\n\nWould you like to explore our client network or learn about partnership opportunities?";
    }
    
    // Timeline questions
    if (message.includes('time') || message.includes('long') || message.includes('timeline') || message.includes('deadline')) {
      return "Our typical project timelines:\n\n⚡ **Rush Projects** (1-2 weeks):\n• Simple landing pages\n• Basic website updates\n\n🏃 **Standard Timeline**:\n• Basic Website: 2-4 weeks\n• Business Website: 3-5 weeks\n• E-commerce Store: 4-8 weeks\n• Web Application: 8-16 weeks\n\n📅 **Timeline factors**:\n• Project complexity\n• Content preparation\n• Revision rounds\n• Integration requirements\n\nWe can accommodate urgent deadlines with priority scheduling. What's your preferred timeline?";
    }
    
    // Process and how it works
    if (message.includes('process') || message.includes('how') || message.includes('work') || message.includes('steps')) {
      return "Our streamlined process:\n\n1️⃣ **Submit Request**: Fill out our detailed project form\n2️⃣ **Quick Review**: We respond within 24 hours\n3️⃣ **Free Consultation**: 30-minute strategy call\n4️⃣ **Custom Proposal**: Detailed quote within 48 hours\n5️⃣ **Project Kickoff**: Contract signing & initial payment\n6️⃣ **Development**: Regular updates & milestone reviews\n7️⃣ **Launch & Support**: Go live + ongoing maintenance\n\n📞 **What happens next?**\nReady to start? I can guide you to our request form, or would you like to know more about any specific step?";
    }
    
    // SEO and marketing
    if (message.includes('seo') || message.includes('search') || message.includes('marketing') || message.includes('google')) {
      return "Our SEO & Digital Marketing services:\n\n🔍 **Basic SEO** (included in all websites):\n• Keyword research\n• On-page optimization\n• Meta tags & descriptions\n• Site speed optimization\n• Search engine submission\n\n🚀 **Advanced SEO** ($500/month):\n• Content strategy\n• Link building\n• Local SEO\n• Analytics & reporting\n• Ongoing optimization\n\n📱 **Digital Marketing Add-ons**:\n• Social media integration\n• Email marketing setup\n• Google Ads management\n\nWhat are your main SEO goals?";
    }
    
    // Support and maintenance
    if (message.includes('maintenance') || message.includes('support') || message.includes('update') || message.includes('help')) {
      return "Our support packages ensure your website stays secure and up-to-date:\n\n🥉 **Basic Plan** ($99/month):\n• Security updates\n• Weekly backups\n• 24/7 monitoring\n• Bug fixes\n• 2 hours of content updates\n\n🥈 **Standard Plan** ($199/month):\n• Everything in Basic\n• 5 hours of content updates\n• Performance optimization\n• Monthly reports\n\n🥇 **Premium Plan** ($399/month):\n• Everything in Standard\n• SEO monitoring\n• Marketing insights\n• Unlimited content updates\n• Priority support\n\nAll plans include 24/7 monitoring and emergency support. Which level of support would work best for you?";
    }
    
    // Getting started
    if (message.includes('start') || message.includes('begin') || message.includes('next') || message.includes('ready')) {
      return "Excited to work with you! Here's how to get started:\n\n🚀 **Option 1: Quick Start**\n• Fill out our project request form\n• Get a response within 24 hours\n• Schedule your free consultation\n\n📞 **Option 2: Direct Contact**\n• Call us for immediate assistance\n• Email for detailed questions\n• Live chat for quick answers\n\n💡 **What I need to help you**:\n• Type of project (website, e-commerce, etc.)\n• Timeline requirements\n• Budget range\n• Specific features needed\n\nWould you like me to guide you to the request form, or do you have more questions about our services?";
    }
    
    // Features and capabilities
    if (message.includes('feature') || message.includes('capability') || message.includes('can you') || message.includes('do you')) {
      return "We specialize in a wide range of features:\n\n💻 **Technical Capabilities**:\n• Responsive design for all devices\n• Content management systems\n• Database integration\n• API integrations\n• Custom functionality\n• Security implementations\n\n🎨 **Design & UX**:\n• Custom branding\n• User experience optimization\n• Modern, professional designs\n• Accessibility compliance\n\n🔧 **Integrations**:\n• Payment gateways\n• Email marketing tools\n• Social media platforms\n• Analytics tracking\n• Third-party services\n\nWhat specific features are you looking for in your project?";
    }
    
    // Default helpful response
    return "I'm here to help you understand how Morales Assist can transform your business! I can provide information about:\n\n🔹 **Our Services**: Web development, business connections, digital strategy\n🔹 **Pricing**: Detailed cost breakdowns for different project types\n🔹 **Process**: How we work and project timelines\n🔹 **Features**: Technical capabilities and integrations\n🔹 **Support**: Ongoing maintenance and assistance\n\nWhat would you like to know more about? Or feel free to ask specific questions about your project needs!";
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    // Check if user has reached message limit
    if (userMessageCount >= MESSAGE_LIMIT) {
      return;
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText("");
    setIsTyping(true);
    setUserMessageCount(prev => prev + 1);

    // Check if this was the last allowed message
    const newCount = userMessageCount + 1;
    
    // Simulate bot thinking time
    setTimeout(() => {
      let botResponseText;
      
      if (newCount >= MESSAGE_LIMIT) {
        botResponseText = "You've reached your 15-message limit for this session. For more detailed assistance, please contact our team directly. We'd be happy to help with your project!";
      } else {
        botResponseText = generateBotResponse(inputText);
      }

      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponseText,
        sender: 'bot',
        timestamp: new Date(),
        isTyping: true,
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
    <div className="min-h-screen bg-blue-50">
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center"
        >
          <h1 className="text-4xl font-bold text-foreground mb-4">Support Assistant</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get instant answers about our services, pricing, and how we can help with your website project.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <Card className="shadow-card min-h-[400px] flex flex-col">
          <CardHeader className="border-b">
            <CardTitle className="text-primary flex items-center gap-2">
              <Bot className="w-6 h-6" />
              Chat Assistant
            </CardTitle>
          </CardHeader>
          
          <CardContent className="flex flex-col p-0">
            <div className="overflow-y-auto p-6 space-y-4 max-h-[70vh]">
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
                      {message.sender === 'bot' && message.isTyping ? (
                        <TypeWriter text={message.text} speed={30} />
                      ) : (
                        message.text
                      )}
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
              {userMessageCount >= MESSAGE_LIMIT ? (
                <div className="text-center p-4">
                  <p className="text-muted-foreground mb-4">
                    You've reached your message limit. For more assistance, please contact us directly.
                  </p>
                  <Link to="/contact">
                    <Button className="bg-gradient-primary hover:opacity-90">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              ) : (
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
                  <div className="text-xs text-muted-foreground self-center ml-2">
                    {MESSAGE_LIMIT - userMessageCount} messages left
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
        </motion.div>
      </main>
    </div>
  );
};

export default Chatbot;