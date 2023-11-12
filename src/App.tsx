import { useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { initialPerson } from "./utils/model";
import { submitForm } from "./utils/submitForm";
import TimedMessage from "./components/TimedMessage";
import { Status } from "./utils/getStatus";

const App = () => {
  const [person, setPerson] = useState(initialPerson);
  const [error, setError] = useState<null | unknown>(null);
  const [status, setStatus] = useState(Status.Typing);

  if (status === Status.Success) {
    return (
      <div className="success-container">
        <div className="success">
          <h1>successfully registered!</h1>
          <BsCheckCircleFill className="icon" />
        </div>
      </div>
    );
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPerson({
      ...person,
      [e.target.name]: e.target.value,
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
      setError(err);
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

  return (
    <div className="container">
      <h1>Sign up</h1>
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form__group">
            <label htmlFor="user">user</label>
            <input
              value={person.user}
              type="text"
              name="user"
              id="user"
              autoComplete="off"
              placeholder="johndoe254"
              onChange={handleChange}
            />
          </div>
          <div className="form__group">
            <label htmlFor="name">name</label>
            <input
              value={person.firstName}
              type="text"
              name="firstName"
              id="name"
              autoComplete="off"
              placeholder="john doe"
              onChange={handleChange}
            />
          </div>
          <div className="form__group">
            <label htmlFor="password">password</label>
            <input
              value={person.password}
              type="password"
              name="password"
              id="password"
              placeholder="key"
              onChange={handleChange}
            />
          </div>
          <div className="form__group">
            <label htmlFor="password2">confirm password</label>
            <input
              value={person.password2}
              type="password"
              name="password2"
              id="password2"
              placeholder="key"
              onChange={handleChange}
            />
          </div>
          <div className="form__group">
            <label htmlFor="mail">email</label>
            <input
              value={person.email}
              type="email"
              name="email"
              id="mail"
              autoComplete="off"
              placeholder="johndoe@lol.com"
              onChange={handleChange}
            />
          </div>
          <div className="form__group">
            <label htmlFor="phone">phone</label>
            <input
              value={person.phone}
              type="text"
              name="phone"
              id="phone"
              autoComplete="off"
              placeholder="+57 3159546217"
              onChange={handleChange}
            />
          </div>
          <div className="form__group">
            <label htmlFor="term-cond">accept terms and conditions</label>
            <input
              checked={person.accept}
              type="checkbox"
              name="term-cond"
              id="term-cond"
              onChange={(e) =>
                setPerson({ ...person, accept: e.target.checked })
              }
            />
          </div>
          <button
            type="submit"
            disabled={isEnableButton}
            style={{
              opacity: opacityButton ? 0.5 : 1,
              cursor: opacityButton ? "not-allowed" : "pointer",
            }}
          >
            Send
          </button>
          {error !== null && <TimedMessage message={error.message} />}
        </form>
      </div>
    </div>
  );
};

export default App;
