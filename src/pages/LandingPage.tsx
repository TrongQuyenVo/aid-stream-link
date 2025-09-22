import { motion } from 'framer-motion';
import { ArrowRight, Heart, Users, Stethoscope, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function LandingPage() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const features = [
    {
      icon: Heart,
      title: 'Chăm sóc y tế từ thiện',
      description: 'Kết nối bệnh nhân có hoàn cảnh khó khăn với các bác sĩ tình nguyện và tổ chức từ thiện.',
    },
    {
      icon: Stethoscope,
      title: 'Bác sĩ chuyên nghiệp',
      description: 'Đội ngũ bác sĩ giàu kinh nghiệm sẵn sàng hỗ trợ và tư vấn miễn phí.',
    },
    {
      icon: Gift,
      title: 'Quyên góp minh bạch',
      description: 'Hệ thống quyên góp công khai, minh bạch giúp hỗ trợ những người cần giúp đỡ.',
    },
    {
      icon: Users,
      title: 'Cộng đồng hỗ trợ',
      description: 'Tham gia cộng đồng yêu thương, cùng nhau giúp đỡ những hoàn cảnh khó khăn.',
    },
  ];

  const stats = [
    { number: '10,000+', label: 'Bệnh nhân được hỗ trợ' },
    { number: '500+', label: 'Bác sĩ tình nguyện' },
    { number: '2,500+', label: 'Cuộc hẹn đã hoàn thành' },
    { number: '50+', label: 'Tổ chức từ thiện' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center">
              <Heart className="h-4 w-4 text-white" />
            </div>
            <span className="healthcare-heading text-xl font-bold">HealthCare+</span>
          </div>

          <div className="flex items-center space-x-4">
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
      <section className="relative overflow-hidden bg-gradient-hero py-32 text-white">
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
      <footer className="border-t py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Heart className="h-4 w-4 text-white" />
              </div>
              <span className="healthcare-heading text-xl font-bold">HealthCare+</span>
            </div>
            <p className="text-muted-foreground">
              © 2024 HealthCare+. Tất cả quyền được bảo lưu.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}