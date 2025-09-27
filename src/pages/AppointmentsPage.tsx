import { motion } from 'framer-motion';
import { Calendar, Clock, Users, CheckCircle, XCircle, User } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useAuthStore } from '@/stores/authStore';

export default function AppointmentsPage() {
  const { user } = useAuthStore();
  
  if (!user) return null;

  // Mock data với nhiều appointments hơn
  const mockAppointments = [
    {
      id: 1,
      doctor: 'BS. Nguyễn Văn A',
      patient: 'Trần Thị B',
      specialty: 'Tim mạch',
      time: '14:00 - 25/12/2024',
      status: 'scheduled',
      type: 'consultation'
    },
    {
      id: 2,
      doctor: 'BS. Lê Văn C',
      patient: 'Nguyễn Văn D',
      specialty: 'Da liễu',
      time: '10:00 - 28/12/2024',
      status: 'confirmed',
      type: 'follow_up'
    },
    {
      id: 3,
      doctor: 'BS. Phạm Thị E',
      patient: 'Lê Văn F',
      specialty: 'Nhi khoa',
      time: '15:30 - 30/12/2024',
      status: 'pending',
      type: 'consultation'
    },
  ];

  // Filter appointments based on role
  const getFilteredAppointments = () => {
    switch (user.role) {
      case 'patient':
        // Patient sees only their appointments
        return mockAppointments.filter(apt => apt.patient === user.fullName);
      case 'doctor':
        // Doctor sees only their appointments
        return mockAppointments.filter(apt => apt.doctor.includes(user.fullName));
      default:
        // Admin sees all appointments
        return mockAppointments;
    }
  };

  const filteredAppointments = getFilteredAppointments();

  const getPageTitle = () => {
    switch (user.role) {
      case 'patient':
        return 'Lịch hẹn của tôi';
      case 'doctor':
        return 'Lịch khám bệnh';
      default:
        return 'Quản lý lịch hẹn';
    }
  };

  const getPageSubtitle = () => {
    switch (user.role) {
      case 'patient':
        return 'Các cuộc hẹn khám bệnh của bạn';
      case 'doctor':
        return 'Lịch khám của bệnh nhân';
      default:
        return 'Quản lý tất cả các cuộc hẹn khám bệnh';
    }
  };

  const handleConfirmAppointment = (appointmentId: number) => {
    console.log('Xác nhận lịch hẹn:', appointmentId);
    // TODO: API call to confirm appointment
  };

  const handleRejectAppointment = (appointmentId: number) => {
    console.log('Từ chối lịch hẹn:', appointmentId);
    // TODO: API call to reject appointment
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
          <h1 className="healthcare-heading text-3xl font-bold">{getPageTitle()}</h1>
          <p className="healthcare-subtitle">{getPageSubtitle()}</p>
        </div>
        {user.role === 'patient' && (
          <Button className="btn-healthcare">
            <Calendar className="mr-2 h-4 w-4" />
            Đặt lịch mới
          </Button>
        )}
      </div>

      <Card className="healthcare-card">
        <CardHeader>
          <CardTitle>Danh sách lịch hẹn</CardTitle>
          <CardDescription>Tất cả các cuộc hẹn của bạn</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredAppointments.length > 0 ? (
              filteredAppointments.map((appointment) => (
                <div
                  key={appointment.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      {user.role === 'doctor' ? (
                        <>
                          <div className="font-medium flex items-center">
                            <User className="h-4 w-4 mr-2" />
                            {appointment.patient}
                          </div>
                          <div className="text-sm text-muted-foreground">{appointment.specialty}</div>
                          <div className="text-sm text-muted-foreground">{appointment.time}</div>
                        </>
                      ) : (
                        <>
                          <div className="font-medium">{appointment.doctor}</div>
                          <div className="text-sm text-muted-foreground">{appointment.specialty}</div>
                          <div className="text-sm text-muted-foreground">{appointment.time}</div>
                          {(user.role === 'admin' || user.role === 'charity_admin') && (
                            <div className="text-sm text-muted-foreground">Bệnh nhân: {appointment.patient}</div>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Badge 
                      className={
                        appointment.status === 'confirmed' 
                          ? 'status-confirmed' 
                          : appointment.status === 'pending'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'status-scheduled'
                      }
                    >
                      {appointment.status === 'confirmed' && 'Đã xác nhận'}
                      {appointment.status === 'scheduled' && 'Đã đặt lịch'}
                      {appointment.status === 'pending' && 'Chờ xác nhận'}
                    </Badge>
                    
                    {/* Action buttons for doctor */}
                    {user.role === 'doctor' && appointment.status === 'scheduled' && (
                      <div className="flex space-x-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleConfirmAppointment(appointment.id)}
                          className="text-green-600 border-green-600 hover:bg-green-50"
                        >
                          <CheckCircle className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleRejectAppointment(appointment.id)}
                          className="text-red-600 border-red-600 hover:bg-red-50"
                        >
                          <XCircle className="h-4 w-4" />
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                {user.role === 'patient' ? 'Bạn chưa có lịch hẹn nào' : 'Không có lịch hẹn nào'}
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}