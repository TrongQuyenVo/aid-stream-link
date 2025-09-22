import { motion } from 'framer-motion';
import { Calendar, Clock, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function AppointmentsPage() {
  const mockAppointments = [
    {
      id: 1,
      doctor: 'BS. Nguyễn Văn A',
      patient: 'Trần Thị B',
      specialty: 'Tim mạch',
      time: '14:00 - 25/12/2024',
      status: 'confirmed',
      type: 'consultation'
    },
    {
      id: 2,
      doctor: 'BS. Lê Văn C',
      patient: 'Nguyễn Văn D',
      specialty: 'Da liễu',
      time: '10:00 - 28/12/2024',
      status: 'scheduled',
      type: 'follow_up'
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
          <h1 className="healthcare-heading text-3xl font-bold">Lịch hẹn</h1>
          <p className="healthcare-subtitle">Quản lý các cuộc hẹn khám bệnh</p>
        </div>
        <Button className="btn-healthcare">
          <Calendar className="mr-2 h-4 w-4" />
          Đặt lịch mới
        </Button>
      </div>

      <Card className="healthcare-card">
        <CardHeader>
          <CardTitle>Danh sách lịch hẹn</CardTitle>
          <CardDescription>Tất cả các cuộc hẹn của bạn</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockAppointments.map((appointment) => (
              <div
                key={appointment.id}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-medium">{appointment.doctor}</div>
                    <div className="text-sm text-muted-foreground">{appointment.specialty}</div>
                    <div className="text-sm text-muted-foreground">{appointment.time}</div>
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
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}