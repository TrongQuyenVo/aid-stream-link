import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User, Loader2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { useAuthStore } from '@/stores/authStore';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

export default function ChatbotPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: 'Xin chào! Tôi là trợ lý ảo của HealthCare+. Tôi có thể giúp bạn về:\n\n• Đặt lịch khám bệnh\n• Thông tin về bác sĩ tình nguyện\n• Quyên góp và hỗ trợ y tế\n• Hướng dẫn sử dụng hệ thống\n\nBạn cần hỗ trợ gì hôm nay?',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { user } = useAuthStore();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue.trim(),
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botResponse = generateBotResponse(userMessage.content);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: botResponse,
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const generateBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('đặt lịch') || input.includes('appointment') || input.includes('lịch hẹn')) {
      return 'Để đặt lịch khám, bạn có thể:\n\n1. Vào mục "Bác sĩ" để tìm bác sĩ phù hợp\n2. Chọn bác sĩ và nhấn "Đặt lịch hẹn"\n3. Chọn thời gian phù hợp\n4. Điền thông tin và xác nhận\n\nBạn có muốn tôi hướng dẫn chi tiết hơn không?';
    }
    
    if (input.includes('bác sĩ') || input.includes('doctor')) {
      return 'Hệ thống có nhiều bác sĩ tình nguyện chuyên khoa:\n\n• Tim mạch\n• Da liễu\n• Nhi khoa\n• Thần kinh\n• Đa khoa\n\nTất cả đều là các bác sĩ giàu kinh nghiệm tình nguyện hỗ trợ miễn phí. Bạn muốn tìm bác sĩ chuyên khoa nào?';
    }
    
    if (input.includes('quyên góp') || input.includes('donation') || input.includes('ủng hộ')) {
      return 'Cảm ơn bạn muốn quyên góp! Bạn có thể:\n\n• Quyên góp tiền mặt\n• Quyên góp thiết bị y tế\n• Quyên góp thuốc men\n• Tình nguyện thời gian\n\nVào mục "Quyên góp" để xem các chiến dịch hiện tại. Mọi đóng góp đều được ghi nhận và sử dụng minh bạch.';
    }
    
    if (input.includes('hỗ trợ') || input.includes('giúp đỡ') || input.includes('assistance')) {
      return 'Nếu bạn cần hỗ trợ y tế, bạn có thể:\n\n1. Tạo yêu cầu hỗ trợ trong mục "Hỗ trợ"\n2. Mô tả tình trạng và nhu cầu của bạn\n3. Đợi phê duyệt từ tổ chức từ thiện\n4. Nhận hỗ trợ sau khi được duyệt\n\nChúng tôi sẽ kết nối bạn với các nguồn hỗ trợ phù hợp nhất.';
    }
    
    if (input.includes('cảm ơn') || input.includes('thank')) {
      return `Rất vui được hỗ trợ bạn${user ? `, ${user.fullName}` : ''}! 😊\n\nNếu bạn có thêm câu hỏi nào khác, đừng ngần ngại hỏi tôi. Chúc bạn sức khỏe!`;
    }

    return 'Tôi hiểu bạn đang cần hỗ trợ. Tôi có thể giúp bạn về:\n\n• Đặt lịch khám với bác sĩ\n• Thông tin về các chuyên khoa\n• Quyên góp và nhận hỗ trợ\n• Sử dụng các tính năng của hệ thống\n\nBạn có thể nói rõ hơn về vấn đề cần hỗ trợ không?';
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickActions = [
    'Đặt lịch khám bệnh',
    'Tìm bác sĩ chuyên khoa',
    'Quyên góp từ thiện',
    'Yêu cầu hỗ trợ y tế',
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="h-[calc(100vh-8rem)]"
    >
      <div className="grid h-full lg:grid-cols-4 gap-6">
        {/* Chat Interface */}
        <div className="lg:col-span-3">
          <Card className="healthcare-card h-full flex flex-col">
            <CardHeader>
              <CardTitle className="healthcare-heading flex items-center">
                <Bot className="mr-2 h-6 w-6 text-primary" />
                Trợ lý ảo HealthCare+
              </CardTitle>
              <CardDescription>
                Tôi sẵn sàng hỗ trợ bạn 24/7 về các vấn đề y tế và sức khỏe
              </CardDescription>
            </CardHeader>
            
            {/* Messages Area */}
            <CardContent className="flex-1 flex flex-col">
              <div className="flex-1 overflow-y-auto space-y-4 mb-4 pr-2">
                <AnimatePresence>
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className={`flex items-start space-x-3 ${
                        message.type === 'user' ? 'justify-end' : 'justify-start'
                      }`}
                    >
                      {message.type === 'bot' && (
                        <Avatar className="w-8 h-8 bg-gradient-primary">
                          <AvatarFallback>
                            <Bot className="h-4 w-4 text-white" />
                          </AvatarFallback>
                        </Avatar>
                      )}
                      
                      <div
                        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg whitespace-pre-line ${
                          message.type === 'user'
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted'
                        }`}
                      >
                        {message.content}
                      </div>
                      
                      {message.type === 'user' && (
                        <Avatar className="w-8 h-8 bg-gradient-secondary">
                          <AvatarFallback>
                            <User className="h-4 w-4 text-white" />
                          </AvatarFallback>
                        </Avatar>
                      )}
                    </motion.div>
                  ))}
                </AnimatePresence>
                
                {/* Typing Indicator */}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center space-x-3"
                  >
                    <Avatar className="w-8 h-8 bg-gradient-primary">
                      <AvatarFallback>
                        <Bot className="h-4 w-4 text-white" />
                      </AvatarFallback>
                    </Avatar>
                    <div className="bg-muted px-4 py-2 rounded-lg">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse" />
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                      </div>
                    </div>
                  </motion.div>
                )}
                
                <div ref={messagesEndRef} />
              </div>
              
              {/* Input Area */}
              <div className="flex items-center space-x-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Nhập tin nhắn của bạn..."
                  className="flex-1"
                  disabled={isTyping}
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isTyping}
                  className="btn-healthcare"
                >
                  {isTyping ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Quick Actions Sidebar */}
        <div className="space-y-4">
          <Card className="healthcare-card">
            <CardHeader>
              <CardTitle className="text-lg">Thao tác nhanh</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {quickActions.map((action, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="w-full justify-start text-left h-auto py-2"
                  onClick={() => setInputValue(action)}
                >
                  {action}
                </Button>
              ))}
            </CardContent>
          </Card>
          
          <Card className="healthcare-card">
            <CardHeader>
              <CardTitle className="text-lg">Mẹo sử dụng</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p>• Hỏi về bất kỳ vấn đề y tế nào</p>
              <p>• Nhận hướng dẫn sử dụng hệ thống</p>
              <p>• Tìm hiểu về các dịch vụ từ thiện</p>
              <p>• Được hỗ trợ 24/7</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.div>
  );
}