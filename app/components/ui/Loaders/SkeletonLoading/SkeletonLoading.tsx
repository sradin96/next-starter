import React from 'react';
import Skeleton from 'react-loading-skeleton';

type SkeletonLoadingProps = {
  width?: number;
  height?: number;
  color?: string;
  borderRadius?: number;
};

const SkeletonLoading = ({
  width,
  height,
  color = '#dadada',
  borderRadius = 0,
}: SkeletonLoadingProps) => {
  return (
    <div className='skeleton-loading'>
      <Skeleton
        width={width}
        height={height}
        baseColor={color}
        borderRadius={borderRadius}
      />
    </div>
  );
};

export default SkeletonLoading;
