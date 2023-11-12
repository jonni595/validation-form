const App = () => {
  return (
    <div className="container">
      <h1>Validation form</h1>
      <div className="form-container">
        <form className="form">
          <div className="form__group">
            <label htmlFor="user">user</label>
            <input
              type="text"
              name="user"
              id="user"
              autoComplete="off"
              placeholder="johndoe254"
            />
          </div>
          <div className="form__group">
            <label htmlFor="name">name</label>
            <input
              type="text"
              name="name"
              id="name"
              autoComplete="off"
              placeholder="john doe"
            />
          </div>
          <div className="form__group">
            <label htmlFor="password">password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="key"
            />
          </div>
          <div className="form__group">
            <label htmlFor="password2">confirm password</label>
            <input
              type="password"
              name="password2"
              id="password2"
              placeholder="key"
            />
          </div>
          <div className="form__group">
            <label htmlFor="mail">email</label>
            <input
              type="email"
              name="mail"
              id="mail"
              autoComplete="off"
              placeholder="johndoe@lol.com"
            />
          </div>
          <div className="form__group">
            <label htmlFor="phone">phone</label>
            <input
              type="text"
              name="phone"
              id="phone"
              autoComplete="off"
              placeholder="3659546217"
            />
          </div>
          <div className="form__group">
            <label htmlFor="term-cond">accept terms and conditions</label>
            <input type="checkbox" name="term-cond" id="term-cond" />
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default App;
