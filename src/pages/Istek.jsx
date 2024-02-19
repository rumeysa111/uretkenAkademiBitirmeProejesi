import React from 'react';

function Istek() {
  return (
    <div>
      <h1>Öneri ve Şikayet</h1>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          E posta adresiniz
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Şikayet ve önerileriniz
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        Gönder
      </button>
    </div>
  );
}

export default Istek;
