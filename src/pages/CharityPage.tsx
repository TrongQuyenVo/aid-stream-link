import { motion } from 'framer-motion';
import { Building2, Users, Heart, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function CharityPage() {
  const charityOrgs = [
    {
      id: 1,
      name: 'Quỹ từ thiện Trái Tim Việt',
      description: 'Hỗ trợ các ca phẫu thuật tim cho trẻ em có hoàn cảnh khó khăn',
      totalDonations: 125000000,
      patientsHelped: 45,
      isActive: true,
      establishedYear: 2015,
      adminCount: 5
    },
    {
      id: 2,
      name: 'Tổ chức Y tế Cộng đồng',
      description: 'Cung cấp dịch vụ y tế miễn phí cho người nghèo',
      totalDonations: 89000000,
      patientsHelped: 123,
      isActive: true,
      establishedYear: 2018,
      adminCount: 8
    },
    {
      id: 3,
      name: 'Hội từ thiện Hy Vọng',
      description: 'Hỗ trợ điều trị ung thư và các bệnh hiểm nghèo',
      totalDonations: 67000000,
      patientsHelped: 28,
      isActive: true,
      establishedYear: 2020,
      adminCount: 3
    },
  ];

  const resources = [
    {
      type: 'Quỹ tiền mặt',
      amount: '285M VNĐ',
      icon: TrendingUp,
      color: 'text-success'
    },
    {
      type: 'Thiết bị y tế',
      amount: '156 món',
      icon: Heart,
      color: 'text-primary'
    },
    {
      type: 'Thuốc men',
      amount: '89 loại',
      icon: Building2,
      color: 'text-secondary'
    },
    {
      type: 'Tình nguyện viên',
      amount: '234 người',
      icon: Users,
      color: 'text-warning'
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <div>
          <h1 className="healthcare-heading text-3xl font-bold">Tổ chức từ thiện</h1>
          <p className="healthcare-subtitle">Quản lý các tổ chức từ thiện và nguồn lực hỗ trợ</p>
        </div>
        <Button className="btn-healthcare">
          <Building2 className="mr-2 h-4 w-4" />
          Thêm tổ chức
        </Button>
      </div>

      {/* Resources Overview */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {resources.map((resource, index) => (
          <motion.div
            key={resource.type}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="healthcare-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{resource.type}</CardTitle>
                <resource.icon className={`h-4 w-4 ${resource.color}`} />
              </CardHeader>
              <CardContent>
                <div className={`text-2xl font-bold ${resource.color}`}>
                  {resource.amount}
                </div>
                <p className="text-xs text-muted-foreground">
                  Có sẵn để hỗ trợ
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Charity Organizations */}
      <div className="space-y-4">
        <h2 className="healthcare-heading text-2xl font-bold">Danh sách tổ chức từ thiện</h2>
        {charityOrgs.map((org, index) => (
          <motion.div
            key={org.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="healthcare-card">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <Building2 className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold healthcare-heading flex items-center">
                          {org.name}
                          {org.isActive && (
                            <Badge className="ml-2 bg-success text-success-foreground">
                              Hoạt động
                            </Badge>
                          )}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Thành lập năm {org.establishedYear} • {org.adminCount} quản trị viên
                        </p>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">{org.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center p-3 bg-muted rounded-lg">
                        <div className="text-lg font-bold text-success">
                          {org.totalDonations.toLocaleString('vi-VN')} VNĐ
                        </div>
                        <div className="text-xs text-muted-foreground">Tổng quyên góp</div>
                      </div>
                      <div className="text-center p-3 bg-muted rounded-lg">
                        <div className="text-lg font-bold text-primary">
                          {org.patientsHelped}
                        </div>
                        <div className="text-xs text-muted-foreground">Bệnh nhân đã hỗ trợ</div>
                      </div>
                      <div className="text-center p-3 bg-muted rounded-lg">
                        <div className="text-lg font-bold text-secondary">
                          {new Date().getFullYear() - org.establishedYear}
                        </div>
                        <div className="text-xs text-muted-foreground">Năm hoạt động</div>
                      </div>
                    </div>
                  </div>
                  <div className="ml-4 space-y-2">
                    <Button variant="outline" size="sm">
                      Xem chi tiết
                    </Button>
                    <Button className="w-full btn-healthcare" size="sm">
                      Cập nhật tài nguyên
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}