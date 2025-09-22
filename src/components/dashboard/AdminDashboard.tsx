import { motion } from 'framer-motion';
import { Users, Stethoscope, Gift, Building2, TrendingUp, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useNavigate } from 'react-router-dom';

export default function AdminDashboard() {
  const navigate = useNavigate();

  const stats = [
    {
      title: 'Tổng người dùng',
      value: '2,847',
      change: '+12.5%',
      changeType: 'increase',
      icon: Users,
      color: 'text-primary',
    },
    {
      title: 'Bác sĩ tình nguyện',
      value: '156',
      change: '+8.2%',
      changeType: 'increase',
      icon: Stethoscope,
      color: 'text-secondary',
    },
    {
      title: 'Quyên góp tháng này',
      value: '125M VNĐ',
      change: '+15.3%',
      changeType: 'increase',
      icon: Gift,
      color: 'text-success',
    },
    {
      title: 'Tổ chức từ thiện',
      value: '23',
      change: '+2',
      changeType: 'increase',
      icon: Building2,
      color: 'text-warning',
    },
  ];

  const recentActivities = [
    {
      id: 1,
      type: 'user',
      message: '15 người dùng mới đăng ký hôm nay',
      time: '2 giờ trước',
      status: 'info',
    },
    {
      id: 2,
      type: 'donation',
      message: 'Nhận được quyên góp 5M VNĐ từ tổ chức ABC',
      time: '4 giờ trước',
      status: 'success',
    },
    {
      id: 3,
      type: 'alert',
      message: '3 yêu cầu hỗ trợ khẩn cấp cần duyệt',
      time: '6 giờ trước',
      status: 'warning',
    },
    {
      id: 4,
      type: 'system',
      message: 'Hoàn thành backup dữ liệu hệ thống',
      time: '1 ngày trước',
      status: 'success',
    },
  ];

  const pendingRequests = [
    {
      type: 'Xác thực bác sĩ',
      count: 8,
      action: () => navigate('/doctors'),
    },
    {
      type: 'Duyệt yêu cầu hỗ trợ',
      count: 12,
      action: () => navigate('/assistance'),
    },
    {
      type: 'Xác minh bệnh nhân',
      count: 5,
      action: () => navigate('/patients'),
    },
  ];

  const monthlyTargets = [
    {
      title: 'Quyên góp',
      current: 125,
      target: 200,
      unit: 'M VNĐ',
    },
    {
      title: 'Bệnh nhân mới',
      current: 348,
      target: 500,
      unit: 'người',
    },
    {
      title: 'Bác sĩ tình nguyện',
      current: 156,
      target: 200,
      unit: 'người',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Stats Overview */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="healthcare-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-success">{stat.change}</span> từ tháng trước
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Pending Requests */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Card className="healthcare-card">
            <CardHeader>
              <CardTitle className="healthcare-heading flex items-center">
                <AlertCircle className="mr-2 h-5 w-5 text-warning" />
                Cần xử lý
              </CardTitle>
              <CardDescription>Các yêu cầu chờ phê duyệt</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {pendingRequests.map((request, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 cursor-pointer transition-colors"
                  onClick={request.action}
                >
                  <div>
                    <div className="font-medium">{request.type}</div>
                    <div className="text-sm text-muted-foreground">
                      {request.count} yêu cầu
                    </div>
                  </div>
                  <div className="bg-destructive text-destructive-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                    {request.count}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        {/* Monthly Targets */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Card className="healthcare-card">
            <CardHeader>
              <CardTitle className="healthcare-heading">Mục tiêu tháng này</CardTitle>
              <CardDescription>Tiến độ hoàn thành các chỉ tiêu</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {monthlyTargets.map((target, index) => {
                const progress = (target.current / target.target) * 100;
                return (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{target.title}</span>
                      <span className="text-sm text-muted-foreground">
                        {target.current}/{target.target} {target.unit}
                      </span>
                    </div>
                    <Progress 
                      value={progress} 
                      className="h-2"
                    />
                    <div className="text-xs text-muted-foreground">
                      {progress.toFixed(1)}% hoàn thành
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <Card className="healthcare-card">
            <CardHeader>
              <CardTitle className="healthcare-heading">Quản lý hệ thống</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button
                className="w-full justify-start btn-healthcare"
                onClick={() => navigate('/users')}
              >
                <Users className="mr-2 h-4 w-4" />
                Quản lý người dùng
              </Button>
              <Button
                className="w-full justify-start"
                variant="outline"
                onClick={() => navigate('/charity')}
              >
                <Building2 className="mr-2 h-4 w-4" />
                Tổ chức từ thiện
              </Button>
              <Button
                className="w-full justify-start"
                variant="outline"
                onClick={() => navigate('/donations')}
              >
                <Gift className="mr-2 h-4 w-4" />
                Quản lý quyên góp
              </Button>
              <Button
                className="w-full justify-start"
                variant="outline"
                onClick={() => navigate('/analytics')}
              >
                <TrendingUp className="mr-2 h-4 w-4" />
                Thống kê & Báo cáo
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Recent Activities */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <Card className="healthcare-card">
          <CardHeader>
            <CardTitle className="healthcare-heading">Hoạt động gần đây</CardTitle>
            <CardDescription>Các sự kiện và thay đổi mới nhất trong hệ thống</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-start space-x-3 p-3 rounded-lg border"
                >
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    activity.status === 'success' ? 'bg-success' :
                    activity.status === 'warning' ? 'bg-warning' :
                    activity.status === 'info' ? 'bg-primary' : 'bg-muted-foreground'
                  }`} />
                  <div className="flex-1">
                    <div className="text-sm font-medium">{activity.message}</div>
                    <div className="text-xs text-muted-foreground">{activity.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}