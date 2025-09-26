import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Calendar, Clock, User } from 'lucide-react';
import { format } from 'date-fns';
import { vi } from 'date-fns/locale';
import { useTranslation } from 'react-i18next';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import toast from 'react-hot-toast';

interface Doctor {
  id: string;
  name: string;
  specialty: string;
  avatar?: string;
  rating: number;
  experience: number;
}

interface BookAppointmentFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  doctor: Doctor;
}

interface FormData {
  appointmentDate: Date;
  appointmentTime: string;
  patientName: string;
  patientPhone: string;
  patientAge: number;
  symptoms: string;
  notes?: string;
}

const schema = yup.object({
  appointmentDate: yup.date().required('Vui lòng chọn ngày khám'),
  appointmentTime: yup.string().required('Vui lòng chọn giờ khám'),
  patientName: yup.string().required('Vui lòng nhập họ tên bệnh nhân'),
  patientPhone: yup.string().required('Vui lòng nhập số điện thoại'),
  patientAge: yup.number().required('Vui lòng nhập tuổi').min(1, 'Tuổi phải lớn hơn 0'),
  symptoms: yup.string().required('Vui lòng mô tả triệu chứng'),
  notes: yup.string(),
});

export default function BookAppointmentForm({ open, onOpenChange, doctor }: BookAppointmentFormProps) {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset
  } = useForm({
    resolver: yupResolver(schema)
  });

  const selectedDate = watch('appointmentDate');

  // Available time slots
  const timeSlots = [
    '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30'
  ];

  // Mock unavailable times (would come from API)
  const unavailableTimes = ['09:00', '10:30', '15:00'];

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Appointment data:', {
        ...data,
        doctorId: doctor.id,
        doctorName: doctor.name,
        doctorSpecialty: doctor.specialty
      });
      
      toast.success('Đặt lịch hẹn thành công! Chúng tôi sẽ liên hệ xác nhận sớm.');
      reset();
      onOpenChange(false);
    } catch (error) {
      toast.error('Có lỗi xảy ra. Vui lòng thử lại!');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Disable past dates and Sundays
  const isDateDisabled = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today || date.getDay() === 0;
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="healthcare-heading">Đặt lịch hẹn khám</DialogTitle>
          <DialogDescription>
            Điền thông tin để đặt lịch hẹn với bác sĩ
          </DialogDescription>
        </DialogHeader>

        {/* Doctor Info */}
        <div className="bg-muted/50 p-4 rounded-lg">
          <div className="flex items-center space-x-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src={doctor.avatar} />
              <AvatarFallback>{doctor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h3 className="font-semibold text-lg healthcare-heading">{doctor.name}</h3>
              <p className="text-muted-foreground">{doctor.specialty}</p>
              <div className="flex items-center space-x-4 mt-2">
                <Badge variant="secondary">
                  ⭐ {doctor.rating}/5
                </Badge>
                <Badge variant="outline">
                  {doctor.experience} năm kinh nghiệm
                </Badge>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Date Selection */}
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label>Ngày khám *</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !selectedDate && "text-muted-foreground"
                    )}
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    {selectedDate ? format(selectedDate, "dd/MM/yyyy", { locale: vi }) : "Chọn ngày"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <CalendarComponent
                    mode="single"
                    selected={selectedDate}
                    onSelect={(date) => setValue('appointmentDate', date)}
                    disabled={isDateDisabled}
                    initialFocus
                    className="pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
              {errors.appointmentDate && (
                <p className="text-sm text-destructive">{errors.appointmentDate.message}</p>
              )}
            </div>

            {/* Time Selection */}
            <div className="space-y-2">
              <Label>Giờ khám *</Label>
              <Select onValueChange={(value) => setValue('appointmentTime', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Chọn giờ khám" />
                </SelectTrigger>
                <SelectContent>
                  {timeSlots.map((time) => (
                    <SelectItem 
                      key={time} 
                      value={time}
                      disabled={unavailableTimes.includes(time)}
                    >
                      <div className="flex items-center">
                        <Clock className="mr-2 h-4 w-4" />
                        {time}
                        {unavailableTimes.includes(time) && (
                          <span className="ml-2 text-xs text-muted-foreground">(Đã đặt)</span>
                        )}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.appointmentTime && (
                <p className="text-sm text-destructive">{errors.appointmentTime.message}</p>
              )}
            </div>
          </div>

          {/* Patient Information */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-4">
              <User className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold healthcare-heading">Thông tin bệnh nhân</h3>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="patientName">Họ và tên *</Label>
                <Input
                  id="patientName"
                  placeholder="Nhập họ tên đầy đủ"
                  {...register('patientName')}
                />
                {errors.patientName && (
                  <p className="text-sm text-destructive">{errors.patientName.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="patientPhone">Số điện thoại *</Label>
                <Input
                  id="patientPhone"
                  type="tel"
                  placeholder="0987654321"
                  {...register('patientPhone')}
                />
                {errors.patientPhone && (
                  <p className="text-sm text-destructive">{errors.patientPhone.message}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="patientAge">Tuổi *</Label>
              <Input
                id="patientAge"
                type="number"
                placeholder="Nhập tuổi"
                className="w-32"
                {...register('patientAge')}
              />
              {errors.patientAge && (
                <p className="text-sm text-destructive">{errors.patientAge.message}</p>
              )}
            </div>
          </div>

          {/* Medical Information */}
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="symptoms">Triệu chứng và lý do khám *</Label>
              <Textarea
                id="symptoms"
                placeholder="Mô tả chi tiết triệu chứng, tình trạng sức khỏe hiện tại..."
                rows={3}
                {...register('symptoms')}
              />
              {errors.symptoms && (
                <p className="text-sm text-destructive">{errors.symptoms.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Ghi chú thêm (tùy chọn)</Label>
              <Textarea
                id="notes"
                placeholder="Thông tin bổ sung, yêu cầu đặc biệt..."
                rows={2}
                {...register('notes')}
              />
            </div>
          </div>

          {/* Important Notes */}
          <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Lưu ý quan trọng:</h4>
            <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
              <li>• Vui lòng có mặt trước 15 phút so với giờ hẹn</li>
              <li>• Mang theo giấy tờ tùy thân và các kết quả xét nghiệm (nếu có)</li>
              <li>• Chúng tôi sẽ gọi điện xác nhận lịch hẹn trong 24 giờ</li>
              <li>• Dịch vụ khám hoàn toàn miễn phí cho bệnh nhân khó khăn</li>
            </ul>
          </div>

          {/* Submit Buttons */}
          <div className="flex justify-end space-x-2 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Hủy
            </Button>
            <Button
              type="submit"
              className="btn-healthcare"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Đang đặt lịch...' : 'Đặt lịch hẹn'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}