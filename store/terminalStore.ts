import { create } from 'zustand';
import { ReactNode } from 'react';

export interface CommandRecord {
  id: string;
  command: string;
  output: ReactNode | string;
  timestamp: number;
}

interface TerminalState {
  history: CommandRecord[];
  isMaximized: boolean;
  isMinimized: boolean;
  isClosed: boolean;
  currentDirectory: string;
  isBooting: boolean;

  // Actions
  addRecord: (record: Omit<CommandRecord, 'id' | 'timestamp'>) => void;
  clearHistory: () => void;
  setMaximized: (val: boolean) => void;
  setMinimized: (val: boolean) => void;
  setClosed: (val: boolean) => void;
  setCurrentDirectory: (dir: string) => void;
  setBooting: (val: boolean) => void;
}

export const useTerminalStore = create<TerminalState>((set) => ({
  history: [],
  isMaximized: false,
  isMinimized: false,
  isClosed: false,
  currentDirectory: '~/portfolio',
  isBooting: true,

  addRecord: (record) => set((state) => ({
    history: [
      ...state.history,
      {
        ...record,
        id: Math.random().toString(36).substring(7),
        timestamp: Date.now(),
      }
    ]
  })),

  clearHistory: () => set({ history: [] }),
  setMaximized: (val) => set({ isMaximized: val }),
  setMinimized: (val) => set({ isMinimized: val }),
  setClosed: (val) => set({ isClosed: val }),
  setCurrentDirectory: (dir) => set({ currentDirectory: dir }),
  setBooting: (val) => set({ isBooting: val }),
}));
