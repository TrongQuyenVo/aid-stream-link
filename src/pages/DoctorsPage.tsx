import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, Star, MapPin, Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import BookAppointmentForm from '@/components/forms/BookAppointmentForm';
import { doctorsAPI } from '@/lib/api';
import toast from 'react-hot-toast';
import { Loader2 } from 'lucide-react';

export default function DoctorsPage() {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [doctors, setDoctors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await doctorsAPI.getAll({ isVolunteer: true });
        setDoctors(response.data);
      } catch (error: any) {
        toast.error('Không thể tải danh sách bác sĩ');
        console.error('Error fetching doctors:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div>
        <h1 className="healthcare-heading text-3xl font-bold">Bác sĩ tình nguyện</h1>
        <p className="healthcare-subtitle">Tìm kiếm và kết nối với các bác sĩ chuyên khoa</p>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      ) : doctors.length === 0 ? (
        <Card className="p-8 text-center">
          <p className="text-muted-foreground">Hiện chưa có bác sĩ tình nguyện nào.</p>
        </Card>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doctor, index) => (
          <motion.div
            key={doctor.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="healthcare-card">
              <CardHeader className="text-center">
                <Avatar className="w-20 h-20 mx-auto mb-4">
                  <AvatarImage src={doctor.avatar} />
                  <AvatarFallback className="text-lg bg-gradient-primary text-white">
                    {doctor.name.charAt(3)}
                  </AvatarFallback>
                </Avatar>
                <CardTitle className="healthcare-heading">{doctor.name}</CardTitle>
                <CardDescription className="flex items-center justify-center">
                  <Stethoscope className="w-4 h-4 mr-1" />
                  {doctor.specialty}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Kinh nghiệm:</span>
                  <span className="font-medium">{doctor.experience} năm</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Đánh giá:</span>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                    <span className="font-medium">{doctor.rating}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Địa điểm:</span>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="font-medium">{doctor.location}</span>
                  </div>
                </div>
                {doctor.isVolunteer && (
                  <Badge className="w-full justify-center bg-success text-success-foreground">
                    Tình nguyện viên
                  </Badge>
                )}
                <Button 
                  className="w-full btn-healthcare"
                  onClick={() => {
                    setSelectedDoctor(doctor);
                    setShowBookingForm(true);
                  }}
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  Đặt lịch hẹn
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
        </div>
      )}

      {/* Booking Form */}
      <BookAppointmentForm
        open={showBookingForm}
        onOpenChange={setShowBookingForm}
        doctor={selectedDoctor}
      />
    </motion.div>
  );
}