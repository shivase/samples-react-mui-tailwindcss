import create from 'zustand';

type AuthStore = {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
};

export const useAuthStore = create<AuthStore>((set) => ({
  isAuthenticated: false,
  login: () =>
    set(() => {
      return { isAuthenticated: true };
    }),
  logout: () =>
    set(() => {
      return { isAuthenticated: false };
    }),
}));
