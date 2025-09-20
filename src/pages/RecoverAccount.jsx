import React from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from '../store';
import toast from "react-hot-toast";

export default function RecoverAccount(){
  const nav = useNavigate();
  return (
    <div className="page">
      <main className="card narrow">
        <h1 className="title center">Recuperar cuenta</h1>
        <p className="subtitle">Por favor ingrese los siguientes datos</p>
      <form
         className="form"
          onSubmit={(e)=>{
            e.preventDefault();
            toast.success("Correo de recuperación enviado 📧");
            nav("/verify");
          }}
        >

       


          <label className="label" htmlFor="u">Nombre de usuario*</label>
          <input className="input" id="u" placeholder="Nombre" required />
          <label className="label" htmlFor="c">Correo o núm de teléfono*</label>
          <input className="input" id="c" placeholder="Email o número" required />
          <button className="btn primary" type="submit">Continuar</button>
        </form>
      </main>
    </div>
  );
}
