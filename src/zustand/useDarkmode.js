import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useDarkMode = create(
  persist(
    (set) => ({
      darkMode: false,
      toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
    }),
    {
      name: 'dark-mode-storage',
    }
  )
);

export default useDarkMode;
