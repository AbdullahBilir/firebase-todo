import React, { useState } from "react";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    parola: "",
  });

  const { email, parola } = formData;

  const onChange = (e) => {
    setFormData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <section className="heading">
        <h1>Giriş Yapalım</h1>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="email"
              name="email"
              className="form-control"
              id="email"
              value={email}
              placeholder="Emailinizi Giriniz"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="parola"
              className="form-control"
              id="parola"
              value={parola}
              placeholder="Parola Giriniz"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block">
              Giriş Yap
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
