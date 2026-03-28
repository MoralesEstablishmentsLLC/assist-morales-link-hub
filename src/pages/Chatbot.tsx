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
      text: "Hi! I'm the MorAssist assistant. We're a business asset manager that helps businesses grow through social media management, graphic design, and web development. How can I help you today?",
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
    
    // About MorAssist
    if (message.includes('about') || message.includes('who are you') || message.includes('company') || message.includes('morassist') || message.includes('morales')) {
      return "MorAssist is a business asset manager dedicated to helping businesses grow. We provide a variety of web solutions including social media management, graphic design, and web development. Our goal is to take the digital workload off your plate so you can focus on running your business.";
    }
    
    // Main services
    if (message.includes('service') || message.includes('what do you do') || message.includes('offer')) {
      return "We offer three core services:\n\n📱 **Social Media Management**: We handle your social media presence across platforms like Instagram, Facebook, TikTok, LinkedIn, and more — from content planning to posting and engagement.\n\n🎨 **Graphic Design**: Professional designs for your brand including logos, flyers, social media graphics, business cards, and marketing materials.\n\n🌐 **Web Development**: Custom websites built to represent your business, from simple landing pages to full business sites.\n\nWhich service are you most interested in?";
    }
    
    // Cost and pricing
    if (message.includes('cost') || message.includes('price') || message.includes('quote') || message.includes('budget') || message.includes('how much')) {
      return "Our pricing depends on the scope of your project. Every business is different, so we provide custom quotes based on your specific needs.\n\nTo get a personalized estimate, we recommend filling out our project request form or reaching out to us directly. We'll review your needs and get back to you within 24 hours with a tailored quote.\n\nWould you like to know more about a specific service?";
    }
    
    // Web development specific
    if (message.includes('website') || message.includes('web development') || message.includes('web design')) {
      return "Our web development service includes:\n\n✅ **What you get**:\n• Mobile-responsive design\n• Fast loading speeds\n• Basic SEO optimization\n• Contact forms\n• Clean, modern aesthetics\n• Custom branding integration\n\nWe build websites that look professional and work great on all devices. What type of website are you looking to build?";
    }
    
    // Social media
    if (message.includes('social media') || message.includes('instagram') || message.includes('facebook') || message.includes('tiktok') || message.includes('linkedin') || message.includes('posting')) {
      return "Our social media management covers:\n\n📱 **Platforms we manage**:\n• Instagram\n• Facebook\n• TikTok\n• LinkedIn\n• Twitter/X\n• Pinterest\n\n📋 **What we handle**:\n• Content creation & scheduling\n• Engagement & community management\n• Analytics & performance tracking\n• Brand consistency across platforms\n• Growth strategies\n\nWe take the stress of social media off your hands so you can focus on your business. Want to learn more?";
    }
    
    // Graphic design
    if (message.includes('graphic') || message.includes('design') || message.includes('logo') || message.includes('flyer') || message.includes('branding')) {
      return "Our graphic design services include:\n\n🎨 **What we create**:\n• Logos & brand identity\n• Social media graphics\n• Flyers & marketing materials\n• Business cards\n• Banners & ads\n• Menus & brochures\n\nWe make sure your brand looks professional and consistent across everything. Need a specific design project done?";
    }
    
    // Timeline questions
    if (message.includes('time') || message.includes('long') || message.includes('timeline') || message.includes('deadline')) {
      return "Timelines vary by project:\n\n🎨 **Graphic Design**: 1-5 business days depending on complexity\n📱 **Social Media Setup**: 1-2 weeks to get rolling\n🌐 **Website**: 2-6 weeks depending on scope\n\nWe always work with your schedule and can accommodate rush requests when needed. What's your timeline looking like?";
    }
    
    // Process and how it works
    if (message.includes('process') || message.includes('how') || message.includes('work') || message.includes('steps')) {
      return "Here's how it works:\n\n1️⃣ **Reach Out**: Fill out our request form or contact us\n2️⃣ **Consultation**: We'll discuss your needs and goals\n3️⃣ **Custom Plan**: We put together a tailored plan and quote\n4️⃣ **Get Started**: Once approved, we get to work\n5️⃣ **Review & Launch**: You review, we refine, and we launch\n\nIt's a simple, collaborative process. Ready to get started?";
    }
    
    // Getting started
    if (message.includes('start') || message.includes('begin') || message.includes('next') || message.includes('ready') || message.includes('contact')) {
      return "Great! Here's how to get started:\n\n🚀 **Fill out our request form** — tell us about your project and we'll get back to you within 24 hours.\n\n📧 **Email us** — reach out directly with any questions.\n\nJust let us know what you need help with — whether it's social media, graphic design, a website, or all three — and we'll take it from there!";
    }
    
    // Features and capabilities
    if (message.includes('feature') || message.includes('capability') || message.includes('can you') || message.includes('do you')) {
      return "Here's what MorAssist can do for your business:\n\n📱 **Social Media**: Content creation, scheduling, engagement, and growth across all major platforms\n\n🎨 **Graphic Design**: Logos, flyers, social graphics, business cards, and all your visual branding needs\n\n🌐 **Web Development**: Custom, responsive websites tailored to your business\n\nWe're a one-stop shop for your digital presence. What do you need help with?";
    }
    
    // SEO and marketing
    if (message.includes('seo') || message.includes('search') || message.includes('marketing') || message.includes('google')) {
      return "We include basic SEO optimization with all our websites to help you get found online. For broader marketing, our social media management service helps you build your brand presence and reach new customers across platforms.\n\nWant to know more about how we can boost your online visibility?";
    }
    
    // Support and maintenance
    if (message.includes('maintenance') || message.includes('support') || message.includes('update') || message.includes('help')) {
      return "We're here to help! MorAssist offers ongoing support for all our services — whether you need website updates, new social media content, or fresh design work.\n\nJust reach out to us anytime and we'll take care of it. Would you like to get in touch with our team?";
    }
    
    // Default helpful response
    return "I'm here to help you learn about MorAssist! We're a business asset manager that helps businesses grow through:\n\n📱 **Social Media Management**\n🎨 **Graphic Design**\n🌐 **Web Development**\n\nFeel free to ask about any of our services, how we work, or how to get started!";
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