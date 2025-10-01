import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Heart, Users, Stethoscope, Gift, Activity, 
  ChevronRight, Phone, MapPin, Mail, Globe, Moon, Sun, ChevronUp,
  Home, Building2, Package, Calendar, ClipboardList, Shield,
  Clock, Award, CheckCircle2, Ambulance, Baby, HeartPulse
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAppStore } from '@/stores/appStore';
import { cn } from '@/lib/utils';
import doctorVolunteerImg from '@/assets/doctor-volunteer.jpg';
import charityServiceImg from '@/assets/charity-service.jpg';
import communityHealthImg from '@/assets/community-health.jpg';
import pediatricCareImg from '@/assets/pediatric-care.jpg';

export default function LandingPage() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const { theme, setTheme, language, setLanguage } = useAppStore();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
      
      // Update active section based on scroll position
      const sections = ['home', 'services', 'programs', 'packages', 'organizations'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: Stethoscope,
      title: 'Khám bệnh miễn phí',
      description: 'Khám sức khỏe tổng quát và chuyên khoa với đội ngũ bác sĩ giàu kinh nghiệm',
      color: 'primary'
    },
    {
      icon: Ambulance,
      title: 'Cấp cứu 24/7',
      description: 'Dịch vụ cấp cứu và chuyển viện khẩn cấp hoạt động 24/7',
      color: 'destructive'
    },
    {
      icon: Baby,
      title: 'Chăm sóc sản nhi',
      description: 'Theo dõi thai kỳ và chăm sóc trẻ em toàn diện',
      color: 'secondary'
    },
    {
      icon: HeartPulse,
      title: 'Điều trị mãn tính',
      description: 'Quản lý và điều trị các bệnh lý tim mạch, tiểu đường, huyết áp',
      color: 'warning'
    },
    {
      icon: Activity,
      title: 'Xét nghiệm & Chẩn đoán',
      description: 'Xét nghiệm máu, nước tiểu, siêu âm, X-quang miễn phí',
      color: 'success'
    },
    {
      icon: Gift,
      title: 'Cấp phát thuốc',
      description: 'Hỗ trợ thuốc điều trị theo đơn của bác sĩ hoàn toàn miễn phí',
      color: 'primary'
    }
  ];

  const programs = [
    {
      title: 'Mổ tim cho trẻ em nghèo',
      description: 'Phẫu thuật tim bẩm sinh miễn phí cho trẻ em có hoàn cảnh khó khăn',
      beneficiaries: '500+ ca phẫu thuật',
      status: 'Đang hoạt động',
      image: pediatricCareImg
    },
    {
      title: 'Chăm sóc người cao tuổi',
      description: 'Khám và tặng quà cho người cao tuổi tại các vùng sâu, vùng xa',
      beneficiaries: '10,000+ người',
      status: 'Đang hoạt động',
      image: communityHealthImg
    },
    {
      title: 'Điều trị ung thư miễn phí',
      description: 'Hỗ trợ điều trị và hóa trị cho bệnh nhân ung thư nghèo',
      beneficiaries: '1,200+ bệnh nhân',
      status: 'Đang hoạt động',
      image: charityServiceImg
    },
    {
      title: 'Khám mắt & Tặng kính',
      description: 'Khám mắt miễn phí và tặng kính cho học sinh nghèo',
      beneficiaries: '8,000+ em học sinh',
      status: 'Đang hoạt động',
      image: doctorVolunteerImg
    }
  ];

  const packages = [
    {
      title: 'Gói Khám Sức Khỏe Cơ Bản',
      price: 'Miễn phí',
      features: [
        'Khám nội tổng quát',
        'Đo huyết áp, nhịp tim',
        'Xét nghiệm máu cơ bản',
        'Tư vấn sức khỏe',
        'Cấp phát thuốc (nếu có)'
      ],
      popular: false
    },
    {
      title: 'Gói Khám Toàn Diện',
      price: 'Miễn phí',
      features: [
        'Tất cả dịch vụ gói cơ bản',
        'Siêu âm tổng quát',
        'X-quang phổi',
        'Điện tim',
        'Xét nghiệm chuyên sâu',
        'Tư vấn dinh dưỡng'
      ],
      popular: true
    },
    {
      title: 'Gói Chăm Sóc Dài Hạn',
      price: 'Miễn phí',
      features: [
        'Tất cả dịch vụ gói toàn diện',
        'Theo dõi sức khỏe 6 tháng',
        'Khám định kỳ hàng tháng',
        'Điều trị bệnh lý mãn tính',
        'Hỗ trợ thuốc dài hạn',
        'Chăm sóc tại nhà (nếu cần)'
      ],
      popular: false
    }
  ];

  const organizations = [
    {
      name: 'Hội Chữ Thập Đỏ Việt Nam',
      description: 'Tổ chức nhân đạo hàng đầu, hoạt động từ thiện y tế trên toàn quốc',
      location: 'Hà Nội, Việt Nam'
    },
    {
      name: 'Quỹ Tấm Lòng Việt',
      description: 'Hỗ trợ phẫu thuật tim bẩm sinh cho trẻ em nghèo',
      location: 'TP. Hồ Chí Minh'
    },
    {
      name: 'Hội Bảo Trợ Bệnh Nhân Nghèo',
      description: 'Hỗ trợ chi phí điều trị cho bệnh nhân có hoàn cảnh khó khăn',
      location: 'Toàn quốc'
    },
    {
      name: 'Quỹ Bảo Trợ Trẻ Em Việt Nam',
      description: 'Chăm sóc sức khỏe và giáo dục cho trẻ em vùng sâu vùng xa',
      location: 'Hà Nội, Việt Nam'
    },
    {
      name: 'Hội Bác Sĩ Tình Nguyện',
      description: 'Mạng lưới bác sĩ tình nguyện khám chữa bệnh miễn phí',
      location: 'Toàn quốc'
    },
    {
      name: 'Quỹ Vì Người Nghèo',
      description: 'Hỗ trợ y tế, thuốc men và phẫu thuật cho người nghèo',
      location: 'TP. Hồ Chí Minh'
    }
  ];

  const stats = [
    { number: '50,000+', label: 'Bệnh nhân đã hỗ trợ' },
    { number: '1,500+', label: 'Bác sĩ tình nguyện' },
    { number: '12,000+', label: 'Ca khám hoàn thành' },
    { number: '120+', label: 'Tổ chức từ thiện' },
  ];

  const navItems = [
    { id: 'home', label: 'Trang chủ', icon: Home },
    { id: 'services', label: 'Dịch vụ', icon: Stethoscope },
    { id: 'programs', label: 'Chương trình', icon: Heart },
    { id: 'packages', label: 'Gói khám', icon: Package },
    { id: 'organizations', label: 'Tổ chức', icon: Building2 },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Enhanced Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-2">
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
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? "default" : "ghost"}
                  size="sm"
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm"
                >
                  <item.icon className="h-4 w-4 mr-2" />
                  {item.label}
                </Button>
              ))}
            </div>

            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleLanguage}
                className="text-muted-foreground hover:text-foreground"
              >
                <Globe className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="text-muted-foreground hover:text-foreground"
              >
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
      <section id="home" className="relative overflow-hidden bg-gradient-hero pt-24 pb-20 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ 
            backgroundImage: `url(${communityHealthImg})`,
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
              <span className="block bg-gradient-to-r from-white via-green-200 to-blue-200 bg-clip-text text-transparent mt-2">
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
                onClick={() => scrollToSection('services')}
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

      {/* Services Section */}
      <section id="services" className="py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mb-16 max-w-3xl text-center"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-6 py-2">
              <Stethoscope className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-primary">Dịch vụ y tế</span>
            </div>
            <h2 className="healthcare-heading mb-6 text-5xl font-bold">
              Dịch vụ y tế miễn phí
            </h2>
            <p className="text-xl text-muted-foreground">
              Chúng tôi cung cấp đầy đủ các dịch vụ y tế chuyên nghiệp, hoàn toàn miễn phí
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="healthcare-card h-full border-0 shadow-lg hover:shadow-xl">
                  <CardHeader className="text-center pb-4">
                    <motion.div 
                      className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-${service.color}/10 shadow-md`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <service.icon className={`h-8 w-8 text-${service.color}`} />
                    </motion.div>
                    <CardTitle className="text-lg font-bold">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-base">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mb-16 max-w-3xl text-center"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-secondary/10 px-6 py-2">
              <Heart className="h-5 w-5 text-secondary" />
              <span className="text-sm font-medium text-secondary">Chương trình từ thiện</span>
            </div>
            <h2 className="healthcare-heading mb-6 text-5xl font-bold">
              Các chương trình đang triển khai
            </h2>
            <p className="text-xl text-muted-foreground">
              Những hoạt động từ thiện y tế thực tế đang được thực hiện trên toàn quốc
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="healthcare-card overflow-hidden border-0 shadow-lg hover:shadow-2xl h-full">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={program.image} 
                      alt={program.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 bg-success text-success-foreground px-3 py-1 rounded-full text-xs font-medium">
                      {program.status}
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl mb-2">{program.title}</CardTitle>
                    <CardDescription className="text-base">{program.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-primary font-semibold">
                      <Users className="h-5 w-5" />
                      <span>{program.beneficiaries}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-primary py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ 
            backgroundImage: `url(${doctorVolunteerImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }} />
        </div>
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mb-16 max-w-3xl text-center"
          >
            <h2 className="mb-6 text-5xl font-bold">
              Thành tựu của chúng tôi
            </h2>
            <p className="text-xl text-white/90">
              Những con số ấn tượng phản ánh cam kết mang lại sức khỏe cho cộng đồng
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="text-5xl font-bold mb-4">{stat.number}</div>
                  <div className="text-white/80 font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Section - Hoạt Động Đã Thực Hiện */}
      <section id="packages" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mb-16 max-w-3xl text-center"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-success/10 px-6 py-2">
              <Activity className="h-5 w-5 text-success" />
              <span className="text-sm font-medium text-success">Thành tích đạt được</span>
            </div>
            <h2 className="healthcare-heading mb-6 text-5xl font-bold">
              Hoạt Động Đã Thực Hiện
            </h2>
            <p className="text-xl text-muted-foreground">
              Những đóng góp thiết thực mang lại niềm vui và sức khỏe cho cộng đồng
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3 mb-12">
            {[
              {
                title: 'Khám Chữa Bệnh Miễn Phí',
                achievements: [
                  '15,000+ lượt khám bệnh',
                  '50+ bác sĩ tình nguyện',
                  '30+ chuyên khoa',
                  'Phủ sóng 63 tỉnh thành'
                ],
                icon: '🏥',
                color: 'text-blue-600'
              },
              {
                title: 'Hỗ Trợ Tài Chính',
                achievements: [
                  '5,000+ ca bệnh được hỗ trợ',
                  '20 tỷ đồng đã giải ngân',
                  '100+ ca phẫu thuật lớn',
                  '300+ ca bệnh hiểm nghèo'
                ],
                icon: '💰',
                featured: true,
                color: 'text-green-600'
              },
              {
                title: 'Chương Trình Cộng Đồng',
                achievements: [
                  '200+ buổi tư vấn sức khỏe',
                  '50+ chương trình khám chữa bệnh',
                  '10,000+ người được hỗ trợ thuốc',
                  '500+ gia đình được hỗ trợ'
                ],
                icon: '🤝',
                color: 'text-purple-600'
              }
            ].map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className={cn(
                  "healthcare-card h-full hover:shadow-xl transition-all duration-300",
                  activity.featured && "border-primary shadow-lg scale-105"
                )}>
                  <CardHeader className="text-center">
                    <div className={cn("text-6xl mb-4", activity.color)}>{activity.icon}</div>
                    <CardTitle className="healthcare-heading text-xl">{activity.title}</CardTitle>
                    {activity.featured && (
                      <div className="mt-2">
                        <Badge className="bg-success text-success-foreground">Nổi bật</Badge>
                      </div>
                    )}
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {activity.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Thống kê tổng quan */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-primary text-white rounded-2xl p-8 md:p-12 shadow-2xl"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
              Tổng quan thành tích
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">20,000+</div>
                <div className="text-white/90 text-sm md:text-base">Bệnh nhân</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">100+</div>
                <div className="text-white/90 text-sm md:text-base">Bác sĩ</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
                <div className="text-white/90 text-sm md:text-base">Chương trình</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">30 tỷ</div>
                <div className="text-white/90 text-sm md:text-base">Đồng hỗ trợ</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Organizations Section */}
      <section id="organizations" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mb-16 max-w-3xl text-center"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-success/10 px-6 py-2">
              <Building2 className="h-5 w-5 text-success" />
              <span className="text-sm font-medium text-success">Đối tác từ thiện</span>
            </div>
            <h2 className="healthcare-heading mb-6 text-5xl font-bold">
              Tổ chức thiện nguyện tại Việt Nam
            </h2>
            <p className="text-xl text-muted-foreground">
              Hợp tác với các tổ chức từ thiện uy tín hàng đầu Việt Nam
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {organizations.map((org, index) => (
              <motion.div
                key={org.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="healthcare-card h-full border-0 shadow-md hover:shadow-lg">
                  <CardHeader>
                    <div className="flex items-start gap-3">
                      <div className="p-3 rounded-xl bg-success/10">
                        <Building2 className="h-6 w-6 text-success" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-2">{org.name}</CardTitle>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <MapPin className="h-3 w-3" />
                          <span>{org.location}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed">
                      {org.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-secondary py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ 
            backgroundImage: `url(${charityServiceImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }} />
        </div>
        <div className="container mx-auto px-4 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl"
          >
            <h2 className="mb-6 text-4xl md:text-5xl font-bold">
              Sẵn sàng nhận sự chăm sóc tốt nhất?
            </h2>
            <p className="mb-8 text-xl text-white/90">
              Đăng ký ngay hôm nay để được hỗ trợ y tế miễn phí hoặc trở thành
              tình nguyện viên giúp đỡ những người cần hỗ trợ.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                className="text-lg px-10 py-6 h-auto rounded-full bg-white text-primary hover:bg-white/90 shadow-xl"
                onClick={() => navigate('/register')}
              >
                Đăng ký làm bệnh nhân
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-10 py-6 h-auto rounded-full border-2 border-white text-white hover:bg-white/10"
                onClick={() => navigate('/register')}
              >
                Trở thành tình nguyện viên
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-primary/5 to-background border-t py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="h-12 w-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-lg">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="healthcare-heading text-2xl font-bold">HealthCare+</h3>
                  <p className="text-sm text-muted-foreground">Y tế từ thiện</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Nền tảng y tế từ thiện kết nối bệnh nhân, bác sĩ tình nguyện và tổ chức từ thiện,
                mang lại chăm sóc sức khỏe cho mọi người.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold mb-4">Liên kết nhanh</h4>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold mb-4">Dịch vụ</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Khám bệnh miễn phí</li>
                <li>Cấp cứu 24/7</li>
                <li>Chăm sóc sản nhi</li>
                <li>Xét nghiệm & Chẩn đoán</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold mb-4">Liên hệ</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>1900-xxxx</span>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>contact@healthcare.vn</span>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>Hà Nội, Việt Nam</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 HealthCare+. Nền tảng y tế từ thiện Việt Nam.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-4 rounded-full bg-gradient-primary text-white shadow-2xl hover:shadow-primary/50 transition-all"
        >
          <ChevronUp className="h-6 w-6" />
        </motion.button>
      )}
    </div>
  );
}