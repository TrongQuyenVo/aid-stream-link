import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Calendar,
  Heart,
  Users,
  Stethoscope,
  MessageCircle,
  Gift,
  HandHeart,
  Building2,
  BarChart3,
  Settings,
  Menu,
  X,
  Home,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuthStore } from '@/stores/authStore';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { user } = useAuthStore();
  const { t } = useTranslation();
  const location = useLocation();

  if (!user) return null;

  // Navigation items based on user role
  const getNavigationItems = () => {
    const commonItems = [
      { path: '/dashboard', icon: Home, label: t('dashboard') },
      { path: '/profile', icon: Settings, label: t('profile') },
      { path: '/chatbot', icon: MessageCircle, label: t('chatbot') },
    ];

    const roleSpecificItems = {
      patient: [
        { path: '/appointments', icon: Calendar, label: t('appointments') },
        { path: '/doctors', icon: Stethoscope, label: t('doctors') },
        { path: '/donations', icon: Gift, label: t('donations') },
        { path: '/assistance', icon: HandHeart, label: 'Yêu cầu hỗ trợ' },
      ],
      doctor: [
        { path: '/appointments', icon: Calendar, label: t('appointments') },
        { path: '/patients', icon: Users, label: t('patients') },
      ],
      admin: [
        { path: '/users', icon: Users, label: 'Người dùng' },
        { path: '/patients', icon: Heart, label: t('patients') },
        { path: '/doctors', icon: Stethoscope, label: t('doctors') },
        { path: '/appointments', icon: Calendar, label: t('appointments') },
        { path: '/donations', icon: Gift, label: t('donations') },
        { path: '/assistance', icon: HandHeart, label: t('assistance') },
        { path: '/charity', icon: Building2, label: t('charity') },
        { path: '/analytics', icon: BarChart3, label: 'Thống kê' },
      ],
      charity_admin: [
        { path: '/patients', icon: Heart, label: t('patients') },
        { path: '/donations', icon: Gift, label: t('donations') },
        { path: '/assistance', icon: HandHeart, label: t('assistance') },
        { path: '/charity', icon: Building2, label: t('charity') },
      ],
    };

    return [...commonItems, ...roleSpecificItems[user.role]];
  };

  const navigationItems = getNavigationItems();

  const isActive = (path: string) => {
    if (path === '/dashboard') {
      return location.pathname === '/dashboard' || location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <motion.aside
      initial={{ width: isCollapsed ? 80 : 280 }}
      animate={{ width: isCollapsed ? 80 : 280 }}
      className={cn(
        'border-r bg-sidebar flex flex-col transition-all duration-300',
        className
      )}
    >
      {/* Sidebar Header */}
      <div className="flex h-16 items-center justify-between px-4 border-b">
        {!isCollapsed && (
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center">
              <Heart className="h-4 w-4 text-white" />
            </div>
            <span className="font-bold text-sidebar-foreground">HealthCare+</span>
          </div>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="text-sidebar-foreground hover:bg-sidebar-accent"
        >
          {isCollapsed ? <Menu className="h-4 w-4" /> : <X className="h-4 w-4" />}
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {navigationItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              cn(
                'flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-all',
                'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
                isActive
                  ? 'bg-sidebar-primary text-sidebar-primary-foreground shadow-sm'
                  : 'text-sidebar-foreground'
              )
            }
          >
            <item.icon className="h-4 w-4 shrink-0" />
            {!isCollapsed && <span className="ml-3">{item.label}</span>}
          </NavLink>
        ))}
      </nav>

      {/* User Role Badge */}
      {!isCollapsed && (
        <div className="px-4 pb-4">
          <div className="healthcare-card p-3 text-center">
            <div className="text-xs text-muted-foreground mb-1">Vai trò hiện tại</div>
            <div className="text-sm font-medium capitalize text-primary">
              {t(user.role)}
            </div>
          </div>
        </div>
      )}
    </motion.aside>
  );
}