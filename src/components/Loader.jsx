import React from 'react';

import LoaderImg from '../assets/images/loader.svg';

const Loader = () => {
  return (
    <div className='loader flex flex-c'>
      <img src={LoaderImg} alt='loader' />
    </div>
  );
};

export default Loader;
