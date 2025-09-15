import React from "react";
import { useNavigate, Link } from "react-router-dom";
export default function Login() {
  const nav = useNavigate();
  return (
    <div className="page">
      <main className="card narrow">
        <h1 className="title center">Iniciar sesión</h1>
        <form className="form" onSubmit={(e)=>{e.preventDefault(); nav("/main");}}>
          <label className="label" htmlFor="u">Nombre de usuario*</label>
          <input className="input" id="u" placeholder="Nombre" required />
          <label className="label" htmlFor="p">Contraseña*</label>
          <input className="input" id="p" type="password" placeholder="Contraseña" required />
          <p className="helper"><Link className="link" to="/recover">¿Olvidaste la contraseña?</Link></p>
          <button className="btn primary" type="submit">Continuar</button>
        </form>
        <div className="login-actions">
          <button className="btn outline" onClick={()=>nav("/main")}>Ingresar sin cuenta</button>
          <Link className="btn ghost" to="/create">¿No tienes cuenta?</Link>
        </div>
      </main>
    </div>
  );
}