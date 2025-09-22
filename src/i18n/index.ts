import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  vi: {
    translation: {
      // Common
      loading: 'Đang tải...',
      save: 'Lưu',
      cancel: 'Hủy',
      delete: 'Xóa',
      edit: 'Chỉnh sửa',
      view: 'Xem',
      search: 'Tìm kiếm',
      filter: 'Lọc',
      all: 'Tất cả',
      yes: 'Có',
      no: 'Không',
      
      // Navigation
      dashboard: 'Trang chính',
      profile: 'Hồ sơ',
      appointments: 'Lịch hẹn',
      doctors: 'Bác sĩ',
      patients: 'Bệnh nhân',
      donations: 'Quyên góp',
      assistance: 'Hỗ trợ',
      charity: 'Tổ chức từ thiện',
      notifications: 'Thông báo',
      chatbot: 'Trò chuyện',
      logout: 'Đăng xuất',
      
      // Auth
      login: 'Đăng nhập',
      register: 'Đăng ký',
      email: 'Email',
      password: 'Mật khẩu',
      confirmPassword: 'Xác nhận mật khẩu',
      fullName: 'Họ và tên',
      phone: 'Số điện thoại',
      role: 'Vai trò',
      
      // Roles
      patient: 'Bệnh nhân',
      doctor: 'Bác sĩ',
      admin: 'Quản trị viên',
      charity_admin: 'Quản lý từ thiện',
      
      // Dashboard
      welcome: 'Chào mừng',
      overview: 'Tổng quan',
      quickActions: 'Thao tác nhanh',
      recentActivity: 'Hoạt động gần đây',
      
      // Appointments
      bookAppointment: 'Đặt lịch khám',
      appointmentHistory: 'Lịch sử khám bệnh',
      upcoming: 'Sắp tới',
      completed: 'Đã hoàn thành',
      cancelled: 'Đã hủy',
      scheduled: 'Đã đặt lịch',
      confirmed: 'Đã xác nhận',
      inProgress: 'Đang diễn ra',
      
      // Specialties
      cardiology: 'Tim mạch',
      dermatology: 'Da liễu', 
      pediatrics: 'Nhi khoa',
      orthopedics: 'Chấn thương chỉnh hình',
      neurology: 'Thần kinh',
      generalMedicine: 'Đa khoa',
      
      // Status
      active: 'Hoạt động',
      inactive: 'Không hoạt động',
      pending: 'Chờ duyệt',
      approved: 'Đã duyệt',
      rejected: 'Từ chối',
      
      // Messages
      loginSuccess: 'Đăng nhập thành công!',
      loginError: 'Thông tin đăng nhập không chính xác',
      registerSuccess: 'Đăng ký thành công!',
      profileUpdated: 'Cập nhật hồ sơ thành công!',
      appointmentBooked: 'Đặt lịch hẹn thành công!',
      donationSuccess: 'Quyên góp thành công! Cảm ơn bạn.',
    }
  },
  en: {
    translation: {
      // Common
      loading: 'Loading...',
      save: 'Save',
      cancel: 'Cancel',
      delete: 'Delete',
      edit: 'Edit',
      view: 'View',
      search: 'Search',
      filter: 'Filter',
      all: 'All',
      yes: 'Yes',
      no: 'No',
      
      // Navigation
      dashboard: 'Dashboard',
      profile: 'Profile',
      appointments: 'Appointments',
      doctors: 'Doctors',
      patients: 'Patients',
      donations: 'Donations',
      assistance: 'Assistance',
      charity: 'Charity',
      notifications: 'Notifications',
      chatbot: 'Chat',
      logout: 'Logout',
      
      // Auth
      login: 'Login',
      register: 'Register',
      email: 'Email',
      password: 'Password',
      confirmPassword: 'Confirm Password',
      fullName: 'Full Name',
      phone: 'Phone',
      role: 'Role',
      
      // Roles
      patient: 'Patient',
      doctor: 'Doctor',
      admin: 'Admin',
      charity_admin: 'Charity Admin',
      
      // Dashboard
      welcome: 'Welcome',
      overview: 'Overview',
      quickActions: 'Quick Actions',
      recentActivity: 'Recent Activity',
      
      // Appointments
      bookAppointment: 'Book Appointment',
      appointmentHistory: 'Appointment History',
      upcoming: 'Upcoming',
      completed: 'Completed',
      cancelled: 'Cancelled',
      scheduled: 'Scheduled',
      confirmed: 'Confirmed',
      inProgress: 'In Progress',
      
      // Specialties
      cardiology: 'Cardiology',
      dermatology: 'Dermatology',
      pediatrics: 'Pediatrics',
      orthopedics: 'Orthopedics',
      neurology: 'Neurology',
      generalMedicine: 'General Medicine',
      
      // Status
      active: 'Active',
      inactive: 'Inactive',
      pending: 'Pending',
      approved: 'Approved',
      rejected: 'Rejected',
      
      // Messages
      loginSuccess: 'Login successful!',
      loginError: 'Invalid credentials',
      registerSuccess: 'Registration successful!',
      profileUpdated: 'Profile updated successfully!',
      appointmentBooked: 'Appointment booked successfully!',
      donationSuccess: 'Donation successful! Thank you.',
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'vi', // default language
    fallbackLng: 'vi',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;