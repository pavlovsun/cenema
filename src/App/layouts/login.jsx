import { useState } from 'react';
import Field from '../components/field';

const Login = () => {
  const [login, setLogin] = useState(true);
  const [data, setData] = useState({ email: '', password: '' });

  const handleChange = ({ target }) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }));
  };

  const errors = {
    email: 'Email is required',
    password: 'Password is required',
    date: 'Date is required'
  };
  return (
    <div className="login">
      <div className="login__container">
        <div className="login__box">
          <h3 className="login__title">{login ? 'Login' : 'Register'}</h3>
          <form>
            <Field
              label="Email"
              type="email"
              name="email"
              onChange={handleChange}
              error={errors.email}
            />
            <Field
              label="Password"
              type="password"
              name="password"
              value={data.password}
              onChange={handleChange}
              error={errors.password}
            />
            {login ? null : (
              <div className="register">
                <Field
                  label="Your birthday:"
                  type="date"
                  name="date"
                  value={data.date}
                  onChange={handleChange}
                  error={errors.date}
                />
                {/* <div className="data mt-4 mb-3">
                  <p>Your birthday:</p>
                  <input
                    type="date"
                    name="date"
                    id="date"
                    onChange={handleChange}
                  />
                </div> */}

                <div className="login_register-radio mt-4 mb-3">
                  <p className="login_register-paragraf mb-3">
                    Choose your gender:
                  </p>
                  <div>
                    <input
                      className="form-check-input me-2"
                      id="register-radio1"
                      type="radio"
                      name="radio"
                    />
                    <label htmlFor="register-radio1">Male</label>
                  </div>
                  <div>
                    <input
                      className="form-check-input me-2"
                      id="register-radio2"
                      type="radio"
                      name="radio"
                    />
                    <label htmlFor="register-radio2">Female</label>
                  </div>
                  <div>
                    <input
                      className="form-check-input me-2"
                      id="register-radio3"
                      type="radio"
                      name="radio"
                    />
                    <label htmlFor="register-radio3">Other</label>
                  </div>
                </div>
                <div className="mt-4 mb-4">
                  <label htmlFor="checkbox">
                    <input type="checkbox" className="me-2" id="checkbox" />
                    Confirm international agreement
                  </label>
                  <p>
                    You may not use our service without confirming the license
                    agreement
                  </p>
                </div>
              </div>
            )}
            <button
              className="btn btn-primary w-100 mx-auto"
              type="submit"
              // disabled={}
            >
              Submit
            </button>

            <div className="login__sing-up d-flex mt-3">
              <p className="login__dont-account mb-0">Dont have account?</p>
              &ensp;
              <p
                onClick={() => setLogin(!login)}
                className="login__sing-paragraf mb-0"
              >
                {login ? 'Sign Up' : 'Sign In'}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
