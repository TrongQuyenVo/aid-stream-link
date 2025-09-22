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
      <section className="relative overflow-hidden bg-gradient-hero py-20 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container relative mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl text-center"
          >
            <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl">
              Nền tảng y tế từ thiện
              <span className="block text-secondary-light">hàng đầu Việt Nam</span>
            </h1>
            <p className="mb-8 text-xl text-white/90 md:text-2xl">
              Kết nối bệnh nhân, bác sĩ tình nguyện và các tổ chức từ thiện để mang lại
              dịch vụ y tế miễn phí cho những người có hoàn cảnh khó khăn.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                className="btn-charity text-lg px-8 py-3"
                onClick={() => navigate('/register')}
              >
                Tham gia ngay
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-primary"
                onClick={() => navigate('/doctors')}
              >
                Tìm bác sĩ
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mb-16 max-w-3xl text-center"
          >
            <h2 className="healthcare-heading mb-4 text-4xl font-bold">
              Tại sao chọn HealthCare+?
            </h2>
            <p className="healthcare-subtitle text-xl">
              Chúng tôi cam kết mang đến dịch vụ y tế chất lượng và miễn phí
              cho những người cần được giúp đỡ.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="healthcare-card h-full text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-primary">
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
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
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mb-16 max-w-3xl text-center"
          >
            <h2 className="healthcare-heading mb-4 text-4xl font-bold">
              Thành tựu của chúng tôi
            </h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="healthcare-heading text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
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