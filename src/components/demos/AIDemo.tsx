import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Bot, Send, Sparkles } from 'lucide-react';
import TypeWriter from '@/components/TypeWriter';

interface Message {
  id: number;
  text: string;
  type: 'user' | 'ai';
  timestamp: Date;
}

const AIDemo = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm an AI assistant. Ask me anything about web development, programming, or technology!",
      type: 'ai',
      timestamp: new Date()
    }
  ]);
  
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const aiResponses = [
    "That's a great question! In React, you can use hooks like useState and useEffect to manage component state and side effects.",
    "For responsive design, I recommend using CSS Grid and Flexbox along with media queries to create layouts that work on all devices.",
    "TypeScript is excellent for large-scale applications as it provides type safety and better developer experience with autocomplete and error checking.",
    "Modern web applications benefit from performance optimizations like code splitting, lazy loading, and efficient state management.",
    "API integration is crucial for dynamic applications. RESTful APIs and GraphQL are popular choices for data fetching.",
    "Security is paramount in web development. Always validate inputs, use HTTPS, implement proper authentication, and keep dependencies updated."
  ];

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: input,
      type: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse: Message = {
        id: Date.now() + 1,
        text: aiResponses[Math.floor(Math.random() * aiResponses.length)],
        type: 'ai',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <Card className="w-full max-w-4xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bot className="h-5 w-5 text-primary" />
          AI Assistant Demo
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Chat Messages */}
        <div className="bg-card border rounded-lg p-4 h-80 overflow-y-auto space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                  message.type === 'user'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-secondary-foreground'
                }`}
              >
                {message.type === 'ai' && message.id === messages[messages.length - 1]?.id ? (
                  <TypeWriter text={message.text} speed={30} />
                ) : (
                  <p className="text-sm">{message.text}</p>
                )}
                <div className="flex items-center gap-2 mt-2">
                  {message.type === 'ai' && (
                    <Badge variant="outline" className="text-xs">
                      <Sparkles className="h-3 w-3 mr-1" />
                      AI
                    </Badge>
                  )}
                  <span className="text-xs opacity-70">
                    {message.timestamp.toLocaleTimeString([], { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </span>
                </div>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-secondary text-secondary-foreground px-4 py-2 rounded-lg">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-current rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-current rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-current rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me about web development..."
            className="flex-1"
            disabled={isTyping}
          />
          <Button 
            onClick={sendMessage} 
            disabled={!input.trim() || isTyping}
            className="flex items-center gap-2"
          >
            <Send className="h-4 w-4" />
            Send
          </Button>
        </div>

        {/* Quick Actions */}
        <div className="flex flex-wrap gap-2">
          <Button
            size="sm"
            variant="outline"
            onClick={() => setInput('What are the best practices for React development?')}
            disabled={isTyping}
          >
            React Best Practices
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => setInput('How do I make my website responsive?')}
            disabled={isTyping}
          >
            Responsive Design
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => setInput('What is TypeScript and why should I use it?')}
            disabled={isTyping}
          >
            TypeScript Benefits
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AIDemo;