"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

type ModalContextValue = {
  sampleOpen: boolean;
  sampleIndex: number;
  openSample: (index?: number) => void;
  closeSample: () => void;
};

const ModalContext = createContext<ModalContextValue | null>(null);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [sampleOpen, setSampleOpen] = useState(false);
  const [sampleIndex, setSampleIndex] = useState(0);

  return (
    <ModalContext.Provider
      value={{
        sampleOpen,
        sampleIndex,
        openSample: (index = 0) => {
          setSampleIndex(index);
          setSampleOpen(true);
        },
        closeSample: () => setSampleOpen(false),
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("useModal must be used within a ModalProvider");
  return ctx;
}
