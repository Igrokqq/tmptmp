import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Form, FormControl, Button, Image } from 'react-bootstrap';
import styles from './ChatInput.module.css';
import { BsArrowRight } from 'react-icons/bs';
import sendicon from './ic_round-send.svg'

interface ChatInputProps {
  onSendMessage: (text: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (message.trim() !== '') {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <Form className={styles['chat-input']} onSubmit={handleSubmit}>
      <FormControl
        type="text"
        className={styles['send-button-txt']}
        placeholder="Type your message..."
        value={message}
        onChange={handleChange}
      />
      <Button type="submit" className={styles['send-button']}>
        <Image src={sendicon} alt=""/>
      </Button>
    </Form>
  );
};

export default ChatInput;
