import { motion } from 'framer-motion';
import { useAuthStore } from '@/stores/authStore';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function ProfilePage() {
  const { user } = useAuthStore();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div>
        <h1 className="healthcare-heading text-3xl font-bold">Hồ sơ cá nhân</h1>
        <p className="healthcare-subtitle">Quản lý thông tin tài khoản và cài đặt</p>
      </div>

      <Card className="healthcare-card">
        <CardHeader>
          <CardTitle>Thông tin cơ bản</CardTitle>
          <CardDescription>Thông tin tài khoản của bạn</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium">Họ và tên</label>
              <div className="mt-1 text-lg">{user?.fullName}</div>
            </div>
            <div>
              <label className="text-sm font-medium">Email</label>
              <div className="mt-1 text-lg">{user?.email}</div>
            </div>
            <div>
              <label className="text-sm font-medium">Vai trò</label>
              <div className="mt-1 text-lg capitalize">{user?.role}</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}