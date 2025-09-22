import axios from 'axios';
import { useAuthStore } from '@/stores/authStore';
import toast from 'react-hot-toast';

// Create axios instance
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
  timeout: 10000,
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const message = error.response?.data?.message || 'Something went wrong';
    
    if (error.response?.status === 401) {
      // Unauthorized - logout user
      useAuthStore.getState().logout();
      toast.error('Session expired. Please login again.');
      window.location.href = '/login';
    } else if (error.response?.status === 403) {
      toast.error('Access denied. Insufficient permissions.');
    } else if (error.response?.status >= 500) {
      toast.error('Server error. Please try again later.');
    } else {
      toast.error(message);
    }
    
    return Promise.reject(error);
  }
);

// Auth API
export const authAPI = {
  register: (data: any) => api.post('/auth/register', data),
  login: (data: { email: string; password: string }) => api.post('/auth/login', data),
  getCurrentUser: () => api.get('/auth/me'),
};

// Users API
export const usersAPI = {
  updateProfile: (data: any) => api.put('/users/profile', data),
  changePassword: (data: any) => api.put('/users/change-password', data),
  getAllUsers: (params?: any) => api.get('/users', { params }),
};

// Doctors API
export const doctorsAPI = {
  getProfile: () => api.get('/doctors/profile'),
  updateProfile: (data: any) => api.put('/doctors/profile', data),
  getAll: (params?: any) => api.get('/doctors', { params }),
  getAvailability: (id: string) => api.get(`/doctors/${id}/availability`),
};

// Patients API
export const patientsAPI = {
  getProfile: () => api.get('/patients/profile'),
  updateProfile: (data: any) => api.put('/patients/profile', data),
  getAll: (params?: any) => api.get('/patients', { params }),
  verify: (id: string) => api.patch(`/patients/${id}/verify`),
};

// Appointments API
export const appointmentsAPI = {
  create: (data: any) => api.post('/appointments', data),
  getAll: (params?: any) => api.get('/appointments', { params }),
  updateStatus: (id: string, data: any) => api.patch(`/appointments/${id}/status`, data),
};

// Donations API
export const donationsAPI = {
  create: (data: any) => api.post('/donations', data),
  getAll: (params?: any) => api.get('/donations', { params }),
  updateStatus: (id: string, data: any) => api.patch(`/donations/${id}/status`, data),
};

// Assistance API
export const assistanceAPI = {
  create: (data: any) => api.post('/assistance', data),
  getAll: (params?: any) => api.get('/assistance', { params }),
  updateStatus: (id: string, data: any) => api.patch(`/assistance/${id}/status`, data),
};

// Charity API
export const charityAPI = {
  create: (data: any) => api.post('/charity', data),
  getAll: (params?: any) => api.get('/charity', { params }),
  updateResources: (id: string, data: any) => api.patch(`/charity/${id}/resources`, data),
};

// Notifications API
export const notificationsAPI = {
  getAll: (params?: any) => api.get('/notifications', { params }),
  markAsRead: (id: string) => api.patch(`/notifications/${id}/read`),
  markAllAsRead: () => api.patch('/notifications/read-all'),
};

// Chatbot API
export const chatbotAPI = {
  sendMessage: (data: { message: string; sessionId: string }) => 
    api.post('/chatbot/chat', data),
  getHistory: (sessionId: string) => 
    api.get(`/chatbot/history/${sessionId}`),
};

export default api;