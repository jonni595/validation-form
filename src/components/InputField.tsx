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
  return (
    <div className="form__group">
      <label htmlFor={textID}>{field}</label>
      <input
        value={textValue}
        type={textType}
        name={textName}
        id={textID}
        autoComplete="off"
        placeholder={placeholder}
        onChange={onChangeInput}
        checked={checked}
      />
    </div>
  );
};

export default InputField;
