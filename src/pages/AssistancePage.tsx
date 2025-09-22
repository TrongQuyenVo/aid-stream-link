import { motion } from 'framer-motion';
import { HandHeart, AlertCircle, Clock, CheckCircle, XCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

export default function AssistancePage() {
  const assistanceRequests = [
    {
      id: 1,
      patient: 'Nguyễn Thị Lan',
      requestType: 'medical_treatment',
      description: 'Cần hỗ trợ chi phí phẫu thuật tim bẩm sinh khẩn cấp',
      requestedAmount: 50000000,
      raisedAmount: 35000000,
      status: 'approved',
      urgency: 'high',
      submittedAt: '2024-12-20',
      approvedBy: 'Admin System'
    },
    {
      id: 2,
      patient: 'Trần Văn Nam',
      requestType: 'medication',
      description: 'Cần thuốc đặc trị cho bệnh ung thư phổi',
      requestedAmount: 15000000,
      raisedAmount: 8000000,
      status: 'in_progress',
      urgency: 'medium',
      submittedAt: '2024-12-18',
      approvedBy: 'BS. Nguyễn Văn A'
    },
    {
      id: 3,
      patient: 'Lê Thị Mai',
      requestType: 'equipment',
      description: 'Cần máy đo đường huyết và que thử cho bệnh tiểu đường',
      requestedAmount: 3000000,
      raisedAmount: 0,
      status: 'pending',
      urgency: 'low',
      submittedAt: '2024-12-22',
      approvedBy: null
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved': return CheckCircle;
      case 'in_progress': return Clock;
      case 'pending': return AlertCircle;
      case 'rejected': return XCircle;
      default: return Clock;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return 'status-completed';
      case 'in_progress': return 'status-confirmed';
      case 'pending': return 'status-scheduled';
      case 'rejected': return 'status-cancelled';
      default: return 'status-scheduled';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'approved': return 'Đã duyệt';
      case 'in_progress': return 'Đang thực hiện';
      case 'pending': return 'Chờ duyệt';
      case 'rejected': return 'Từ chối';
      default: return 'Không xác định';
    }
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'high': return 'bg-destructive text-destructive-foreground';
      case 'medium': return 'bg-warning text-warning-foreground';
      case 'low': return 'bg-success text-success-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getUrgencyLabel = (urgency: string) => {
    switch (urgency) {
      case 'high': return 'Khẩn cấp';
      case 'medium': return 'Trung bình';
      case 'low': return 'Bình thường';
      default: return 'Không xác định';
    }
  };

  const getRequestTypeLabel = (type: string) => {
    switch (type) {
      case 'medical_treatment': return 'Điều trị y tế';
      case 'medication': return 'Thuốc men';
      case 'equipment': return 'Thiết bị y tế';
      case 'financial_aid': return 'Hỗ trợ tài chính';
      default: return 'Khác';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <div>
          <h1 className="healthcare-heading text-3xl font-bold">Yêu cầu hỗ trợ y tế</h1>
          <p className="healthcare-subtitle">Quản lý và theo dõi các yêu cầu hỗ trợ từ bệnh nhân</p>
        </div>
        <Button className="btn-healthcare">
          <HandHeart className="mr-2 h-4 w-4" />
          Tạo yêu cầu mới
        </Button>
      </div>

      {/* Stats Overview */}
      <div className="grid gap-6 md:grid-cols-4">
        <Card className="healthcare-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tổng yêu cầu</CardTitle>
            <HandHeart className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">125</div>
            <p className="text-xs text-muted-foreground">+12 yêu cầu mới tuần này</p>
          </CardContent>
        </Card>
        <Card className="healthcare-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Chờ duyệt</CardTitle>
            <Clock className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-warning">23</div>
            <p className="text-xs text-muted-foreground">Cần xem xét</p>
          </CardContent>
        </Card>
        <Card className="healthcare-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Đã duyệt</CardTitle>
            <CheckCircle className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">89</div>
            <p className="text-xs text-muted-foreground">Tỷ lệ 71.2%</p>
          </CardContent>
        </Card>
        <Card className="healthcare-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tổng hỗ trợ</CardTitle>
            <HandHeart className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">68M VNĐ</div>
            <p className="text-xs text-muted-foreground">Trong tháng này</p>
          </CardContent>
        </Card>
      </div>

      {/* Assistance Requests */}
      <div className="space-y-4">
        <h2 className="healthcare-heading text-2xl font-bold">Danh sách yêu cầu hỗ trợ</h2>
        {assistanceRequests.map((request, index) => {
          const progress = (request.raisedAmount / request.requestedAmount) * 100;
          const StatusIcon = getStatusIcon(request.status);
          
          return (
            <motion.div
              key={request.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="healthcare-card">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold healthcare-heading">
                          {request.patient}
                        </h3>
                        <Badge className={getStatusColor(request.status)}>
                          <StatusIcon className="w-3 h-3 mr-1" />
                          {getStatusLabel(request.status)}
                        </Badge>
                        <Badge className={getUrgencyColor(request.urgency)}>
                          {getUrgencyLabel(request.urgency)}
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                        <span>Loại: {getRequestTypeLabel(request.requestType)}</span>
                        <span>Ngày gửi: {new Date(request.submittedAt).toLocaleDateString('vi-VN')}</span>
                        {request.approvedBy && (
                          <span>Duyệt bởi: {request.approvedBy}</span>
                        )}
                      </div>
                      <p className="text-muted-foreground mb-4">{request.description}</p>
                    </div>
                  </div>

                  {request.status !== 'pending' && (
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-muted-foreground">Tiến độ quyên góp</span>
                        <span className="font-medium">
                          {request.raisedAmount.toLocaleString('vi-VN')} / {request.requestedAmount.toLocaleString('vi-VN')} VNĐ
                        </span>
                      </div>
                      <Progress value={progress} className="h-2 mb-1" />
                      <div className="text-xs text-muted-foreground">
                        {progress.toFixed(1)}% hoàn thành
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <div className="text-lg font-bold text-primary">
                      Cần: {request.requestedAmount.toLocaleString('vi-VN')} VNĐ
                    </div>
                    <div className="space-x-2">
                      {request.status === 'pending' && (
                        <>
                          <Button variant="outline" size="sm">
                            Từ chối
                          </Button>
                          <Button className="btn-healthcare" size="sm">
                            Duyệt
                          </Button>
                        </>
                      )}
                      {request.status === 'approved' && (
                        <Button className="btn-charity" size="sm">
                          Ủng hộ
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}