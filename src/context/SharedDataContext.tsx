import { createContext } from 'react';

export type SharedData = {
  title: string;
  items: string[];
};

export const SharedDataContext = createContext<SharedData | null>(null);
