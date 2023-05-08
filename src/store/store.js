import create from 'zustand';
import { devtools } from 'zustand/middleware';

const states = (set, get) => ({});

export const useAppStore = create(devtools(states, { name: 'app-store', getStorage: () => localStorage }));
