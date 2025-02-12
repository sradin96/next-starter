import React from 'react';
import { CounterStoreProvider } from './providers/counter-store-provider';

type ProvidersProps = {
  children: React.ReactNode;
};

const Providers = ({ children }: ProvidersProps) => {
  return <CounterStoreProvider>{children}</CounterStoreProvider>;
};

export default Providers;
