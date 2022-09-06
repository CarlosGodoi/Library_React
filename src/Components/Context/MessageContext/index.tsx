import { AlertColor } from '@mui/material';
import React, { Dispatch, SetStateAction, useContext, useState } from 'react';

interface MessageModal {
  content: string;
  display: boolean;
  severity: AlertColor;
}

interface MessageContextInterface {
  message: MessageModal;
  setMessage: Dispatch<SetStateAction<MessageModal>>;
}

interface Props {
  children: JSX.Element;
}

export const MessageContext = React.createContext<MessageContextInterface>({
  message: {
    content: '',
    display: false,
    severity: 'success',
  },
  setMessage: () => {},
});

export const MessageProvider = (props: Props) => {
  const [message, setMessage] = useState<MessageModal>({
    content: '',
    display: false,
    severity: 'success',
  });

  return (
    <MessageContext.Provider value={{ message, setMessage }}>
      {props.children}
    </MessageContext.Provider>
  );
};

export function useMessage() {
  const context = useContext(MessageContext);
  const { message, setMessage } = context;

  return {
    message,
    setMessage,
  };
}
