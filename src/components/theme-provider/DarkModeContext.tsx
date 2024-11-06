import { createContext } from 'react';

interface DarkModeContext {
  isDarkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

export const DarkModeContext = createContext<DarkModeContext | undefined>(undefined);
