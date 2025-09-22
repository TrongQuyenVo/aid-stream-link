import { motion } from 'framer-motion';
import { Calendar, Stethoscope, Gift, HandHeart, MessageCircle, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function PatientDashboard() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const quickActions = [
    {
      title: 'Đặt lịch khám',
      description: 'Tìm và đặt lịch với bác sĩ tình nguyện',
      icon: Calendar,
      action: () => navigate('/appointments'),
      color: 'bg-gradient-primary',
    },
    {
      title: 'Tìm bác sĩ',
      description: 'Xem danh sách bác sĩ chuyên khoa',
      icon: Stethoscope,
      action: () => navigate('/doctors'),
      color: 'bg-gradient-secondary',
    },
    {
      title: 'Quyên góp',
      description: 'Xem các chiến dịch quyên góp',
      icon: Gift,
      action: () => navigate('/donations'),
      color: 'bg-gradient-success',
    },
    {
      title: 'Yêu cầu hỗ trợ',
      description: 'Tạo yêu cầu hỗ trợ y tế',
      icon: HandHeart,
      action: () => navigate('/assistance'),
      color: 'bg-orange-500',
    },
  ];

  const upcomingAppointments = [
    {
      id: 1,
      doctor: 'BS. Nguyễn Văn A',
      specialty: 'Tim mạch',
      time: '14:00 - 25/12/2024',
      status: 'confirmed',
    },
    {
      id: 2,
      doctor: 'BS. Trần Thị B',
      specialty: 'Da liễu',
      time: '10:00 - 28/12/2024',
      status: 'scheduled',
    },
  ];

  const recentActivity = [
    {
      id: 1,
      type: 'appointment',
      message: 'Lịch hẹn với BS. Nguyễn Văn A đã được xác nhận',
      time: '2 giờ trước',
    },
    {
      id: 2,
      type: 'donation',
      message: 'Bạn đã nhận được 500,000 VNĐ hỗ trợ y tế',
      time: '1 ngày trước',
    },
    {
      id: 3,
      type: 'system',
      message: 'Hồ sơ y tế của bạn đã được cập nhật',
      time: '3 ngày trước',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Stats Overview */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card className="healthcare-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Lịch hẹn sắp tới</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">2</div>
              <p className="text-xs text-muted-foreground">
                +1 từ tháng trước
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="healthcare-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Lịch sử khám</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">12</div>
              <p className="text-xs text-muted-foreground">
                Tổng số lần khám
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card className="healthcare-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Hỗ trợ nhận được</CardTitle>
              <HandHeart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-success">2.5M</div>
              <p className="text-xs text-muted-foreground">
                VNĐ trong năm nay
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="healthcare-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Tin nhắn mới</CardTitle>
              <MessageCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">3</div>
              <p className="text-xs text-muted-foreground">
                Từ bác sĩ và hệ thống
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Card className="healthcare-card">
          <CardHeader>
            <CardTitle className="healthcare-heading">Thao tác nhanh</CardTitle>
            <CardDescription>Các chức năng bạn thường sử dụng</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {quickActions.map((action, index) => (
                <motion.div
                  key={action.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                >
                  <Button
                    onClick={action.action}
                    className="h-auto w-full justify-start p-4 text-left"
                    variant="outline"
                  >
                    <div className={`mr-3 flex h-10 w-10 items-center justify-center rounded-lg ${action.color}`}>
                      <action.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium">{action.title}</div>
                      <div className="text-xs text-muted-foreground">
                        {action.description}
                      </div>
                    </div>
                  </Button>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Upcoming Appointments */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Card className="healthcare-card">
            <CardHeader>
              <CardTitle className="healthcare-heading">Lịch hẹn sắp tới</CardTitle>
              <CardDescription>Các cuộc hẹn trong tuần tới</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingAppointments.map((appointment) => (
                <div
                  key={appointment.id}
                  className="flex items-center justify-between rounded-lg border p-4"
                >
                  <div>
                    <div className="font-medium">{appointment.doctor}</div>
                    <div className="text-sm text-muted-foreground">
                      {appointment.specialty}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {appointment.time}
                    </div>
                  </div>
                  <Badge 
                    className={
                      appointment.status === 'confirmed' 
                        ? 'status-confirmed' 
                        : 'status-scheduled'
                    }
                  >
                    {appointment.status === 'confirmed' ? 'Đã xác nhận' : 'Đã đặt lịch'}
                  </Badge>
                </div>
              ))}
              <Button
                variant="outline"
                className="w-full"
                onClick={() => navigate('/appointments')}
              >
                Xem tất cả lịch hẹn
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <Card className="healthcare-card">
            <CardHeader>
              <CardTitle className="healthcare-heading">Hoạt động gần đây</CardTitle>
              <CardDescription>Cập nhật mới nhất từ hệ thống</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentActivity.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-start space-x-3 rounded-lg border p-4"
                >
                  <div className="flex-1">
                    <div className="text-sm">{activity.message}</div>
                    <div className="text-xs text-muted-foreground">
                      {activity.time}
                    </div>
                  </div>
                </div>
              ))}
              <Button
                variant="outline"
                className="w-full"
                onClick={() => navigate('/notifications')}
              >
                Xem tất cả thông báo
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}