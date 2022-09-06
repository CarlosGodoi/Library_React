import { Message } from '@mui/icons-material';
import { Alert } from '@mui/material';
import React from 'react';
import { useMessage } from '../../Context/MessageContext';
import { ContainerModal } from './styles';

const AlertMessage = () => {
  const { message, setMessage } = useMessage();

  message.display &&
    setTimeout(() => {
      setMessage({ content: '', display: false, severity: 'success' });
    }, 2000);

  return (
    <ContainerModal>
      <Alert style={{ width: '100%' }} severity={message.severity}>
        {message.content}
      </Alert>
    </ContainerModal>
  );
};

export default AlertMessage;
