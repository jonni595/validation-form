import { useEffect, useState } from "react";
import { MdCancel } from "react-icons/md";

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

  return (
    showMessage && (
      <div className="error">
        <MdCancel className="icon-error" /> {message}
      </div>
    )
  );
};

export default TimedMessage;
