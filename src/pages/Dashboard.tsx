import { motion } from 'framer-motion';
import { useAuthStore } from '@/stores/authStore';
import { useTranslation } from 'react-i18next';

// Role-specific dashboards
import PatientDashboard from '@/components/dashboard/PatientDashboard';
import DoctorDashboard from '@/components/dashboard/DoctorDashboard';
import AdminDashboard from '@/components/dashboard/AdminDashboard';
import CharityAdminDashboard from '@/components/dashboard/CharityAdminDashboard';

export default function Dashboard() {
  const { user } = useAuthStore();
  const { t } = useTranslation();

  if (!user) return null;

  const renderDashboard = () => {
    switch (user.role) {
      case 'patient':
        return <PatientDashboard />;
      case 'doctor':
        return <DoctorDashboard />;
      case 'admin':
        return <AdminDashboard />;
      case 'charity_admin':
        return <CharityAdminDashboard />;
      default:
        return (
          <div className="text-center">
            <h2 className="text-2xl font-bold">{t('invalidRole')}</h2>
          </div>
        );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      {/* Welcome Header */}
      <div className="bg-gradient-primary rounded-xl p-8 text-white">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-3xl font-bold mb-2">
            {t('welcome')}, {user.fullName}!
          </h1>
          <p className="text-white/90 text-lg">
            {t('role')}: <span className="font-medium capitalize">{t(user.role)}</span>
          </p>
        </motion.div>
      </div>

      {/* Role-specific Dashboard */}
      {renderDashboard()}
    </motion.div>
  );
}