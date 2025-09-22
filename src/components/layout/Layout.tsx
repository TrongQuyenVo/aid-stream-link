import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { useAuthStore } from '@/stores/authStore';
import { SidebarProvider, useSidebar } from '@/contexts/SidebarContext';

function LayoutContent() {
  const { isCollapsed } = useSidebar();
  
  return (
    <div className="flex min-h-screen bg-background">
      {/* Fixed Sidebar */}
      <div className="fixed left-0 top-0 h-full z-30">
        <Sidebar />
      </div>
      
      {/* Main Content Area */}
      <div 
        className="flex-1 flex flex-col transition-all duration-300" 
        style={{ marginLeft: isCollapsed ? '80px' : '280px' }}
      >
        {/* Fixed Header */}
        <div 
          className="fixed top-0 right-0 z-20 transition-all duration-300" 
          style={{ left: isCollapsed ? '80px' : '280px' }}
        >
          <Header />
        </div>
        
        {/* Main Content with top padding for fixed header */}
        <main className="flex-1 p-6 mt-16 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export function Layout() {
  const { isAuthenticated } = useAuthStore();

  if (!isAuthenticated) {
    return <Outlet />;
  }

  return (
    <SidebarProvider>
      <LayoutContent />
    </SidebarProvider>
  );
}