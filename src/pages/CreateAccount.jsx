import React from "react";
export default function CreateAccount(){
  return (
    <div className="page">
      <main className="card narrow">
        <h1 className="title center">Bienvenido</h1>
        <p className="subtitle">Por favor ingrese los siguientes datos</p>
        <form className="form">
          <label className="label" htmlFor="n">Nombre*</label>
          <input className="input" id="n" placeholder="Nombre" required/>
          <label className="label" htmlFor="e">Correo o núm de teléfono*</label>
          <input className="input" id="e" placeholder="Email o número" required/>
          <label className="label" htmlFor="p">Contraseña*</label>
          <input className="input" id="p" type="password" placeholder="Contraseña" required/>
          <button className="btn primary" type="submit">Registrarse</button>
        </form>
      </main>
    </div>
  );
}
