import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, Users, Stethoscope, Gift, Activity, ChevronRight, Link, Phone, MapPin, Mail, Globe, Moon, Sun, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAppStore } from '@/stores/appStore';

export default function LandingPage() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const { theme, setTheme, language, setLanguage } = useAppStore();
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle scroll to show/hide scroll to top button
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

  const features = [
    {
      icon: Heart,
      title: t('charitySupport'),
      description: t('charitySupportDesc'),
    },
    {
      icon: Stethoscope,
      title: t('professionalDoctors'),
      description: t('professionalDoctorsDesc'),
    },
    {
      icon: Gift,
      title: t('transparentDonations'),
      description: t('transparentDonationsDesc'),
    },
    {
      icon: Users,
      title: t('supportCommunity'),
      description: t('supportCommunityDesc'),
    },
  ];

  const stats = [
    { number: '10,000+', label: t('patientsSupported') },
    { number: '500+', label: t('volunteerDoctors') },
    { number: '2,500+', label: t('completedAppointments') },
    { number: '50+', label: t('charityOrganizations') },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center">
              <Heart className="h-4 w-4 text-white" />
            </div>
            <span className="healthcare-heading text-xl font-bold">HealthCare+</span>
          </div>

          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              className="text-muted-foreground hover:text-foreground"
            >
              <Globe className="h-5 w-5" />
            </Button>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="text-muted-foreground hover:text-foreground"
            >
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>

            <Button variant="ghost" onClick={() => navigate('/login')}>
              {t('login')}
            </Button>
            <Button className="btn-healthcare" onClick={() => navigate('/register')}>
              {t('register')}
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero pt-24 pb-16 text-white">
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
        <div className="container relative mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mx-auto max-w-5xl text-center"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8 inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 backdrop-blur-sm"
            >
              <Heart className="h-5 w-5 text-red-400" />
              <span className="text-sm font-medium">Nền tảng y tế từ thiện hàng đầu</span>
            </motion.div>
            
            <h1 className="mb-8 text-6xl font-bold leading-tight tracking-tight md:text-7xl lg:text-8xl">
              Chăm sóc sức khỏe
              <span className="block bg-gradient-to-r from-white to-secondary-light bg-clip-text text-transparent">
                cho mọi người
              </span>
            </h1>
            
            <p className="mb-12 text-xl text-white/90 md:text-2xl leading-relaxed max-w-3xl mx-auto">
              Kết nối bệnh nhân có hoàn cảnh khó khăn với bác sĩ tình nguyện và các tổ chức từ thiện 
              để mang lại dịch vụ y tế miễn phí, chất lượng cao.
            </p>
            
            <div className="flex flex-col gap-6 sm:flex-row sm:justify-center items-center">
              <Button
                size="lg"
                className="btn-charity text-lg px-10 py-4 h-auto rounded-full shadow-2xl shadow-secondary/25 hover:shadow-secondary/40 transition-all duration-300"
                onClick={() => navigate('/register')}
              >
                Bắt đầu ngay hôm nay
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-10 py-4 h-auto rounded-full border-2 border-white/30 text-white hover:bg-white/10 hover:border-white backdrop-blur-sm transition-all duration-300"
                onClick={() => navigate('/doctors')}
              >
                Khám phá bác sĩ
              </Button>
            </div>

            {/* Quick Demo Login Options */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-16 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
            >
              <p className="text-sm text-white/70 mb-4">Demo tài khoản (UI testing):</p>
              <div className="flex flex-wrap justify-center gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-white/20 text-white/80 hover:bg-white/10 text-xs"
                  onClick={() => navigate('/login?demo=patient')}
                >
                  Demo Bệnh nhân
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-white/20 text-white/80 hover:bg-white/10 text-xs"
                  onClick={() => navigate('/login?demo=doctor')}
                >
                  Demo Bác sĩ
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-white/20 text-white/80 hover:bg-white/10 text-xs"
                  onClick={() => navigate('/login?demo=admin')}
                >
                  Demo Admin
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-white/20 text-white/80 hover:bg-white/10 text-xs"
                  onClick={() => navigate('/login?demo=charity')}
                >
                  Demo Từ thiện
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mb-20 max-w-4xl text-center"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-6 py-2"
            >
              <Stethoscope className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-primary">Dịch vụ chuyên nghiệp</span>
            </motion.div>
            
            <h2 className="healthcare-heading mb-6 text-5xl font-bold tracking-tight">
              Tại sao chọn HealthCare+?
            </h2>
            <p className="healthcare-subtitle text-xl leading-relaxed">
              Chúng tôi cam kết mang đến dịch vụ y tế chất lượng cao và hoàn toàn miễn phí
              cho những người có hoàn cảnh khó khăn nhất.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <Card className="healthcare-card h-full text-center group border-0 shadow-xl hover:shadow-2xl bg-white/80 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <motion.div 
                      className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-primary shadow-lg group-hover:shadow-xl transition-all duration-300"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <feature.icon className="h-10 w-10 text-white" />
                    </motion.div>
                    <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="text-base leading-relaxed text-muted-foreground">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mb-20 max-w-3xl text-center"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/80 px-6 py-2 shadow-lg"
            >
              <Users className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-primary">Tác động thực tế</span>
            </motion.div>
            
            <h2 className="healthcare-heading mb-6 text-5xl font-bold">
              Thành tựu của chúng tôi
            </h2>
            <p className="text-xl text-muted-foreground">
              Những con số ấn tượng phản ánh cam kết của chúng tôi trong việc mang lại sự chăm sóc tốt nhất
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ scale: 1.05 }}
                className="text-center group"
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20">
                  <motion.div 
                    className="healthcare-heading text-5xl font-bold text-transparent bg-gradient-to-br from-primary to-secondary bg-clip-text mb-4"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-muted-foreground font-medium group-hover:text-foreground transition-colors">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-primary py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl"
          >
            <h2 className="mb-6 text-4xl font-bold">
              Sẵn sàng tham gia cùng chúng tôi?
            </h2>
            <p className="mb-8 text-xl text-white/90">
              Đăng ký ngay hôm nay để được hỗ trợ y tế miễn phí hoặc trở thành
              tình nguyện viên giúp đỡ những người cần hỗ trợ.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-3"
                onClick={() => navigate('/register')}
              >
                Đăng ký làm bệnh nhân
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-primary"
                onClick={() => navigate('/register')}
              >
                Đăng ký làm tình nguyện viên
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative mt-16 bg-gradient-to-br from-primary/5 via-secondary/5 to-background border-t border-border/50">
        {/* Decorative background */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5"></div>
        
        <div className="relative container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="h-12 w-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-primary">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="healthcare-heading text-2xl font-bold">HealthCare+</h3>
                  <p className="text-sm text-muted-foreground">Y tế từ thiện</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Nền tảng y tế từ thiện kết nối bệnh nhân, bác sĩ tình nguyện và nhà hảo tâm, 
                mang lại chăm sóc sức khỏe chất lượng cho mọi người.
              </p>
              <div className="flex space-x-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center cursor-pointer transition-all group">
                  <Heart className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <div className="h-10 w-10 rounded-lg bg-secondary/10 hover:bg-secondary/20 flex items-center justify-center cursor-pointer transition-all group">
                  <Users className="h-5 w-5 text-secondary group-hover:scale-110 transition-transform" />
                </div>
                <div className="h-10 w-10 rounded-lg bg-success/10 hover:bg-success/20 flex items-center justify-center cursor-pointer transition-all group">
                  <Activity className="h-5 w-5 text-success group-hover:scale-110 transition-transform" />
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="healthcare-heading text-lg font-semibold mb-6 flex items-center">
                <Stethoscope className="h-5 w-5 mr-2 text-primary" />
                Dịch vụ
              </h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center group">
                  <ChevronRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Đặt lịch khám bệnh
                </a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center group">
                  <ChevronRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Tư vấn trực tuyến
                </a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center group">
                  <ChevronRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Hỗ trợ y tế
                </a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center group">
                  <ChevronRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Quyên góp từ thiện
                </a></li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="healthcare-heading text-lg font-semibold mb-6 flex items-center">
                <Link className="h-5 w-5 mr-2 text-secondary" />
                Liên kết
              </h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-muted-foreground hover:text-secondary transition-colors flex items-center group">
                  <ChevronRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Về chúng tôi
                </a></li>
                <li><a href="#" className="text-muted-foreground hover:text-secondary transition-colors flex items-center group">
                  <ChevronRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Bác sĩ tình nguyện
                </a></li>
                <li><a href="#" className="text-muted-foreground hover:text-secondary transition-colors flex items-center group">
                  <ChevronRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Câu hỏi thường gặp
                </a></li>
                <li><a href="#" className="text-muted-foreground hover:text-secondary transition-colors flex items-center group">
                  <ChevronRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Chính sách bảo mật
                </a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="healthcare-heading text-lg font-semibold mb-6 flex items-center">
                <Phone className="h-5 w-5 mr-2 text-success" />
                Liên hệ
              </h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Địa chỉ</p>
                    <p className="text-sm text-muted-foreground">123 Đường Sức Khỏe, Q1, TP.HCM</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="h-8 w-8 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Phone className="h-4 w-4 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Điện thoại</p>
                    <p className="text-sm text-muted-foreground">1900 1234</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="h-8 w-8 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Mail className="h-4 w-4 text-success" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Email</p>
                    <p className="text-sm text-muted-foreground">info@healthcare.vn</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-8 border-t border-border/50">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <p className="text-sm text-muted-foreground">
                  © 2024 HealthCare+. Tất cả quyền được bảo lưu.
                </p>
                <div className="flex items-center space-x-6 text-sm">
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Điều khoản sử dụng
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Chính sách bảo mật
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Heart className="h-4 w-4 text-destructive animate-pulse" />
                <span>{t('builtWithLove', 'Được xây dựng với tình yêu thương')}</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed bottom-8 right-8 z-40"
        >
          <Button
            onClick={scrollToTop}
            size="icon"
            className="h-12 w-12 rounded-full bg-gradient-primary shadow-lg hover:shadow-glow transition-all duration-300 hover:scale-110"
            title={t('scrollToTop')}
          >
            <ChevronUp className="h-6 w-6 text-white" />
          </Button>
        </motion.div>
      )}
    </div>
  );
}