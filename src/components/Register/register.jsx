import { useState } from "react";
import "./register.css";

const Registration = () => {
  const [checked, setChecked] = useState(false);
  const agreementAgree = () => {
    setChecked(!checked);
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    console.log(e.target.email.value, e.target.password.value);
  };
  return (
    <section className="registarcija">
      <div className="registracija1">
        <h1>Register</h1>
        <form onSubmit={handleInputChange}>
          <label htmlFor="email">Email</label> <br />
          <input type="email" name="email" /> <br />
          <label htmlFor="password">Password</label> <br />
          <input type="password" name="password" /> <br />
          <input
            type="checkbox"
            name="agreement"
            id="agreement"
            onChange={agreementAgree}
          />
          <button type="submit" id="regsiterButton" disabled={!checked}>
            Register
          </button>
        </form>
      </div>
    </section>
  );
};
export default Registration;
