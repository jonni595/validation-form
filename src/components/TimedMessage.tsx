import { useEffect, useState } from "react";

interface MessageProps {
  message: string;
}

const TimedMessage: React.FC<MessageProps> = ({ message }) => {
  const [showMessage, setShowMessage] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [message]);

  return showMessage && <div className="error">{message}</div>;
};

export default TimedMessage;
