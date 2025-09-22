import { Bell, Globe, LogOut, Moon, Sun, User, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useAuthStore } from '@/stores/authStore';
import { useAppStore } from '@/stores/appStore';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function Header() {
  const { user, logout } = useAuthStore();
  const { unreadCount, theme, setTheme, language, setLanguage } = useAppStore();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const toggleLanguage = () => {
    const newLang = language === 'vi' ? 'en' : 'vi';
    setLanguage(newLang);
    i18n.changeLanguage(newLang);
  };

  if (!user) return null;

  return (
    <header className="relative border-b bg-gradient-to-r from-background via-background to-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-soft">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/2 via-transparent to-secondary/2"></div>
      
      <div className="relative flex h-20 items-center justify-between px-6">
        <div className="flex items-center space-x-6">
          {/* Beautiful Hand-Heart Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => navigate('/dashboard')}>
            <div className="relative">
              {/* Hand holding heart logo */}
              <div className="h-12 w-12 rounded-xl bg-gradient-primary shadow-primary flex items-center justify-center relative overflow-hidden group-hover:shadow-strong transition-all duration-300 group-hover:scale-105">
                {/* Hand SVG */}
                <svg viewBox="0 0 24 24" className="h-7 w-7 text-white relative z-10">
                  <path
                    fill="currentColor"
                    d="M13 2c-1.1 0-2 .9-2 2v7H9V6c0-1.1-.9-2-2-2s-2 .9-2 2v9c0 .6-.4 1-1 1s-1-.4-1-1V8c0-.6-.4-1-1-1s-1 .4-1 1v7c0 2.2 1.8 4 4 4h.5c1.9 0 3.6-1.1 4.4-2.8l2.3-5.2c.3-.7 1.1-1 1.8-.7.7.3 1 1.1.7 1.8l-2.3 5.2C12.6 19.1 10.9 20 9 20H5c-2.8 0-5-2.2-5-5V8c0-1.7 1.3-3 3-3s3 1.3 3 3v7c0 .6.4 1 1 1s1-.4 1-1V6c0-2.2 1.8-4 4-4s4 1.8 4 4v7h2V4c0-1.1.9-2 2-2s2 .9 2 2v7c0 1.1-.9 2-2 2h-2z"
                  />
                  {/* Small heart overlay */}
                  <svg viewBox="0 0 24 24" className="absolute top-1 right-1 h-3 w-3 text-destructive animate-pulse">
                    <path
                      fill="currentColor"
                      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                    />
                  </svg>
                </svg>
                
                {/* Sparkle effects */}
                <Sparkles className="absolute -top-1 -right-1 h-3 w-3 text-success animate-pulse opacity-70" />
                <Sparkles className="absolute -bottom-1 -left-1 h-2 w-2 text-warning animate-pulse opacity-50" style={{animationDelay: '0.5s'}} />
              </div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-primary opacity-20 blur-sm group-hover:opacity-40 transition-opacity duration-300"></div>
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-center space-x-2">
                <span className="healthcare-heading text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                  HealthCare+
                </span>
                <div className="h-1.5 w-1.5 rounded-full bg-gradient-primary animate-pulse"></div>
              </div>
              <p className="text-xs text-muted-foreground font-medium tracking-wide">
                Nền tảng y tế từ thiện
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          {/* Action Buttons */}
          <div className="flex items-center space-x-1 bg-muted/30 rounded-xl p-1 backdrop-blur">
            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              className="h-9 w-9 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-200 hover:scale-105"
              title={language === 'vi' ? 'Switch to English' : 'Chuyển sang tiếng Việt'}
            >
              <Globe className="h-4 w-4" />
            </Button>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="h-9 w-9 text-muted-foreground hover:text-warning hover:bg-warning/10 rounded-lg transition-all duration-200 hover:scale-105"
              title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            >
              {theme === 'light' ? 
                <Moon className="h-4 w-4" /> : 
                <Sun className="h-4 w-4" />
              }
            </Button>

            {/* Notifications */}
            <Button
              variant="ghost"
              size="icon"
              className="relative h-9 w-9 text-muted-foreground hover:text-secondary hover:bg-secondary/10 rounded-lg transition-all duration-200 hover:scale-105"
              onClick={() => navigate('/notifications')}
              title="Notifications"
            >
              <Bell className="h-4 w-4" />
              {unreadCount > 0 && (
                <>
                  <Badge
                    variant="destructive"
                    className="absolute -right-1 -top-1 h-5 min-w-[1.25rem] rounded-full px-1 text-xs font-medium shadow-medium animate-pulse"
                  >
                    {unreadCount > 99 ? '99+' : unreadCount}
                  </Badge>
                  <div className="absolute -right-1 -top-1 h-5 w-5 rounded-full bg-destructive/20 animate-ping"></div>
                </>
              )}
            </Button>
          </div>

          {/* Enhanced User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-12 w-12 rounded-xl hover:bg-accent/50 transition-all duration-200 hover:scale-105 group">
                <div className="relative">
                  <Avatar className="h-11 w-11 border-2 border-primary/20 group-hover:border-primary/40 transition-colors">
                    <AvatarImage src={user.avatar} alt={user.fullName} />
                    <AvatarFallback className="bg-gradient-primary text-primary-foreground font-semibold text-sm">
                      {user.fullName.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  
                  {/* Online indicator */}
                  <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-success border-2 border-background"></div>
                  
                  {/* Role badge */}
                  <div className="absolute -top-1 -right-1">
                    <div className={`h-3 w-3 rounded-full ${
                      user.role === 'admin' ? 'bg-destructive' :
                      user.role === 'doctor' ? 'bg-primary' :
                      user.role === 'charity_admin' ? 'bg-secondary' :
                      'bg-success'
                    } animate-pulse opacity-80`}></div>
                  </div>
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-64 p-2" align="end" forceMount>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-br from-primary/5 to-secondary/5 mb-2">
                <Avatar className="h-12 w-12 border-2 border-primary/20">
                  <AvatarImage src={user.avatar} alt={user.fullName} />
                  <AvatarFallback className="bg-gradient-primary text-primary-foreground font-semibold">
                    {user.fullName.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col space-y-1 leading-none min-w-0 flex-1">
                  <p className="font-semibold text-sm text-foreground truncate">{user.fullName}</p>
                  <p className="text-xs text-muted-foreground truncate">{user.email}</p>
                  <div className="flex items-center space-x-2">
                    <div className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                      user.role === 'admin' ? 'bg-destructive/10 text-destructive' :
                      user.role === 'doctor' ? 'bg-primary/10 text-primary' :
                      user.role === 'charity_admin' ? 'bg-secondary/10 text-secondary' :
                      'bg-success/10 text-success'
                    }`}>
                      <div className={`h-1.5 w-1.5 rounded-full mr-1 ${
                        user.role === 'admin' ? 'bg-destructive' :
                        user.role === 'doctor' ? 'bg-primary' :
                        user.role === 'charity_admin' ? 'bg-secondary' :
                        'bg-success'
                      }`}></div>
                      {t(user.role)}
                    </div>
                  </div>
                </div>
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => navigate('/profile')} className="rounded-lg py-2.5 cursor-pointer">
                <User className="mr-3 h-4 w-4 text-primary" />
                <span className="font-medium">{t('profile')}</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout} className="rounded-lg py-2.5 cursor-pointer text-destructive hover:bg-destructive/10">
                <LogOut className="mr-3 h-4 w-4" />
                <span className="font-medium">{t('logout')}</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}