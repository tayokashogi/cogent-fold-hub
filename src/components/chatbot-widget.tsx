import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! Welcome to CAC Oke-Ibukun. How can I help you today?',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  const faqs = [
    {
      keywords: ['service', 'time', 'when', 'sunday', 'worship'],
      response: 'Our Sunday services are at 7:00 AM and 9:45 AM. We also have midweek services on Wednesday at 6:00 PM for Bible Study.',
    },
    {
      keywords: ['location', 'address', 'where', 'find'],
      response: 'We are located at 13 Odewale Street, Alagomeji, Yaba, Lagos. You can find us on Google Maps.',
    },
    {
      keywords: ['online', 'stream', 'watch', 'live'],
      response: 'Yes! You can watch our services live on YouTube, Facebook, Instagram, and Mixlr. Click the social media icons in our header to join.',
    },
    {
      keywords: ['give', 'offering', 'tithe', 'donate', 'contribution'],
      response: 'Thank you for your generosity! You can give online through our Stewardship page. Click on "Stewardship" in the menu.',
    },
    {
      keywords: ['contact', 'phone', 'email', 'reach'],
      response: 'You can reach us through our Contact page. We\'d love to hear from you!',
    },
    {
      keywords: ['youth', 'children', 'kids'],
      response: 'We have a vibrant Youth Fellowship every Thursday from 6:00-8:00 PM. All young people are welcome!',
    },
    {
      keywords: ['programme', 'program', 'schedule', 'activities'],
      response: 'We have various programs throughout the week including Hour of Divine Intervention (Monday 6-7 AM), Bible Study (Wednesday 6-8 PM), and Youth Fellowship (Thursday 6-8 PM). Check our Programmes page for the full schedule.',
    },
  ];

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    for (const faq of faqs) {
      if (faq.keywords.some(keyword => lowerMessage.includes(keyword))) {
        return faq.response;
      }
    }
    
    return "I'm here to help! You can ask me about service times, our location, online streaming, giving, youth programs, or our weekly schedule. For more detailed information, please visit our Contact page.";
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputValue),
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botResponse]);
    }, 500);
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all z-50"
          aria-label="Open chat support"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-[350px] h-[500px] shadow-2xl z-50 flex flex-col">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3 bg-primary text-primary-foreground rounded-t-lg">
            <CardTitle className="text-lg font-semibold">CAC Support</CardTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="h-8 w-8 p-0 hover:bg-primary-foreground/20"
              aria-label="Close chat"
            >
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>

          <CardContent className="flex-1 flex flex-col p-0">
            <ScrollArea className="flex-1 p-4" ref={scrollRef}>
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg px-4 py-2 ${
                        message.sender === 'user'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-foreground'
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="p-4 border-t">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex gap-2"
              >
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1"
                />
                <Button type="submit" size="sm" className="px-3">
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default ChatbotWidget;
