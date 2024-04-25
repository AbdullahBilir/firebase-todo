import React, { useState } from "react";

export default function Register() {
  const [formData, setFormData] = useState({
    email: "",
    parola: "",
    kullanıcıAd: "",
    parolaKontrol: "",
  });

  const { email, parola, kullanıcıAd, parolaKontrol } = formData;
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
              type="text"
              name="kullanıcıAd"
              className="form-control"
              id="kullanıcıAd"
              value={kullanıcıAd}
              placeholder="Kullanıcı Adınızı Giriniz"
              onChange={onChange}
            />
          </div>
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
            <input
              type="password"
              name="parolaKontrol"
              className="form-control"
              id="parolaKontrol"
              value={parolaKontrol}
              placeholder="Parolanızı Tekrar Giriniz"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block">
              Üye Ol
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
