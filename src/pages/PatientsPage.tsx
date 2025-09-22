import { motion } from 'framer-motion';
import { Heart, CheckCircle, Clock, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function PatientsPage() {
  const mockPatients = [
    {
      id: 1,
      name: 'Nguyễn Thị Lan',
      age: 45,
      condition: 'Bệnh tim bẩm sinh',
      economicStatus: 'very_poor',
      isVerified: true,
      registeredAt: '2024-01-15',
      lastVisit: '2024-12-20'
    },
    {
      id: 2,
      name: 'Trần Văn Nam',
      age: 62,
      condition: 'Ung thư phổi',
      economicStatus: 'poor',
      isVerified: false,
      registeredAt: '2024-02-10',
      lastVisit: '2024-12-18'
    },
    {
      id: 3,
      name: 'Lê Thị Mai',
      age: 28,
      condition: 'Tiểu đường type 1',
      economicStatus: 'poor',
      isVerified: true,
      registeredAt: '2024-03-05',
      lastVisit: '2024-12-22'
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'very_poor': return 'bg-destructive text-destructive-foreground';
      case 'poor': return 'bg-warning text-warning-foreground';
      case 'middle': return 'bg-success text-success-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'very_poor': return 'Rất khó khăn';
      case 'poor': return 'Khó khăn';
      case 'middle': return 'Trung bình';
      default: return 'Không xác định';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div>
        <h1 className="healthcare-heading text-3xl font-bold">Quản lý bệnh nhân</h1>
        <p className="healthcare-subtitle">Danh sách và thông tin các bệnh nhân trong hệ thống</p>
      </div>

      <div className="grid gap-6">
        {mockPatients.map((patient, index) => (
          <motion.div
            key={patient.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="healthcare-card">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Avatar className="w-16 h-16">
                    <AvatarFallback className="text-lg bg-gradient-primary text-white">
                      {patient.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h3 className="text-lg font-semibold healthcare-heading flex items-center">
                          {patient.name}
                          {patient.isVerified ? (
                            <CheckCircle className="ml-2 h-5 w-5 text-success" />
                          ) : (
                            <Clock className="ml-2 h-5 w-5 text-warning" />
                          )}
                        </h3>
                        <p className="text-muted-foreground">
                          {patient.age} tuổi • {patient.condition}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className={getStatusColor(patient.economicStatus)}>
                          {getStatusLabel(patient.economicStatus)}
                        </Badge>
                        {!patient.isVerified && (
                          <Button size="sm" className="btn-healthcare">
                            Xác minh
                          </Button>
                        )}
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Đăng ký: </span>
                        <span className="font-medium">
                          {new Date(patient.registeredAt).toLocaleDateString('vi-VN')}
                        </span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Khám gần nhất: </span>
                        <span className="font-medium">
                          {new Date(patient.lastVisit).toLocaleDateString('vi-VN')}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Heart className="w-4 h-4 mr-1 text-primary" />
                        <span className="text-muted-foreground">Trạng thái: </span>
                        <span className="font-medium ml-1">
                          {patient.isVerified ? 'Đã xác minh' : 'Chờ xác minh'}
                        </span>
                      </div>
                    </div>
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