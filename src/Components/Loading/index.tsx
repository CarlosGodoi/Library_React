import React from 'react';
import { ContainerSpinner } from './styles';

const Loading = () => {
  return (
    <ContainerSpinner>
      <div className="spinner-loading"></div>
    </ContainerSpinner>
  );
};

export default Loading;
