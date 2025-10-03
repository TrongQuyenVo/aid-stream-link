import { motion } from 'framer-motion';
import { Building2, ArrowLeft, MapPin, Phone, Mail, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

export default function OrganizationsPage() {
  const navigate = useNavigate();

  const organizations = [
    {
      name: 'Hội Chữ Thập Đỏ Việt Nam',
      description: 'Tổ chức nhân đạo hàng đầu, hoạt động từ thiện y tế trên toàn quốc với hơn 70 năm kinh nghiệm.',
      location: 'Hà Nội, Việt Nam',
      phone: '024-3942-2030',
      email: 'info@redcross.org.vn',
      website: 'www.redcross.org.vn',
      activities: ['Cứu trợ khẩn cấp', 'Y tế cộng đồng', 'Hiến máu nhân đạo']
    },
    {
      name: 'Quỹ Tấm Lòng Việt',
      description: 'Hỗ trợ phẫu thuật tim bẩm sinh cho trẻ em nghèo, đã thực hiện hơn 3000 ca phẫu thuật thành công.',
      location: 'TP. Hồ Chí Minh',
      phone: '028-3930-3003',
      email: 'contact@tamlongviet.org.vn',
      website: 'www.tamlongviet.org.vn',
      activities: ['Phẫu thuật tim', 'Hỗ trợ điều trị', 'Tư vấn y tế']
    },
    {
      name: 'Hội Bảo Trợ Bệnh Nhân Nghèo',
      description: 'Hỗ trợ chi phí điều trị cho bệnh nhân có hoàn cảnh khó khăn, hoạt động tại các bệnh viện lớn.',
      location: 'Toàn quốc',
      phone: '024-3943-7744',
      email: 'info@hoibtbn.org.vn',
      website: 'www.hoibtbn.org.vn',
      activities: ['Hỗ trợ viện phí', 'Cấp phát thuốc', 'Chăm sóc bệnh nhân']
    },
    {
      name: 'Quỹ Bảo Trợ Trẻ Em Việt Nam',
      description: 'Chăm sóc sức khỏe và giáo dục cho trẻ em vùng sâu vùng xa, mồ côi và có hoàn cảnh đặc biệt khó khăn.',
      location: 'Hà Nội, Việt Nam',
      phone: '024-3944-6126',
      email: 'info@vnvcf.org',
      website: 'www.vnvcf.org',
      activities: ['Y tế trẻ em', 'Dinh dưỡng', 'Giáo dục']
    },
    {
      name: 'Hội Bác Sĩ Tình Nguyện',
      description: 'Mạng lưới bác sĩ tình nguyện khám chữa bệnh miễn phí, với hơn 5000 thành viên trên cả nước.',
      location: 'Toàn quốc',
      phone: '024-3826-9999',
      email: 'contact@bstn.org.vn',
      website: 'www.bacsi tinhnguyenvn.org',
      activities: ['Khám bệnh miễn phí', 'Tư vấn y tế', 'Đào tạo']
    },
    {
      name: 'Quỹ Vì Người Nghèo',
      description: 'Hỗ trợ y tế, thuốc men và phẫu thuật cho người nghèo, hoạt động mạnh tại miền Nam.',
      location: 'TP. Hồ Chí Minh',
      phone: '028-3822-6122',
      email: 'info@quyvinguoingheo.org',
      website: 'www.quyvinguoingheo.org',
      activities: ['Phẫu thuật miễn phí', 'Cấp thuốc', 'Hỗ trợ viện phí']
    },
    {
      name: 'Hội Chăm Sóc Người Cao Tuổi',
      description: 'Chuyên về chăm sóc sức khỏe người cao tuổi, đặc biệt là những người neo đơn không nơi nương tựa.',
      location: 'Các tỉnh thành',
      phone: '024-3756-4321',
      email: 'info@hoicsnct.vn',
      website: 'www.hoichasocsuckhoe.vn',
      activities: ['Khám định kỳ', 'Chăm sóc tại nhà', 'Phục hồi chức năng']
    },
    {
      name: 'Tổ Chức Operation Smile Việt Nam',
      description: 'Chuyên phẫu thuật miễn phí dị tật hở môi, hở hàm ếch cho trẻ em nghèo.',
      location: 'Toàn quốc',
      phone: '024-3974-3198',
      email: 'vietnam@operationsmile.org',
      website: 'www.operationsmile.org.vn',
      activities: ['Phẫu thuật thẩm mỹ', 'Phục hồi chức năng', 'Hỗ trợ tâm lý']
    },
    {
      name: 'Hội Phòng Chống Ung Thư',
      description: 'Hỗ trợ điều trị và chăm sóc bệnh nhân ung thư, tuyên truyền phòng bệnh trong cộng đồng.',
      location: 'Hà Nội & TP.HCM',
      phone: '024-3514-3165',
      email: 'info@vac.org.vn',
      website: 'www.hoiphongchongungthuvn.org',
      activities: ['Hỗ trợ điều trị', 'Tư vấn dinh dưỡng', 'Khám tầm soát']
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate('/')}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="healthcare-heading text-2xl font-bold">Tổ Chức Từ Thiện</h1>
            <p className="text-sm text-muted-foreground">Các tổ chức y tế từ thiện uy tín tại Việt Nam</p>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto mb-12 text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-secondary/10 px-6 py-2">
            <Building2 className="h-5 w-5 text-secondary" />
            <span className="text-sm font-medium text-secondary">Đối tác từ thiện</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">Các Tổ Chức Từ Thiện Uy Tín</h2>
          <p className="text-xl text-muted-foreground">
            Mạng lưới các tổ chức từ thiện y tế hàng đầu Việt Nam, cùng chung tay vì sức khỏe cộng đồng
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {organizations.map((org, index) => (
            <motion.div
              key={org.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Card className="healthcare-card h-full">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary/10">
                    <Building2 className="h-8 w-8 text-secondary" />
                  </div>
                  <CardTitle className="text-center text-lg">{org.name}</CardTitle>
                  <CardDescription className="text-center">{org.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{org.location}</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <Phone className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{org.phone}</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <Mail className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="break-all">{org.email}</span>
                  </div>
                  {org.website && (
                    <div className="flex items-start gap-2 text-sm">
                      <ExternalLink className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="break-all text-primary hover:underline cursor-pointer">
                        {org.website}
                      </span>
                    </div>
                  )}
                  <div className="pt-3 border-t">
                    <p className="text-xs font-semibold mb-2">Hoạt động chính:</p>
                    <div className="flex flex-wrap gap-1">
                      {org.activities.map((activity) => (
                        <span 
                          key={activity}
                          className="text-xs bg-muted px-2 py-1 rounded-full"
                        >
                          {activity}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center space-y-4"
        >
          <p className="text-muted-foreground">
            Bạn muốn trở thành đối tác từ thiện của chúng tôi?
          </p>
          <Button size="lg" className="btn-healthcare" onClick={() => navigate('/register')}>
            Đăng ký hợp tác
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
