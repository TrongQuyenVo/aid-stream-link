import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import toast, { Toaster as HotToast } from "react-hot-toast";
import { Layout } from "@/components/layout/Layout";
import { useAuthStore } from "@/stores/authStore";
import { useAppStore } from "@/stores/appStore";
import "./i18n";

// Pages
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Dashboard from "./pages/Dashboard";
import ProfilePage from "./pages/ProfilePage";
import AppointmentsPage from "./pages/AppointmentsPage";
import DoctorsPage from "./pages/DoctorsPage";
import PatientsPage from "./pages/PatientsPage";
import DonationsPage from "./pages/DonationsPage";
import AssistancePage from "./pages/AssistancePage";
import CharityPage from "./pages/CharityPage";
import NotificationsPage from "./pages/NotificationsPage";
import ChatbotPage from "./pages/ChatbotPage";
import NotFound from "./pages/NotFound";
import UsersPage from "./pages/UsersPage";
import AnalyticsPage from "./pages/AnalyticsPage";

const queryClient = new QueryClient();

const App = () => {
  const { isAuthenticated, user } = useAuthStore();
  const { theme, setTheme } = useAppStore();

  useEffect(() => {
    // Initialize theme from localStorage
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
    }
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [setTheme]);

  // Update theme when it changes
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  // Protected Route Component
  const ProtectedRoute = ({ children, roles }: { children: React.ReactNode; roles?: string[] }) => {
    if (!isAuthenticated) {
      return <Navigate to="/login" />;
    }
    
    if (roles && user && !roles.includes(user.role)) {
      toast.error('Access denied. Insufficient permissions.');
      return <Navigate to="/dashboard" />;
    }
    
    return <>{children}</>;
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              {/* Public Routes */}
              <Route index element={isAuthenticated ? <Navigate to="/dashboard" /> : <LandingPage />} />
              <Route path="/login" element={isAuthenticated ? <Navigate to="/dashboard" /> : <LoginPage />} />
              <Route path="/register" element={isAuthenticated ? <Navigate to="/dashboard" /> : <RegisterPage />} />
              
              {/* Protected Routes */}
              <Route path="/dashboard" element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } />
              
              <Route path="/profile" element={
                <ProtectedRoute>
                  <ProfilePage />
                </ProtectedRoute>
              } />
              
              <Route path="/appointments" element={
                <ProtectedRoute roles={['patient', 'doctor', 'admin']}>
                  <AppointmentsPage />
                </ProtectedRoute>
              } />
              
              <Route path="/doctors" element={
                <ProtectedRoute>
                  <DoctorsPage />
                </ProtectedRoute>
              } />
              
              <Route path="/patients" element={
                <ProtectedRoute roles={['doctor', 'admin', 'charity_admin']}>
                  <PatientsPage />
                </ProtectedRoute>
              } />
              
              <Route path="/donations" element={
                <ProtectedRoute>
                  <DonationsPage />
                </ProtectedRoute>
              } />
              
              <Route path="/assistance" element={
                <ProtectedRoute roles={['patient', 'admin', 'charity_admin']}>
                  <AssistancePage />
                </ProtectedRoute>
              } />
              
              <Route path="/charity" element={
                <ProtectedRoute roles={['admin', 'charity_admin']}>
                  <CharityPage />
                </ProtectedRoute>
              } />
              
              <Route path="/notifications" element={
                <ProtectedRoute>
                  <NotificationsPage />
                </ProtectedRoute>
              } />
              
              <Route path="/chatbot" element={
                <ProtectedRoute>
                  <ChatbotPage />
                </ProtectedRoute>
              } />
              
              <Route path="/users" element={
                <ProtectedRoute roles={['admin']}>
                  <UsersPage />
                </ProtectedRoute>
              } />
              
              <Route path="/analytics" element={
                <ProtectedRoute roles={['admin']}>
                  <AnalyticsPage />
                </ProtectedRoute>
              } />
              
              {/* Catch-all route */}
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
        
        {/* Toasters */}
        <Toaster />
        <Sonner />
        <HotToast
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: 'hsl(var(--card))',
              color: 'hsl(var(--card-foreground))',
              border: '1px solid hsl(var(--border))',
            },
          }}
        />
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
