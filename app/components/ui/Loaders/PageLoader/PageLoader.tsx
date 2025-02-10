import React from 'react';
import { CgSpinner } from 'react-icons/cg';

const PageLoader = () => {
  return (
    <div className='page-loader'>
      <h2 className='page-loader__title'>Page Loader</h2>
      <div className='page-loader__spinner'>
        <CgSpinner
          className='page-loader__spinner-icon'
          size={50}
          color='#fff'
        />
      </div>
    </div>
  );
};

export default PageLoader;
