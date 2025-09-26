import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Heart, CreditCard, User, Shield, Info } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import toast from 'react-hot-toast';

interface Campaign {
  id: string;
  title: string;
  description: string;
  target: number;
  raised: number;
  image?: string;
}

interface DonationFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  campaign?: Campaign;
}

interface FormData {
  amount: number;
  donorName: string;
  donorEmail: string;
  donorPhone: string;
  message?: string;
  paymentMethod: string;
}

const schema = yup.object({
  amount: yup.number().required('Vui lòng nhập số tiền quyên góp').min(10000, 'Số tiền tối thiểu là 10,000 VNĐ'),
  donorName: yup.string().required('Vui lòng nhập họ tên'),
  donorEmail: yup.string().email('Email không hợp lệ').required('Vui lòng nhập email'),
  donorPhone: yup.string().required('Vui lòng nhập số điện thoại'),
  message: yup.string(),
  paymentMethod: yup.string().required('Vui lòng chọn phương thức thanh toán'),
});

export default function DonationForm({ open, onOpenChange, campaign }: DonationFormProps) {
  const { t } = useTranslation();
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);

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

  const watchedAmount = watch('amount');

  const quickAmounts = [50000, 100000, 200000, 500000, 1000000, 2000000];

  const paymentMethods = [
    { value: 'bank_transfer', label: 'Chuyển khoản ngân hàng', icon: '🏦' },
    { value: 'momo', label: 'Ví MoMo', icon: '📱' },
    { value: 'zalopay', label: 'ZaloPay', icon: '💳' },
    { value: 'vnpay', label: 'VNPay', icon: '🏧' },
    { value: 'cash', label: 'Tiền mặt tại văn phòng', icon: '💵' }
  ];

  const handleQuickAmount = (amount: number) => {
    setSelectedAmount(amount);
    setValue('amount', amount);
  };

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const donationData = {
        ...data,
        campaignId: campaign?.id,
        campaignTitle: campaign?.title,
        isAnonymous,
        timestamp: new Date().toISOString()
      };
      
      console.log('Donation data:', donationData);
      
      toast.success('Cảm ơn bạn đã quyên góp! Chúng tôi sẽ liên hệ xác nhận sớm.');
      reset();
      setSelectedAmount(null);
      setIsAnonymous(false);
      onOpenChange(false);
    } catch (error) {
      toast.error('Có lỗi xảy ra. Vui lòng thử lại!');
    } finally {
      setIsSubmitting(false);
    }
  };

  const progress = campaign ? (campaign.raised / campaign.target) * 100 : 0;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="healthcare-heading flex items-center">
            <Heart className="mr-2 h-6 w-6 text-red-500" />
            Quyên góp từ thiện
          </DialogTitle>
          <DialogDescription>
            Mỗi đóng góp của bạn đều mang lại hy vọng cho những người cần giúp đỡ
          </DialogDescription>
        </DialogHeader>

        {/* Campaign Info */}
        {campaign && (
          <div className="bg-muted/50 p-4 rounded-lg space-y-3">
            <h3 className="font-semibold healthcare-heading">{campaign.title}</h3>
            <p className="text-muted-foreground text-sm">{campaign.description}</p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Đã quyên góp:</span>
                <span className="font-medium">
                  {campaign.raised.toLocaleString('vi-VN')} / {campaign.target.toLocaleString('vi-VN')} VNĐ
                </span>
              </div>
              <Progress value={progress} className="h-2" />
              <p className="text-xs text-muted-foreground">
                {progress.toFixed(1)}% hoàn thành mục tiêu
              </p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Donation Amount */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-3">
              <CreditCard className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold healthcare-heading">Số tiền quyên góp</h3>
            </div>

            {/* Quick Amount Buttons */}
            <div className="grid grid-cols-3 gap-2">
              {quickAmounts.map((amount) => (
                <Button
                  key={amount}
                  type="button"
                  variant={selectedAmount === amount ? "default" : "outline"}
                  className="text-sm"
                  onClick={() => handleQuickAmount(amount)}
                >
                  {amount.toLocaleString('vi-VN')} VNĐ
                </Button>
              ))}
            </div>

            <div className="space-y-2">
              <Label htmlFor="amount">Số tiền khác (VNĐ) *</Label>
              <Input
                id="amount"
                type="number"
                placeholder="Nhập số tiền bạn muốn quyên góp"
                {...register('amount')}
                onChange={(e) => {
                  setSelectedAmount(null);
                  setValue('amount', Number(e.target.value));
                }}
              />
              {errors.amount && (
                <p className="text-sm text-destructive">{errors.amount.message}</p>
              )}
            </div>

            {watchedAmount && (
              <div className="bg-green-50 dark:bg-green-950 p-3 rounded-lg">
                <p className="text-green-800 dark:text-green-200 font-medium">
                  Số tiền quyên góp: {Number(watchedAmount).toLocaleString('vi-VN')} VNĐ
                </p>
                <p className="text-xs text-green-600 dark:text-green-300 mt-1">
                  Cảm ơn bạn đã chia sẻ tình yêu thương! ❤️
                </p>
              </div>
            )}
          </div>

          {/* Donor Information */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold healthcare-heading">Thông tin người quyên góp</h3>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="anonymous"
                  checked={isAnonymous}
                  onCheckedChange={(checked) => setIsAnonymous(checked === true)}
                />
                <Label htmlFor="anonymous" className="text-sm">
                  Quyên góp ẩn danh
                </Label>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="space-y-2">
                <Label htmlFor="donorName">Họ và tên *</Label>
                <Input
                  id="donorName"
                  placeholder="Nhập họ tên đầy đủ"
                  disabled={isAnonymous}
                  {...register('donorName')}
                />
                {errors.donorName && (
                  <p className="text-sm text-destructive">{errors.donorName.message}</p>
                )}
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="donorEmail">Email *</Label>
                  <Input
                    id="donorEmail"
                    type="email"
                    placeholder="email@example.com"
                    disabled={isAnonymous}
                    {...register('donorEmail')}
                  />
                  {errors.donorEmail && (
                    <p className="text-sm text-destructive">{errors.donorEmail.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="donorPhone">Số điện thoại *</Label>
                  <Input
                    id="donorPhone"
                    type="tel"
                    placeholder="0987654321"
                    disabled={isAnonymous}
                    {...register('donorPhone')}
                  />
                  {errors.donorPhone && (
                    <p className="text-sm text-destructive">{errors.donorPhone.message}</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label htmlFor="message">Lời nhắn (tùy chọn)</Label>
            <Textarea
              id="message"
              placeholder="Để lại lời động viên cho bệnh nhân..."
              rows={3}
              {...register('message')}
            />
          </div>

          {/* Payment Method */}
          <div className="space-y-2">
            <Label>Phương thức thanh toán *</Label>
            <Select onValueChange={(value) => setValue('paymentMethod', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Chọn phương thức thanh toán" />
              </SelectTrigger>
              <SelectContent>
                {paymentMethods.map((method) => (
                  <SelectItem key={method.value} value={method.value}>
                    <div className="flex items-center">
                      <span className="mr-2">{method.icon}</span>
                      {method.label}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.paymentMethod && (
              <p className="text-sm text-destructive">{errors.paymentMethod.message}</p>
            )}
          </div>

          {/* Security Notice */}
          <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
            <div className="flex items-start space-x-2">
              <Shield className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5" />
              <div>
                <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                  Cam kết minh bạch
                </h4>
                <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                  <li>• 100% số tiền sẽ được chuyển đến người cần hỗ trợ</li>
                  <li>• Bạn sẽ nhận được xác nhận và báo cáo sử dụng quyên góp</li>
                  <li>• Thông tin cá nhân được bảo mật tuyệt đối</li>
                  <li>• Có thể xuất hóa đơn từ thiện để giảm trừ thuế</li>
                </ul>
              </div>
            </div>
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
              className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white"
              disabled={isSubmitting}
            >
              <Heart className="mr-2 h-4 w-4" />
              {isSubmitting ? 'Đang xử lý...' : 'Quyên góp ngay'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}