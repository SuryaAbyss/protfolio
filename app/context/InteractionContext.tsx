'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type InteractionContextType = {
  hasInteracted: boolean;
  setHasInteracted: () => void;
};

const InteractionContext = createContext<InteractionContextType | undefined>(undefined);

export const useInteraction = () => {
  const context = useContext(InteractionContext);
  if (!context) {
    throw new Error('useInteraction must be used within an InteractionProvider');
  }
  return context;
};

type InteractionProviderProps = {
  children: ReactNode;
};

export const InteractionProvider = ({ children }: InteractionProviderProps) => {
  const [hasInteracted, setHasInteractedState] = useState(false);

  const setHasInteracted = () => {
    if (!hasInteracted) {
      setHasInteractedState(true);
    }
  };

  return (
    <InteractionContext.Provider value={{ hasInteracted, setHasInteracted }}>
      {children}
    </InteractionContext.Provider>
  );
}; 