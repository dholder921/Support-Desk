import { useState } from "react";
import { FaSignInAlt, FaUser } from "react-icons/fa";
import { toast } from "react-toastify";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      toast.error("Passwords don't match");
    }
  };

  return (
    <>
      <section className="heading">
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Please Log in for Support</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            
            <input
              type="text"
              className="form-control"
              id="email"
              value={email}
              onChange={onChange}
              placeholder="Enter you email"
              required
            />
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={onChange}
              placeholder="Enter you password"
              required
            />
            
          </div>
          <div className="form-group">
            <button className="btn btn-block">Submit</button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Login;
