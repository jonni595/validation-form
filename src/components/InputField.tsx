import { useContext, useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { ThemeContext } from "../utils/context/ThemeContext";
interface FieldsProps {
  field: string;
  textID: string;
  textName: string;
  textType: string;
  textValue?: string;
  placeholder?: string;
  checked?: boolean;
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<FieldsProps> = ({
  field,
  textID,
  textName,
  textType,
  textValue,
  placeholder,
  checked,
  onChangeInput,
}) => {
  const { theme } = useContext(ThemeContext);
  const [isVisible, setIsVisible] = useState(false);

  const Icon = isVisible ? <IoEye /> : <IoEyeOff />;
  const inputType = isVisible ? "text" : "password";
  const fieldType = (textType = textType === "password" ? inputType : textType);

  return (
    <div className="form__group">
      <label htmlFor={textID}>{field}</label>
      <input
        value={textValue}
        type={fieldType}
        name={textName}
        id={textID}
        autoComplete="off"
        placeholder={placeholder}
        onChange={onChangeInput}
        checked={checked}
        className={theme === "light" ? "light-input" : "dark-input"}
      />
      {textType === inputType && (
        <span onClick={() => setIsVisible(!isVisible)} className="icon-eye">
          {Icon}
        </span>
      )}
    </div>
  );
};

export default InputField;
