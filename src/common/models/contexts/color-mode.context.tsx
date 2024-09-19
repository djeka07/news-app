'use client';
import { ReactNode, createContext, useState } from 'react';

type ColorModeState = {
  mode: 'dark' | 'light';
};

type ColorModeActions = {
  toggleMode: () => void;
};
type ColorModeContextType = [ColorModeState, ColorModeActions];

const defaultColorModeContext: ColorModeContextType = [
  { mode: 'dark' },
  {
    toggleMode: () => {
      throw new Error('Not implemented');
    },
  },
];

type ColorModeProps = {
  children: ReactNode;
  initial: 'dark' | 'light';
};

export const ColorModeContext = createContext(defaultColorModeContext);

const ColorModeProvider = ({ children, initial }: ColorModeProps) => {
  const [mode, setMode] = useState<'light' | 'dark'>(initial);

  const toggleMode = () => setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  const context: ColorModeContextType = [{ mode }, { toggleMode }];

  return <ColorModeContext.Provider value={context}>{children}</ColorModeContext.Provider>;
};

export default ColorModeProvider;
