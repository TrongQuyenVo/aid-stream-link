import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Heart, Users, Stethoscope, Gift, Calendar,
  ChevronRight, Phone, MapPin, Mail, Globe, Moon, Sun, ChevronUp,
  Home, Building2, HandHeart, Shield, Award, CheckCircle2, Clock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAppStore } from '@/stores/appStore';
import volunteerCampImg from '@/assets/volunteer-medical-camp.jpg';
import charityDistImg from '@/assets/charity-distribution.jpg';
import childrenHealthImg from '@/assets/children-health-checkup.jpg';
import elderlyCarelImg from '@/assets/elderly-care-volunteer.jpg';

export default function LandingPage() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const { theme, setTheme, language, setLanguage } = useAppStore();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const toggleLanguage = () => {
    const newLang = language === 'vi' ? 'en' : 'vi';
    setLanguage(newLang);
    i18n.changeLanguage(newLang);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const volunteerEvents = [
    {
      title: 'Khám sức khỏe miễn phí vùng cao',
      description: 'Đoàn bác sĩ tình nguyện mang y tế đến với đồng bào vùng cao',
      location: 'Hà Giang',
      date: '15/03/2025',
      image: volunteerCampImg,
      participants: '50+ tình nguyện viên',
      beneficiaries: '500+ người dân'
    },
    {
      title: 'Tặng quà & Khám bệnh cho người già',
      description: 'Chăm sóc sức khỏe và trao yêu thương đến người cao tuổi neo đơn',
      location: 'Quảng Trị',
      date: '20/03/2025',
      image: elderlyCarelImg,
      participants: '30+ tình nguyện viên',
      beneficiaries: '200+ người cao tuổi'
    },
    {
      title: 'Khám mắt & Tặng kính học sinh',
      description: 'Giúp các em có cơ hội học tập tốt hơn với đôi mắt sáng',
      location: 'Nghệ An',
      date: '25/03/2025',
      image: childrenHealthImg,
      participants: '40+ tình nguyện viên',
      beneficiaries: '600+ học sinh'
    },
    {
      title: 'Phát quà & Thuốc cho bệnh nhân nghèo',
      description: 'Hỗ trợ thuốc men và quà tặng cho bệnh nhân có hoàn cảnh khó khăn',
      location: 'TP. Hồ Chí Minh',
      date: '01/04/2025',
      image: charityDistImg,
      participants: '60+ tình nguyện viên',
      beneficiaries: '300+ bệnh nhân'
    }
  ];

  const stats = [
    { number: '50,000+', label: 'Bệnh nhân được hỗ trợ', icon: Users },
    { number: '1,500+', label: 'Bác sĩ tình nguyện', icon: Stethoscope },
    { number: '12,000+', label: 'Ca khám hoàn thành', icon: CheckCircle2 },
    { number: '120+', label: 'Tổ chức từ thiện', icon: Building2 },
  ];

  const quickLinks = [
    { 
      icon: Stethoscope, 
      title: 'Dịch Vụ Y Tế', 
      description: 'Các dịch vụ khám chữa bệnh miễn phí',
      path: '/services'
    },
    { 
      icon: Heart, 
      title: 'Chương Trình', 
      description: 'Các hoạt động từ thiện đang triển khai',
      path: '/programs'
    },
    { 
      icon: Building2, 
      title: 'Tổ Chức', 
      description: 'Mạng lưới các tổ chức từ thiện uy tín',
      path: '/organizations'
    },
    { 
      icon: HandHeart, 
      title: 'Tình Nguyện Viên', 
      description: 'Tham gia làm tình nguyện viên',
      path: '/register'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Enhanced Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate('/')}>
              <div className="h-10 w-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-lg">
                <Heart className="h-5 w-5 text-white" />
              </div>
              <div>
                <span className="healthcare-heading text-xl font-bold">HealthCare+</span>
                <p className="text-xs text-muted-foreground">Y tế từ thiện</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              <Button variant="ghost" size="sm" onClick={() => navigate('/')}>
                <Home className="h-4 w-4 mr-2" />
                Trang chủ
              </Button>
              <Button variant="ghost" size="sm" onClick={() => navigate('/services')}>
                <Stethoscope className="h-4 w-4 mr-2" />
                Dịch vụ
              </Button>
              <Button variant="ghost" size="sm" onClick={() => navigate('/programs')}>
                <Heart className="h-4 w-4 mr-2" />
                Chương trình
              </Button>
              <Button variant="ghost" size="sm" onClick={() => navigate('/organizations')}>
                <Building2 className="h-4 w-4 mr-2" />
                Tổ chức
              </Button>
            </div>

            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon" onClick={toggleLanguage}>
                <Globe className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" onClick={toggleTheme}>
                {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              </Button>
              <Button variant="ghost" onClick={() => navigate('/login')}>
                Đăng nhập
              </Button>
              <Button className="btn-healthcare" onClick={() => navigate('/register')}>
                Đăng ký
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero pt-24 pb-20 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ 
            backgroundImage: `url(${volunteerCampImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }} />
        </div>
        <div className="container relative mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-5xl text-center"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8 inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 backdrop-blur-sm border border-white/20"
            >
              <Shield className="h-5 w-5 text-green-300" />
              <span className="text-sm font-medium">Nền tảng y tế từ thiện uy tín #1 Việt Nam</span>
            </motion.div>
            
            <h1 className="mb-8 text-6xl font-bold leading-tight tracking-tight md:text-7xl lg:text-8xl">
              Chăm sóc sức khỏe
              <span className="block bg-gradient-to-r from-white via-yellow-200 to-orange-200 bg-clip-text text-transparent mt-2">
                Miễn phí cho mọi người
              </span>
            </h1>
            
            <p className="mb-12 text-xl text-white/90 md:text-2xl leading-relaxed max-w-3xl mx-auto">
              Kết nối bệnh nhân có hoàn cảnh khó khăn với đội ngũ bác sĩ tình nguyện 
              và các tổ chức từ thiện uy tín, mang đến dịch vụ y tế chất lượng cao hoàn toàn miễn phí.
            </p>
            
            <div className="flex flex-col gap-6 sm:flex-row sm:justify-center items-center mb-12">
              <Button
                size="lg"
                className="btn-charity text-lg px-10 py-6 h-auto rounded-full shadow-2xl hover:shadow-secondary/40 transition-all duration-300"
                onClick={() => navigate('/register')}
              >
                Đăng ký ngay - Miễn phí
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-10 py-6 h-auto rounded-full border-2 border-white/30 text-white hover:bg-white/10 hover:border-white backdrop-blur-sm"
                onClick={() => navigate('/services')}
              >
                Khám phá dịch vụ
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-6 mt-16">
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                <CheckCircle2 className="h-5 w-5 text-green-300" />
                <span className="text-sm">100% Miễn phí</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                <Shield className="h-5 w-5 text-blue-300" />
                <span className="text-sm">Bác sĩ chuyên môn</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                <Award className="h-5 w-5 text-yellow-300" />
                <span className="text-sm">Uy tín hàng đầu</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="healthcare-heading text-4xl font-bold mb-2">{stat.number}</div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="healthcare-heading text-4xl font-bold mb-4">Khám Phá Thêm</h2>
            <p className="text-xl text-muted-foreground">
              Tìm hiểu về dịch vụ, chương trình và cơ hội tham gia tình nguyện
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <motion.div
                key={link.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => navigate(link.path)}
                className="cursor-pointer"
              >
                <Card className="healthcare-card h-full text-center hover:shadow-lg">
                  <CardHeader>
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                      <link.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{link.title}</CardTitle>
                    <CardDescription>{link.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="ghost" className="w-full">
                      Xem thêm
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Events Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-6 py-2">
              <Calendar className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-primary">Sự kiện tình nguyện</span>
            </div>
            <h2 className="healthcare-heading text-4xl font-bold mb-4">
              Các Hoạt Động Tình Nguyện Sắp Tới
            </h2>
            <p className="text-xl text-muted-foreground">
              Tham gia cùng chúng tôi mang yêu thương đến với những người cần được chăm sóc
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {volunteerEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="healthcare-card overflow-hidden">
                  <div className="relative h-56">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="h-full w-full object-cover"
                    />
                    <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                      Sắp diễn ra
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{event.title}</CardTitle>
                    <CardDescription className="text-base">{event.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="h-4 w-4 text-primary" />
                      <span>{event.participants}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Gift className="h-4 w-4 text-primary" />
                      <span>{event.beneficiaries}</span>
                    </div>
                    <Button className="w-full btn-healthcare mt-4" onClick={() => navigate('/register')}>
                      Đăng ký tham gia
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Button size="lg" variant="outline" onClick={() => navigate('/programs')}>
              Xem tất cả chương trình
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-care text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-6">Sẵn Sàng Bắt Đầu?</h2>
            <p className="text-xl text-white/90 mb-8">
              Đăng ký ngay để nhận dịch vụ y tế miễn phí hoặc trở thành tình nguyện viên
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 h-auto rounded-full"
                onClick={() => navigate('/register')}
              >
                Đăng ký ngay
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 h-auto rounded-full"
                onClick={() => navigate('/login')}
              >
                Đăng nhập
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-10 w-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                  <Heart className="h-5 w-5 text-white" />
                </div>
                <span className="healthcare-heading text-xl font-bold">HealthCare+</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Nền tảng y tế từ thiện, kết nối yêu thương với những người cần được chăm sóc.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Liên kết nhanh</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/services" className="text-muted-foreground hover:text-primary">Dịch vụ</a></li>
                <li><a href="/programs" className="text-muted-foreground hover:text-primary">Chương trình</a></li>
                <li><a href="/organizations" className="text-muted-foreground hover:text-primary">Tổ chức</a></li>
                <li><a href="/register" className="text-muted-foreground hover:text-primary">Đăng ký</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Hỗ trợ</h3>
              <ul className="space-y-2 text-sm">
                <li className="text-muted-foreground">Hotline: 1900-1234</li>
                <li className="text-muted-foreground">Email: info@healthcare.vn</li>
                <li className="text-muted-foreground">Thời gian: 24/7</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Liên hệ</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Hà Nội, Việt Nam</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>1900-1234</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>info@healthcare.vn</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>© 2025 HealthCare+. Tất cả quyền được bảo lưu.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 h-12 w-12 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
        >
          <ChevronUp className="h-6 w-6" />
        </motion.button>
      )}
    </div>
  );
}
