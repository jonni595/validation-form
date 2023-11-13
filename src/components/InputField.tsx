import { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
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
