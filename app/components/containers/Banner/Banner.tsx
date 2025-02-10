import React from 'react';
import { Counter } from '../Counter/Counter';
import SkeletonLoading from '../../ui/Loaders/SkeletonLoading/SkeletonLoading';

const Banner = () => {
  return (
    <section className='banner'>
      <h1>Banner</h1>
      <Counter />
      <SkeletonLoading height={200} width={400} borderRadius={20} />
    </section>
  );
};

export default Banner;
