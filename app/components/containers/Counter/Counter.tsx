'use client';
import { useCounterStore } from '@/app/(main)/providers/counter-store-provider';
import { useState } from 'react';
import PageLoader from '../../ui/Loaders/PageLoader/PageLoader';

export const Counter = () => {
  const [isPageLoading, setIsPageLoading] = useState(false);
  const { count, incrementCount, decrementCount } = useCounterStore(
    (state) => state
  );

  const togglePageLoading = () => {
    setIsPageLoading(!isPageLoading);
  };

  if (isPageLoading) {
    return <PageLoader />;
  }

  return (
    <div>
      Count: {count}
      <hr />
      <button type='button' onClick={incrementCount}>
        Increment Count
      </button>
      <button type='button' onClick={decrementCount}>
        Decrement Count
      </button>
      <hr />
      <button type='button' onClick={togglePageLoading}>
        {isPageLoading ? 'Stop Page Loading' : 'Start Page Loading'}
      </button>
    </div>
  );
};
