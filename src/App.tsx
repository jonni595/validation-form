import { useContext, useState } from "react";
import { BsCheckCircleFill, BsMoonStarsFill, BsSunFill } from "react-icons/bs";
import { IError, initialPerson } from "./utils/model";
import { submitForm } from "./utils/submitForm";
import TimedMessage from "./components/TimedMessage";
import { Status } from "./utils/status";
import InputField from "./components/InputField";
import { ThemeContext } from "./utils/context/ThemeContext";

const App = () => {
  const [person, setPerson] = useState(initialPerson);
  const [error, setError] = useState<null | IError>(null);
  const [status, setStatus] = useState(Status.Typing);
  const { theme, toggleTheme } = useContext(ThemeContext);

  if (status === Status.Success) {
    return (
      <div className={`success-container ${theme}`}>
        <div className="success">
          <h1>successfully registered!</h1>
          <BsCheckCircleFill className="icon-success" />
        </div>
      </div>
    );
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPerson({
      ...person,
      [e.target.name]: e.target.value.toString(),
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(Status.Submitting);
    try {
      await submitForm(person);
      setStatus(Status.Success);
    } catch (err) {
      setStatus(Status.Typing);
      setError(null);
      setTimeout(() => setError(err as IError), 0);
    }
  };

  const opacityButton =
    !person.user ||
    !person.firstName ||
    !person.password ||
    !person.password2 ||
    !person.email ||
    !person.phone ||
    person.accept === false;

  const isEnableButton =
    person.user.length === 0 ||
    person.firstName.length === 0 ||
    person.password.length === 0 ||
    person.password2.length === 0 ||
    person.email.length === 0 ||
    person.phone.length === 0 ||
    person.accept === false ||
    status === Status.Submitting;

  const iconName =
    theme === "light" ? (
      <BsMoonStarsFill className="icon-theme" />
    ) : (
      <BsSunFill className="icon-theme" />
    );

  return (
    <div className={`container ${theme}`}>
      <button
        onClick={toggleTheme}
        className={theme === "light" ? "toggle" : "toggle dark-toggle"}
      >
        {theme === "light" ? "dark mode" : "light mode"}
        {iconName}
      </button>
      <h1>Sign up</h1>
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <InputField
            field="user"
            textID="user"
            textName="user"
            textType="text"
            textValue={person.user}
            placeholder="johndoe254"
            onChangeInput={handleChange}
          />
          <InputField
            field="name"
            textID="name"
            textName="firstName"
            textType="text"
            textValue={person.firstName}
            placeholder="john doe"
            onChangeInput={handleChange}
          />
          <InputField
            field="password"
            textID="password"
            textName="password"
            textType="password"
            textValue={person.password}
            placeholder="key"
            onChangeInput={handleChange}
          />
          <InputField
            field="confirm password"
            textID="password2"
            textName="password2"
            textType="password"
            textValue={person.password2}
            placeholder="key"
            onChangeInput={handleChange}
          />
          <InputField
            field="email"
            textID="mail"
            textName="email"
            textType="email"
            textValue={person.email}
            placeholder="johndoe@lol.com"
            onChangeInput={handleChange}
          />
          <InputField
            field="phone"
            textID="phone"
            textName="phone"
            textType="number"
            textValue={person.phone}
            placeholder="+57 3159546217"
            onChangeInput={handleChange}
          />
          <InputField
            field="accept terms and conditions"
            textID="term-cond"
            textName="term-cond"
            textType="checkbox"
            checked={person.accept}
            onChangeInput={(e) => {
              setPerson({ ...person, accept: e.target.checked });
            }}
          />
          <button
            type="submit"
            disabled={isEnableButton}
            style={{
              opacity: opacityButton ? 0.5 : 1,
              cursor: opacityButton ? "not-allowed" : "pointer",
            }}
            className={theme === "light" ? "light-button" : "dark-button"}
          >
            Send
          </button>
          {error !== null && <TimedMessage message={error?.message} />}
        </form>
      </div>
    </div>
  );
};

export default App;
