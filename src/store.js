// src/store.js
import { create } from 'zustand';

export const useStore = create((set, get) => ({
  // Estado inicial
  user: null,
  isAuthenticated: false,
  theme: 'light',
  streak: 3,
  points: 250,
  
  // Actions
  login: (userData) => set({ 
    user: userData, 
    isAuthenticated: true 
  }),
  
  logout: () => set({ 
    user: null, 
    isAuthenticated: false 
  }),
  
  updateProfile: (updates) => set(state => ({
    user: { ...state.user, ...updates }
  })),
  
  addPoints: (amount) => set(state => ({
    points: state.points + amount
  })),
  
  incrementStreak: () => set(state => ({
    streak: state.streak + 1
  })),
  
  toggleTheme: () => set(state => ({
    theme: state.theme === 'light' ? 'dark' : 'light'
  })),
  
  // Selector para obtener el nombre del usuario
  getUserName: () => {
    const user = get().user;
    return user ? user.name : 'Invitado';
  }
}));