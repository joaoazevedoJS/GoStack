import React, { FC } from 'react';

import { ToastMessage } from '../../hooks/toast';

import { Container } from './styles';
import Toast from './Toast';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: FC<ToastContainerProps> = ({ messages }) => (
  <Container>
    {messages.map(message => (
      <Toast key={message.id} toast={message} />
    ))}
  </Container>
);

export default ToastContainer;
